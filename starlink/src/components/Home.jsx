import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import Poster1 from './Poster1'
import Poster2 from './Poster2'
import Services from './Services'
import Footer from './Footer'
import SmallPoster2 from './SmallPoster2'
import SmallPoster1 from './SmallPoster1'
import SignIn from './SignIn'
    
    export default function Home() {
      return (
        <>
        <Banner/>
        <Services/>
        <Poster1/>
        <SmallPoster1/>
        <SmallPoster2/>
        <Poster2/>
      </>
  
      )
    }
    