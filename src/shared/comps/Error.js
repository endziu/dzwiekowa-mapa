import React from 'react'

const style = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  padding: '16px',
  backgroundColor: 'pink'
}

export default ({message}) => (
  <div style={style}>
    <h1>Sorry!</h1>
    <p>Something went horribly wrong…</p>
    <p>
      You better go <a href="/">home</a>
    </p>
  </div>
)
