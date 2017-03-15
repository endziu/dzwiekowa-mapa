import React, { Component } from 'react'
import List from './List.js'
import Menu from './Menu.js'
import Sound from './Sound.js'
import sounds from '../assets/tracks.json'
import { getSoundById } from '../helpers/'

class App extends Component {
  render () {
    const currentSound = getSoundById(this.props.params.id, sounds)
    return (
      <div className='App flex-auto flex-ns flex-row-ns justify-end f6 black-80 bg-white'>
        { this.props.params.id ? <Menu currentId={this.props.params.id} /> : null }
        <div className='App-main flex justify-end-ns w-100 vh-40 vh-100-ns fadeIn animated ph1 pt1 fadeIn animated'>
          {this.props.children && React.cloneElement(this.props.children, {
            currentSound,
            currentRoute: this.props.location.pathname
          })}
        </div>
        <div className='flex flex-column vh-60 vh-100-ns w-100 mw6-ns ph1 bl-m bl-l fadeIn animated'>
          <Sound currentSound={currentSound} />
          <List currentId={this.props.params.id} sounds={sounds} />
        </div>
      </div>
    )
  }
}

export default App
