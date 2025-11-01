import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Product from "../pages/Product"

const MainRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/register" element={<Register/>}/>
   </Routes>
  )
}

export default MainRoutes