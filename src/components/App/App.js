import React, { Component } from 'react'
import { Link } from 'react-router'
import sounds from '../../assets/tracks.json'
import { asNumber } from '../../helpers/index.js'

// const sounds = data.sort(() => 0.5 - Math.random())

class App extends Component {

  render () {
    return (
      <div className='App flex f6 black-80'>
        <div className='App-main pa2 w-two-thirds'>
          {this.props.children}
        </div>
        <div className='flex flex-column w-third pl2 pt2 bl'>
          <form className=' pb2 bb'>
            <input className='input-reset h2' id='search' placeholder='🔎 Szukaj dźwięków...' type='text' />
          </form>
          <ul className='App-Lista list mt2 lh-copy overflow-auto'>
            { sounds.map((item, index) =>
              <Link
                className='link'
                key={index}
                to={`/rec/${item.id}`}
              >
                <li className={asNumber(this.props.params.id) === asNumber(item.id) ? 'white bg-black-80 truncate' : 'black-80 hover-near-white bg-animate hover-bg-black-80 truncate'}>
                  <span>{item.title}</span>
                </li>
              </Link>) }
          </ul>
        </div>
      </div>
    )
  }
}

export default App

