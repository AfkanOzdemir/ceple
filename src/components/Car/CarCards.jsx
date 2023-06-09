import React from 'react'
import Fade from 'react-reveal/Fade';

const CarCards = () => {
    return (
        <div className='w-full h-auto flex items-center justify-center'>
            <div className='container w-full h-min-[400px] mt-36 font-poppins'>
                <div className='grid grid-cols-3 grid-rows-1 gap-6 text-center'>
                    <Fade left>
                        <div className='col-span-1 row-span-1 flex items-center justify-center flex-col'>
                            <img src='/images/cars/hosgeldin.png' className='w-32 h-32 object-cover' />
                            <h1 className='font-semibold text-lg my-4'>rentGO uygulamasına üye ol</h1>
                            <p className='text-sm'>Saniyeler içinde kaydol</p>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className='col-span-1 row-span-1 flex items-center justify-center flex-col'>
                            <img src='/images/cars/kirala.png' className='w-32 h-32 object-cover' />
                            <h1 className='font-semibold text-lg my-4'>Hemen kullan !</h1>
                            <p className='text-sm'>İstanbul ve İzmir’de binlerce aracımız kullanımına hazır</p>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className='col-span-1 row-span-1 flex items-center justify-center flex-col'>
                            <img src='/images/cars/anahtar.png' className='w-32 h-32 object-cover' />
                            <h1 className='font-semibold text-lg my-4'>Hızlı teslim et</h1>
                            <p className='text-sm'>Sürüş keyfin sona erdiğinde aracı teslim et</p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>

    )
}

export default CarCards