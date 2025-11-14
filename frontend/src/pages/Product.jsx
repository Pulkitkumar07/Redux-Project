import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { asyncupdateuser } from "../store/actions/userAction";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { loadlazyproduct } from "../store/reducers/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const { products } = useSelector((state) => state.productReducer);
  const [hasMore, sethasMore] = useState(true);

  const fetchProducts = async () => {
    try {
      const start = products.length;
      const { data } = await axios.get(
        `http://localhost:3000/product?_limit=6&_start=${start}`
      );

      if (data.length === 0) sethasMore(false);
      else {
        sethasMore(true);
        dispatch(loadlazyproduct(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const AddtoCartHandler = (product) => {
    const copyuser = { ...users, cart: users?.cart ? [...users.cart] : [] };
    const index = copyuser.cart.findIndex((c) => c?.product?.id === product.id);

    if (index === -1) copyuser.cart.push({ product, quantity: 1 });
    else copyuser.cart[index] = {
      product,
      quantity: copyuser.cart[index].quantity + 1,
    };

    dispatch(asyncupdateuser(copyuser.id, copyuser));
    toast.success("Successfully Added!");
  };

  if (!products || products.length === 0)
    return <h2 className="text-center mt-10 text-black">Loading...</h2>;

  return (
    <div className="min-h-screen bg-[#222831] p-6">
      <InfiniteScroll
        dataLength={products.length}
        next={fetchProducts}
        hasMore={hasMore}
        loader={<h4 className="text-center mt-4 text-black">Loading...</h4>}
        endMessage={
          <p className="text-center mt-4 font-semibold text-black">
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#393E46] rounded-2xl p-4 flex flex-col items-center shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                className="w-30 h-30 object-cover rounded-xl shadow-sm"
                src={product.image}
                alt={product.title}
              />
              <h1 className="text-[#EEEEEE] text-lg font-semibold mt-3 text-center">
                {product.title}
              </h1>
              <small className="block text-[#EEEEEE]/70 text-center mt-1 mb-2">
                {product.description.slice(0, 80) + "..."}
              </small>
              <p className="mt-1 font-medium text-[#00ADB5]">${product.price}</p>
              <div className="mt-3 flex gap-3">
                <button
                  onClick={() => AddtoCartHandler(product)}
                  className="bg-[#00ADB5] text-white px-4 py-2 rounded-xl font-semibold hover:bg-[#007f8f] transition-colors duration-300"
                >
                  Add to Cart
                </button>
                <Link
                  to={`/product/${product.id}`}
                  className="border border-[#] text-[#eff0f3] px-4 py-2 rounded-xl font-semibold hover:bg-[#00ADB5]/10 transition-colors duration-300"
                >
                  More info
                </Link>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Product;
