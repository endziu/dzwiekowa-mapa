import React from 'react'

const SearchField = ({handleSubmit, handleChange, filter}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className='ml1 mt1 ma0-ns ba f6 b-black-80 searchPos'>
      <input
        value={filter}
        onChange={handleChange}
        className='input-reset bn'
        id='search'
        placeholder='🔎  Szukaj dźwięków'
        type='text' />
    </form>
  )
}

export default SearchField
