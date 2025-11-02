import { useEffect } from "react";
import { useDispatch } from "react-redux"
import MainRoutes from "./routes/MainRoutes";
import Nav from "./components/Nav"
import {asyncloadproducts} from "./store/actions/productAction"
import { asyncurrentUser } from "./store/actions/userAction";
const App = () => {
const dispatch = useDispatch();
  useEffect(()=>{
   dispatch(asyncurrentUser())
   dispatch(asyncloadproducts())
  },[])

  return (
    <div className="w-full h-screen bg-black text-white">
      <Nav />
      <MainRoutes />
    </div>
  )
}

export default App