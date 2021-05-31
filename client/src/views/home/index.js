import React, {useState} from 'react';
import {Map} from '../../components/Map';
import DrawerComponent from '../../components/Drawer';


export const Home = props => {
    const [center, setCenter] = useState({lat: -34.6007616, lng: -58.4972707});
    const [zoom, setZoom] = useState(16);

    const handleCenterChange = (newCenter, newZoom) => {
        setCenter(newCenter);
        setZoom(newZoom);
    }
    
    return (
        <div>
            <DrawerComponent/>
            <Map
                center={center}
                zoom={zoom}
                onCenterChange={handleCenterChange}
            />
        </div>
    )
}

export default Home;