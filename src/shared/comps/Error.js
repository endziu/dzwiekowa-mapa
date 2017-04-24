import React from 'react'

const style = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  padding: '16px'
}

export default ({err}) => (
  <div style={style}>
    <h1>this id does Not match any of our sounds</h1>
    <h2>
      try <a href='/88640153/info'>this</a>
    </h2>
    <p>
      {err}
    </p>
  </div>
)
