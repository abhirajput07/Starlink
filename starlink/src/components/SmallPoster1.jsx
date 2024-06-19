import React from 'react'
import video from '../media/video2.mp4'

export default function SmallPoster1() {
  return (
    <>
      <div className='bg-black lg:flex justify-center items-center gap-5 h-[80vh] px-4 lg:px-20' > 
        <div className='basis-[90%]'>
        <video src={video}  autoPlay loop muted playsInline className="w-full h-auto rounded-lg border-1 border-gray-200 " ></video>
        </div>
        <div className='basis-[90%] text-white p-2 mt-6 lg:mt-0 lg:p-10 '>
          <h1 className='text-white text-3xl font-bold pb-6'>GET ONLINE IN MINUTES</h1>
          <p className='mb-10'>Set up Starlink with just two steps. Instructions work in either order:</p>

          <h1 className='text-white text-xl lg:text-3xl font-bold px-2 py-1 mb-2 border-l border-gray-500'> 
            1 PLUG IT IN
          </h1>
          <h1 className='text-white text-xl lg:text-3xl font-bold px-2 py-1 mb-10 border-l border-gray-500'>
            2 POINT AT SKY
          </h1>

          <p>Starlink requires an unobstructed view of the sky. Download the Starlink app to determine your best install location.</p>
          
          <div className='flex justify-start items-center gap-2'>
            
            <p className='cursor-pointer text-center mt-4 text-white text-xs hover:bg-gray-900 transition-all py-2 px-2 rounded-sm font-semibold' >
            DOWNLOAD FOR ANDROID<i className=" fa-solid fa-greater-than ml-2 "></i>
            </p>
            <p className='cursor-pointer text-center mt-4 text-white text-xs hover:bg-gray-900 transition-all py-2 px-2 rounded-sm font-semibold' >
            DOWNLOAD FOR IOS<i className=" fa-solid fa-greater-than ml-2 "></i>
            </p>
          </div>
        </div>
    </div>
  
    </>
  )
}
