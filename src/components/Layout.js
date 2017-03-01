import React, { Component } from 'react'
import SideBar from './SideBar.js'

class Layout extends Component {
  render () {
    const { mapa } = this.props
    return (
      <div className='App flex-auto flex-ns flex-row-ns justify-end f6 black-80'>
        <div className='App-main w-100 vh-50 vh-100-ns'>
          { this.props.children }
          { mapa ? {mapa} : null }
        </div>
        <SideBar id={this.props.params.id} />
      </div>
    )
  }
}

export default Layout
