import { useEffect } from "react";
import axios from "./api/axiosconfig";

const App = () => {
  const getProduct=async()=>{
    try{
     const res=await axios.get("/product")
     console.log(res);
     
    }catch(err){
      console.log(err);
      
    }
  }

  useEffect(()=>{
    getProduct();
  },[])
  return (
    <div>App</div>
  )
}

export default App