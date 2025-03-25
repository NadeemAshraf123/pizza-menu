import React from 'react'
import { useRef } from 'react';

const UncontrolledComponent = () => {
  const inputref1 = useRef(null);
  const inputref2 = useRef(null);

  function submitForm(e){
    e.preventDefault();
    console.warn("input ref 1 value :", inputref1.current.value);
    console.warn("input ref 2 value :", inputref1.current.value);
    console.warn("input ref 2 value :", inputref2.current.value);


  };

  return (
    <div>
        <h1 style={{textAlign:'center'}}>Uncontrolled Component</h1>
        <form className='App' onSubmit={submitForm}>
            <input ref={inputref1} type='text' /> <br /> <br />
            <input ref={inputref2} type='text' /> <br /> <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UncontrolledComponent
