import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './Footer'
import { MainComponent } from './MainComponent'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import Home from './Home'
import About from './About'
import Services from './Services'
import Clients from './Clients'


const MyFirstApp = () => {
  return (
    <>
    <div style={{backgroundColor:"#072F60"}}>
      <BrowserRouter>
          <Navbar />
          
        <div style={{backgroundColor:"white"}}>
          <Sidebar />
        </div>

        <div className="p-3 ">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/clients' element={<Clients />} />
          </Routes>
        </div>

        <Footer />

      </BrowserRouter>
      </div>
    </>
  )
}

export default MyFirstApp
