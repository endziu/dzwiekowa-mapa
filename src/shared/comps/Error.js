import React from 'react'

const style = {
  padding: '16px',
  backgroundColor: 'red'
}

export default ({message}) => (
  <div style={style}>
    <h1>Sorry!</h1>
    <p>Something went horribly wrong…</p>
    <p>{message}</p>
  </div>
)
