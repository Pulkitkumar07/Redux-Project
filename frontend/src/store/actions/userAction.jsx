import axios from "../../api/axiosconfig"
import { loaduser } from "../reducers/userSlice";


export const asyncurrentUser = () => async (dispatch, getState) => {
  try {
    const data = localStorage.getItem("user");
    if (data && data !== "undefined" && data !== "null") {
      const user = JSON.parse(data);
      dispatch(loaduser(user));
    } else {
      console.log("User not logged in");
    }
  } catch (error) {
    console.log(error);
  }
};
export const asynclogoutUser = (user) => async (dispatch, getState) => {
    try {

        localStorage.removeItem("user");
        console.log("User Logged Out");
        
    }
    catch (error) {
        console.log(error);

    }
}
export const asyncloginUser = (user) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(
            `http://localhost:3000/users?username=${user.username}&email=${user.email}`
        );
        console.log("Response Data:", data[0]);
        localStorage.setItem("user", JSON.stringify(data[0]))

    }
    catch (error) {
        console.log(error);

    }
}
export const asyncRegisterUser = (user) => async (dispatch, getState) => {
    try {
        const res = await axios.post('/users', user);
        console.log(res.data);


    } catch (err) {
        console.log(err);


    }
}