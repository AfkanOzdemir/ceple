import React from 'react'
import SMap from '../components/Scooter/SMap'
import ScooterCards from '../components/Scooter/ScooterCards'
const Scooter = () => {
  return (
    <div>
      <SMap />
      <div className='flex items-center justify-center w-full h-auto'>
        <ScooterCards />
      </div>
    </div>
  )
}

export default Scooter