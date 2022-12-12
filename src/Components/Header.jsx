import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/expensiveProducts'>Expensive Products</Link>
    </header>
    )
}

export default Header
