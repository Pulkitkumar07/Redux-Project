import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Product = () => {
  const products = useSelector((state) => state.productReducer.products);
  

  if (!products || products.length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="bg-white w-70 h-fit text-black rounded-2xl m-5 p-2">
      {products.map((product) => (
        <div key={product.id} className="mb-5 text-center">
          <img
            className="mx-auto"
            src={product.image}
            alt={product.title}
            width="150"
          />
          <h1 className="text-lg font-semibold mt-2">{product.title}</h1>
          <small className="block text-gray-500">
            {product.description.slice(0, 100) + "..."}
          </small>
          <p className="mt-1 font-medium">Price: ₹{product.price}</p>
          <div className="mt-3 flex justify-center gap-3">
            <button className="bg-gradient-to-r from-gray-900 to-black text-white px-5 py-2 rounded-xl hover:from-black hover:to-gray-800 transition-all duration-300">
              Add to Cart
            </button>
            <Link
              to={`/product/${product.id}`}
              className="bg-gray-200 text-black px-5 py-2 rounded-xl hover:bg-gray-300 transition-all duration-300"
            >
              More info
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
