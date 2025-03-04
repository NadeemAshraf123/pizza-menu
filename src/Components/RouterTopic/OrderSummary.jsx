import React from 'react'
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {

  const handlenavigate = useNavigate();

  return (

    <div>

      <h1>Order Summary page </h1>

      <button onClick={()=>handlenavigate(-1)} style={{margin:'20px' , backgroundColor:'lightblue'}} > go back to previous page</button>
      <button onClick={()=>handlenavigate(1)}  style={{margin:'20px' , backgroundColor:'lightblue'}} > go forward next page  </button>

    </div>
  )
};

export default OrderSummary
