import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BnbCardData from '../../assets/data/BnbData/BnbCardData.json';
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
const Cards = () => {
    return (
        <div className='w-full h-full flex items-center justify-center flex-col font-poppinsh'>
            <div className='container h-auto grid grid-row-[auto] grid-cols-4 gap-10'>
                {BnbCardData.KucukEv.map((bnb, index) => (
                    <Link key={index} to="#" className='w-full max-h-[500px] flex flex-col items-start justify-center'>
                        <div className='w-full h-1/2 object-cover rounded-md overflow-hidden mb-3'>
                            <Swiper
                                className="mySwiper h-full w-full"
                            >
                                <SwiperSlide key={index}>
                                    <img src={bnb.image1} alt={bnb.name} className='h-full w-full object-cover' />
                                </SwiperSlide>
                                <SwiperSlide key={index} >
                                    <img src={bnb.image2} alt={bnb.name} className='h-full w-full object-cover' />
                                </SwiperSlide>
                                <SwiperSlide key={index} >
                                    <img src={bnb.image3} alt={bnb.name} className='h-full w-full object-cover' />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='w-full h-auto flex flex-col text-sm'>
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
