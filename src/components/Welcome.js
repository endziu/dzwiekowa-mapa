import React from 'react'
import { Link } from 'react-router'

const Welcome = ({ message }) => <header className='h-100 w-100'>
  <div className='bg-near-white h-100'>
    <div className='tc-l ph3'>
      <h1 className='baskerville f2 f1-m f-headline-l fw2 black-90 mb0 lh-title'>dźwiękowa mapa Wrocławia</h1>
      <h2 className='fw1 f2-l f3 black-80 mt2 mb2'>stylish subheadline with extra info</h2>
      <Link
        to={'/rec/235266599'}
        className='f5 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa2 ba border-box mr1'>
        <svg className='w1' viewBox='0 0 24 24' style={{fill: 'currentcolor'}}>
          <title>Map icon</title>
          <path d='M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z' />
        </svg>
        <span className='pl1'>Mapa</span>
      </Link>
    </div>
  </div>
</header>

export default Welcome
