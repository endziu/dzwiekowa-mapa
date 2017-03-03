import React from 'react'
import { Link } from 'react-router'

const Menu = () => (
  <div className='onTop absolute top-2 left-2 slideInLeft animated'>
    <Link 
      to={'/'} 
      className='f5 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa2 ba border-box mr4'>
        <svg className='w1' viewBox='0 0 24 24' style={{fill: 'currentcolor'}}>
          <title>Menu icon</title>
          <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
        </svg>
        <span className='pl1'>Menu</span>
    </Link>
  </div>
)

export default Menu
