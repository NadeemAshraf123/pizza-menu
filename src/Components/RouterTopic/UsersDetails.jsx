import React from 'react'
// import { Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const UsersDetails = () => {
    const {usersId} = useParams();
  return (
    <div>

      <h1> Users Detail's </h1>
      <p> user's param: {usersId} </p>

      {/* <h2> User Detail's 1 </h2>
      <h2> User Detail's 2 </h2>
      <h2> User Detail's 3 </h2> */}


    </div>
  )
}

export default UsersDetails
