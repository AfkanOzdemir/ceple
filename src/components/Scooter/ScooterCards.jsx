import React from 'react'
import Fade from 'react-reveal/Fade';
const ScooterCards = () => {
    return (
        <div className='container w-full h-min-[400px] mt-36 font-poppins'>
            <div className='grid grid-cols-3 grid-rows-1 gap-6'>
                <Fade left>
                    <div className='col-span-1 row-span-1 flex items-center justify-center flex-col'>
                        <img src='/images/scooter/ucretsizindir.png' className='w-32 h-32 object-cover' />
                        <h1 className='font-semibold text-lg my-4'>rentGO uygulamasını ücretsiz indir</h1>
                        <p className='text-sm'>Saniyeler içinde kaydol</p>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className='col-span-1 row-span-1 flex items-center justify-center flex-col'>
                        <img src='/images/scooter/uygulama.png' className='w-32 h-32 object-cover' />
                        <h1 className='font-semibold text-lg my-4'>Scooterın konumunu bul</h1>
                        <p className='text-sm'>Saatlerce scooter arama</p>
                    </div>
                </Fade>
                <Fade right>
                    <div className='col-span-1 row-span-1 flex items-center justify-center flex-col'>
                        <img src='/images/scooter/kilidac.png' className='w-32 h-32 object-cover' />
                        <h1 className='font-semibold text-lg my-4'>Hemen kirala</h1>
                        <p className='text-sm'>İstediğin yere güvenle ulaş</p>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default ScooterCards