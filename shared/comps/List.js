import React from 'react'
import { Link } from 'react-router-dom'
import { asNumber } from '../helpers/index.js'

const List = ({ currentId, sounds, onClick, linkTo }) => (
  <ul className='bg-near-white overflow-auto mt1 z-1'>
    {sounds.map((elem, index) => {
      return (
        <Link className='link' key={index} to={`/${elem.permalink}/${linkTo || 'info'}`}>
          <li
            id={'snd' + index}
            onClick={onClick}
            className={
              asNumber(currentId) === asNumber(elem.id)
                ? 'white bg-black-60 truncate pl1 pv1'
                : 'black-80 hover-near-white bg-animate hover-bg-black-60 truncate pl1 pv1'
            }
          >
            <span>
              {elem.title}
            </span>
          </li>
        </Link>
      )
    })}
  </ul>
)

export default List
