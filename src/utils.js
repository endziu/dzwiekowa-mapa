export function prettyTime(seconds) {
  if (!seconds || isNaN(seconds)) return '0:00'
  const h = Math.floor(seconds / 3600)
  const m = String(Math.floor((seconds % 3600) / 60))
  const s = String(Math.floor(seconds % 60)).padStart(2, '0')
  return h ? `${h}:${m.padStart(2, '0')}:${s}` : `${m}:${s}`
}

export function filterSounds(sounds, filter) {
  if (!filter) return sounds
  const q = filter.toLowerCase()
  return sounds.filter(s =>
    [s.title, s.author, s.description, s.gear, s.location].some(
      f => f?.toLowerCase().includes(q)
    )
  )
}
