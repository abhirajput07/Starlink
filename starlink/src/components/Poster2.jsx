import React from 'react'

export default function Poster2() {
  return (
    <>
     <section className='lg:flex poster2-bg h-[100vh] bg-no-repeat bg-cover'> 
     <div className='lg:w-[40%] w-[70%]'>

        <h1 className='lg:text-4xl text-2xl font-bold text-white leading-tight ml-10 pt-24 '>ENGINEERED BY SPACEX</h1>
        <p className='text-white text-sm mt-4  ml-10  font-normal'>As the world's leading provider of launch services – and the only provider with an orbital class reusable rocket – SpaceX has deep experience with both spacecraft and on-orbit operations.</p>
        <button className='text-[11px] text-white font-bold border py-2 px-3 mt-4  ml-10 rounded-md hover:bg-gray-800 transition-all'>LEARN MORE</button>
     </div>
     </section>
    </>
    )
}
