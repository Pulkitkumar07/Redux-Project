import { Routes, Route } from "react-router-dom"
import { useSelector } from "react-redux"
import {lazy,Suspense}from "react"
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Product = lazy(() => import("../pages/Product"));
const CreateProduct = lazy(() => import("../pages/admin/CreateProduct"));
const ProductDetails = lazy(() => import("../pages/admin/ProductDetails"));
const UserProfile = lazy(() => import("../pages/user/UserProfile"));
const Cart = lazy(() => import("../pages/Cart"));
const AuthWrapper = lazy(() => import("./AuthWrapper"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

const MainRoutes = () => {

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
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
    </Suspense>
  )
}

export default MainRoutes