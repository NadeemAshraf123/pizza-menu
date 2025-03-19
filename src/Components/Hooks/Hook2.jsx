import React, { useRef } from 'react'

const Hook2 = () => {

    const ref1 = useRef(null);

  return (
    <div className='container mb-4 text-center bg-light'>
        <h2 className='fw-bold'>useRef hook</h2>
        <input className='fw-bold ' ref={ref1}
        type='text'
        placeholder='enter text....'
        />
        <button className='btn btn-success' onClick={()=>ref1.current.focus()}>use-ref</button>

      
    </div>
  )
}

export default Hook2
