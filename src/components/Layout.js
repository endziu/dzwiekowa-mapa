import React, { Component } from 'react'
import Lista from './Lista.js'

class Layout extends Component {

  render () {
    const {sound, mapa} = this.props
    return (
      <div className='App flex flex-row justify-end f6 black-80'>
        <div className='App-main vw-100 vh-100'>
          {this.props.children}

          { sound
            ? <div className='absolute onTop top-0 r--480'>
              {sound}
            </div>
            : null }

          { mapa
            ? <div className='absolute top-0 left-0 bottom-0 r--480 pa2'>
              {mapa}
            </div>
            : null }

        </div>
        <Lista
          id={this.props.params.id}
        />
      </div>
    )
  }
}

export default Layout

