import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import productReducer from "./reducers/productSlice";
import cartReducer from "./reducers/cartSlice";
export const store = configureStore({

  reducer: {
    userReducer,
    productReducer,
    cartReducer,
  },
});
