import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export const Navbar = () => {

  return(
    <>
    <div style={{backgroundColor:'#3795D3',color:'white', borderBottomLeftRadius:'30px',borderBottomRightRadius:'30px', padding:'16px',}}>
        <h1 className='text-center m-0'>Company Title Here</h1>
    </div>
    <p style={{backgroundColor:"#072F60", color:'white', padding:'20px', textAlign:'center', fontSize:'20px'}}>Tagline about your company</p>
    </>
  )
};