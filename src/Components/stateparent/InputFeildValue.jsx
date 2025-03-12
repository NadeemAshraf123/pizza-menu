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
    <div className='app'>
        <h1> How to get value from input feild</h1>
        <ul className='un-order-list'>
            <li> get using onchange event handler </li>
            <li > on button clcik </li>
        </ul>
        <input type='text' placeholder='enter your text...' onChange={getinput} />
        <button onClick={update}> update </button>
            <li>
                {data}
            </li>

        <li> {userdata ?  {data}  : null } </li> 
    </div> 
  ) 
} 

export default InputFieldValue 
