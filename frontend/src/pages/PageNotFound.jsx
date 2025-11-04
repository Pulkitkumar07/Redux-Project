import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const BackHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-[#0d0d0d] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]" />
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        <h1 className="text-[8rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 leading-none drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-gray-100">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-400 text-base md:text-lg mb-8 max-w-md">
          The page you’re looking for doesn’t exist or has been moved.  
          Let’s get you back on track.
        </p>

        <div className="flex gap-4">
          <button
            onClick={BackHome}
            className="px-6 py-3 border border-gray-600 hover:border-blue-500 rounded-xl font-semibold text-gray-300 hover:text-white transition-all duration-300"
          >
            🔙 Go Back
          </button>
        </div>
      </motion.div>

      <div className="absolute w-32 h-32 bg-blue-600/20 blur-[100px] rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-40 h-40 bg-purple-600/20 blur-[120px] rounded-full bottom-10 right-10 animate-pulse"></div>
    </div>
  );
};

export default PageNotFound;
