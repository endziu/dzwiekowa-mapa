import React, { Component, PropTypes } from 'react'
import { getAnimationTiming, animationClasses } from '../helpers/'

class Animate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      animating: Boolean(props.type)
    }
  }

  componentDidMount () {
    const { type } = this.props

    if (type) {
      this.setAnimating(type)
    }
  }

  componentWillReceiveProps (nextProps) {
    const { animating } = this.state

    if (nextProps.type && !animating) {
      this.setAnimating(nextProps.type)
    }
  }

  setAnimating (animation) {
    this.setState({ animating: true })
    setTimeout(() => this.setState({ animating: false }), this.props.timeout || getAnimationTiming(animation))
  }

  render () {
    const { type } = this.props
    const { animating } = this.state

    return (
      <div className={animating ? `animated ${type}` : null}>
        {this.props.children}
      </div>
    )
  }
}

Animate.propTypes = {
  children: PropTypes.node.isRequired,
  component: PropTypes.string,
  type: PropTypes.oneOf(animationClasses),
  timeout: PropTypes.number
}

Animate.defaultProps = {
  type: null,
  enter: null,
  leave: null,
  appear: null,
  component: 'div',
  forceAnimation: false
}

export default Animate
