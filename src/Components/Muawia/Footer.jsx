import React from 'react';

export const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Company Name | All Rights Reserved</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: 'black', 
  color: 'white',
  textAlign: 'center',
  padding: '15px 0',
  position: 'fixed',  /* Sticks the footer at the bottom */
  left: 0,
  bottom: 0,
  width: '100%',
  fontSize: '16px',
  boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.2)',
};
