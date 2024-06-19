import React from 'react'
import hello from '../media/sm-poster2.webp'

export default function SmallPoster2() {
  return (
  <>
    <div className='bg-black flex flex-col pt-[70%] lg:pt-0 lg:flex-row justify-center items-center p-6 gap-10' > 
        <div className='basis-[45%] mt-8 lg:mt-0'>
            <h1 className='lg:text-4xl text-2xl font-bold text-white leading-tight lg:ml-10'>NO CONTRACTS</h1>
            <p className='text-white text-[16px] mt-4  lg:ml-10  font-normal'>Long term contracts prevent both you and Starlink from making sensible changes when necessary.</p>
            <p className='text-white text-[16px] mt-4  lg:ml-10  font-normal'>With Starlink, it is a fair deal both ways. Starlink can adjust terms and pricing as needed, and you can cancel at any time, for any reason.</p>
        </div>
        <div className='basis-[50%]'>
            <img src={hello} alt="" className='w-[90%] my-10' />
        </div>
    </div>
  </>
   
  )
}
