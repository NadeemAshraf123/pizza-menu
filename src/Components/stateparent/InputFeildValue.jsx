import React from 'react'  

const InputFieldValue = () => { 
    const [data, setData] = React.useState(null); 
    const [userdata, setUserData] = React.useState(false); 


    function getinput(e){
        
        setData(e.target.value);
    }
function update(){

    setUserData(true);
}

  return (
    <div className='container bg-danger'>
        <h1> How to get value from input feild</h1>
        <ul >
            <li className='text-decoration-none'> get useing them</li>
            <li > on button click </li>
        </ul>
        <input className='form-control mb-3' value='' type='text' placeholder='enter your text...' onChange={getinput} />
        <button className="btn btn-primary" onClick={update}> update </button>
        <ul>            <li>
                {data}
            </li>

        <li> {userdata ?  data  : null } </li> 
        </ul>

    </div> 
  ) 
} 

export default InputFieldValue 
