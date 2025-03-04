import React, { useState } from 'react'
import './DateCounter.css'

const DateCounter = () => {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);


    const date = new Date();
    date.setDate(date.getDate() + count);
  
  return (
    <div className='date-counter'>
      <div className='steps'>
        <button onClick={()=> setStep(step + 1)}>increase</button>
        <p>Step= {step}</p>
        <button onClick={() => setStep(step - 1)}>decrease</button>
        </div>

        <div className='counter'>
        <button onClick={()=> setCount(count + step)}>increase</button>
        <p>Count= {count}</p>
        <button onClick={() => setCount(count - step)}>decrease</button>
        </div>

        <p>
          <span>

            {count === 0 
            ? "Today is " 
            : count > 0 
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
            
            </span>
          <span> {date.toDateString()} </span>
          </p>
    </div>
  )
}

export default DateCounter
