import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainRoutes from "./routes/MainRoutes";
import Nav from "./components/Nav";
import { asyncurrentUser } from "./store/actions/userAction";

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);

  useEffect(() => {
    if (!users) dispatch(asyncurrentUser());
  }, [users]);

  return (
    <div className="min-h-screen w-full bg-[#222831] text-black font-sans">
      <div className="sticky top-0 z-50 shadow-md shadow-gray-300">
        <Nav />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <MainRoutes />
      </div>
    </div>
  );
};

export default App;
