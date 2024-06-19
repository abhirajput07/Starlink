import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar2 from './components/Navbar2'
import Navbar from './components/Navbar'

function App() {
  return (
   <>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default App
