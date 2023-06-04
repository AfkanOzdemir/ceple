import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="bg-brand-color font-poppins text-white clip-your-needful-style">
            <div className="flex items-start justify-between col col-span-4 mx-auto pt-20 container py-4 pb-16 mt-36">
                <div className="fc1 flex items-center justify-center flex-col h-full ">
                    <p className="text-start font-openSans text-brand-color text-lg w-full mb-3">
                        {"rentGO'yu keşfedin"}
                    </p>
                    <a href="#" className="mb-3">
                        <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"></img>
                    </a>
                    <a href="#" className="mb-3">
                        <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"></img>
                    </a>
                    <a href="#" className="mb-3">
                        <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"></img>
                    </a>
                </div>
                <div className="fc2 flex items-center justify-center flex-col h-full ">
                    <p className="text-start text-brand-color text-lg w-full mb-3">
                        {"rentGO'yu keşfedin"}
                    </p>
                    <a
                        href="#"
                        className="mb-4 text-start w-full  text-sm"
                    >
                        Hakkımızda
                    </a>
                    <a
                        href="#"
                        className="mb-4 text-start w-full  text-sm"
                    >
                        Kariyer
                    </a>
                    <a
                        href="#"
                        className="mb-4 text-start w-full  text-sm"
                    >
                        Teknoloji Kariyerleri
                    </a>
                    <a
                        href="#"
                        className="mb-4 text-start w-full   text-sm"
                    >
                        İletişim
                    </a>
                    <a
                        href="#"
                        className="mb-4 text-start w-full  text-sm"
                    >
                        Sosyal Sorumluluk Projeleri
                    </a>
                </div>
                <div className="fc3 flex items-center justify-center flex-col h-full ">
                    <p className="text-start text-brand-color text-lg w-full mb-3">
                        Yardıma mı ihtiyacınız var?
                    </p>
                    <a
                        href="#"
                        className="mb-4 text-start w-full text-sm"
                    >
                        Sıkça Sorulan Sorular
                    </a>
                    <a
                        href="#"
                        className="mb-4 text-start w-full text-sm"
                    >
                        Kişisel Verilerin Korunması
                    </a>
                    <a
                        href="#"
                        className="mb-4 text-start w-full text-sm"
                    >
                        Gizlilik Politikası
                    </a>
                    <a
                        href="#"
                        className="mb-4 text-start w-full text-sm"
                    >
                        Kullanım Koşulları
                    </a>
                    <a
                        href="#"
                        className="mb-4 text-start w-full text-sm"
                    >
                        Çerez Politikası
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Footer;
