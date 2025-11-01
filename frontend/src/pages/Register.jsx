import { Form, Navigate, useFormAction, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid"
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {asyncRegisterUser} from '../store/actions/userAction'

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const Navigate=useNavigate();
  const dispatch = useDispatch();
  const RegisterHandler = (user) => {
    user.id = nanoid();
    user.isAdmin=false;
   dispatch(asyncRegisterUser(user))
   Navigate('/login')

  }
  return (
    <form onSubmit={handleSubmit(RegisterHandler)}
      className=' w-1/2 flex flex-col justify-center mt-10 p-10 items-center' >

      <input
        {...register("username")}
        className='outline-0 border-b-2 text-2xl'
        type="text"
        placeholder='username'
      />
      <input
        {...register("email")}
        className='outline-0 border-b-2 text-2xl'
        type="text"
        placeholder='email'
      />
        <input
       {...register("password")}
        className='outline-0 border-b-2 text-2xl'
        type="text"
        placeholder='password'
      />

      <button className='mt-10 border-2 p-5 rounded-2xl' >Register user</button>
      <p >Already have an account? <Link className='text-red-400' to="/login">Login</Link></p>


    </form>

  );
}

export default Register
