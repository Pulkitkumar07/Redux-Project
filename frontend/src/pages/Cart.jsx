import { useSelector, useDispatch } from "react-redux";
import { asyncupdateuser } from "../store/actions/userAction"
import { toast } from "react-toastify";
const Cart = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.userReducer.users);

    if (!users.cart || users.cart.length === 0)
        return <h2 className="text-center text-xl text-gray-300 mt-10">Cart is empty...</h2>;


    const IncreaseQuantityHandler = (index, item) => {
        const copyuser = { ...users, cart: [...users.cart] };
        copyuser.cart[index] = {
            product: item.product,
            quantity: item.quantity + 1,
            
        };
        toast.info("Quantity Increased");
        dispatch(asyncupdateuser(copyuser.id, copyuser));
    };

    const DecreaseQuantityHandler = (index, item) => {
        const copyuser = { ...users, cart: [...users.cart] };
     const id = toast.dismiss("Successfully Added!");

        if (item.quantity > 1) {
            copyuser.cart[index] = {
                product: item.product,
                quantity: item.quantity - 1,
            };
            toast.info("Quantity Decreased");
        } else {
            copyuser.cart.splice(index, 1);
             toast.error("Item Removed From Cart");
        }

        dispatch(asyncupdateuser(copyuser.id, copyuser));
    };


    const cartItems = users.cart.map((c, index) => (
        <li
            key={c.product.id}
            className="flex items-center gap-6 p-4 bg-[#1E1E1E] rounded-lg shadow-md border border-gray-700 hover:border-gray-500 transition-all"
        >
            <img
                className="w-20 h-20 rounded-lg object-cover"
                src={c.product.image}
                alt=""
            />

            <div className="flex flex-col flex-1">
                <span className="text-gray-200 font-semibold text-lg">{c.product.title}</span>
                <span className="text-gray-400 text-sm">$ {c.product.price}</span>


                <div className="flex items-center gap-3 mt-2">
                    <button
                        onClick={() => DecreaseQuantityHandler(index, c)}
                        className="px-2 py-1 bg-gray-700 text-white rounded hover:bg-gray-600"
                    >
                        -
                    </button>

                    <span className="text-gray-200">{c.quantity}</span>

                    <button

                        onClick={() => IncreaseQuantityHandler(index, c)}
                        className="px-2 py-1 bg-gray-700 text-white rounded hover:bg-gray-600"
                    >
                        +
                    </button>
                </div>
            </div>
        </li>
    ));



    return (
        <div className="min-h-screen w-full bg-[#121212] p-8">
            <h1 className="text-3xl text-gray-100 font-bold mb-6">Your Cart</h1>
            <ul className="flex flex-col gap-4 max-w-xl">{cartItems}</ul>
        </div>
    );
};

export default Cart;
