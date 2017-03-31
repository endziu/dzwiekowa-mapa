import React, { Component } from 'react'
import { Gmaps, Marker } from 'react-gmaps'

class SoundMap extends Component {
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

  render () {
    const current = this.props.currentSound
    return (
      <Gmaps
        ref={'mapa'}
        width={'100%'}
        className='flex justify-end-ns w-100 vh-40 vh-100-ns fadeIn animated ph1 pt1 fadeIn animated'
        lat={current.GPS.lat}
        lng={current.GPS.lng}
        zoom={17}
        params={{ v: '3', key: 'AIzaSyB7GQAjLtFuxLYjfSQq3PLX3o0mX6qT-CU' }}
        onMapCreated={this.onMapCreated}
      >
        {this.props.sounds.map((sound,index) => {
          return <Marker key={index} lat={sound.GPS.lat} lng={sound.GPS.lng} />  
        })}
      </Gmaps>
    )
  }
}

export default SoundMap
