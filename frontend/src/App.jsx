import { useEffect } from "react";
import { useDispatch } from "react-redux"
import MainRoutes from "./routes/MainRoutes";
import Nav from "./components/Nav"

import { asyncurrentUser } from "./store/actions/userAction";
const App = () => {
const dispatch = useDispatch();
  useEffect(()=>{
   dispatch(asyncurrentUser())
  },[])

  return (
    <div className="w-full h-screen bg-black text-white">
      <Nav />
      <MainRoutes />
    </div>
  )
}

export default App