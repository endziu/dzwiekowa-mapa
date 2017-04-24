import React, { Component } from 'react'
import Player from './Player.js'
import Description from './Description.js'

class Sound extends Component {
  render () {
    const { currentSound } = this.props
    return (
      currentSound
        ? <div className='fadeIn animated pt1'>
          <Player
              // eslint-disable-next-line
              ref={ref => this.Player = ref}
            playClick={this.props.playClick}
            onEnded={this.props.onEnded}
            selectedSound={currentSound}
            isPlaying={this.props.isPlaying}
            />
          <Description selectedSound={currentSound} />
        </div>
        : null
    )
  }
}

export default Sound
