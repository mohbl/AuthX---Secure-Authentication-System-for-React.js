import React from "react";
import { useState } from "react";
import google from "../assets/Google__G__Logo 1.svg";
import Facebook from "../assets/facebook.svg";
import line from "../assets/Line 1.svg";
import mail from "../assets/Rectangle 394 (Stroke).svg";
import { FiEyeOff, FiEye } from "react-icons/fi";
import shild from "../assets/shield-slash.svg";
import right3 from "../assets/right side3.png";
import large from "../assets/Large.png";
import person from "../assets/person.svg";
import { auth } from "../config/firebase"; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendPasswordResetEmail } from "firebase/auth";
import { Navigate, useNavigate } from "react-router";


const ForgotPassword = () => {

  const [emailInput, setEmailInput] = useState("");
  const navigate = useNavigate();
  const handleGetOTP = () => {
    sendPasswordResetEmail(auth, emailInput)
      .then(() => {
        console.log("Password reset email sent");
        toast.success('Email is sent');
        // Add your logic for displaying a success message or redirecting the user
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        console.log("Error sending password reset email:", error);
        // Add your logic for handling the error, such as displaying an error message
      });
  };
  

  return (
    <div className="flex ">
          <ToastContainer   autoClose={3000}  newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

      <div className="w-[720px]  bg-white">
        <div className="  rounded-md h-full ml-[121px] pt-[180px] pb-[100px] ">
          <h1 className="font-bold text-[42px] tracking-wider">
          Forgot your password?
          </h1>
          <p className="text-[#71717A] text-lg tracking-wider">
          Enter your Email and get OTP to verification.
          </p>
         
         
          <div className="flex flex-col items-center mt-6">
         
            <div className="relative mb-3 mr-[120px] ">
              <span className="absolute left-3 top-4 text-gray-400">
                <img src={mail} alt="" />
              </span>
              <input
                type="email"
                placeholder="Email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className=" w-[477px] h-[60px] pl-11 text-black bg-transparent border-2 border-[#8098F9] focus:bg-white focus:outline-none rounded-md"
              />
            </div>
            
           
           
          </div>

         

          <button
            className="bg-[#8098F9] hover:bg-[#697fd7] text-white w-[456px] h-[64px] rounded-md mt-[20px] ml-3 font-bold"
            onClick={handleGetOTP}
          >
            GET OTP
          </button>
        </div>
      </div>
      <div className="relative">
        <img src={right3} alt="" className="w-full"/>
        <div className="absolute bottom-8 left-[230px] text-center text-[#E0EAFF] ">
        <p className=" font-semibold text-2xl text-[#E0EAFF]">Forgot your password?</p>
        <p className="text-lg">You can get them back easily.</p>
        <img src={large} alt="" className="ml-[100px] mt-2" /> 
        </div>
        
      </div>
    </div>
  );
};

export default ForgotPassword;

// px-[121px] py-[244px]
