import React from 'react'
import { Link } from "react-router-dom"
import { MdLanguage } from "react-icons/md";
import { FaUserAlt, FaUserPlus } from "react-icons/fa";
const Navbar = () => {

    const nav = [
        {
            id: 'Ceple', link: '/', src: '/images/icons/logo.png'
        },
        {
            id: 'CepleAraba', link: '/Araba', src: '/images/icons/araba.png'
        },
        {
            id: 'CepleScooter', link: '/Scooter', src: '/images/icons/scooter.png'
        },
        {
            id: 'CepleBnb', link: '/Bnb', src: '/images/icons/bnb.png'
        }];

    return (
        <div className="navbar-container w-full h-11 bg-brand-color pl-11 pr-11 flex items-center justify-center" >
            <nav className="container h-full flex items-center justify-between">
                <div className="w-auto h-full flex items-center justify-center">
                    {nav.map((value, index) => (
                        <Link to={value.link} key={index} className="px-5 h-full transition-all ease-in-out delay-75 hover:rounded-tr-lg hover:rounded-tl-lg hover:bg-primary-brand-color flex items-center justify-center mr-2 last:mr-0">
                            <img
                                className="w-full h-5 object-cover"
                                src={value.src}
                                alt={value.id}
                            />
                        </Link>
                    ))}
                </div>
                <div className="w-auto h-full flex items-center justify-center">
                    <div className="pt-2 pb-2 pl-4 pr-3 h-full w-auto">
                        <button className="flex justify-center items-center">
                            <MdLanguage className="mr-2 text-white flex items-center justify-center" />{" "}
                            <span className="text-white">Türkçe(TR)</span>
                        </button>
                    </div>
                    <div className="pt-2 pb-2 pl-4 pr-3 h-full w-auto">
                        <button className="flex justify-center items-center">
                            <FaUserAlt className="mr-2 text-white flex items-center justify-center" />{" "}
                            <span className="text-white">Giriş yap</span>
                        </button>
                    </div>
                    <div className="pt-2 pb-2 pl-4 pr-3 h-full w-auto">
                        <button className="flex justify-center items-center">
                            <FaUserPlus className="mr-2 text-white flex items-center justify-center" />{" "}
                            <span className="text-white font-openSans">Kayıt ol</span>
                        </button>
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Navbar