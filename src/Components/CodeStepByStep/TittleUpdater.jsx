import React, { useEffect ,useState } from 'react'

const TittleUpdater = () => {
    var [count, setCount] = useState(0);

    useEffect( () => {
        document.title = `Count: ${count}`;


    }, [count]);

  return (
    <div className='container bg-light text-center mb-4'>
        <h1 className='text-center fw-bold ' >update title {count}</h1>
        <button className='btn btn-primary text-center' onClick={()=>setCount(count + 1)}>clickme</button>
      
    </div>
  )
}

export default TittleUpdater
