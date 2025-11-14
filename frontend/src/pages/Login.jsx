import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncloginUser } from "../store/actions/userAction";
import { nanoid } from "@reduxjs/toolkit";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = (user) => {
    user.isAdmin = true;
    user.id = nanoid();

    dispatch(asyncloginUser(user));
    reset();
    navigate("/");
  };

  return (
    <div className="bg-[#222831]  min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="w-full max-w-md bg-[#393E46] p-6 rounded-2xl shadow-md flex flex-col gap-4"
      >
        <h2 className="text-[#00ADB5] text-2xl font-bold text-center mb-4">
          Login
        </h2>
        <input
          {...register("username")}
          type="text"
          placeholder="Username"
          className="outline-none border-b-2 border-[#00ADB5] bg-transparent text-[#EEEEEE] placeholder-[#EEEEEE] py-2"
        />
        <input
          {...register("email")}
          type="text"
          placeholder="Email"
          className="outline-none border-b-2 border-[#00ADB5] bg-transparent text-[#EEEEEE] placeholder-[#EEEEEE] py-2"
        />

        <button
          type="submit"
          className="mt-4 bg-[#00ADB5] text-[#222831] font-bold py-2 rounded-xl hover:bg-[#00bfcf] transition-colors"
        >
          Login
        </button>

        <p className="text-[#EEEEEE] text-center mt-2">
          Don't have an account?{" "}
          <Link className="text-[#00ADB5] hover:text-[#00bfcf]" to="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
