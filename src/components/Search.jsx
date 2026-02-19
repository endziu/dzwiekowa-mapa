import React from 'react'

export default function Search({ filter, setFilter }) {
  return (
    <form
      onSubmit={e => e.preventDefault()}
      className="absolute top-[134px] right-[3px] ns:right-[515px] z-[99999] border border-black text-xs flex"
    >
      <input
        value={filter}
        onChange={e => setFilter(e.target.value)}
        onClick={() => filter && setFilter('')}
        placeholder={filter ? '❌  Pokaż wszystkie' : '🔎  Szukaj dźwięków'}
        type="text"
        className="pl-[5px] w-[29px] h-[29px] hover:w-[145px] focus:w-[145px] transition-[width] duration-500 outline-none border-none bg-white cursor-pointer"
      />
    </form>
  )
}
