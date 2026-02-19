import React, { useState, useRef, useEffect, useMemo } from 'react'
import { Routes, Route, Navigate, useParams, useNavigate } from 'react-router-dom'
import tracks from '../db/json/tracks.json'
import Welcome from './components/Welcome.jsx'
import Menu from './components/Menu.jsx'
import Search from './components/Search.jsx'
import Player from './components/Player.jsx'
import List from './components/List.jsx'
import Mapa from './components/Mapa.jsx'
import Info from './components/Info.jsx'
import Photos from './components/Photos.jsx'
import { filterSounds } from './utils.js'

function SoundLayout() {
  const { permalink, sub } = useParams()
  const navigate = useNavigate()
  const [isPlaying, setIsPlaying] = useState(false)
  const [filter, setFilter] = useState('')
  const playerRef = useRef()

  const currentSound = tracks.find(s => s.permalink === permalink)
  const filteredSounds = useMemo(() => filterSounds(tracks, filter), [filter])

  useEffect(() => {
    setIsPlaying(false)
    playerRef.current?.pause()
  }, [permalink])

  if (!currentSound) return <Navigate to="/" />

  const handlePlay = () => {
    if (isPlaying) {
      playerRef.current?.pause()
      setIsPlaying(false)
    } else {
      playerRef.current?.play()
      setIsPlaying(true)
    }
  }

  return (
    <div className="flex flex-col ns:flex-row text-sm text-neutral-800 bg-white h-screen overflow-hidden">
      <Search filter={filter} setFilter={setFilter} />
      <Menu permalink={permalink} />

      {/* main panel: map / info / photos */}
      <div className="h-[40vh] ns:h-screen ns:flex-1 overflow-hidden fadeIn">
        {sub === 'map' && (
          <Mapa
            currentSound={currentSound}
            sounds={filteredSounds}
            onMarkerClick={p => navigate(`/${p}/map`)}
          />
        )}
        {sub === 'info' && <Info sound={currentSound} />}
        {sub === 'photos' && <Photos sound={currentSound} />}
      </div>

      {/* sidebar */}
      <div className="flex flex-col flex-1 ns:flex-none ns:w-[512px] border-t ns:border-t-0 ns:border-l border-neutral-200 overflow-hidden">
        <Player
          key={permalink}
          ref={playerRef}
          sound={currentSound}
          isPlaying={isPlaying}
          onPlay={handlePlay}
          onEnded={() => setIsPlaying(false)}
        />
        <List
          sounds={filteredSounds}
          currentPermalink={permalink}
          sub={sub}
        />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/:permalink/:sub" element={<SoundLayout />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
