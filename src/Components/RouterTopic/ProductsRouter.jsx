import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ProductsRouter = () => {
  return (
    <div>
      <h1>product's</h1>
      <input type='search' placeholder='search product' />
      <nav>
        <Link to='features'> FeaturedProducts </Link>
        <Link to='new'> NewProducts </Link>

      </nav>
      <Outlet /> 
    </div>
  )
}

export default ProductsRouter
