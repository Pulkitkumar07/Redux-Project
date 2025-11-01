import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux"
import {asyncloginUser } from "../store/actions/userAction"


const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const loginHandler = (user) => {
    
    dispatch(asyncloginUser(user))
    reset();
  }
  return (
    <form onSubmit={handleSubmit(loginHandler)}
      className=' w-1/2 flex flex-col justify-center mt-10 p-10 items-center' >
      <input
        {...register("username")}
        className='outline-0 border-b-2 text-2xl'
        type="text"
        placeholder='Username'
      />
      <input
        {...register("email")}
        className='outline-0 border-b-2 text-2xl'
        type="text"
        placeholder='Email'
      />


      <button className='mt-10 border-2 p-5 rounded-2xl ' >Login user</button>
      <p >Don't have an account ? <Link className='text-red-400' to="/register">Register</Link></p>


    </form>

  );
}

export default Login


