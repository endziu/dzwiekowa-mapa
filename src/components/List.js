import React from 'react'
import { Link } from 'react-router'
import { asNumber } from '../helpers/index.js'

const List = ({ currentId, sounds }) => (
  <ul className='f5-ns lh-copy overflow-auto'>
    {sounds.map((elem, index) => (
      <Link className='link' key={index} to={`/rec/${elem.id}`}>
        <li
          className={
            asNumber(currentId) === asNumber(elem.id)
              ? 'white bg-black-60 truncate'
              : 'black-80 hover-near-white bg-animate hover-bg-black-60 truncate'
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