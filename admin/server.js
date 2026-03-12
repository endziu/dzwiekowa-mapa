import 'dotenv/config'
import express from 'express'
import multer from 'multer'
import { v2 as cloudinary } from 'cloudinary'
import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const TRACKS_PATH = join(ROOT, 'db/json/tracks.json')
const PORT = 3333

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const upload = multer({ storage: multer.memoryStorage() })
const app = express()
app.use(express.json())

app.get('/', (_req, res) => res.sendFile(join(__dirname, 'index.html')))

function uploadToCloudinary(buffer, folder, publicId, resourceType = 'image') {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        { folder, public_id: publicId, resource_type: resourceType, overwrite: true },
        (err, result) => (err ? reject(err) : resolve(result))
      )
      .end(buffer)
  })
}

// Upload all files for a track to Cloudinary
app.post(
  '/api/upload',
  upload.fields([
    { name: 'audio',    maxCount: 1  },
    { name: 'waveform', maxCount: 1  },
    { name: 'avatar',   maxCount: 1  },
    { name: 'images',   maxCount: 10 },
  ]),
  async (req, res) => {
    try {
      const { permalink } = req.body
      if (!permalink) return res.status(400).json({ error: 'permalink is required' })
      if (!/^[a-z0-9-]+$/.test(permalink))
        return res.status(400).json({ error: 'permalink must be lowercase letters, digits, and hyphens only' })

      const base = `mapadb/${permalink}`
      const results = {}

      if (req.files.audio?.[0]) {
        const r = await uploadToCloudinary(
          req.files.audio[0].buffer, `${base}/audiofile`, permalink, 'raw'
        )
        results.stream_url = r.secure_url
      }
      if (req.files.waveform?.[0]) {
        const r = await uploadToCloudinary(
          req.files.waveform[0].buffer, `${base}/waveform`, `${permalink}-waveform`
        )
        results.waveform_url = r.secure_url
      }
      if (req.files.avatar?.[0]) {
        const r = await uploadToCloudinary(
          req.files.avatar[0].buffer, `${base}/avatar`, permalink
        )
        results.authorAvatar = r.secure_url
      }
      if (req.files.images?.length) {
        results.images = []
        for (let i = 0; i < req.files.images.length; i++) {
          const r = await uploadToCloudinary(
            req.files.images[i].buffer, `${base}/images`, `${permalink}-${i}`
          )
          results.images.push(r.secure_url)
        }
      }

      res.json(results)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: err.message })
    }
  }
)

// Save a track entry to tracks.json
app.post('/api/track', (req, res) => {
  try {
    const track = req.body
    const required = ['title', 'permalink', 'stream_url', 'waveform_url', 'author', 'date', 'time', 'location']
    const missing = required.filter(f => !track[f])
    if (missing.length) return res.status(400).json({ error: `Missing fields: ${missing.join(', ')}` })

    if (!/^[a-z0-9-]+$/.test(track.permalink))
      return res.status(400).json({ error: 'permalink must be lowercase letters, digits, and hyphens only' })

    const lat = parseFloat(track.gps?.lat)
    const lng = parseFloat(track.gps?.lng)
    if (!Number.isFinite(lat) || lat < -90 || lat > 90)
      return res.status(400).json({ error: 'gps.lat must be a number between -90 and 90' })
    if (!Number.isFinite(lng) || lng < -180 || lng > 180)
      return res.status(400).json({ error: 'gps.lng must be a number between -180 and 180' })
    track.gps = { lat, lng }

    const tracks = JSON.parse(readFileSync(TRACKS_PATH, 'utf8'))
    const idx = tracks.findIndex(t => t.permalink === track.permalink)
    if (idx >= 0) {
      tracks[idx] = track
      console.log(`Updated existing track: ${track.permalink}`)
    } else {
      tracks.unshift(track)
      console.log(`Added new track: ${track.permalink} (total: ${tracks.length})`)
    }
    writeFileSync(TRACKS_PATH, JSON.stringify(tracks, null, 2))
    res.json({ ok: true, total: tracks.length })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: err.message })
  }
})

app.listen(PORT, '127.0.0.1', () => {
  console.log(`\n  Admin panel → http://localhost:${PORT}\n`)
})
