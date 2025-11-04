import { NavLink } from 'react-router-dom'
import { useSelector } from "react-redux"
import { Form, Navigate, useFormAction, useNavigate } from 'react-router-dom'

const Nav = () => {
   
    const { users } = useSelector((state) => state.userReducer)
    { users ? "logged in" : "waiting" }

    return (
        <nav className='flex justify-center gap-3 items-center'>

            <NavLink to={"/"}>Home</NavLink>
            
            {users ?
                <>
                {users&& users?.isAdmin &&(
                    <NavLink to={"/admin/create-product"}>Create Product</NavLink>)
                    }
                    <NavLink to={"/admin/user-profile"}> Profile</NavLink>
                   
                </> :
                <>
                    <NavLink to={"/login"}>Login</NavLink>
                </>
            }





        </nav>
    )
}

export default Nav
