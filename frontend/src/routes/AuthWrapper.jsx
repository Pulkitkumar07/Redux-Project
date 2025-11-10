import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

const AuthWrapper = (props) => {
  const { users } = useSelector((state) => state.userReducer);


  if (users === undefined || users === null) {
    return <div className="text-white p-4">Loading...</div>;
  }

 
  return props.children;
};

export default AuthWrapper;
