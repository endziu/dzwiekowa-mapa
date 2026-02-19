import React, { useState, useEffect } from 'react'

export default function Photos({ sound }) {
  const [selected, setSelected] = useState(0)

  useEffect(() => { setSelected(0) }, [sound.permalink])

  const images = sound.images?.length
    ? sound.images
    : sound.authorAvatar
    ? [sound.authorAvatar]
    : []

  return (
    <div className="h-full bg-near-white overflow-auto p-3 ns:p-4 fadeIn">
      {images.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {images.map((url, i) => (
            <img
              key={i}
              src={url}
              alt={`photo ${i + 1}`}
              onClick={() => setSelected(i)}
              className={`w-8 h-8 ns:w-12 ns:h-12 object-cover cursor-pointer hover:opacity-80 transition-opacity ${
                selected === i ? 'ring-2 ring-green-500' : ''
              }`}
            />
          ))}
        </div>
      )}
      {images[selected] && (
        <img
          src={images[selected]}
          alt="selected"
          className="w-full max-w-2xl object-contain"
        />
      )}
    </div>
  )
}
