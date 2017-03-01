import React, { Component } from 'react'
import Sound from './Sound.js'
import SearchField from './SearchField.js'
import List from './List.js'

class Layout extends Component {
  render () {
    const { mapa } = this.props
    return (
      <div className='App flex-auto flex-ns flex-row-ns justify-end f6 black-80'>
        <div className='App-main w-100 vh-40 vh-100-ns'>
          { this.props.children }
          { mapa ? {mapa} : null }
        </div>
        <div className='flex flex-column vh-60 vh-100-ns w-100 mw6-ns pl2 pt2 bl-m bl-l bt'>
          <Sound currentId={this.props.params.id} />
          <SearchField />
          <List currentId={this.props.params.id} />
        </div>
      </div>
    )
  }
}

export default Layout
