import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => <header className='vh-100 w-100'>
  <div className='bg-near-white h-100'>
    <div className='tc-ns pa3'>
      <h1 className='f2 f1-m f-headline-l fw2 black ma0 lh-title'>dźwiękowa mapa Wrocławia</h1>
      <h2 className='fw1 f2-l f3 black-80 mt2 mb2'>stylish subheadline with extra info</h2>
      <Link
        to={'/rec/313303431'}
        className='f5 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa2 ba border-box mr1'>
        <svg className='w1' viewBox='0 0 24 24' style={{fill: 'currentcolor'}}>
          <title>Map icon</title>
          <path d='M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z' />
        </svg>
        <span className='pl1'>Mapa</span>
      </Link>
      <section className='mw8 center mt3'>
        <h2 className='fw1 f2-l f3 black-80 mt2 mb2'>co słychać?</h2>
        <div className='fl w-100 w-50-m w-25-l pa3-m pa4-l mb2'>
          <p className='f6 lh-copy measure'>
            Perfect typography depends on perfect harmony between all of its elements.
            Harmony is determined by relationships
            or proportions. Proportions are hidden everywhere. words themselves.
          </p>
        </div>
        <div className='fl w-100 w-50-m w-25-l pa3-m pa4-l mb2'>
          <p className='f6 lh-copy measure'>
            True book design, therefore, is a matter of tact (tempo, rhythm,
            touch) alone. It flows from something rarely appreciated today:
            good taste. The book designer strives for perfection; yet every
            perfect thing lives somewhere in the neighborhood of dullness and
            is frequently mistaken for it by the insensitive. In a time that
            hungers for tangible novelties, dull perfection holds no
            advertising value at all.
          </p>
        </div>
        <div className='fl w-100 w-50-m w-25-l pa3-m pa4-l mb2'>
          <p className='f6 lh-copy measure'>
            In a masterpiece of typography, the artist's signature has been
            eliminated. What some may praise as personal styles are in reality
            small and empty peculiarities, frequently damaging, that masquerade
            as innovations.
          </p>
        </div>
        <div className='fl w-100 w-50-m w-25-l pa3-m pa4-l mb2'>
          <p className='f6 lh-copy measure'>
            Only through constant practice and strictest self-criticism may we
            develop a sense for a perfect piece of work. Unfortunately, most
            seem content with a middling performance. Careful spacing of words
            and the correct spacing of capital letters appear to be unknown or
            unimportant to some typesetters, yet for him who investigates, the
            correct rules are not difficult to discover.
          </p>
        </div>
      </section>
    </div>
  </div>
</header>

export default Welcome
