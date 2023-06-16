import React from "react";
import { useState , useRef  } from "react";
import google from "../assets/Google__G__Logo 1.svg";
import Facebook from "../assets/facebook.svg";
import line from "../assets/Line 1.svg";
import email from "../assets/Rectangle 394 (Stroke).svg";
import { FiEyeOff, FiEye } from "react-icons/fi";
import shild from "../assets/shield-slash.svg";
import right5 from "../assets/right_side5.png";
import large from "../assets/Large.png";
import person from "../assets/person.svg";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from "react-router";

const Otp = ({ sentOtp }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleInputChange = (e, index) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = e.target.value;
    setOtp(updatedOtp);
  };

  const handleInputKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    // Join the OTP digits into a single string
    const otpCode = otp.join("");

    // Compare the user-entered OTP code with the sent OTP code
    if (otpCode === sentOtp) {
      // Valid OTP code
      toast.success('code is correct');
        // Add your logic for displaying a success message or redirecting the user
        setTimeout(() => {
          navigate("/newpassword");
        }, 3000);

    } else {
      // Invalid OTP code
      toast.error('code is incorrect');
    }
  };
  return (
    <div className="flex ">
                <ToastContainer   autoClose={3000}  newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="w-[720px]  bg-white">
        <div className="  rounded-md h-full ml-[121px] pt-[180px] pb-[100px] ">
          <h1 className="font-bold text-[38px] tracking-wider">
          Enter OTP
          </h1>
          <p className="text-[#71717A] text-lg tracking-wider">
          Sent OTP on
          </p>
         
         
          <div className="flex justify-center mt-8 mr-[120px]">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleInputChange(e, index)}
          onKeyDown={(e) => handleInputKeyDown(e, index)}
          placeholder="-"
          className="w-16 h-16 text-2xl mx-3 text-center border-2 border-[#8098F9] focus:border-blue-500 focus:outline-none rounded-[8px] cursor-pointer"
        />
      ))}
    </div>

         

          <button
            className="bg-[#8098F9] hover:bg-[#697fd7] text-white w-[456px] h-[64px] rounded-md mt-[25px] ml-3 font-bold"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
          <p className="font-semibold text-[#8098F9] text-lg ml-48 mt-5 cursor-pointer">Resent OTP</p>
        </div>
      </div>
      <div className="relative">
        <img src={right5} alt="" className="w-full"/>
        <div className="absolute bottom-8 left-[150px] text-center text-[#E0EAFF] ">
        <p className=" font-semibold text-2xl text-[#E0EAFF]">It's just OTP verification</p>
        <p className="text-lg">You are one step away from recovering your password.</p>
        <img src={large} alt="" className="ml-[200px] mt-2" /> 
        </div>
        
      </div>
    </div>
  )
}

export default Otp