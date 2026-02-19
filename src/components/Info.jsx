import React from 'react'

export default function Info({ sound }) {
  return (
    <div className="h-full bg-near-white overflow-auto p-4 ns:p-8 fadeIn">
      <div className="flex items-start gap-4 mb-4">
        {sound.authorAvatar && (
          <img
            src={sound.authorAvatar}
            alt="avatar"
            className="rounded-full w-12 h-12 ns:w-16 ns:h-16 shrink-0 border border-black/5 object-cover"
          />
        )}
        <div className="pt-1">
          <h2 className="text-xl font-semibold">{sound.author}</h2>
          <h3 className="text-base font-normal text-neutral-500">{sound.title}</h3>
        </div>
      </div>

      <div className="flex flex-col gap-1 leading-relaxed max-w-2xl text-sm">
        <p><b>lokalizacja: </b>{sound.location}</p>
        <p><b>gps: </b>{sound.gps.lat}, {sound.gps.lng}</p>
        <p><b>sprzęt: </b>{sound.gear}</p>
        <p><b>data: </b>{sound.date}</p>
        <p><b>czas: </b>{sound.time}</p>
        <p><b>opis: </b>{sound.description}</p>
      </div>
    </div>
  )
}
