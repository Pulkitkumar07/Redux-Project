import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from "react-redux"
import { asynclogoutUser } from '../store/actions/userAction'
import { useDispatch } from "react-redux"
import { Form, Navigate, useFormAction, useNavigate } from 'react-router-dom'

const Nav = () => {
    const usedispatch = useDispatch()
    const Navigate = useNavigate();
    const { users } = useSelector((state) => state.userReducer)
    { users ? "logged in" : "waiting" }


    const LogoutHandler = () => {
        usedispatch(asynclogoutUser())
        Navigate("/")
    }

    return (
        <nav className='flex justify-center gap-3 items-center'>

            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/product"}>Products</NavLink>
            {users ?
                <>
                    <NavLink to={"/admin/create-product"}>Create Product</NavLink>
                    <button onClick={LogoutHandler}>Logout</button>
                </> :
                <>
                    <NavLink to={"/login"}>Login</NavLink>
                </>
            }





        </nav>
    )
}

export default Nav
