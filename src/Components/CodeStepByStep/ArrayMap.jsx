import React from 'react'

const ArrayMap = () => {

    const students = ['Anil', "Sidhu", "Sam", "Peter"];

  return (
    <div className='container text-center bg-light mb-4'>
      <h3 className='fw-bold text-decoration-underline'>Map on Array</h3>
      <ul className='list-unstyled'>

        {students.map((item, index) => (
          <li key={index} > {item}  </li>
        ))}

      </ul>
    </div>
  )
}

export default ArrayMap
