import React from 'react'
import Sound from './Sound.js'
import SearchField from './SearchField.js'
import List from './List.js'

const SideBar = ({id}) => {
  return (
    <div className='flex flex-column pl2 pt2 bl vh-100 mw6'>
      <Sound currentId={id} />
      <SearchField />
      <List currentId={id} />
    </div>
  )
}

export default SideBar
