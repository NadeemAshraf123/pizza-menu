import React from 'react'
import style from './Custom.module.css'

const ComponentStyle = () => {
  return (
    <div>
      <h1 className='primary'> style type 1 in React js  </h1>
      <h2 style={{color:'red', backgroundColor:'black'}}> Style type 2 in React js </h2>
      <h1 className={style.success}> style type 3 in React js  </h1>



    </div>
  )
}

export default ComponentStyle
