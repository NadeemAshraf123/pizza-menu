import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import BlogHome from './BlogHome'
import BlogDetails from './BlogDetails'
import BlogNavbar from './BlogNavbar'
import Profile from './Profile'
import {useAuth } from './Auth'
import Login from './Login'


const ParentRouter = () => {
    const auth = useAuth();

    return (
        <BrowserRouter>  
            <BlogNavbar />
            <Routes>
                <Route path='/' element={ <BlogHome /> } />
                <Route path='/bloghome' element={ <BlogHome /> } />
                <Route path='/blogdetails/:id' element={<BlogDetails /> } />
                { auth.user ? (
                <Route path='/profile' element={ <Profile /> } /> 
            ) : (
                <Route path='/login' element={ <Login /> } /> 
            )}
            </Routes>
        </BrowserRouter>
    )
}

export default ParentRouter
