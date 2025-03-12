import React, { useState } from 'react'
import { useAuth } from './Auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [user, setUser]= useState(''); 
    const auth = useAuth();
    const navigate = useNavigate();
    const handlelogin = () => {
        auth.login(user);
        navigate('/profile');
    }
  return (
    <div>
        <label>
            username: <input type='text' onChange={(e)=>setUser(e.target.value)} />
        </label>
        <button onClick={handlelogin}>login</button>
    </div>
  )}
export default Login
