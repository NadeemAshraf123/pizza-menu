import React from 'react'
import { NavLink } from 'react-router-dom'
import './Routers.css'

const NavbarRouter = () => {
  return (
        <nav>
    <NavLink exact to='/' activeclassName='isactive'> Home </NavLink>
    <NavLink to='/about' activeclassName='isactive'> About </NavLink>
    <NavLink to='/ordersummary' activeclassName='isactive'> OrderSummary </NavLink>
    <NavLink to='/logopage' activeclassName='isactive'> LogoPage </NavLink>
    <NavLink to='/products' activeclassName='isactive'> ProductsRouter </NavLink>
    <NavLink to='/enigmatix' activeclassName='isactive'> Enigmatix </NavLink>

        </nav>
  )
}

export default NavbarRouter 

