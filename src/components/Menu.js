import React, { Component } from 'react'
import { Link } from 'react-router'
//import Animate from './Animate.js'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: false,
      hovered: false
    }
    this.mouseOverMenu = this.mouseOverMenu.bind(this)
    //this.mouseOutMenu = this.mouseOutMenu.bind(this)
    this.menuClick = this.menuClick.bind(this)
  }

  mouseOverMenu(e) {
    //console.log(e)
    this.setState({hovered: !this.state.hovered})
  }
/*
  mouseOutMenu(e) {
    //console.log(e)
    this.setState({hovered: false})
  }
*/
  menuClick(e) {
    e.preventDefault()
    this.setState({opened: !this.state.opened})
  }

  render() {
    return(
      <div className='onTop absolute left-1 top-1'>
        <nav className='flex flex-column-ns flex-row'>
          <Link
            to={'/'}
            title={'Menu'}
            className='f5 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa1 ba border-box mb1 mr1'
            onMouseEnter={this.mouseOverMenu}
            onMouseLeave={this.mouseOutMenu}
            onClick={this.menuClick}>
            <svg className='w1' viewBox='0 0 16 16' fill='none' stroke='currentcolor' strokeWidth='3'>
              <path d='M0 2.5 L16 2.5' />
              <path d='M0 8 L16 8' />
              <path d='M0 13.5 L16 13.5' />
            </svg>
          </Link>

          { this.state.hovered || this.state.opened
          ? <div className='flex flex-column-ns flex-row'>
              <Link
                to={'#'}
                title={'Home'}
                className='f5 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa1 ba border-box mb1 mr1'>
                <svg className='w1' viewBox='0 0 32 32' fill='currentcolor'>
                  <title>Home icon</title>
                  <path d='M16 0 L32 16 L28 16 L28 30 L20 30 L20 20 L12 20 L12 30 L4 30 L4 16 L0 16 Z' />
                </svg>
              </Link>

              <Link
                to={'/'}
                title={'Pics'}
                className='f5 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa1 ba border-box mb1 mr1'>
                <svg className='w1' viewBox='0 0 24 24' fill='currentcolor'>
                  <path d='M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z' />
                </svg>
              </Link>

              <Link
                to={'/'}
                title={'Info'}
                className='f5 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa1 ba border-box mb1 mr1'>
                <svg className='w1' viewBox='0 0 24 24' fill='currentcolor'>
                  <path d='M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z' />
                </svg>
              </Link>

              <Link
                to={'/'}
                title={'Add Sound'}
                className='f5 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa1 ba border-box mb1 mr1'>
                <svg className='w1' viewBox='0 0 16 16' stroke='currentcolor' fill='none' strokeWidth='3'>
                  <path d='M0 8 L16 8' />
                  <path d='M8 0 L8 16' />
                </svg>
              </Link>
            </div>
          : null }
        </nav>
      </div>
    )
  }
}

export default Menu

