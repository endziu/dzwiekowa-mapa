import React, { Component } from 'react'
import { Gmaps, Marker } from 'react-gmaps'

class SoundMap extends Component {
  onMapCreated (map) {
    map.setOptions({
      disableDefaultUI: false,
      mapTypeId: 'satellite',
      mapTypeControl: false,
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
        height={'100%'}
        lat={current.GPS.lat}
        lng={current.GPS.lng}
        zoom={17}
        params={{ v: '3', key: 'AIzaSyB7GQAjLtFuxLYjfSQq3PLX3o0mX6qT-CU' }}
        onMapCreated={this.onMapCreated}
      >

        <Marker lat={current.GPS.lat} lng={current.GPS.lng} />

      </Gmaps>
    )
  }
}

export default SoundMap
