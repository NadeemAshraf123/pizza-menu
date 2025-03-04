import React from 'react'

const NewProducts = () => {

    const styled = {
        backgroundColor: '#F0F8FF',
        color: '#6E288B',
        display: 'flex',
        alignItems: 'center',  // Corrected
        justifyContent: 'center',  // Corrected
        border: '2px solid black',
        height: '150px',
        width: '250px',
        position: 'absolute',  // Centering the box
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    };

  return (
    <div style={styled}>
        <p  > List of New Product's</p>

      
    </div>
  )
}

export default NewProducts
