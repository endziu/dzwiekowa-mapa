import React, { Component } from 'react'
import { Link } from 'react-router'
import sounds from '../../assets/tracks.json'
import Player from '../Player/Player.js'

import { takeFirst, asNumber, copyTextToClipboard } from '../../helpers/index.js'

class Sound extends Component {
  constructor () {
    super()
    this.state = {
      isPlaying: false
    }
    this.playClick = this.playClick.bind(this)
    this.onEnded = this.onEnded.bind(this)
  }

  onEnded (e) {
    this.setState({ isPlaying: false })
  }

  playClick (e) {
    const audioElem = this.Player.audioEl
    if (this.state.isPlaying) {
      audioElem.pause()
    } else {
      audioElem.play()
    }
    this.setState({ isPlaying: !this.state.isPlaying })
  }

  render () {
    const sameID = (sound) => asNumber(sound.id) === asNumber(this.props.params.id)
    const item = takeFirst(sounds.filter(sameID))

    return (
      <div className='playerWidth floatRight'>

        <Player
          // eslint-disable-next-line
          ref={(ref) => this.Player = ref}
          playClick={this.playClick}
          onEnded={this.onEnded}
          selectedSound={item}
          isPlaying={this.state.isPlaying}
        />

        <div className='icons flex flex-row justify-start ml4'>

          <div className='dim w2 h2 pa2 bg-white black pointer'>
            <Link to='/'>
              <svg width='16' height='16' fill='#000' data-id='geomicon-home' viewBox='0 0 32 32'>
                <path d='M16 0 L32 16 L28 16 L28 30 L20 30 L20 20 L12 20 L12 30 L4 30 L4 16 L0 16 Z' />
              </svg>
            </Link>
          </div>

          <div className='dim w2 h2 pa2 bg-white black pointer'>
            <Link to='/add'>
              <svg viewBox='0 0 16 16' width='16' height='16' fill='#000' stroke='#000'>
                <path d='M0 8 L16 8' />
                <path d='M8 0 L8 16' />
              </svg>
            </Link>
          </div>

          <div className='dim w2 h2 pa2 bg-white black pointer'
            onClick={() => copyTextToClipboard(`https://devmap2.now.sh/rec/${item.id}`)}>
            <svg width='16' height='16' fill='#000' data-id='geomicon-link' viewBox='0 0 32 32'>
              <path d='M0 16 A8 8 0 0 1 8 8 L14 8 A8 8 0 0 1 22 16 L18 16 A4 4 0 0 0 14 12 L8 12 A4 4 0 0 0 4 16 A4 4 0 0 0 8 20 L10 24 L8 24 A8 8 0 0 1 0 16z M22 8 L24 8 A8 8 0 0 1 32 16 A8 8 0 0 1 24 24 L18 24 A8 8 0 0 1 10 16 L14 16 A4 4 0 0 0 18 20 L24 20 A4 4 0 0 0 28 16 A4 4 0 0 0 24 12z' />
            </svg>
          </div>

        </div>

        <div className='flex flex-row justify-start items-start'>

          <img
            className='pa2 ml4 dontScale'
            src={item.artwork_url || item.userPic}
            alt='artwork'
          />

          <p className='pa2'>
            {takeFirst(
              item.description
                .split('\n')
                .filter(s => s.includes('Opis'))
            ).substring(5)}
          </p>

        </div>

      </div>
    )
  }
}

export default Sound
