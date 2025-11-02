import { Form, Navigate, useFormAction, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid"
import { useDispatch } from "react-redux";
import {asyncCreateProduct } from "../../store/actions/productAction"

const  CreateProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const Navigate=useNavigate();
  const dispatch = useDispatch();
  const CreateProductHandler = (product) => {
    product.id = nanoid();
    dispatch(asyncCreateProduct(product))
    reset();
    Navigate("/product")

  }
  return (
    <form onSubmit={handleSubmit(CreateProductHandler)}
      className=' w-1/2 flex flex-col justify-center mt-10 p-10 items-center' >

      <input
       {...register("image")}
        className='outline-0  border-b-2 text-2xl'
        type="url"
        placeholder='image'
      />




      <input
        {...register("title")}
        className='outline-0 border-b-2 text-2xl'
        type="text"
        placeholder='title'
      />
      <input
        {...register("price")}
        className='outline-0 border-b-2 text-2xl'
        type="text"
        placeholder='price'
      />
        <textarea name="" id=""
       {...register("discription")}
        className='outline-0 border-b-2 text-2xl'
        type="text"
        placeholder='discription'
      ></textarea>
      
       <input
       {...register("category")}
        className='outline-0 border-b-2 text-2xl'
        type="text"
        placeholder='category'
      />

      

      <button className='mt-10 border-2 p-5 rounded-2xl' >Create Product</button>
      


    </form>

  );
}

export default  CreateProduct
