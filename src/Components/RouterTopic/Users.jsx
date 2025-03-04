import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link , useSearchParams} from 'react-router-dom' 


const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const styledcomponent = {
        padding: '30px',
    };
  return (
    <div>

      <h2>User 1</h2>
      <h2>User 2</h2>  
      <h2>User 3</h2>
      <button onClick={()=>setSearchParams({filter:'active'})}>Active Users</button>
      <button onClick={()=>setSearchParams({})}>Reset Filter</button>



      

    </div>
  )
}

export default Users
