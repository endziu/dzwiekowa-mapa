import React, { Component } from 'react'
import Player from './Player.js'
import Info from './Info.js'

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
    const { currentSound } = this.props
    return (
      currentSound
        ? <div className='fadeIn animated'>
            <Player
                // eslint-disable-next-line
                ref={ref => this.Player = ref}
              playClick={this.playClick}
              onEnded={this.onEnded}
              selectedSound={currentSound}
              isPlaying={this.state.isPlaying}
            />
            <Info selectedSound={currentSound} />
          </div>
        : null
    )
  }
}

export default Sound
