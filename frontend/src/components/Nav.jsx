import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='flex justify-center gap-3 items-center'>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/product"}>Products</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
            
        </nav>
    )
}

export default Nav
