import React, { Component } from 'react'
import {Gmaps} from 'react-gmaps'

class SoundMap extends Component {

  onMapCreated (map) {
    map.setOptions({
      disableDefaultUI: false,
      mapTypeId: 'satellite',
      streetViewControl: true,
      tilt: 0,
      zoom: 15
    })
  }

  render () {

    return (
        <Gmaps
          ref={'mapa'}
          width={'100%'}
          height={'100%'}
          lat={"51.109230"}
          lng={"17.032555"}
          zoom={17}
          params={{v: '3', key: 'AIzaSyB7GQAjLtFuxLYjfSQq3PLX3o0mX6qT-CU'}}
          onMapCreated={this.onMapCreated}>
        </Gmaps>
    )
  }
}

export default SoundMap
