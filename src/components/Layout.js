import React, { Component } from 'react'
import List from './List.js'
import Menu from './Menu.js'
import Sound from './Sound.js'
import SearchField from './SearchField.js'
import sounds from '../assets/tracks.json'

class Layout extends Component {
  render () {
    const { mapa } = this.props
    return (
      <div className='App flex-auto flex-ns flex-row-ns justify-end f6 black-80'>
        { this.props.params.id ? <Menu /> : null }
        <div className='App-main w-100 vh-40 vh-100-ns fadeIn animated'>
          {this.props.children}
          {mapa ? { mapa } : null}
        </div>
        <div className='flex flex-column vh-60 vh-100-ns w-100 mw6-ns pl2 pt2 bl-m bl-l fadeIn animated'>
          <Sound currentId={this.props.params.id} sounds={sounds} />
          <SearchField />
          <List currentId={this.props.params.id} sounds={sounds} />
        </div>
      </div>
    )
  }
}

export default Layout
