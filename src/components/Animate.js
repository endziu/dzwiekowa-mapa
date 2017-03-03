import React, { Component, PropTypes } from 'react'

const animationClasses = [
  'bounce', 'flash', 'pulse', 'rubberBand', 'shake',
  'swing', 'tada', 'wobble', 'jello', 'bounceIn',
  'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'bounceOut',
  'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp', 'fadeIn',
  'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight',
  'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeOut', 'fadeOutDown',
  'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight',
  'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig', 'flip', 'flipInX',
  'flipInY', 'flipOutX', 'flipOutY', 'lightSpeedIn', 'lightSpeedOut',
  'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft',
  'rotateInUpRight', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight',
  'rotateOutUpLeft', 'rotateOutUpRight', 'slideInUp', 'slideInDown',
  'slideInLeft', 'slideInRight', 'slideOutUp', 'slideOutDown',
  'slideOutLeft', 'slideOutRight', 'zoomIn', 'zoomInDown', 'zoomInLeft',
  'zoomInRight', 'zoomInUp', 'zoomOut', 'zoomOutDown', 'zoomOutLeft',
  'zoomOutRight', 'zoomOutUp', 'hinge', 'rollIn', 'rollOut'
]

const getAnimationTiming = (anim) => {
  switch (anim) {
    case 'hinge':
      return 2000
    case 'flipOutX':
    case 'flipOutY':
    case 'bounceIn':
    case 'bounceOut':
      return 750
    default:
      return 1000
  }
}

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
    setTimeout(() => this.setState({ animating: false }), getAnimationTiming(animation))
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
