import React from 'react'
import { useState } from 'react';

const Us = () => {

    const [para, setPara] = useState(true);

    function handleparam(){
        setPara(!para);
    };

  return(
    <div>
      <button onClick={handleparam}>param</button>

      {para &&(
        <>
      <p>This sets an event handler for the button's onClick event. When the button is clicked, the setIsOpen function is called with the opposite of the current</p>
      </>
    )
}
    </div>
  )
}

export default Us
