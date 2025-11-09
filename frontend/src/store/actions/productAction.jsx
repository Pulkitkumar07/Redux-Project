import axios from "../../api/axiosconfig"
import { loadproduct } from "../reducers/productSlice";

export const asyncloadproducts=()=>async(dispatch,getState)=>{
    try{
    const {data}=await axios.get("/product");
    dispatch(loadproduct(data))
    }
    catch(err){
        console.log(err);
        
    }
}

export const asyncCreateProduct = (product) => async (dispatch, getState) => {
    try {
         await axios.post('/product', product);
        dispatch(asyncloadproducts());


    } catch (err) {
        console.log(err);


    }
}

export const asyncUpdateProduct = (id, product) => async (dispatch, getState) => {
  try {
    await axios.patch('/product/' + id, product);
    dispatch(asyncloadproducts());
  } catch (err) {
    console.log(err);
  }
};

export const asyncDeleteProduct = (id, product) => async (dispatch, getState) => {
  try {
    await axios.delete('/product/' + id,);
    dispatch(asyncloadproducts());
  } catch (err) {
    console.log(err);
  }
};

