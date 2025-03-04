import React, { useState } from 'react'
import './StateExample.css'

const StateExample = () => { 
    const [step, setStep] = useState(1); 
    const [isOpen, setIsOpen] = useState(true); 
    const [isDarkMode, setIsDarkMode] = useState(true); 
    

  const message = [ 
    "Learn React", 
     "Apply for jobs", 
    "Invest your new income", 
    
  ]; 
  function handlemode(){ 
    setIsDarkMode(!isDarkMode); 
    
  } 
  const styles = {   
    padding: "10px 20px", 
    fontSize: "16px", 
    backgroundColor: isDarkMode ? "#fff" : "#333", 
    color: isDarkMode ? "#333" : "#fff", 
    border: "none", 
    borderRadius: "5px", 
    cursor: "pointer", 
  }; 

  function handleprevious(){
    if(step > 1){
      setStep(step - 1);
      // handlecolor(step - 1);

    };
  };

  function handlenext(){
    if(step < 3){
      setStep(step + 1);
      // handlecolor(step + 1);

    };
  };

  // function handlecolor(currentcolor){
  //   const colors = ['red' , 'green', 'blue'];
  //   setColor(colors[ currentcolor  -  1 ]); 
  // };
  return (

    <div style={{styles}}>
   
      <button className='close' onClick={()=>setIsOpen(!isOpen)}>&times;</button>
      { isOpen && ( 
    <div className='steps'>
      <div className="numbers">
        <div className={step >= 1 ? 'active' : ''}>1</div>
          <div className={step >= 2 ? 'active' : ''}>2</div>
          <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
        

        <p className="message">Step {step}: {message[step - 1]}</p>

        <div className="buttons">
          <button style={{ backgroundColor: "#7950f2", color: "#fff"}}
          onClick={handleprevious}>
            previous
          </button>
          <button style={{ backgroundColor: "#7950f2", color: "#fff"}}
          onClick={handlenext}>
            Next
          </button>
      </div>
    </div>
      )
   }
  </div>
  )
}

export default StateExample

