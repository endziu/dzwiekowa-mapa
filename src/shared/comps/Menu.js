import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Menu = ({id}) => {
  return (
    <div className='onTop menuPosition'>
      <div className='flex flex-row flex-column-ns content-end animated fadeIn'>
        <Link
          to={'/'}
          title={'Home'}
          className='f5 w1-8 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa1 ba border-box mb1 mr1'>
          <svg className='w1-8' viewBox='0 0 32 32' fill='currentcolor'>
            <title>Home icon</title>
            <path d='M16 0 L32 16 L28 16 L28 30 L20 30 L20 20 L12 20 L12 30 L4 30 L4 16 L0 16 Z' />
          </svg>
        </Link>

        <Link
          to={`/info/${id}`}
          title={'Wiecej Informacji'}
          className='f5 w1-8 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa1 ba border-box mb1 mr1'>
          <svg className='w1-8' viewBox='0 0 24 24' fill='currentcolor'>
            <path d='M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z' />
          </svg>
        </Link>
        
      </div>
    </div>
  )
}

export default Menu
