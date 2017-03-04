import React from 'react'

const SearchField = () => {
  return (
    <form className='pv1'>
      <input
        className='input-reset bn pl2 pv2 dn-sh'
        id='search'
        placeholder='🔎 Szukaj dźwięków...'
        type='text' />
    </form>
  )
}

export default SearchField
