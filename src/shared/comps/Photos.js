import React from 'react'
import Img from 'react-image'
import { asNumber } from '../helpers/'

const Loader = () => <div>Pobieram obrazek...</div>
const LoaderSmall = () => <div> * </div>

export default class Photos extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: 0
    }
    this.imageClick = this.imageClick.bind(this)
  }

  imageClick (e) {
    this.setState({selected: asNumber(e.target.id)})
  }

  render () {
    return (
      <div className='center ph3 pt1 ph4-m pt3-m pa5-l w-100 vh-100-ns vh-40 mw7-m mw8-l bg-near-white overflow-auto'>
        {this.props.images[0]
          ? <div className='flex flex-wrap' onClick={this.imageClick}>
              {this.props.images.map((item, index) =>
                <Img
                  key={index}
                  id={index}
                  loader={<LoaderSmall />} 
                  className={this.state.selected === index ? 'mr2 mb2 w2 h2 w3-l h3-l dim ba bw2 b--green' : 'mr2 mb2 w2 h2 h2 w3-l h3-l dim'}
                  src={`https://res.cloudinary.com/endziu/image/upload/w_64,h_64,c_thumb,c_fill/mapa/${item}`}
                  alt={`image${index}`} />
                )}
            </div>
          : <div className='flex flex-wrap' onClick={this.imageClick}>
              <Img loader={<LoaderSmall />} id='avatar' className={'mr2 mb2 w2 h2 w3-l h3-l dim ba bw2 b--green'} src={this.props.defaultPic} alt='avatar' />
            </div>}

        {this.props.images[this.state.selected]
            ? <Img loader={<Loader />} className='w-90 w-100-l' src={`https://res.cloudinary.com/endziu/image/upload/mapa/${this.props.images[this.state.selected]}` || this.props.defaultPic} alt='big picture' />
            : <Img loader={<Loader />} src={this.props.defaultPic.substring(0, this.props.defaultPic.indexOf('-large.jpg')).concat('-t500x500.jpg')} alt='artwork' />}
      </div>
    )
  }
}
