import React from 'react'
import { Link } from 'react-router'

const Menu = () => (
  <div className='onTop absolute top-1 left-1 slideInLeft animated'>
    <Link 
      to={'/'} 
      className='f5 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa2 ba border-box mr1'>
        <svg className='w1' viewBox='0 0 32 32' style={{fill: 'currentcolor'}}>
          <title>Home icon</title>
          <path d="M16 0 L32 16 L28 16 L28 30 L20 30 L20 20 L12 20 L12 30 L4 30 L4 16 L0 16 Z"></path>
        </svg>
        <span className='pl1'>Home</span>
    </Link>
    <Link 
      to={'/'} 
      className='f5 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa2 ba border-box mr1'>
        <svg className='w1' viewBox='0 0 24 24' style={{fill: 'currentcolor'}}>
          <title>Menu icon</title>
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
        <span className='pl1'>Menu</span>
    </Link>
  </div>
)

export default Menu