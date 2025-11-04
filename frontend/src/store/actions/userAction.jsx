import axios from "../../api/axiosconfig"
import { loaduser } from "../reducers/userSlice";
import {removeuser} from "../reducers/userSlice";

export const asyncdeleteuser=(id)=>async(dispatch,getState)=>{
  try{
     await axios.delete(`/users/`+id);
     dispatch(asynclogoutUser())
  }catch(error){
    console.log(error);
    
  }
}
export const asyncupdateuser = (id, user) => async (dispatch, getState) => {
   
  try {
    const { data } = await axios.patch(`/users/`+id, user);
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(asyncloginUser(data));
    dispatch(asyncupdateuser());
  } catch (error) {
    console.log("Update Error:", error);
  }
};
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
        dispatch(removeuser())
        console.log("User Logged Out");
        
    }
    catch (error) {
        console.log(error);

    }
}
export const asyncloginUser = (user) => async (dispatch, getState) => {
  console.log(user);
  
  try {
    const { data } = await axios.get(
      `http://localhost:3000/users?username=${user.username}&email=${user.email}`
    );
    if (data.length > 0) {

      localStorage.setItem("user", JSON.stringify(data[0]));
      dispatch(loaduser(data[0]));
    } else {
      console.log(" Invalid credentials — user not found");
    }
  } catch (error) {
    console.log("Login Error:", error);
  }
};

export const asyncRegisterUser = (user) => async (dispatch, getState) => {
    try {
        const res = await axios.post('/users', user);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
}
