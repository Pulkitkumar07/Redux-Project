import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Product from "../pages/Product"
import CreateProduct from '../pages/admin/CreateProduct'
import ProductDetails from "../pages/admin/ProductDetails"
import UserProfile from "../pages/user/UserProfile"
import PageNotFound from "../pages/PageNotFound"
import { useSelector } from "react-redux"
import AuthWrapper from "./AuthWrapper"
import Cart from "../pages/Cart"
const MainRoutes = () => {
  const { users } = useSelector((state) => state.userReducer)
  return (
    <Routes>
      <Route path="/" element={ <Product  />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />


      <Route path="/product/:id"
        element={
          <AuthWrapper>
            <ProductDetails />
          </AuthWrapper>
        } />
      <Route path="/admin/create-product"
        element={
          <AuthWrapper>
            <CreateProduct />
          </AuthWrapper>
        } />
      <Route path="/admin/user-profile"
       element={
       <AuthWrapper>
            <UserProfile/>
          </AuthWrapper>
       } />

 <Route path="/cart"
       element={
       <AuthWrapper>
            <Cart/>
          </AuthWrapper>
       } />


      <Route path="*" element={<PageNotFound />} />


    </Routes>
  )
}

export default MainRoutes