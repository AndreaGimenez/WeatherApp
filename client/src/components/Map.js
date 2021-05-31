import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

export const Map = props => {
    const handleApiLoaded = (map, maps) => {
        map.addListener('click', handleMapClick);
    };

    const handleMapClick = (event) => {
        const previousMarkers = props.markers;
        props.addMarker([...previousMarkers, {lat:event.latLng.lat(), lng: event.latLng.lng()}])
    }

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyByHV5OnD2b9mgInpG5Z-0pWmJeGpLwZH8" }}
                defaultCenter={props.center}
                defaultZoom={props.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                onBoundsChange={props.onCenterChange}
            >
            {props.markers.map(marker => {
               return(
                    <Marker
                        lat={marker.lat}
                        lng={marker.lng}
                        text="My Marker My Marker My Marker My Marker My Marker"/> 
                    )}
                )
            }
            </GoogleMapReact>
        </div>
      );
}
export default Map;