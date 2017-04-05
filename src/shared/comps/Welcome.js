import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => <header className='vh-100 w-100'>
  <div className='bg-near-white h-100'>
    <div className='tc-ns pa3'>
      <h1 className='f2 f1-m f-headline-l fw2 black mt2 mb3 lh-title'><a className='link'>dźwiękowa mapa Wrocławia</a></h1>
      <h2 className='fw1 f2-l f3 black-80 mv3'>kolekcja nagrań audiosfery miasta</h2>
      <Link
        to={'/rec/313303431'}
        className='f5 no-underline white bg-black-80 bg-animate hover-bg-white hover-black inline-flex items-center pa2 ba border-box mv3'>
        <svg className='w1' viewBox='0 0 24 24' style={{fill: 'currentcolor'}}>
          <title>Map icon</title>
          <path d='M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z' />
        </svg>
        <span className='pl1'>Posłuchaj</span>
      </Link>
      <footer className='absolute bottom-0 right-0 f6 pa2 bg-white'>
        built with ❤️️ by: <a href='https://endziu.xyz' className='link black-80 hover-bg-black-60 hover-white'>endziu.xyz</a>
      </footer>
    </div>
  </div>
</header>

export default Welcome
