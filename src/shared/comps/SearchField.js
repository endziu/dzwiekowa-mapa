import React from 'react'

const SearchField = () => {
  return (
    <form className=''>
      <input
        className='input-reset bn pl1 pv2 dn-sh mr1'
        id='search'
        placeholder='🔎 Szukaj dźwięków...'
        type='text' />
    </form>
  )
}

export default SearchField
