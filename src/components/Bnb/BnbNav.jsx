import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BnbData from '../../assets/data/BnbData/CategoriesData.json'
const BnbNav = () => {
    const [color, setColor] = React.useState('text-gray-500')
    const handleClick = () => {
        //Change the component
        setColor('text-primary-brand-color')
    }
    return (
        <div className='w-full h-28 flex items-center justify-center font-poppins flex-col text-center'>
            <div className='container w-full h-full flex items-center justify-between'>
                <Swiper
                    spaceBetween={30}
                    className="mySwiper"
                    slidesPerView={12}
                    freeMode={true}
                >
                    {BnbData.map((bnb, index) => (
                        <SwiperSlide key={index} className='group w-8 h-full flex-col items-center justify-center mt-2'>
                            <div className='w-full h-full flex items-center justify-center cursor-pointer'>
                                <div className='w-full h-full flex flex-col items-center justify-center' onClick={() => handleClick()}>
                                    <img src={bnb.icon} className='w-6 h-3/4 object-contain mb-2' />
                                    <p className={`text-sm  transition-all ease-in-out delay-75 group-hover:text-primary-brand-color`}>{bnb.title}</p>
                                </div>
                            </div>
                            <span>
                                <hr className='transition-all ease-in-out delay-75 opacity-0 group-hover:w-full group-hover:h-[1px] group-hover:opacity-10 mt-2' />
                            </span>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <hr className='w-full h-[1px] opacity-10' />
        </div>
    )
}

export default BnbNav