import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import BlogHome from './BlogHome'
import BlogDetails from './BlogDetails'
import BlogNavbar from './BlogNavbar'
import Profile from './Profile'


const ParentRouter = () => {
    return (
    
        <BrowserRouter>  
            {/* <h1> Parent Router </h1> */}
            <BlogNavbar />
            <Routes>
                <Route path='/' element={ <BlogHome /> } />
                <Route path='/bloghome' element={ <BlogHome /> } />
                <Route path='/blogdetails/:id' element={<BlogDetails /> } />
                <Route path='/profile' element={ <Profile /> } /> 
            </Routes>
        </BrowserRouter>
    )
}

export default ParentRouter
