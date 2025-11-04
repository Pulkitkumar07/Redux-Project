import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asynclogoutUser } from "../../store/actions/userAction";
import { asyncupdateuser } from "../../store/actions/userAction";
import { asyncdeleteuser } from "../../store/actions/userAction";
const UserProfile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.userReducer);


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    });

    useEffect(() => {
        if (users) {
            reset({
                username: users.username || "",
                email: users.email || "",
                password: users.password || "",
            });
        }
    }, [users, reset]);

    const UpdateUserProfile = (user) => {
        dispatch(asyncupdateuser(users.id, user));
    };

    const DeleteHandler = () => {
        dispatch(asyncdeleteuser(users.id))
        navigate('/')
    }
    const LogoutHandler = () => {
        dispatch(asynclogoutUser())
        navigate('/')
    }

    return (
        <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center bg-gray-100 text-gray-900 p-8 gap-10">

            <div className="flex flex-col items-center  gap-10 bg-white rounded-2xl shadow-xl border border-gray-200 w-full md:w-1/2 p-10 h-[70vh] transition-all duration-300 hover:shadow-2xl">
                <div className="flex flex-col items-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="User Avatar"
                        className="w-32 h-32 rounded-full border-4 border-blue-500 mb-5 object-cover shadow-md hover:scale-105 transition-transform duration-300"
                    />
                    <h2 className="text-2xl font-semibold mb-1 text-gray-800">
                        {users?.username || "Guest User"}
                    </h2>
                    <p className="text-gray-500 mb-1">{users?.email || "user@example.com"}</p>
                    <p className="text-sm text-gray-400 italic">Member since 2024</p>
                </div>

                
                <div className="flex flex-col items-center gap-3  w-full">

                    <button
                        onClick={DeleteHandler}
                        type="button"
                        className="w-3/4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 
                   font-semibold rounded-lg shadow-sm hover:scale-105 
                   hover:shadow-yellow-400/40 transition-all duration-300"
                    >
                        🚪 Logout
                    </button>

                    <button
                        onClick={LogoutHandler}
                        type="button"
                        className="w-3/4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white 
                   font-semibold rounded-lg shadow-sm hover:scale-105 
                   hover:shadow-red-400/40 active:scale-95 transition-all duration-300"
                    >
                        🗑️ Delete Account
                    </button>
                </div>
            </div>

            {/* ✏️ Right Side - Update Form */}
            <form
                onSubmit={handleSubmit(UpdateUserProfile)}
                className="bg-white rounded-2xl shadow-xl border border-gray-200 w-full md:w-1/2 p-10 h-[70vh] flex flex-col justify-center hover:shadow-2xl transition-all duration-300"
            >
                <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
                    Update Profile
                </h2>

                {/* Username */}
                <div className="mb-5">
                    <label className="block text-gray-600 mb-2 font-medium">Username</label>
                    <input
                        {...register("username", { required: "Username is required" })}
                        className="w-full p-3 rounded-lg bg-gray-50 text-gray-900 border border-gray-300 focus:outline-none focus:border-blue-500"
                        placeholder="Enter your username"
                    />
                    {errors.username && (
                        <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                    )}
                </div>

                {/* Email */}
                <div className="mb-5">
                    <label className="block text-gray-600 mb-2 font-medium">Email</label>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                        })}
                        className="w-full p-3 rounded-lg bg-gray-50 text-gray-900 border border-gray-300 focus:outline-none focus:border-blue-500"
                        placeholder="Enter your email"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                {/* Password */}
                <div className="mb-6">
                    <label className="block text-gray-600 mb-2 font-medium">Password</label>
                    <input
                        type="password"
                        {...register("password", { required: "Password is required" })}
                        placeholder="Enter your password"
                        className="w-full p-3 rounded-lg bg-gray-50 text-gray-900 border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-blue-400/40"
                >
                    💾 Save Changes
                </button>
            </form>
        </div>

    );
};

export default UserProfile;
