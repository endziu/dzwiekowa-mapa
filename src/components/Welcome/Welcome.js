import React from 'react'

const Welcome = ({ message }) => <div>{message}</div>

Welcome.propTypes = {
  message: React.PropTypes.string
}
Welcome.defaultProps = {
  message: 'Default Welcome Message :-)'
}

export default Welcome
