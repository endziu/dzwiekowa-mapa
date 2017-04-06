import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => <header className='vh-100 w-100'>
  <div
    className='bg-near-white h-100'
    style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1470326032834-47d8a3054bb4?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg=")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}
  >

    <div className='pa3'>
      <h1 className='f2 f1-m f-headline-l fw2 black-80 mt2 mb3 lh-title'><a className='link'>dźwiękowa mapa Wrocławia</a></h1>
      <h2 className='fw1 f2-l f3 black-60 mv3'>kolekcja nagrań audiosfery miasta</h2>
      <Link
        to={'/rec/313303431'}
        className='v-mid f5 no-underline white bg-black-80 bg-animate hover-bg-white hover-black inline-flex items-center pa2 ba border-box mv3'>
        <svg className='w1' viewBox='0 0 24 24' style={{fill: 'currentcolor'}}>
          <title>Map icon</title>
          <path d='M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z' />
        </svg>
        <span className='pl1'>Posłuchaj</span>
      </Link>
      <footer className='absolute bottom-0 right-0 left-0 f6 pa2 white' style={{background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8) )'}}>
        <span className='fr'>
          built with ❤️️ by: <a href='https://endziu.xyz' className='link white hover-bg-white hover-black'>endziu.xyz</a>
        </span>
      </footer>
    </div>
  </div>
</header>

export default Welcome
