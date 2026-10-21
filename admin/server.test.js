import { afterAll, beforeAll, beforeEach, expect, mock, spyOn, test } from 'bun:test'
import { Writable } from 'node:stream'

// Exercise the real Express/Multer middleware without uploading to Cloudinary.
const uploads = []
let uploadError
mock.module('cloudinary', () => ({
  v2: {
    config() {},
    uploader: {
      upload_stream(options, callback) {
        return new Writable({
          write(chunk, _encoding, done) {
            uploads.push({ ...options, buffer: Buffer.from(chunk) })
            done()
          },
          final(done) {
            callback(uploadError, { secure_url: `https://example.test/${options.folder}/${options.public_id}` })
            done()
          },
        })
      },
    },
  },
}))

let server
let base
beforeAll(async () => {
  const { app } = await import('./server.js')
  server = app.listen(0, '127.0.0.1')
  await new Promise(resolve => server.once('listening', resolve))
  base = `http://127.0.0.1:${server.address().port}`
})
afterAll(() => new Promise(resolve => server.close(resolve)))
beforeEach(() => {
  uploads.length = 0
  uploadError = undefined
})

function form(permalink = 'test-sound') {
  const body = new FormData()
  if (permalink !== null) body.set('permalink', permalink)
  return body
}

test('serves the local admin form', async () => {
  const response = await fetch(base)
  expect(response.status).toBe(200)
  expect(await response.text()).toContain('Wyślij pliki')
})

test('uploads audio, waveform, avatar and multiple images with intact buffers', async () => {
  const body = form()
  for (const field of ['audio', 'waveform', 'avatar', 'images', 'images']) {
    body.append(field, new Blob([`contents-${field}`]), `${field}.bin`)
  }
  const response = await fetch(`${base}/api/upload`, { method: 'POST', body })
  expect(response.status).toBe(200)
  expect(await response.json()).toEqual({
    stream_url: 'https://example.test/mapadb/test-sound/audiofile/test-sound',
    waveform_url: 'https://example.test/mapadb/test-sound/waveform/test-sound-waveform',
    authorAvatar: 'https://example.test/mapadb/test-sound/avatar/test-sound',
    images: [
      'https://example.test/mapadb/test-sound/images/test-sound-0',
      'https://example.test/mapadb/test-sound/images/test-sound-1',
    ],
  })
  expect(uploads.map(({ buffer, resource_type, overwrite }) => [buffer.toString(), resource_type, overwrite])).toEqual([
    ['contents-audio', 'raw', true],
    ['contents-waveform', 'image', true],
    ['contents-avatar', 'image', true],
    ['contents-images', 'image', true],
    ['contents-images', 'image', true],
  ])
})

test.each([null, '../escape', '//example.test', 'Bad Slug'])('rejects invalid upload permalink %s', async permalink => {
  const response = await fetch(`${base}/api/upload`, { method: 'POST', body: form(permalink) })
  expect(response.status).toBe(400)
  expect((await response.json()).error).toContain('permalink')
  expect(uploads).toHaveLength(0)
})

test.each(['unknown', 'audio', 'images'])('rejects unexpected or excessive %s files and remains responsive', async field => {
  const body = form()
  const count = field === 'audio' ? 2 : field === 'images' ? 11 : 1
  for (let i = 0; i < count; i++) body.append(field, new Blob(['data']), 'file.bin')
  const response = await fetch(`${base}/api/upload`, { method: 'POST', body })
  expect(response.status).toBe(500)
  await response.text()
  expect(uploads).toHaveLength(0)
  expect((await fetch(base)).status).toBe(200)
})

test('rejects truncated multipart input and remains responsive', async () => {
  const response = await fetch(`${base}/api/upload`, {
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data; boundary=test-boundary' },
    body: '--test-boundary\r\nContent-Disposition: form-data; name="audio"; filename="a.bin"\r\n\r\ntruncated',
  })
  expect(response.status).toBe(500)
  expect(uploads).toHaveLength(0)
  expect((await fetch(base)).status).toBe(200)
})

test('returns Cloudinary failures without losing the server', async () => {
  const errors = spyOn(console, 'error').mockImplementation(() => {})
  try {
    uploadError = new Error('simulated upload failure')
    const body = form()
    body.append('audio', new Blob(['audio']), 'audio.bin')
    const response = await fetch(`${base}/api/upload`, { method: 'POST', body })
    expect(response.status).toBe(500)
    expect(await response.json()).toEqual({ error: 'simulated upload failure' })
    expect(errors).toHaveBeenCalledWith(uploadError)
    expect((await fetch(base)).status).toBe(200)
  } finally {
    errors.mockRestore()
  }
})

test('retains JSON validation without modifying the track database', async () => {
  const response = await fetch(`${base}/api/track`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}',
  })
  expect(response.status).toBe(400)
  expect((await response.json()).error).toContain('Missing fields')
})
