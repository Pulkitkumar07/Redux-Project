import { useSelector, useDispatch } from "react-redux";
import { asyncupdateuser } from "../store/actions/userAction";
import { toast } from "react-toastify";
import { useMemo } from "react";

const Cart = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.userReducer.users);

    if (!users.cart || users.cart.length === 0)
        return <h2 className="text-center text-xl text-[#EEEEEE]/70 mt-10">Cart is empty...</h2>;

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

      const totalItems = useMemo(() => {
        return  users.cart.reduce((acc, product) => acc + product.quantity, 0);
    }, [users.cart]);

    const totalPrice = useMemo(() => {
        return  Math.floor(
        users.cart.reduce((acc, product) => acc + product.product.price * product.quantity, 0));
    }, [users.cart]);

    const cartItems = users.cart.map((c, index) => (
        <li
            key={c.product.id}
            className="flex items-center gap-6 p-4 bg-[#393E46] rounded-lg shadow-md border border-gray-700 hover:border-[#00ADB5] transition-all"
        >
            <img
                className="w-20 h-20 rounded-lg object-cover"
                src={c.product.image}
                alt={c.product.title}
            />

            <div className="flex flex-col flex-1">
                <span className="text-[#EEEEEE] font-semibold text-lg">{c.product.title}</span>
                <span className="text-[#EEEEEE]/70 text-sm">$ {c.product.price}</span>

                <div className="flex items-center gap-3 mt-2">
                    <button
                        onClick={() => DecreaseQuantityHandler(index, c)}
                        className="px-2 py-1 bg-[#222831] text-[#EEEEEE] rounded hover:bg-[#00ADB5] transition"
                    >
                        -
                    </button>

                    <span className="text-[#EEEEEE]">{c.quantity}</span>

                    <button
                        onClick={() => IncreaseQuantityHandler(index, c)}
                        className="px-2 py-1 bg-[#222831] text-[#EEEEEE] rounded hover:bg-[#00ADB5] transition"
                    >
                        +
                    </button>
                </div>
            </div>
        </li>
    ));

    return (
        <div className="min-h-screen w-full bg-[#222831] p-8 relative">
            <h1 className="text-3xl text-[#EEEEEE] font-bold mb-6">Your Cart</h1>

            <ul className="flex flex-col gap-4 max-w-xl">{cartItems}</ul>

       
            <div className="fixed bottom-6 right-6 bg-[#393E46] p-6 rounded-xl shadow-lg w-72 flex flex-col gap-4">
                <div className="flex justify-between text-[#EEEEEE] font-semibold">
                   <span>Total Items:</span>
                   <span>{totalItems}</span>
                </div>
                <div className="flex justify-between text-[#EEEEEE] font-semibold">
                    <span>Total Price:</span>
                    <span>${totalPrice}</span>
                </div>
                <button
                    className="w-full py-2 bg-[#00ADB5] text-[#222831] font-semibold rounded-lg hover:bg-[#00cdd5] transition"
                >
                     Pay Now
                </button>
            </div>
        </div>
    );
};

export default Cart;








    
