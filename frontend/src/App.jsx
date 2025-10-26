import { useEffect } from "react";
import asyncgetUsers from"./store/userAction"
import {useDispatch} from"react-redux" 
const App = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(asyncgetUsers());
  },[])
  return (
    <div>App</div>
  )
}

export default App