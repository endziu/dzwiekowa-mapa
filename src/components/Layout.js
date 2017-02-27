import React, { Component } from 'react'
import SideBar from './SideBar.js'

class Layout extends Component {
  render () {
    const {mapa} = this.props
    return (
      <div className='App flex flex-row justify-end f6 black-80'>
        <div className='App-main vw-100 vh-100'>
          { this.props.children }
          { mapa ? {mapa} : null }
        </div>
        <SideBar
          id={this.props.params.id}
        />
      </div>
    )
  }
}

export default Layout

