import React, {useState} from 'react'

const Hook1 = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('red');

    const handlecolor =  () => {
        setColor('green');
    }

  return (
    <div className ='container text-center mb-4 bg-light'>
        <h2 className='mb-2 fw-bold'>Use State Hook</h2>
        <h3 className='mb-2'> {count} </h3>
        <button className='btn btn-primary' onClick={()=>setCount(count + 1)}>click</button>
        <h3 style={{color:color}}>Text-color {color} </h3>
        <button className='btn btn-primary' onClick={handlecolor}>click</button>
    </div>
  )
}

export default Hook1
