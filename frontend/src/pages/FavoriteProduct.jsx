import { useSelector } from "react-redux";
const FavoriteProduct = () => {
  const { users } = useSelector((state) => state.userReducer);
  const { products } = useSelector((state) => state.productReducer);

  const favoriteIds = users?.favorites || [];
  const favoriteProducts = products.filter(p => favoriteIds.includes(p.id));
  
  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl mb-4">Your Favorite Products</h1>

      {favoriteProducts.length === 0 ? (
        <p>No favorites added...</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {favoriteProducts.map(product => (
            <div key={product.id} className="bg-[#393E46] p-5 rounded-xl">
              <img src={product.image} className="w-32 h-32 object-cover" />
              <h2>{product.title}</h2>
              <p>${product.price}</p>
            </div>
             ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteProduct;
