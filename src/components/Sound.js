import React, { Component } from 'react'

import Player from './Player.js'
import Info from './Info.js'

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
    const { sounds, currentId } =  this.props
    const sameID = (sound) => asNumber(sound.id) === asNumber(currentId)
    const item = takeFirst(sounds.filter(sameID))

    return (
      currentId
        ? <div className='pr2'>
            <Player
              // eslint-disable-next-line
              ref={(ref) => this.Player = ref}
              playClick={this.playClick}
              onEnded={this.onEnded}
              selectedSound={item}
              isPlaying={this.state.isPlaying}
            />
            <Info selectedSound={item} />
          </div>
        : null
    )
  }
}

export default Sound
