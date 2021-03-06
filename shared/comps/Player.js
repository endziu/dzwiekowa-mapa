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
    this.audioEl.addEventListener(
      'onTimeUpdate',
      e => this.props.onTimeUpdate && this.props.onTimeUpdate(e)
    )
    // when sound finishes playing
    this.audioEl.addEventListener('onEnded', e => this.onEnded(e))
  }

  recReady () {
    this.setState({ duration: this.audioEl.duration })
  }

  onEnded (e) {
    this.props.onEnded(e)
  }

  onTimeUpdate (e) {
    this.setState({
      duration: this.audioEl.duration || 0,
      currentTime: this.audioEl.currentTime || 0,
      percentPlayed: (
        (this.audioEl.currentTime / this.audioEl.duration).toFixed(3) * 100 || 0
      )
    })
  }

  setPosition (e) {
    const currentPosition = (e.clientX - e.target.x) / e.target.width * 100
    this.audioEl.currentTime = parseFloat(
      currentPosition * 0.01 * this.audioEl.duration
    )
    this.setState({ percentPlayed: currentPosition })
  }

  render () {
    const { isPlaying, selectedSound } = this.props
    // const url = `https://soundcloud.com/${selectedSound.userName}/${selectedSound.permalink}`
    return (
      <div className='App-Player bg-near-white pt1'>
        <audio
          onTimeUpdate={this.onTimeUpdate}
          onEnded={this.onEnded}
          onLoadedMetadata={this.recReady}
          // eslint-disable-next-line
          ref={ref => this.audioEl = ref}
          preload={`metadata`}
          src={selectedSound.stream_url + '?client_id=33c73dacce84dddddbc15117e071b6ce'}
        />

        <div className='flex flex-row'>
          <div className='PlayButton grow black bg-white w3 h3 ba br-100' onClick={this.props.playClick}>
            <svg viewBox='0 0 32 32' className='h3 w3'>
              { isPlaying
                ? (
                  <g>
                    <polygon points='9,8 9,24 13,24 13,8' fill='#000' />
                    <polygon points='17,8 17,24 21,24 21,8' fill='#000' />
                  </g>
                )
                : (<polygon points='10,8 10,24 24,16' fill='#000' />) }
            </svg>
          </div>

          <div className='h3 pl2 w-100' onClick={this.setPosition}>
            <div
              className='h3'
              style={{
                width: `${this.state.percentPlayed}%`,
                background: '#000'
              }}
            />
            <img
              className='relative bottom-4 h3 w-100 bg-black-20'
              src={selectedSound.waveform_url}
              alt='waveform'
            />
          </div>
        </div>
        <div className='flex flex-row justify-between'>

          <span className='link black truncate pointer pv1 pr1 f5 fw6'>
            {`${selectedSound.title}`}
          </span>

          <span className='black br1 f5 pv1'>
            { `${prettyTime(this.state.currentTime)}/${prettyTime(this.state.duration)}` }
          </span>
        </div>
      </div>
    )
  }
}

export default Player
