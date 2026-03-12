import React, { useState, useEffect } from 'react'
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps'

// Replace with a real Map ID from Google Cloud Console for production
const MAPS_KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY
const MAP_ID = 'DEMO_MAP_ID'

export default function Mapa({ currentSound, sounds, onMarkerClick }) {
  const toLatLng = s => ({ lat: s.gps.lat, lng: s.gps.lng })

  const [camera, setCamera] = useState({ center: toLatLng(currentSound), zoom: 15 })

  useEffect(() => {
    setCamera(c => ({ ...c, center: toLatLng(currentSound) }))
  }, [currentSound.permalink])

  return (
    <APIProvider apiKey={MAPS_KEY} language="pl" region="PL">
      <Map
        {...camera}
        onCameraChanged={ev => setCamera(ev.detail)}
        style={{ width: '100%', height: '100%' }}
        mapTypeId="satellite"
        mapTypeControl={false}
        fullscreenControl={false}
        streetViewControl={true}
        tilt={0}
        mapId={MAP_ID}
      >
        {sounds.map(sound => (
          <AdvancedMarker
            key={sound.permalink}
            position={toLatLng(sound)}
            onClick={() => onMarkerClick(sound.permalink)}
          >
            {sound.permalink === currentSound.permalink
              ? <Pin background="#000000" glyphColor="#ffffff" borderColor="#000000" />
              : <Pin />
            }
          </AdvancedMarker>
        ))}
      </Map>
    </APIProvider>
  )
}
