import React from 'react'
import { Link } from 'react-router-dom'
import tracks from '../../db/json/tracks.json'

const BG_URL =
  'https://images.unsplash.com/photo-1470326032834-47d8a3054bb4' +
  '?dpr=1&auto=compress,format&fit=crop&w=1920&h=1080&q=60&cs=tinysrgb'

const firstTrack = tracks[0]

export default function Welcome() {
  return (
    <header className="h-screen w-full">
      <div
        className="h-full bg-cover bg-left bg-no-repeat relative"
        style={{ backgroundImage: `url(${BG_URL})` }}
      >
        <div className="p-3">
          <h1 className="text-5xl ns:text-7xl font-extralight text-black/80 mt-2 mb-3 leading-tight">
            dźwiękowa mapa Wrocławia
          </h1>
          <h2 className="font-thin text-2xl ns:text-3xl text-black/60 my-3">
            kolekcja nagrań audiosfery miasta
          </h2>
          <Link
            to={`/${firstTrack.permalink}/map`}
            className="inline-flex items-center gap-1 no-underline text-sm text-black bg-white hover:bg-black hover:text-white transition-colors px-2 py-2 border border-black my-3"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
            </svg>
            <span>Posłuchaj</span>
          </Link>
        </div>

        <footer
          className="absolute bottom-0 left-0 right-0 text-xs p-2 text-white"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8))' }}
        >
          <span className="float-right">
            built with ❤️ by:{' '}
            <a href="https://endziu.xyz" className="text-white hover:bg-white hover:text-black no-underline">
              endziu.xyz
            </a>
          </span>
        </footer>
      </div>
    </header>
  )
}
