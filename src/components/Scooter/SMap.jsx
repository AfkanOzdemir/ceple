import React, { useState } from "react";
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import pinIcon from '/images/icons/pin.png'
import { Link } from 'react-router-dom'
import markerData from '../../assets/data/ScooterData/Marker.json'
const MAPBOX_TOKEN = 'pk.eyJ1IjoiNGZrYW4iLCJhIjoiY2xpODRxMThmMW1vcTNqb3psZWhqM2ltMyJ9.gyEHTfGtnSJI_xqJL1WRQQ';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
const SMap = () => {
    const [popup, setPopup] = useState(null)

    const handleSelectPin = (pin) => {
        setPopup(pin)
    }
    const [scooter, setScooter] = useState(null)

    const handlePopup = (scooter) => {
        setScooter(scooter);
        openSweetAlert(scooter);
    }
    const MySwal = withReactContent(Swal);
    const openSweetAlert = (scooter) => {
        //Scooter başarıyla kiralandı
        MySwal.fire({
            title: 'Scooter Kiralandı',
            text: 'Scooter başarıyla kiralandı',
            icon: 'success',
            confirmButtonText: 'Tamam',
            customClass: {
                confirmButton: 'px-10 py-2 rounded-xl text-sm text-center text-brand-yellow font-poppins bg-brand-color transition-all ease-in-out delay-75 hover:bg-brand-yellow hover:text-brand-color',
            }

        })
        setPopup(null)
    }

    return (
        <div className="w-full h-auto md:h-[600px] overflow-hidden">
            <Map
                initialViewState={{
                    latitude: 41.0701,
                    longitude: 28.9193,
                    zoom: 10
                }}
                style={{ width: 1920, height: 500 }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                className="w-full h-min-[600px]"
                mapboxAccessToken={MAPBOX_TOKEN}
            >
                {
                    markerData.map((marker, index) => (
                        <Marker longitude={marker.longitude} latitude={marker.latitude} key={index} anchor="bottom" onClick={() => handleSelectPin(marker)}>
                            <img src={pinIcon} className="w-12 h-12 object-contain" />
                        </Marker>
                    ))
                }
                {popup && (
                    <Popup
                        longitude={popup.longitude}
                        latitude={popup.latitude + 0.0010}
                        closeButton={true}
                        closeOnClick={false}
                        onClose={() => setPopup(null)}
                        anchor="bottom"

                    >
                        <div className="w-full h-auto p-2 flex flex-col items-center justify-center">
                            <img src={popup.image} className="w-24 h-24 object-contain mb-4" />
                            <h3 className="w-full h-auto text-primary-brand-color font-semibold text-lg mb-4 text-center">{popup.title}</h3>
                            <div className="w-full h-auto flex items-center justify-between font-poppins text-sm mb-4 flex-col font-medium"><p>{popup.price}₺/dk</p> <p>{popup.distance} Uzaklıkta</p></div>
                            <Link className="px-10 py-2 rounded-xl text-sm text-center text-brand-yellow font-poppins
                            bg-brand-color transition-all ease-in-out delay-75 hover:bg-brand-yellow hover:text-brand-color" onClick={() => handlePopup(scooter)}>Hemen Kirala</Link>
                        </div>
                    </Popup>
                )}
            </Map>
        </div >
    );
}

export default SMap;