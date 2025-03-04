import React, { useState } from 'react'

const UpdateState = () => {
  const [firstname, setFirstName] = useState('');
    const [lastename, setLasteName] = useState('');
    const[isremove, setIsRemove] = useState(true);

    function handleremove(){
      setIsRemove(!isremove);
    }

  return (
    <div>
    
      {isremove && (
        <>
      <p>{firstname} ---  {lastename}</p>
    </>

    )
    }
    <input type="text" onChange={(e)=>{setFirstName(e.target.value)}}/>
    <input type="text" onChange={(e)=>{setLasteName(e.target.value)}}/>
      <button onClick={handleremove}>remove</button>

    </div>
  )
}

export default UpdateState


