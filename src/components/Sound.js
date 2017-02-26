import React, { Component } from 'react'
import sounds from '../assets/tracks.json'
import Player from './Player.js'

import { IconHome, IconAdd, IconLink } from './Icons.js'
import { takeFirst, asNumber } from '../helpers/'

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
            <IconHome />
          </div>
          <div className='dim w2 h2 pa2 bg-white black pointer'>
            <IconAdd />
          </div>
          <div className='dim w2 h2 pa2 bg-white black pointer'>
            <IconLink id={item.id}/>
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
