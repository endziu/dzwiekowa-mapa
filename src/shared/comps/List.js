import React from 'react'
import { Link } from 'react-router-dom'
import { asNumber } from '../helpers/index.js'

const List = ({ currentId, sounds, onClick }) => (
  <ul className='bg-near-white f5-ns overflow-auto mt1'>
    {sounds.map((elem, index) => {
      return (
        <Link className='link' key={index} to={`/rec/${elem.id}`}>
          <li
            id={'snd' + index}
            onClick={onClick}
            className={
              asNumber(currentId) === asNumber(elem.id)
                ? 'white bg-black-60 truncate pv1 pv2-ns'
                : 'black-80 hover-near-white bg-animate hover-bg-black-60 truncate pv1 pv2-ns'
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
