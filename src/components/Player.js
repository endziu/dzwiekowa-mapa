import React, { Component } from 'react'

import { prettyTime } from '../helpers/index.js'

class Player extends Component {
  constructor () {
    super()
    this.state = {
      duration: 0,
      currentTime: 0,
      percentPlayed: 0
    }
    this.onTimeUpdate = this.onTimeUpdate.bind(this)
    this.setPosition = this.setPosition.bind(this)
    this.onEnded = this.onEnded.bind(this)
    this.recReady = this.recReady.bind(this)
  }

  componentDidMount () {
    // When play position updates
    this.audioEl.addEventListener('onTimeUpdate', (e) =>
      this.props.onTimeUpdate && this.props.onTimeUpdate(e)
    )
    // when sound finishes playing
    this.audioEl.addEventListener('onEnded', (e) =>
      this.onEnded(e)
    )
  }

  recReady () {
    this.setState({duration: this.audioEl.duration})
  }

  onEnded (e) {
    this.props.onEnded(e)
  }

  onTimeUpdate (e) {
    this.setState({
      duration: this.audioEl.duration || 0,
      currentTime: this.audioEl.currentTime || 0,
      percentPlayed: (this.audioEl.currentTime / this.audioEl.duration).toFixed(3) * 100 || 0
    })
  }

  setPosition (e) {
    console.log('setting position')
    const currentPosition = ((e.clientX - e.target.x) / e.target.width) * 100
    this.audioEl.currentTime = parseFloat((currentPosition * 0.01) * this.audioEl.duration)
    this.setState({percentPlayed: currentPosition})
  }

  render () {
    const { isPlaying, selectedSound } = this.props

    return (
      <div className='App-Player pb2 bb b--black-40'>

        <audio
          onTimeUpdate={this.onTimeUpdate}
          onEnded={this.onEnded}
          onLoadedMetadata={this.recReady}
          // eslint-disable-next-line
          ref={(ref) => this.audioEl = ref}
          src={selectedSound.stream_url + '?client_id=33c73dacce84dddddbc15117e071b6ce'} />         

        <div className='flex flex-row'>
          
          <div className='PlayButton grow' onClick={this.props.playClick}>
            <svg viewBox='0 0 200 200'>
              <circle cx='100' cy='100' r='95' fill='none' stroke='#000' />
              { isPlaying
                ? <g>
                  <polygon points='60,55 60,145 90,145 90,55' fill='#000' />
                  <polygon points='110,55 110,145 140,145 140,55' fill='#000' />
                </g>
                : <polygon points='70,55 70,145 145,100' fill='#000' />
              }
            </svg>
          </div>

          <div className='h2 pl2 w-100' onClick={this.setPosition}>
            <div className='h2' style={{width: `${this.state.percentPlayed}%`, background: '#555'}} />
            <img
              className='relative bottom-2 h2 w-100 bg-black-20'
              src={selectedSound.waveform_url}
              alt='waveform'
            />
            <span className='black fr relative moveUp'>{`${prettyTime(this.state.currentTime)} / ${prettyTime(this.state.duration)}`}</span>
          </div>

        </div>
      </div>
    )
  }
}

export default Player
