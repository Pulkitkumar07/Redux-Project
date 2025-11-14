import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asynclogoutUser, asyncupdateuser, asyncdeleteuser } from "../../store/actions/userAction";

const UserProfile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.userReducer);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
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
        dispatch(asyncdeleteuser(users.id));
        navigate('/');
    };

    const LogoutHandler = () => {
        dispatch(asynclogoutUser());
        navigate('/');
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-6 bg-[#222831] text-[#EEEEEE] px-4 py-10">

            {/* Left Side - User Info */}
            <div className="flex flex-col items-center gap-4 bg-[#393E46] rounded-2xl shadow-lg p-6 w-full md:w-1/2 transition-all duration-300 hover:shadow-2xl">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="User Avatar"
                    className="w-28 h-28 rounded-full border-2 border-[#00ADB5] object-cover shadow-md"
                />
                <h2 className="text-2xl font-semibold">{users?.username || "Guest User"}</h2>
                <p className="text-[#EEEEEE]/80">{users?.email || "user@example.com"}</p>
                <p className="text-sm text-[#EEEEEE]/60 italic">Member since 2024</p>

                <div className="flex flex-col gap-3 w-full mt-6">
                    <button
                        onClick={LogoutHandler}
                        className="w-full py-2 bg-[#00ADB5]/90 text-[#222831] font-semibold rounded-lg hover:bg-[#00ADB5] transition-all duration-300"
                    >
                         Logout
                    </button>
                    <button
                        onClick={DeleteHandler}
                        className="w-full py-2 bg-red-600 text-[#EEEEEE] rounded-lg hover:bg-red-500 transition-all duration-300"
                    >
                         Delete Account
                    </button>
                </div>
            </div>

            
            <form
                onSubmit={handleSubmit(UpdateUserProfile)}
                className="bg-[#393E46] rounded-2xl shadow-lg p-12.5 w-full md:w-1/2 flex flex-col gap-4 transition-all duration-300 hover:shadow-2xl"
            >
                <h2 className="text-2xl font-semibold text-center mb-4 text-[#EEEEEE]">Update Profile</h2>

               
                <div>
                    <input
                        {...register("username", { required: "Username is required" })}
                        placeholder="Username"
                        className="w-full p-3 rounded-lg bg-[#222831] border border-[#00ADB5] text-[#EEEEEE] focus:outline-none focus:ring focus:ring-[#00ADB5] transition-all duration-300"
                    />
                    {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
                </div>

                {/* Email */}
                <div>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                        })}
                        placeholder="Email"
                        className="w-full p-3 rounded-lg bg-[#222831] border border-[#00ADB5] text-[#EEEEEE] focus:outline-none focus:ring focus:ring-[#00ADB5] transition-all duration-300"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                {/* Password */}
                <div>
                    <input
                        type="password"
                        {...register("password", { required: "Password is required" })}
                        placeholder="Password"
                        className="w-full p-3 rounded-lg bg-[#222831] border border-[#00ADB5] text-[#EEEEEE] focus:outline-none focus:ring focus:ring-[#00ADB5] transition-all duration-300"
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-[#00ADB5] text-[#222831] font-semibold rounded-lg hover:bg-[#00cdd5] transition-all duration-300 mt-2"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default UserProfile;
