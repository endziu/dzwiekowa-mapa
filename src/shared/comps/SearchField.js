import React from 'react'

const SearchField = ({handleSubmit, handleChange, filter}) => {
  return (
    <form 
      onSubmit={handleSubmit}
      className='ml1 mt1 ma0-ns absolute onTop searchPos'>
      <input
        value={filter}
        onChange={handleChange}
        className='input-reset pl2 pv2 bn'
        id='search'
        placeholder='🔎 Szukaj dźwięków...'
        type='text' />
    </form>
  )
}

export default SearchField
