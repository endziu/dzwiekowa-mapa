import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Menu = ({match}) => {
  return (
    <div className='onTop menuPosition'>
      <div className='flex flex-row flex-column-ns animated fadeIn'>

        <Link
          to={'/'}
          title={'Home'}
          className='f5 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa1 ba border-box mb1 mr1'>
          <svg className='w1-8' viewBox='0 0 32 32' fill='currentcolor'>
            <title>Home icon</title>
            <path d='M16 0 L32 16 L28 16 L28 30 L20 30 L20 20 L12 20 L12 30 L4 30 L4 16 L0 16 Z' />
          </svg>
        </Link>

        <Link
          to={'/add'}
          title={'Dodaj dźwięk'}
          className='f5 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa1 ba border-box mb1 mr1'>
          <svg className='w1-8' viewBox='0 0 16 16' stroke='currentcolor' fill='none' strokeWidth='3'>
            <path d='M0 8 L16 8' />
            <path d='M8 0 L8 16' />
          </svg>
        </Link>

        <Link
          to={'/search'}
          title={'szukaj'}
          className='f5 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa1 ba border-box mb1 mr1'>
          <svg className='w1-8' fill='currentColor' viewBox='0 0 32 32'>
            <path d='M12 0 A12 12 0 0 0 0 12 A12 12 0 0 0 12 24 A12 12 0 0 0 18.5 22.25 L28 32 L32 28 L22.25 18.5 A12 12 0 0 0 24 12 A12 12 0 0 0 12 0 M12 4 A8 8 0 0 1 12 20 A8 8 0 0 1 12 4' />
          </svg>
        </Link>

        <Link
          to={`/rec/${match.params.id}`}
          title={'Mapa'}
          className='f5 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa1 ba border-box mb1 mr1'>
          <svg className='w1-8' viewBox='0 0 24 24' fill='currentcolor'>
            <path d='M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z' />
          </svg>
        </Link>

        <Link
          to={`/imgs/${match.params.id}`}
          title={'Zdjęcia'}
          className='f5 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa1 ba border-box mb1 mr1'>
          <svg className='w1-8' viewBox='0 0 24 24' fill='currentcolor'>
            <path d='M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z' />
          </svg>
        </Link>

        <Link
          to={`/info/${match.params.id}`}
          title={'Wiecej Informacji'}
          className='f5 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa1 ba border-box mb1 mr1'>
          <svg className='w1-8' viewBox='0 0 24 24' fill='currentcolor'>
            <path d='M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z' />
          </svg>
        </Link>

      </div>
    </div>
  )
}

export default Menu
