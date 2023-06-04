import React, { useRef, useState, useEffect } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Hdata from "../../assets/data/MainPageData/heroData";
import ReactFlagsSelect from "react-flags-select";

const MSwiper = () => {

    const [selected, setSelected] = useState("TR");

    const phones = {
        US: "+1",
        DE: "+50",
        TR: "+90",
        IT: "+7",
        IN: "+15",
    };

    return (
        <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {Hdata && Hdata.map((value, index) => (
                    <SwiperSlide key={index} category={value}>
                        <img
                            className="w-full object-cover h-[500px]"
                            src={value.image}
                            alt={value.id}
                        ></img>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="w-full h-full absolute bottom-0 top-0 flex items-center justify-center z-30">
                <div className="w-10/12 h-full flex items-center justify-between">
                    <div className="flex items-start justify-center w-auto h-full z-10 flex-col">
                        <div className="w-[220px] h-[220px] flex justify-center items-center">
                            <img src={`/images/LogoBig.png`} alt="Ceple" className="object-contain w-full h-full" />
                        </div>
                    </div>
                    <div className="w-1/2 h-full flex items-center justify-end">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MSwiper