# Dźwiękowa Mapa Wrocławia

Sound map of Wrocław — audio recordings placed on a Google Maps satellite view. Live at https://dzwiekowamapa.pl.

## Stack

- **Vite 6** + **React 18** + **Tailwind CSS v4**
- **react-router-dom v6** — client-side routing
- **@vis.gl/react-google-maps** — Google Maps integration
- Fully static — `npm run build` outputs `dist/` with no server needed

## Commands

```bash
npm run dev      # dev server (localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
npm run admin    # local admin panel → http://localhost:3333
```

## Project structure

```
src/
  App.jsx               # routing + global state (isPlaying, filter)
  utils.js              # prettyTime, filterSounds
  components/
    Welcome.jsx         # landing page
    Menu.jsx            # Home/Map/Info/Photos icon buttons
    Search.jsx          # expandable search field
    Player.jsx          # audio player + waveform
    List.jsx            # scrollable track list
    Mapa.jsx            # Google Maps + markers
    Info.jsx            # track metadata
    Photos.jsx          # photo gallery
db/json/tracks.json     # canonical data source (~158 tracks)
admin/
  server.js             # local Express server for admin panel
  index.html            # admin UI
```

## Data

`db/json/tracks.json` is the single source of truth. It is bundled into the JS at build time (no runtime fetch needed). Each track has this shape:

```json
{
  "title": "string",
  "duration": 99900,
  "permalink": "url-slug",
  "waveform_url": "https://res.cloudinary.com/endziu/image/upload/...",
  "stream_url":   "https://res.cloudinary.com/endziu/raw/upload/...",
  "images": ["https://res.cloudinary.com/endziu/image/upload/..."],
  "author": "string",
  "authorAvatar": "https://... or null",
  "gps": { "lat": "51.110395", "lng": "17.031008" },
  "time": "HH:MM",
  "date": "DD.MM.YYYY",
  "gear": "string",
  "description": "string",
  "location": "string"
}
```

Cloudinary path convention: `mapadb/{permalink}/{type}/{filename}` where type is `audiofile`, `waveform`, `images`, or `avatar`.

## Tailwind notes

Custom theme is defined in `src/index.css`:
- `ns:` breakpoint = 880px (mobile-first, matches old Tachyons `*-ns` suffix)
- `bg-near-white` / `near-white` color = `#f4f4f4`

## Google Maps

- API key is hardcoded in `src/components/Mapa.jsx`
- `MAP_ID` is set to `"DEMO_MAP_ID"` — replace with a real Map ID from Google Cloud Console for production (required for `AdvancedMarker`)

## Deployment (VPS / nginx)

Serve the `dist/` folder. Client-side routing requires all paths to fall back to `index.html`:

```nginx
location / {
    root /path/to/dist;
    try_files $uri $uri/ /index.html;
}
```

## Admin panel

Run locally only — never expose to the internet.

1. Copy `.env.example` to `.env` and fill in Cloudinary credentials
2. `npm run admin` → open http://localhost:3333
3. Fill in track metadata + select files
4. Click **"Wyślij pliki"** — uploads audio, waveform, avatar, images to Cloudinary
5. Click **"Zapisz nagranie"** — prepends the new entry to `db/json/tracks.json`
6. Rebuild and redeploy the site

## Preferences

- Use **bun** instead of node for running scripts (e.g. `bun script.js` not `node script.js`)

## What to ignore

- `db/tracks/` — local copies of media files, gitignored, already on Cloudinary
- `db/json/filtered_tracks.json` — legacy, not used by the app
- `notes.md` — task notes from the initial rewrite session
