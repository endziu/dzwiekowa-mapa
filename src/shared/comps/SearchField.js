import React from 'react'

const SearchField = ({handleSubmit, handleChange, handleReset, filter, reset}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className='ml1 mt1 ma0-ns ba f6 b-black-80 searchPos'>
      <input
        value={filter}
        onChange={handleChange}
        onMouseEnter={handleReset}
        className='input-reset bn'
        id='search'
        placeholder={reset ? '❌' : '🔎  Szukaj dźwięków'}
        type='text' />
    </form>
  )
}

export default SearchField
