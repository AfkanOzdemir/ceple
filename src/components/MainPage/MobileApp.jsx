import React from 'react'

const MobileApp = () => {
    return (
        <div className='font-poppins overflow-hidden relative top-0 left-0 container min-h-[324px] bg-primary-brand-color rounded-lg mt-36 place-self-center flex items-center justify-center p-10'>
            <div className='w-1/2 h-full flex items-center justify-center flex-col pr-10'>
                <h4 className='text-white text-xl mb-4 w-full h-full font-semibold'>
                    Ceple Uygulaması
                </h4>
                <p className='text-white w-full h-full'>
                    Ceple uygulamasını indirin, kampanyalardan ve fırsatlardan anında haberdar olun.
                </p>
                <div className='w-full h-24 flex items-center justify-start space-x-5'>
                    <a href="">
                        <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
                    </a>
                    <a href="">
                        <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
                    </a>
                    <a href="">
                        <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
                    </a>

                </div>
            </div>
            <div className='w-1/2 h-full flex items-center justify-center mt-4'>
                <img className='w-1/2 h-auto object-cover absolute -bottom-10 right-5' src='/images/app.png' alt='ceple-app' />
            </div>
        </div>
    )
}

export default MobileApp