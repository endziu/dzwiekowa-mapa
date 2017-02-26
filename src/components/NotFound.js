// src/components/NotFound/NotFound.js
import React, { Component } from 'react'
import { Link } from 'react-router'

// import './NotFound.css'

export default class NotFound extends Component {

  render () {
    return (
      <div>
        <h1>
          404 Not Found :(
        </h1>
        <Link to='/'>go to home page</Link>
      </div>
    )
  }
}
