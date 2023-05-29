import React from "react";
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import pin from '/images/icons/carmark.png'
import markerData from '../../assets/data/ScooterData/Marker.json'
const MAPBOX_TOKEN = 'pk.eyJ1IjoiNGZrYW4iLCJhIjoiY2xpODRxMThmMW1vcTNqb3psZWhqM2ltMyJ9.gyEHTfGtnSJI_xqJL1WRQQ'; // Set your mapbox token here
const CMap = () => {
    const popupContent = (city) => {
        return (
            <Popup
                latitude={41.0701}
                longitude={28.9193}
                closeButton={true}
                closeOnClick={false}
                anchor="bottom"
            >
                <div className="w-64 h-64">
                    <h1 className="text-2xl font-bold">Scooter Name</h1>
                    <p className="text-lg">Scooter Description</p>
                    <p className="text-lg">Scooter Price</p>
                </div>
            </Popup>
        );
    };
    return (
        <div className="w-full h-auto md:h-[500px] overflow-hidden">
            <Map
                initialViewState={{
                    latitude: 41.0701,
                    longitude: 28.9193,
                    zoom: 10
                }}
                style={{ width: 1920, height: 500 }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                className="w-full h-min-[500px]"
                mapboxAccessToken={MAPBOX_TOKEN}
            >
                {
                    markerData.map((marker, index) => (
                        <Marker longitude={marker.longitude} latitude={marker.latitude} key={index} anchor="bottom" onClick={popupContent}>
                            <img src={pin} className="w-12 h-12 object-contain" />
                        </Marker>
                    ))
                }
            </Map>
        </div>
    );
}

export default CMap;