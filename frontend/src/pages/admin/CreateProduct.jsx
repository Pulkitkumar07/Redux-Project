import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { asyncCreateProduct } from "../../store/actions/productAction";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const CreateProductHandler = (product) => {
    product.id = nanoid();
    dispatch(asyncCreateProduct(product));
    reset();
    navigate("/product");
  };

  return (
    <div className="bg-[#222831] min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(CreateProductHandler)}
        className="w-full max-w-md bg-[#393E46] p-6 rounded-2xl shadow-md flex flex-col gap-4 overflow-auto max-h-[90vh]"
      >
        <input
          {...register("image")}
          type="url"
          placeholder="Image URL"
          className="outline-none border-b-2 border-[#00ADB5] bg-transparent text-[#EEEEEE] placeholder-[#EEEEEE] py-2"
        />
        <input
          {...register("title")}
          type="text"
          placeholder="Title"
          className="outline-none border-b-2 border-[#00ADB5] bg-transparent text-[#EEEEEE] placeholder-[#EEEEEE] py-2"
        />
        <input
          {...register("price")}
          type="text"
          placeholder="Price"
          className="outline-none border-b-2 border-[#00ADB5] bg-transparent text-[#EEEEEE] placeholder-[#EEEEEE] py-2"
        />
        <textarea
          {...register("discription")}
          placeholder="Description"
          className="outline-none border-b-2 border-[#00ADB5] bg-transparent text-[#EEEEEE] placeholder-[#EEEEEE] py-2 resize-none"
          rows={3}
        />
        <input
          {...register("category")}
          type="text"
          placeholder="Category"
          className="outline-none border-b-2 border-[#00ADB5] bg-transparent text-[#EEEEEE] placeholder-[#EEEEEE] py-2"
        />
        <button
          type="submit"
          className="mt-4 bg-[#00ADB5] text-[#222831] font-bold py-2 rounded-xl hover:bg-[#00bfcf] transition-colors"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
