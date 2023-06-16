import React from "react";
import { useState } from "react";
import google from "../assets/Google__G__Logo 1.svg";
import Facebook from "../assets/facebook.svg";
import line from "../assets/Line 1.svg";
import mail from "../assets/Rectangle 394 (Stroke).svg";
import { FiEyeOff, FiEye } from "react-icons/fi";
import shild from "../assets/shield-slash.svg";
import right2 from "../assets/right side 2.png";
import large from "../assets/Large.png";
import person from "../assets/person.svg";
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [accept, setAccept] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleAcceptChange = () => {
    setAccept(!accept);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  
  const handleRegister = () => {
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }
    if (!accept) {
      console.log('Please accept the terms and conditions');
      return;
    }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Registration successful, handle the registered user
        const user = userCredential.user;
        console.log('Registered user:', user);
        // Add your logic for handling the registered user
      })
      .catch((error) => {
        // Registration failed, handle the error
        console.log('Registration error:', error);
        // Add your logic for handling the registration error
      });
      navigate("/login");
  };

  

  return (
    <div className="flex ">
      <div className="w-[720px]  bg-white">
        <div className="  rounded-md h-full ml-[121px] pt-[105px] pb-[100px] ">
          <h1 className="font-bold text-4xl tracking-wider">
          Create your account
          </h1>
          <p className="text-[#71717A] text-lg tracking-wider">
          Unlock all Features!
          </p>
         
         
          <div className="flex flex-col items-center mt-6">
          <div className="relative mb-3 mr-[120px] ">
              <span className="absolute left-3 top-4 text-gray-400">
                <img src={person} alt="" />
              </span>
              <input
                type="username"
                placeholder="username"
                value={username}
                onChange={handleUsernameChange}
                className=" w-[477px] h-[60px] pl-11 text-black bg-transparent border-2 border-[#8098F9] focus:bg-white focus:outline-none rounded-md"
              />
            </div>
            <div className="relative mb-3 mr-[120px] ">
              <span className="absolute left-3 top-4 text-gray-400">
                <img src={mail} alt="" />
              </span>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                className=" w-[477px] h-[60px] pl-11 text-black bg-transparent border-2 border-[#8098F9] focus:bg-white focus:outline-none rounded-md"
              />
            </div>

            <div className="relative mr-[120px] mb-3">
              <span className="absolute left-3 top-4 text-gray-400">
                <img src={shild} alt="" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                className=" w-[477px] h-[60px] pl-11 text-black bg-transparent border-2 border-[#8098F9] focus:bg-white focus:outline-none rounded-md"
              />
             
            </div>
            <div className="relative mr-[120px]">
              <span className="absolute left-3 top-4 text-gray-400">
                <img src={shild} alt="" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder=" confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className=" w-[477px] h-[60px] pl-11 text-black bg-[transparent] border-2 border-[#8098F9] focus:bg-white focus:outline-none rounded-md"
              />
              
            </div>
          </div>

          <div className=" mt-[10px] ">
            <div className="flex items-center ml-2">
              <input
                type="checkbox"
                checked={accept}
                onChange={handleAcceptChange}
                className="mr-2 w-4 h-4 border text-[#8098F9]"
              />
              <span className="text-[#71717A] tracking-wider text-[16px] cursor-pointer ">
              Accept <span className="text-[#8098F9]">terms and conditions</span> 
              </span>
            </div>
            
          </div>

          <button
            className="bg-[#8098F9] hover:bg-[#697fd7] text-white w-[456px] h-[64px] rounded-md mt-[25px] ml-3"
            onClick={handleRegister}
          >
            Register
          </button>
          <p className="mt-5 text-[#71717A] text-[16px] ml-[110px] cursor-pointer">you have account? <Link to="/login" className="text-[#8098F9]">Login now</Link> </p>
        </div>
      </div>
      <div className="relative">
        <img src={right2} alt="" className="w-full"/>
        <div className="absolute bottom-8 left-[130px] text-center text-[#E0EAFF] ">
        <p className=" font-semibold text-2xl text-[#E0EAFF]">Join us!</p>
        <p className="text-lg">Just go through the boring process of creating an account.</p>
        <img src={large} alt="" className="ml-[215px] mt-2" /> 
        </div>
        
      </div>
    </div>
  );
};

export default Login;

// px-[121px] py-[244px]
