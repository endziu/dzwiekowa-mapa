import React from 'react'
import { Link } from 'react-router'

const Menu = () => (
  <div className='onTop absolute left-1 top-1 fadeIn animated'>
    <nav className='flex flex-column'>
      <Link
        to={'/'}
        className='f5 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa1 ba border-box mb1'>
        <svg className='w1' viewBox='0 0 16 16' fill='none' stroke='currentcolor' strokeWidth='3'>
          <path d='M0 2.5 L16 2.5' />
          <path d='M0 8 L16 8' />
          <path d='M0 13.5 L16 13.5' />
        </svg>
        <span className='pl1'>Menu</span>
      </Link>
      <Link
        to={'/'}
        className='f5 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa1 ba border-box mb1'>
        <svg className='w1' viewBox='0 0 32 32' fill='currentcolor'>
          <title>Home icon</title>
          <path d='M16 0 L32 16 L28 16 L28 30 L20 30 L20 20 L12 20 L12 30 L4 30 L4 16 L0 16 Z' />
        </svg>
        <span className='pl1'>Home</span>
      </Link>
      <Link
        to={'/'}
        className='f5 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa1 ba border-box mb1'>
        <svg className='w1' viewBox='0 0 24 24' fill='currentcolor'>
          <path d='M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z' />
        </svg>
        <span className='pl1'>Pics</span>
      </Link>
      <Link
        to={'/'}
        className='f5 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa1 ba border-box mb1'>
        <svg className='w1' viewBox='0 0 16 16' stroke='currentcolor' fill='none' strokeWidth='3'>
          <path d='M0 8 L16 8' />
          <path d='M8 0 L8 16' />
        </svg>
        <span className='pl1'>Add</span>
      </Link>
    </nav>
  </div>
)

export default Menu
