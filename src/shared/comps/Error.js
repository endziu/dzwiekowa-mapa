import React from 'react'

const style = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  padding: '16px',
  backgroundColor: 'pink'
}

export default ({message}) => (
  <div style={style}>
    <h1>Sorry!</h1>
    <h2>This id does Not match any of our sounds</h2>
    <h3>
      try <a href="/88640153/info">this</a>
    </h3>
  </div>
)
