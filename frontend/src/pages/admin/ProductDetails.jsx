import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid"
import { Form, Navigate, useFormAction, useNavigate } from 'react-router-dom'
import {asyncUpdateProduct} from"../../store/actions/productAction"
import {asyncDeleteProduct}from "../../store/actions/productAction"

const ProductDetails = () => {
  const { id } = useParams();
 const { products } = useSelector((state) => state.productReducer);
 const { users } = useSelector((state) => state.userReducer);

  const product = products?.find(product => product.id == id)

  const { register, handleSubmit, reset } = useForm({
    defaultValues:{
       image:product?.image,
      title:product?.title,
      price:product?.price,
     description:product?.description,
      category:product?.category
    }
  });
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const UpdateProductHandler = (product) => {
    dispatch(asyncUpdateProduct(id,product))
  }
  
  const DeleteHandler=()=>{
    
    useDispatch(asyncDeleteProduct(id))
    Navigate("/product")
  }

 return product ? (
    <div className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center gap-6 px-4 py-8 bg-[#111] text-white">
      
      {/* Left Side: Product Info */}
      <div className="md:w-[45%] w-full flex flex-col items-center gap-4">
        <img
          className="w-[70%] max-w-[320px] h-auto rounded-xl object-cover shadow-md"
          src={product.image}
          alt={product.title}
        />

        <div className="w-[85%] flex flex-col gap-3 text-center">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <h3 className="text-lg font-bold text-gray-300">${product.price}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{product.description}</p>

          <button
            className="mt-3 bg-black border border-gray-700 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
          >
            Add to Cart
          </button>

          {users && users.isAdmin && (
            <button
              onClick={DeleteHandler}
              type="button"
              className="mt-3 bg-gradient-to-r from-gray-900 to-black border border-gray-800 
              hover:from-red-700 hover:to-red-900 hover:border-red-700 
              text-white font-semibold py-2 px-5 rounded-xl 
              shadow-md hover:shadow-red-500/30 active:scale-95 
              transition-all duration-300"
            >
              🗑️ Delete Product
            </button>
          )}
        </div>
      </div>

      {/* Right Side: Update Form (Only Admins) */}
      {users && users.isAdmin && (
        <form
          onSubmit={handleSubmit(UpdateProductHandler)}
          className="md:w-[45%] w-full flex justify-center items-center"
        >
          <div className="w-full max-w-[420px] bg-[#1a1a1a] rounded-2xl shadow-lg p-6 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-center mb-2">Update Product</h2>

            <input
              {...register("image")}
              className="bg-[#222] border border-gray-600 focus:border-white outline-none text-base p-2 rounded-lg placeholder-gray-400 transition-all duration-300"
              type="url"
              placeholder="Image URL"
            />

            <input
              {...register("title")}
              className="bg-[#222] border border-gray-600 focus:border-white outline-none text-base p-2 rounded-lg placeholder-gray-400 transition-all duration-300"
              type="text"
              placeholder="Title"
            />

            <input
              {...register("price")}
              className="bg-[#222] border border-gray-600 focus:border-white outline-none text-base p-2 rounded-lg placeholder-gray-400 transition-all duration-300"
              type="text"
              placeholder="Price"
            />

            <textarea
              {...register("description")}
              className="bg-[#222] border border-gray-600 focus:border-white outline-none text-base p-2 rounded-lg placeholder-gray-400 resize-none h-24 transition-all duration-300"
              placeholder="Description"
            ></textarea>

            <input
              {...register("category")}
              className="bg-[#222] border border-gray-600 focus:border-white outline-none text-base p-2 rounded-lg placeholder-gray-400 transition-all duration-300"
              type="text"
              placeholder="Category"
            />

            <button
              type="submit"
              className="mt-4 bg-black border border-gray-700 hover:bg-gray-800 text-white font-medium py-2 rounded-lg transition-all duration-300"
            >
              Update Product
            </button>
          </div>
        </form>
      )}
    </div>
  ) : (
    <p className="text-white text-center mt-10 text-lg">Loading...</p>
  );
};

export default ProductDetails
