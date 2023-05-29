import React from 'react'
import CampaginsData from '../../assets/data/MainPageData/Campagins.json'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Campagins = () => {
    // campagins array

    return (
        <div className='container mt-36 font-poppins'>
            <h4 className='text-cardText'>
                Ceple Kampanyalar
            </h4>
            <div className='h-auto mt-6'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper h-52"
                >
                    {CampaginsData && CampaginsData.map((value, index) => (
                        <SwiperSlide key={index}>
                            <div className='w-full h-full rounded-lg shadow-lg relative top-0 left-0 overflow-hidden bg-gradient-to-r via-30% to-transparent to from-secondary-brand-color to-transparent'>
                                <div className='w-full h-full flex items-start justify-center flex-col p-4 z-10'>
                                    <h4 className='text-white text-xl mb-4 font-semibold'>
                                        {value.title}
                                    </h4>
                                    <p className='text-white text-sm'>
                                        {value.description}
                                    </p>
                                    <img className='w-full h-full object-cover absolute top-0 left-0 -z-10' src={value.src} alt={value.id} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Campagins