import react from 'react'
import { Link } from 'react-router-dom'
import LogoImage from '../../Assets/LogoImage.jpg';

export const Sidebar = () => {

    return (
        <div style={{
            backgroundColor: '#3795D3',
            marginLeft: '20px',
            paddingLeft: '30px',
            width: '150px',
            height: '350px',
            textAlign: 'center',
            borderBottomRightRadius: '15px',
            borderBottomLeftRadius: '15px',
            position: 'relative',

        }}>
            <div style={{
                backgroundColor: '#072F60',
                // paddingTop: '10px',
                // display: "flex",
                // justifyContent: 'center',
                // alignItems: 'center',
                // height: '100px',
                borderRadius: '50%',
                marginBottom: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100px',
            }} >
                <img style={{
                    // display: 'block',
                    // width: '80px',
                    // height: '80px',
                    // backgroundColor: '#072F60',
                    // borderRadius: '50%',
                    // objectFit: 'cover',
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '50%', 
                    objectFit: 'cover',

                }}
                    src={LogoImage} alt="logo"
                />
            </div>
            {/* <div style={{}}> */}
                <Link to='/' style={{ color: 'white', textDecoration: 'none', display: 'flex', marginBottom: '10px', paddingTop: '15px', }}>Home</Link>
                <Link to='/about' style={{ color: 'white', textDecoration: 'none', display: 'flex', marginBottom: '10px' }}>About Us</Link>
                <Link to='/services' style={{ color: 'white', textDecoration: 'none', display: 'flex', marginBottom: '10px' }}>Services</Link>
                <Link to='/client'>Clients</Link>

            {/* </div> */}
        </div>
    )
};

