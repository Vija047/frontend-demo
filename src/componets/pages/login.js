import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden w-3/4 max-w-4xl">
        
        {/* Left Section */}
        <div className="bg-blue-600 text-white flex flex-col items-center justify-center p-4 rounded-l-lg w-64">
        <img
  src="https://lh3.googleusercontent.com/ycipQZIXDsOCOoc7LOcXD5gTInVm_4M0v57Uwu1bsiq4l65vUKlsVEo-L-G08xvvSauhCzDeHSOxumjEclKjwA=s900"
  className="w-24 h-24 rounded-full border-4 border-white object-cover"
  alt="Profile"
/>

  <p className="font-bold uppercase mt-2 text-base text-center">ANTI CORRUPTION COMMISSION</p>
  <hr className="w-12 border-white my-1" />
  <p className="text-center text-xs">
    Together, let's kick corruption out of <strong>Sierra Leone</strong>
  </p>
</div>

{/* Right Section */}
<div className="bg-white text-gray-800 flex flex-col items-center justify-center p-6 rounded-r-lg w-full sm:w-auto">
  <p className="font-bold text-blue-600 text-lg">ASSET DECLARATION</p>
  <hr className="w-16 border-blue-500 my-2" />

  <p className="font-bold mt-2">LOGIN</p>
  <p className="text-sm text-gray-600 text-center whitespace-nowrap">
  Welcome to the ACC asset declaration platform...
</p>

  {/* Email Input */}
<div className="w-full mt-4 flex justify-start"> {/* Aligns input to the left */}
  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden h-12 w-96">
    <span className="bg-white px-3">
      <FaEnvelope className="text-gray-500 text-sm" />
    </span>
    <input
      type="email"
      className="w-full p-2 text-sm outline-none"
      placeholder="Enter email / mobile"
    />
  </div>
</div>

{/* Password Input */}
<div className="w-full mt-3 flex justify-start"> {/* Aligns input to the left */}
  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden h-12 w-96">
    <span className="bg-white px-3">
      <FaLock className="text-gray-500 text-sm" />
    </span>
    <input
      type="password"
      className="w-full p-2 text-sm outline-none"
      placeholder="Enter password"
    />
  </div>
</div>


  {/* Forgot Password & Register */}
  <div className="flex justify-between items-center w-full text-xs sm:text-sm mt-3 text-gray-600 whitespace-nowrap">
    <a href="#" className="hover:text-blue-500 mr-6">Forgot Password</a> {/* Added margin-right */}
    <div className="flex items-center space-x-2"> {/* Increased spacing */}
      <span className="font-bold">Have an account?</span>
      <a href="/register" className="text-blue-500 font-bold">Register</a>
    </div>
</div>


  {/* Continue Button */}

  <button className="relative inline-flex items-center justify-center p-0.5 mt-4 mb-2 mr-2 
  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group 
  bg-gradient-to-br from-purple-600 to-blue-500 
  group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white 
  dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
  
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 
    bg-white dark:bg-gray-900 rounded-md 
    group-hover:bg-transparent group-hover:dark:bg-transparent">
    Continue
  </span>
</button>



</div>

      </div>
    </div>
  );
}

export default Login;
