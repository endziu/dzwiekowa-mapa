import React from 'react'
import { Link } from 'react-router'
import Sound from './Sound.js'
import { asNumber } from '../helpers/index.js'
import sounds from '../assets/tracks.json'

// const sounds = data.sort(() => 0.5 - Math.random())

const SideBar = ({id, sound}) => {
  return (
    <div className='flex flex-column pl2 pt2 bl vh-100 mw6'>
      <Sound id={id} />
      <form className='pv2 mr2 bb bt b--black-40'>
        <input className='input-reset h2' id='search' placeholder='🔎 Szukaj dźwięków...' type='text' />
      </form>
      <ul className='list pt2 lh-copy overflow-auto'>
        { sounds.map((item, index) =>
          <Link
            className='link'
            key={index}
            to={`/rec/${item.id}`}
          >
            <li className={asNumber(id) === asNumber(item.id) ? 'white bg-black-60 truncate' : 'black-80 hover-near-white bg-animate hover-bg-black-60 truncate'}>
              <span>{item.title}</span>
            </li>
          </Link>) }
      </ul>
    </div>
  )
}

export default SideBar
