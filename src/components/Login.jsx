import React from "react";
import { useState } from "react";
import google from "../assets/Google__G__Logo 1.svg";
import Facebook from "../assets/facebook.svg";
import line from "../assets/Line 1.svg";
import mail from "../assets/Rectangle 394 (Stroke).svg";
import { FiEyeOff, FiEye } from "react-icons/fi";
import shild from "../assets/shield-slash.svg";
import right from "../assets/right side.png";
import large from "../assets/Large.png";
import { auth, googleProvider ,facebookProvider } from '../config/firebase';
import { signInWithEmailAndPassword , signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Sign-in successful, handle the signed-in user
        const user = userCredential.user;
        console.log('Signed-in user:', user);
        // Add your logic for handling the signed-in user
      })
      .catch((error) => {
        // Sign-in failed, handle the error
        console.log('Sign-in error:', error);
        // Add your logic for handling the sign-in error
      });
  };

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        // Facebook sign-in successful, handle the signed-in user
        const user = result.user;
        console.log('Signed-in user:', user);
        // Add your logic for handling the signed-in user
      })
      .catch((error) => {
        // Facebook sign-in failed, handle the error
        console.log('Facebook sign-in error:', error);
        // Add your logic for handling the sign-in error
      });
  };
  
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // Google sign-in successful, handle the signed-in user
        const user = result.user;
        console.log('Signed-in user:', user);
        // Add your logic for handling the signed-in user
      })
      .catch((error) => {
        // Google sign-in failed, handle the error
        console.log('Google sign-in error:', error);
        // Add your logic for handling the sign-in error
      });
  };
  
  return (
    <div className="flex ">
      <div className="w-[720px]  bg-white">
        <div className="  rounded-md h-full ml-[121px] pt-[105px] pb-[110px] ">
          <h1 className="font-bold text-4xl tracking-wider">
            Login to your Account
          </h1>
          <p className="text-[#71717A] text-lg tracking-wider">
            Welcome back! Select method to log in:
          </p>
          <div className="flex mt-[25px] space-x-[40px]">
            <div className="w-[215px] h-[60px] flex justify-center items-center border border-[#8098F9] rounded-md space-x-2 cursor-pointer" onClick={handleGoogleSignIn}>
              <img src={google} alt="" />
              <p>Google</p>
            </div>
            <div className="w-[215px] h-[60px] flex justify-center items-center border border-[#8098F9] rounded-md space-x-2 cursor-pointer" onClick={handleFacebookSignIn}>
              <img src={Facebook} alt="" />
              <p>Facebook</p>
            </div>
          </div>
          <div className="flex pl-1 mt-[25px] ">
            <img src={line} alt="" />
            <p className="text-[#71717A] text-sm mx-10">
              or continue with email
            </p>
            <img src={line} alt="" />
          </div>
          <div className="flex flex-col items-center mt-6">
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

            <div className="relative mr-[120px]">
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
              <span
                className="absolute right-3 top-4 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FiEyeOff size={28} /> : <FiEye size={28} />}
              </span>
            </div>
          </div>
          <div className="flex mt-[10px] ">
            <div className="flex items-center ml-1">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMeChange}
                className="mr-2 w-4 h-4 border border-[#8098F9]"
              />
              <span className="text-[#71717A] tracking-widest text-[16px]">
                Remember me
              </span>
            </div>
        <Link  to='/forgotpassword' className="text-[#8098F9] ml-[210px] text-[16px] cursor-pointer">
              Forgot Password?
        </Link>
        
          </div>

          <button
            className="bg-[#8098F9] hover:bg-[#697fd7] text-white w-[456px] h-[64px] rounded-md mt-[25px] ml-3"
            onClick={handleSignIn}
          >
           Login
          </button>
          <p className="mt-5 text-[#71717A] text-[16px] ml-[110px] cursor-pointer">Don’t have account? <Link to='/' className="text-[#8098F9]">Create an account</Link> </p>
        </div>
      </div>
      <div className="relative">
        <img src={right} alt="" className="w-full"/>
        <div className="absolute bottom-8 left-[200px] text-center text-[#E0EAFF] ">
        <p className=" font-semibold text-2xl text-[#E0EAFF]">Connect with any device.</p>
        <p className="text-lg">Everything you need is an internet connection.</p>
        <img src={large} alt="" className="ml-[160px] mt-2" /> 
        </div>
        
      </div>
    </div>
  );
};

export default Login;

// px-[121px] py-[244px]
