import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const users = useSelector((state) => state.userReducer.users);

  return (
    <nav className="flex justify-center gap-6 items-center py-4 bg-[#222831]">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `font-semibold transition-colors duration-300 ${isActive ? "text-[#00ADB5]" : "text-[#EEEEEE]"}`
        }
      >
        Home
      </NavLink>

      {users ? (
        <>
          {users?.isAdmin && (
            <NavLink
              to="/admin/create-product"
              className="text-[#EEEEEE] hover:text-[#00ADB5] transition-colors duration-300 font-semibold"
            >
              Create Product
            </NavLink>
          )}
          <NavLink
            to="/admin/user-profile"
            className="text-[#EEEEEE] hover:text-[#00ADB5] transition-colors duration-300 font-semibold"
          >
            Profile
          </NavLink>

          <NavLink  to="/favorite-products"
            className="text-[#EEEEEE] hover:text-[#00ADB5] transition-colors duration-300 font-semibold"
          >
            Favorites 
          </NavLink>

          <NavLink
            to="/cart"
            className="text-[#EEEEEE] hover:text-[#00ADB5] transition-colors duration-300 font-semibold"
          >
            Cart 🛒
          </NavLink>
        </>
      ) : (
        <NavLink
          to="/login"
          className="text-[#EEEEEE] hover:text-[#00ADB5] transition-colors duration-300 font-semibold"
        >
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default Nav;
