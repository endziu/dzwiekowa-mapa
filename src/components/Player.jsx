import React, { forwardRef, useRef, useImperativeHandle, useState } from 'react'
import { prettyTime } from '../utils.js'

const Player = forwardRef(({ sound, isPlaying, onPlay, onEnded }, ref) => {
  const audioEl = useRef(null)
  const [time, setTime] = useState({ current: 0, duration: 0, percent: 0 })

  useImperativeHandle(ref, () => ({
    play:  () => audioEl.current?.play(),
    pause: () => audioEl.current?.pause(),
  }))

  const handleTimeUpdate = () => {
    const { currentTime, duration } = audioEl.current
    setTime({
      current: currentTime,
      duration,
      percent: (currentTime / duration) * 100 || 0,
    })
  }

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const pct = (e.clientX - rect.left) / rect.width
    if (audioEl.current?.duration) {
      audioEl.current.currentTime = pct * audioEl.current.duration
    }
  }

  return (
    <div className="bg-near-white pt-1 shrink-0">
      <audio
        ref={audioEl}
        src={sound.stream_url}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => setTime(t => ({ ...t, duration: audioEl.current.duration }))}
        onEnded={onEnded}
      />

      <div className="flex flex-row">
        {/* play / pause button */}
        <button
          onClick={onPlay}
          className="shrink-0 bg-white text-black w-12 h-12 border border-black rounded-full hover:scale-105 transition-transform flex items-center justify-center cursor-pointer"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          <svg viewBox="0 0 32 32" className="w-8 h-8" fill="currentColor">
            {isPlaying ? (
              <g>
                <rect x="9" y="8" width="4" height="16" />
                <rect x="17" y="8" width="4" height="16" />
              </g>
            ) : (
              <polygon points="10,8 10,24 24,16" />
            )}
          </svg>
        </button>

        {/* waveform + progress overlay */}
        <div className="relative flex-1 pl-2 h-12 cursor-pointer" onClick={handleSeek}>
          <img
            src={sound.waveform_url}
            alt="waveform"
            className="absolute inset-0 w-full h-full object-fill bg-black/20"
          />
          <div
            className="absolute inset-y-0 left-0 bg-black/80 pointer-events-none"
            style={{ width: `${time.percent}%` }}
          />
        </div>
      </div>

      <div className="flex flex-row justify-between px-1 py-1">
        <span className="truncate font-semibold pr-1">{sound.title}</span>
        <span className="whitespace-nowrap tabular-nums">
          {prettyTime(time.current)}/{prettyTime(time.duration)}
        </span>
      </div>
    </div>
  )
})

Player.displayName = 'Player'
export default Player
