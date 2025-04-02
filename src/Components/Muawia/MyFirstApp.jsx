import React from 'react'
import { useState } from 'react'
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
import './Sidebar.css';
import { FiMenu } from "react-icons/fi";

const MyFirstApp = () => {

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div style={{ backgroundColor: "#072F60", height: "100vh"}}>
        <BrowserRouter>
          <Navbar />

          <button className='menu-button' onClick={() => setSidebarOpen(!isSidebarOpen)} 
            style={{
              display: 'none', // Hidden by default
              position: 'absolute',
              top: '10px',
              right: '20px',
              background: 'white',
              border: 'none',
              padding: '10px 15px',
              borderRadius: '5px',
              cursor: 'pointer',
              zIndex: 1000
            }} 
            >
              <FiMenu size={24} />
          </button>

          <div style={{ display: 'flex', height: `calc(100vh - 50px)`, backgroundColor: 'white', borderTopRightRadius:'40px', borderTopLeftRadius:'40px',  overflow: "hidden"}}>

            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}

             style={{ width: "180px", 
              position: 'fixed',
                top: 0,
                right: isSidebarOpen ? '0' : '-180px', // ✅ Slide-in effect
                height: "100vh",
                backgroundColor: "#3795D3",
                transition: "right 0.3s ease-in-out",
                zIndex: 999
              }}
              >

              <Sidebar />
            </div>
            <div style={{ flex: 1, padding: "20px",marginLeft:'25px', backgroundColor: "white",}}>
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

      {/* ✅ Close Sidebar When Clicking Outside */}
      {isSidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)} 
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            zIndex: 998
          }}
        />
      )}

    </>
  )
}

export default MyFirstApp
