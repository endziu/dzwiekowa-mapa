import React from 'react'

const style = {
  padding: '16px',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
}

export default ({message}) => (
  <div style={style}>
    <h1>This request does NOT match any resource!</h1>
    <a href='/'>home</a>
  </div>
)
