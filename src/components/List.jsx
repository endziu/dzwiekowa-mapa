import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function List({ sounds, currentPermalink, sub }) {
  useEffect(() => {
    document.getElementById(`snd-${currentPermalink}`)?.scrollIntoView({ block: 'nearest' })
  }, [currentPermalink])

  return (
    <ul className="bg-near-white overflow-auto flex-1 mt-1 list-none p-0 m-0">
      {sounds.map(sound => (
        <Link
          key={sound.permalink}
          to={`/${sound.permalink}/${sub || 'info'}`}
          className="no-underline block"
        >
          <li
            id={`snd-${sound.permalink}`}
            className={
              currentPermalink === sound.permalink
                ? 'text-white bg-black/60 truncate pl-1 py-1'
                : 'text-neutral-800 hover:text-white hover:bg-black/60 truncate pl-1 py-1 transition-colors'
            }
          >
            {sound.title}
          </li>
        </Link>
      ))}
    </ul>
  )
}
