import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BnbCardData from '../../assets/data/BnbData/BnbCardData.json';
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);
const Cards = () => {
    const [selectedData, setSelectedData] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().substr(0, 10));

    const handlePopup = (bnb) => {
        setSelectedData(bnb);
        openSweetAlert(bnb);
    }

    const openSweetAlert = (bnb) => {
        MySwal.fire({
            title: bnb.name,
            text: bnb.distance,
            imageUrl: bnb.image1,
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: bnb.name,
            html: (
                <div>
                    <div>{bnb.price} Gece</div>
                    <div className='mt-4'>
                        <div className='font-poppins w-full h-auto flex items-center justify-center flex-col'>
                            <input type='date' value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
                        </div>
                    </div>
                </div>
            ),
            confirmButtonText: 'Hemen Kirala',
            showCancelButton: true,
            cancelButtonText: 'Vazgeç',
            customClass: {
                confirmButton: 'px-10 py-2 rounded-xl text-sm text-center text-brand-yellow font-poppins bg-brand-color transition-all ease-in-out delay-75 hover:bg-brand-yellow hover:text-brand-color',
                cancelButton: 'px-10 py-2 rounded-xl text-sm text-center text-gray-600 font-poppins bg-white transition-all ease-in-out delay-75 hover:bg-gray-200 hover:text-gray-800',
                title: 'text-lg font-semibold text-brand-color',
                content: 'text-sm font-light',
                image: 'rounded-xl object-cover',
            },
            preConfirm: () => {
                if (!selectedDate) {
                    Swal.showValidationMessage('Lütfen bir tarih seçin');
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'Kiralama İşlemi Tamamlandı',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                setSelectedData(null);
            }
        });
    };

    return (
        <div className='w-full h-full flex items-center justify-center flex-col font-poppinsh'>
            <div className='container h-auto grid grid-row-[auto] grid-cols-4 gap-10'>
                {BnbCardData.KucukEv.map((bnb, index) => (
                    <Link onClick={() => handlePopup(bnb)} key={index} className='w-full max-h-[500px] flex flex-col items-start justify-center'>
                        <div className='w-full h-1/2 object-cover rounded-md overflow-hidden mb-3'>
                            <Swiper
                                className="mySwiper h-full w-full"
                            >
                                <SwiperSlide key={index}>
                                    <img src={bnb.image1} alt={bnb.name} className='h-full w-full object-cover' />
                                </SwiperSlide>
                                <SwiperSlide key={index + 1} >
                                    <img src={bnb.image2} alt={bnb.name} className='h-full w-full object-cover' />
                                </SwiperSlide>
                                <SwiperSlide key={index + 2} >
                                    <img src={bnb.image3} alt={bnb.name} className='h-full w-full object-cover' />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='w-full h-auto flex flex-col text-sm font-poppins'>
                            <div className='w-full h-auto flex justify-between items-center'>
                                <h4 className='text-lg font-semibold text-brand-color'>{bnb.name}</h4>
                                <span className='flex justify-center items-center text-base'><AiFillStar className='mr-1 text-brand-yellow' />{bnb.star}</span>
                            </div>
                            <div className='w-full h-full flex flex-col'>
                                <p className='text-cardText'>{bnb.distance}</p>
                                <p className='text-cardText mb-1'>{bnb.calendar}</p>
                                <p>{bnb.price} <b>Gece</b></p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Cards;