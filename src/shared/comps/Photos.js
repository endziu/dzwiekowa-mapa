import React from 'react'
import { getSoundById, asNumber } from '../helpers/'

export default class Photos extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      selected: 0
    }
    this.imageClick = this.imageClick.bind(this)
  }

  imageClick (e) {
    this.setState({selected: asNumber(e.target.id)})
  }

  render() {
    return (
      <div className='center pa3 pa4-m pa5-l w-100 vh-100-ns vh-40 mw7-m mw8-l bg-near-white overflow-auto'>
        {!!this.props.images[0]
          ? <div className='flex flex-wrap mt3' onClick={this.imageClick}>
              {this.props.images.map((item,index) =>
                <img
                  key={index}
                  id={index}
                  className={this.state.selected === index ? 'mr2 mb2 w3 h3 grow dim ba bw2 b--green' : 'mr2 mb2 w3 h3 grow dim'}
                  src={`https://res.cloudinary.com/endziu/image/upload/w_64,h_64,c_thumb,c_fill/mapa/${item}`}
                  alt={`image${index}`} />
              )}
            </div>
          : <img id='avatar' className='mr2 mb2 w3 h3 grow dim' src={this.props.defaultPic} alt='avatar'/>}
      </div>
    )
  }
}


