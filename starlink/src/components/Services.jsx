import React from 'react';
import home1 from '../media/home1.webp';
import home2 from '../media/home2.webp';
import home3 from '../media/home3.jpg';

export default function Services() {
  return (
    <>
    <div className='bg-black'>
    <div className='w-[95%] m-auto lg:flex justify-between pt-14 '>
      <div className=' lg:w-[33%] w-full  relative inline-block overflow-hidden'>
        <img src={home1} alt="not found" className='w-full h-full hover:scale-110 transition-all duration-700 ' />
        <div className='absolute top-5 left-5'>
          <h1 className='text-4xl text-white font-semibold'>
            RESIDENTIAL
          </h1>
          <h2 className='text-2xl text-white hover:font-semibold transition-all'>
            Connect to home
          </h2>
        </div>
      </div>
      <div className=' lg:w-[33%] w-full   relative inline-block overflow-hidden'>
        <img src={home2} alt="not found" className='w-full h-full hover:scale-110 transition-all duration-700' />
        <div className='absolute top-5 left-5'>
          <h1 className='text-4xl text-white font-semibold'>
            ROAM
          </h1>
          <h2 className='text-2xl text-white hover:font-semibold transition-all'>
            Connect on the go
          </h2>
        </div>
      </div>
      <div className=' lg:w-[33%] w-full  relative inline-block overflow-hidden'>
        <img src={home3} alt="not found" className='w-full h-full hover:scale-110 transition-all duration-700' />
        <div className='absolute top-5 left-5'>
          <h1 className='text-4xl text-white font-semibold'>
            BOATS
          </h1>
          <h2 className='text-2xl text-white hover:font-semibold transition-all     '>
            Connect on the water
          </h2>
        </div>
      </div>
    </div>

    <div className='pb-36 px-2'>
        <h1 className='mt-10 text-3xl lg:text-5xl text-white text-center font-semibold'>STARLINK FOR BUSINESSES AND POWER USERS</h1>
        <div className='text-center mt-4 text-white text-base lg:text-lg hover:bg-black transition-all w-[80%] py-2 m-auto font-semibold flex flex-col lg:flex-row justify-center gap-1 items-center'>
            RELIABLE HIGH-SPEED INTERNET DESIGNED TO KEEP BUSINESSES CONNECTED.
            <div className='hover:bg-gray-800 p-1 rounded-sm transition-all flex items-center'>
            <span className='text-xs mr-1 font-bold mt-3 lg:mt-0'> LEARN MORE</span>
            <i className='fa-solid ml-1 mt-3 lg:mt-0 lg:ml-0 fa-greater-than text-sm text-white'></i>
            </div>
        </div> 
    </div>

    </div>
    </>
    
  );
}