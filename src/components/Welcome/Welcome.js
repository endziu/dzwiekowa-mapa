import React from 'react'
import { Link } from 'react-router'

const Welcome = ({ message }) => <header>
  <div className='cover bg-left bg-center-l'>
    <div className='tc-l mt4 ph3'>
      <h1 className='baskerville f2 f1-m f-headline-l fw2 black-90 mb0 lh-title'>dźwiękowa mapa Wrocławia</h1>
      <h2 className='fw1 f2-l f3 black-80 mt3 mb4'>stylish subheadline with extra info</h2>
      <Link
        to='/rec/235266599'
        className='sans-serif f6 no-underline grow dib v-mid bg-light-blue black ba b--black ph3 pv2 mb3'>
          wejdź
      </Link>
    </div>
  </div>
</header>

export default Welcome
