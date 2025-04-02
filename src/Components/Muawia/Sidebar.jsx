import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../Assets/LogoImage.jpg'; 
import './Sidebar.css' 

export const Sidebar = () => { 
    return ( 
        <div className='main-div' >

            {/* Logo Container */}
            <div className='logo-container' >

                <img className='imag'    src={LogoImage} alt="logo"/>

            </div>

            {/* Links Container */}
            <div className='link-container'>

                <Link to="/" className='all-links'
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#072F60'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                    Home
                </Link>

                <Link to="/about" className='all-links'
                    
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#072F60'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                    About Us
                </Link>

                <Link to="/services" className='all-links'
                   
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#072F60'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                    Services
                </Link>

                <Link to="/clients" className='all-links'
                    
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#072F60'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                    Clients
                </Link>

                <Link to="/contact" className='all-links'
                   
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#072F60'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                    Contact
                </Link>
            </div>
        </div>
    )
};
