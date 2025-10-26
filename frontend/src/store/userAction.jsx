import axios from "../api/axiosconfig"
import { loaduser } from "./UserSlice";

const asyncgetUsers = () => async (dispatch, getState) => {
    try {
        console.log(getState());
        const res = await axios.get("/users");
        dispatch(loaduser(res.data));
    } catch (error) {
        console.log(error);

    }
}

export default asyncgetUsers;
