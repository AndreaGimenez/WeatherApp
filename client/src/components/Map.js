import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const Map = props => {
    let markers = [{lat: -34.6007616, lng: -58.4972707}];
    const handleApiLoaded = (map, maps) => {
        map.addListener('click', handleMapClick);
    };
    const handleMapClick = (event) => {
        markers.push({lat:event.latLng.lat(), lng: event.latLng.lng()})
    }
    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyByHV5OnD2b9mgInpG5Z-0pWmJeGpLwZH8" }}
                defaultCenter={props.center}
                defaultZoom={props.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                onBoundsChange={props.onCenterChange}
            >
            {markers.map(marker => {
               return(
                    <AnyReactComponent
                        lat={marker.lat}
                        lng={marker.lng}
                        text="My Marker"/> 
                    )}
                )
            }
            </GoogleMapReact>
        </div>
      );
}
export default Map;