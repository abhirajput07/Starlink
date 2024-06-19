import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Navbar2 from './Navbar2'

export default function SignIn() {

  return (
    <>
    <Navbar2/>
        <div className="relative min-h-screen bg-black text-white">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-gray-900 backdrop-blur-lg bg-opacity-30 py-16 px-10 rounded-sm space-y-8 border ">
                <h1 className='text-4xl font-semibold'>SIGN IN</h1>
                <input type="email" placeholder='Email' className='w-full pl-5 pr-10 py-4  bg-transparent border-[1px] border-gray-400 hover:border-white focus:outline-none focus:border-white focus:border-2 text-white rounded-md'  />
                <input type="password" placeholder='Password' className='w-full pl-5 pr-10 py-4  bg-transparent border-[1px] border-gray-400 hover:border-white focus:outline-none focus:border-white focus:border-2 text-white rounded-md '/>
                <div>
                    <a href="" className='hover:border-b-2 border-white '>Forget Password</a>
                </div>
                <button type='submit' className='text-center w-full bg-gray-200 text-gray-900 py-1 rounded-md cursor-pointer' >Sign In</button>
            </div>
        </div>
    </>
  )
}
