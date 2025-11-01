import { createSlice } from "@reduxjs/toolkit";

const initialState={
    users:null,
}

const userSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        loaduser: (state, action) => {
      state.users = action.payload
    }
},
})
export const { loaduser } = userSlice.actions;
export default userSlice.reducer;
