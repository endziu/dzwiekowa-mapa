import React from 'react'
import Sound from './Sound.js'
import SearchField from './SearchField.js'
import List from './List.js'

const SideBar = ({id}) => {
  return (
    <div className='flex flex-column pl2 pt2 bl-ns bt vh-50 vh-100-ns w-100 mw6-ns'>
      <Sound currentId={id} />
      <SearchField />
      <List currentId={id} />
    </div>
  )
}

export default SideBar
