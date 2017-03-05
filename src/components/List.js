import React from 'react'
import { Link } from 'react-router'
import { asNumber } from '../helpers/index.js'

const List = ({ currentId, sounds }) => (
  <ul className='bg-near-white f5-ns overflow-auto mt1'>
    {sounds.map((elem, index) => (
      <Link className='link' key={index} to={`/rec/${elem.id}`}>
        <li
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
    ))}
  </ul>
)

export default List
