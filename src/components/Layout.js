import React, { Component } from 'react'
import { Link } from 'react-router'

import data from '../assets/tracks.json'
import { asNumber } from '../helpers/index.js'

const sounds = data.sort(() => 0.5 - Math.random())

const Lista = ({id}) => {
  return (
    <div className='flex flex-column pl2 pt2 bl'>
      <form className='pb2 bb'>
        <input className='input-reset h2' id='search' placeholder='🔎 Szukaj dźwięków...' type='text' />
      </form>
      <ul className='App-Lista list mt2 lh-copy overflow-auto'>
        { sounds.map((item, index) =>
          <Link
            className='link'
            key={index}
            to={`/rec/${item.id}`}
          >
            <li className={asNumber(id) === asNumber(item.id) ? 'white bg-black-60 truncate' : 'black-80 hover-near-white bg-animate hover-bg-black-60 truncate'}>
              <span>{item.title}</span>
            </li>
          </Link>) }
      </ul>
    </div>
  )
}

class Layout extends Component {

  render () {
    const {sound, mapa} = this.props
    return (
      <div className='App flex flex-row justify-end f6 black-80'>

        <div className='App-main vw-100 vh-100'>

          {this.props.children}

          { sound
            ? <div className='absolute onTop top-0 r--480'>
              {sound}
            </div>
            : null }

          { mapa
            ? <div className='absolute top-0 left-0 bottom-0 r--480 pa2'>
              {mapa}
            </div>
            : null }

        </div>

        <Lista
          id={this.props.params.id}
        />

      </div>
    )
  }
}

export default Layout

