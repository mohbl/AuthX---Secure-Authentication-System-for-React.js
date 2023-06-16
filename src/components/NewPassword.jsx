import React from "react";
import { useState } from "react";
import google from "../assets/Google__G__Logo 1.svg";
import Facebook from "../assets/facebook.svg";
import line from "../assets/Line 1.svg";
import email from "../assets/Rectangle 394 (Stroke).svg";
import { FiEyeOff, FiEye } from "react-icons/fi";
import shild from "../assets/shield-slash.svg";
import right4 from "../assets/right side4.png";
import large from "../assets/Large.png";
import person from "../assets/person.svg";

const NewPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
      
  return (
    <div className="flex ">
      <div className="w-[720px]  bg-white">
        <div className="  rounded-md h-full ml-[121px] pt-[180px] pb-[100px] ">
          <h1 className="font-bold text-[38px] tracking-wider">
          Enter your new password
          </h1>
          <p className="text-[#71717A] text-lg tracking-wider">
          This is the last step in recovering your password.
          </p>
         
         
          <div className="flex flex-col items-center mt-6">
         
          <div className="relative mr-[120px] mb-3">
              <span className="absolute left-3 top-4 text-gray-400">
                <img src={shild} alt="" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder=" Password"
                className=" w-[477px] h-[60px] pl-11 text-black bg-[transparent] border-2 border-[#8098F9] focus:bg-white focus:outline-none rounded-md"
              />
              
            </div>
            <div className="relative mr-[120px]">
              <span className="absolute left-3 top-4 text-gray-400">
                <img src={shild} alt="" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder=" confirm Password"
                className=" w-[477px] h-[60px] pl-11 text-black bg-[transparent] border-2 border-[#8098F9] focus:bg-white focus:outline-none rounded-md"
              />
              
            </div>
           
           
          </div>

         

          <button
            className="bg-[#8098F9] hover:bg-[#697fd7] text-white w-[456px] h-[64px] rounded-md mt-[25px] ml-3 font-bold"
            onClick=""
          >
            SUBMIT
          </button>
        </div>
      </div>
      <div className="relative">
        <img src={right4} alt="" className="w-full"/>
        <div className="absolute bottom-8 left-[100px] text-center text-[#E0EAFF] ">
        <p className=" font-semibold text-2xl text-[#E0EAFF]">This is the end!</p>
        <p className="text-lg">After entering the new password you will gain access to your account.</p>
        <img src={large} alt="" className="ml-[255px] mt-2" /> 
        </div>
        
      </div>
    </div>
  )
}

export default NewPassword