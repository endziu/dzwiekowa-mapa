import React, { Component } from 'react'
import List from './List.js'
import Menu from './Menu.js'
import Sound from './Sound.js'
import sounds from '../assets/tracks.json'
import { getSoundById } from '../helpers/'

class App extends Component {

  constructor () {
    super()
    this.state = {
      isPlaying: false
    }
    this.playClick = this.playClick.bind(this)
    this.listClick = this.listClick.bind(this)
    this.onEnded = this.onEnded.bind(this)
  }

  onEnded (e) {
    this.setState({ isPlaying: false })
  }

  playClick (e) {
    const audioElem = this.Sound.Player.audioEl
    if (this.state.isPlaying) {
      audioElem.pause()
    } else {
      audioElem.play()
    }
    this.setState({ isPlaying: !this.state.isPlaying })
  }

  listClick (e) {
    this.setState({isPlaying: false})
  }

  render () {
    const currentSound = getSoundById(this.props.params.id, sounds)
    return (
      <div className='App flex-auto flex-ns flex-row-ns justify-end f6 black-80 bg-white'>

        { this.props.params.id ? <Menu currentId={this.props.params.id} /> : null }

        <div className='App-main flex justify-end-ns w-100 vh-40 vh-100-ns fadeIn animated ph1 pt1 fadeIn animated'>
          {this.props.children && React.cloneElement(this.props.children, {
            sounds,
            currentSound,
            currentRoute: this.props.location.pathname
          })}
        </div>

        <div className='flex flex-column vh-60 vh-100-ns w-100 mw6-ns ph1 bl-m bl-l fadeIn animated'>
          
          <Sound 
            // eslint-disable-next-line
            ref={ref => this.Sound = ref}
            currentSound={currentSound}
            onEnded={this.onEnded}
            playClick={this.playClick}
            isPlaying={this.state.isPlaying}
          />
          <List
            onClick={this.listClick}
            sounds={sounds} 
            currentId={this.props.params.id}
          />

        </div>

      </div>
    )
  }
}

export default App
