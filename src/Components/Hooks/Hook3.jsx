import React, { useState, useRef, useEffect } from 'react'

const Hook3 = () => {

    const [count, setCount] = useState(0);
    const PreviousCount = useRef(0);

    useEffect(()=>{
        PreviousCount.current = count;
    }, [count]);

  return (
    <div className='container bg-light text-center mb-4' >
        <h3 className='fw-bold'>Track Previous State</h3>
        <p className='fw-bold'>Current Count: {count}</p>
        <p className='fw-bold'>Previous Count: {PreviousCount.current}</p>
        <button className='btn btn-danger' onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Hook3
