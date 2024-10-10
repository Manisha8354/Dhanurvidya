import React from 'react'
import Navbar from './components/Navbar'
// import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar2 from './components/Navbar2'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Navbar2/>
     <Outlet/>
      <Footer/>
    </div>
  )
}
