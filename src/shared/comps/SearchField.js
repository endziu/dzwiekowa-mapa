import React from 'react'

const SearchField = () => {
  return (
    <form className='absolute onTop'>
      <input
        className='input-reset pl2 pv2 bn'
        id='search'
        placeholder='🔎 Szukaj dźwięków...'
        type='text' />
    </form>
  )
}

export default SearchField
