import React from 'react'

const ScooterCards = () => {
    return (
        <div className='container w-full h-min-[400px] mt-36 font-poppins'>
            <div className='grid grid-cols-3 grid-rows-1 gap-6'>
                <div className='col-span-1 row-span-1 flex items-center justify-center flex-col'>
                    <img src='/images/scooter/ucretsizindir.png' className='w-32 h-32 object-cover' />
                    <h1 className='font-semibold text-lg my-4'>Ceple uygulamasını ücretsiz indir</h1>
                    <p className='text-sm'>Saniyeler içinde kaydol</p>
                </div>
                <div className='col-span-1 row-span-1 flex items-center justify-center flex-col'>
                    <img src='/images/scooter/uygulama.png' className='w-32 h-32 object-cover' />
                    <h1 className='font-semibold text-lg my-4'>Ceple uygulamasını ücretsiz indir</h1>
                    <p className='text-sm'>Saniyeler içinde kaydol</p>
                </div>
                <div className='col-span-1 row-span-1 flex items-center justify-center flex-col'>
                    <img src='/images/scooter/kilidac.png' className='w-32 h-32 object-cover' />
                    <h1 className='font-semibold text-lg my-4'>Ceple uygulamasını ücretsiz indir</h1>
                    <p className='text-sm'>Saniyeler içinde kaydol</p>
                </div>
            </div>
        </div>
    )
}

export default ScooterCards