import React, { Component } from 'react'
import { Gmaps, Marker } from 'react-gmaps'
import { getSoundById } from '../helpers/'
import sounds from '../assets/tracks.json'

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
    const item = getSoundById(this.props.params.id, sounds)
    return (
      <Gmaps
        ref={'mapa'}
        width={'100%'}
        height={'100%'}
        lat={item.GPS.lat}
        lng={item.GPS.lng}
        zoom={17}
        params={{ v: '3', key: 'AIzaSyB7GQAjLtFuxLYjfSQq3PLX3o0mX6qT-CU' }}
        onMapCreated={this.onMapCreated}
      >

        <Marker lat={item.GPS.lat} lng={item.GPS.lng} />

      </Gmaps>
    )
  }
}

export default SoundMap
