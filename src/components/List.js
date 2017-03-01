import React from 'react'
import { Link } from 'react-router'

import sounds from '../assets/tracks.json'
import { asNumber } from '../helpers/index.js'

const List = ({currentId}) =>
  <ul className='list pt2 lh-copy overflow-auto'>
    { sounds.map((item, index) => <Link className='link'
        key={index}
        to={`/rec/${item.id}`}>
        <li className={
          asNumber(currentId) === asNumber(item.id)
            ? 'white bg-black-60 truncate'
            : 'black-80 hover-near-white bg-animate hover-bg-black-60 truncate'
        }>
          <span>
            {item.title}
          </span>
        </li>
      </Link>) }
  </ul>

export default List
