import React, { Component } from 'react'
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
    this.setState({isPlaying: false})
  }

  playClick (e) {
    const audioElem = this.Player.audioEl
    if (this.state.isPlaying) {
      audioElem.pause()
    } else {
      audioElem.play()
    }
    this.setState({isPlaying: !this.state.isPlaying})
  }

  render () {
    const sameID = (sound) => asNumber(sound.id) === asNumber(this.props.params.id)
    const item = takeFirst(sounds.filter(sameID))

    return (
      <div className='playerWidth floatRight'>
        <Player
          // eslint-disable-next-line
          ref={(ref)=>this.Player = ref}
          playClick={this.playClick}
          onEnded={this.onEnded}
          selectedSound={item}
          isPlaying={this.state.isPlaying}
        />
        <div className='flex flex-row justify-end items-start'>
          <p className='pa2 mw5'>
            { takeFirst(
                item.description
                  .split('\n')
                  .filter(s => s.includes('Opis'))
              ).substring(5) }
          </p>
          <img
            className='pv2 dontScale'
            src={item.artwork_url || item.userPic}
            alt='artwork'
          />
        </div>
        <div
          onClick={() => copyTextToClipboard(`http://localhost:3000/rec/${item.id}`)}
          className="sans-serif fr no-underline grow dib v-mid bg-near-white black ba b--black pa1 mb3 pointer">
            copy link
        </div>
      </div>
    )
  }
}

export default Sound
