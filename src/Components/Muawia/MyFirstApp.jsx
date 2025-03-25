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
import ContactUs from './ContactUs'

const MyFirstApp = () => {
  return (
    <>
    <div style={{backgroundColor:"#072F60", height:"100vh"}}>
      <BrowserRouter>
          <Navbar />
          
        <div style={{display:'flex',height:'calc(100vh - 50px)', backgroundColor:"white"}}>

          <div  style={{ width: "200px", backgroundColor: "white" }}>
          <Sidebar />

          </div>

        <div  style={{ flex: 1, padding: "20px", backgroundColor: "white" }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/clients' element={<Clients />} />
            <Route path='/contact' element={<ContactUs />} />
          </Routes>
        </div>
        </div>

        <Footer />

      </BrowserRouter>
      </div>
    </>
  )
}

export default MyFirstApp
