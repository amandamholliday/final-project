import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { InfoWindow, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '600px',
  height: '600px',
//   padding: '40px',
//   margin: '30px'
};

function MyGoogleMap(props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY
  })

  const center = {
    lat: props.longitude,
    lng: props.latitude
  };

  const position = {
    lat: props.longitude,
    lng: props.latitude
  }


  const [map, setMap] = React.useState(null)

  const onLoad = marker => {
    console.log('marker: ', marker)
  }

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map)
//   }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  console.log("From Google Map:","lat", props.latitude, "long", props.longitude)
  console.log("From Google Map:", "address:", props.address)

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={40}
        onLoad={map => {
            const bounds = new window.google.maps.LatLngBounds();
            map.fitBounds(bounds);
        }}
        onUnmount={onUnmount}
      >
        <Marker
        onLoad={onLoad}
        position={position}
        />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyGoogleMap)