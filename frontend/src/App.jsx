import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import MainRoutes from "./routes/MainRoutes";
import Nav from "./components/Nav"
import {asyncloadproducts} from "./store/actions/productAction"
import { asyncurrentUser } from "./store/actions/userAction";
const App = () => {
const dispatch = useDispatch();
const products = useSelector((state) => state.productReducer.products);
const users = useSelector((state) => state.userReducer.users);


  useEffect(()=>{
   !users && dispatch(asyncurrentUser())
   
  },[users])
useEffect(() => {
  if (!products || products.length === 0) {
    dispatch(asyncloadproducts());
  }
}, [products, dispatch]);


  return (
    <div className="w-full h-fit bg-black text-white">
      <Nav />
      <MainRoutes />
    </div>
  )
}

export default App