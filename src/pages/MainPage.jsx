import React from 'react'
import Swiper from '../components/MainPage/MSwiper'
import Campagins from '../components/MainPage/Campagins'
import MobileApp from '../components/MainPage/MobileApp'
const MainPage = () => {
    return (
        <div className='w-full h-full'>
            <Swiper />
            <div className='w-full h-full flex items-center justify-center flex-col'>
                <Campagins />
                <MobileApp />
            </div>
        </div>
    )
}

export default MainPage