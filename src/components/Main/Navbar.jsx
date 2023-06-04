import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdLanguage } from 'react-icons/md';
import { FaUserAlt, FaUserPlus } from 'react-icons/fa';

const Navbar = () => {

    const nav = [
        {
            id: 'rentGO',
            link: '/',
            src: '/images/icons/logo.png',
        },
        {
            id: 'Araç',
            link: '/Araba',
            src: '/images/icons/araba.png',
        },
        {
            id: 'Scooter',
            link: '/Scooter',
            src: '/images/icons/scooter.png',
        },
        {
            id: 'Ev',
            link: '/Bnb',
            src: '/images/icons/bnb.png',
        },
    ];


    return (
        <div className="w-full h-auto flex items-center justify-center fixed z-50">
            <div className="container h-16 bg-brand-color pl-11 pr-11 rounded-b-lg flex items-center justify-center">
                <nav className="container h-full flex items-center justify-center">
                    <div className="w-auto h-10 flex items-center justify-center">
                        {nav.map((value, index) => (
                            <Link
                                to={value.link}
                                key={index}
                                className="px-5 h-full transition-all ease-in-out delay-75 hover:rounded-lg hover:bg-primary-brand-color flex items-center justify-center mr-2 last:mr-0"
                            >
                                <img
                                    className="w-full h-4 object-contain"
                                    src={value.src}
                                    alt={value.id}
                                />
                            </Link>
                        ))}
                    </div>
                </nav>
            </div >
        </div >
    );
};

export default Navbar;