import React, { Component } from 'react'
import { Gmaps, Marker } from 'react-gmaps'

const params = { v: '3', key: 'AIzaSyB7GQAjLtFuxLYjfSQq3PLX3o0mX6qT-CU', language: 'pl', region: 'PL' }

class SoundMap extends Component {
  constructor() {
    super()
    this.state = {
      currentZoom: 15
    }
  }

  onMapCreated (map) {
    map.setOptions({
      disableDefaultUI: false,
      mapTypeId: 'satellite',
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: true,
      tilt: 0,
      zoom: 15
    })
  }

  onMarkerClick (index) {
    this.props.onClick(index)
  }

  onZoom () {
    this.setState({currentZoom: this.refs.mapa.getMap().getZoom()})
    this.props.onZoom(this.state.currentZoom)
  }

  render () {
    const current = this.props.currentSound
    return (
      <Gmaps
        ref={'mapa'}
        width={'100%'}
        className='flex justify-end-ns w-100 vh-40 vh-100-ns fadeIn animated ph1 pt1 fadeIn animated'
        lat={current.info.gps.lat}
        lng={current.info.gps.lng}
        zoom={this.state.currentZoom}
        params={params}
        onMapCreated={this.onMapCreated}
        onZoomChanged={this.onZoom.bind(this)}
      >
        {this.props.sounds.map((sound, index) => {
          return <Marker
            animation={current.id === sound.id ? 1 : 0}
            lat={sound.info.gps.lat}
            lng={sound.info.gps.lng}
            onClick={this.onMarkerClick.bind(this, index)}
            key={index}
          />
        })}
      </Gmaps>
    )
  }
}

export default SoundMap
