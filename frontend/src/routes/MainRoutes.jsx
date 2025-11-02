import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Product from "../pages/Product"
import CreateProduct from '../pages/admin/CreateProduct'
import ProductDetails from "../pages/admin/ProductDetails"
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<Product />} />
      <Route path="/register" element={<Register />} />

            <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/admin/create-product" element={<CreateProduct />} />

    </Routes>
  )
}

export default MainRoutes