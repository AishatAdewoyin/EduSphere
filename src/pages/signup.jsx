import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Link from "next/link";
// import { auth } from "../firebase";
import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import useFieldValidation from "../helpers/validations";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const { password, setPassword, email, setEmail, loading, registerUser } =
    useAuth();
  const { validateEmail, validatePassword } = useFieldValidation();

  const handleRegister = async (email, password) => {
    if (!validateEmail(email)) {
      if (email.length === 0) {
        toast.error("Enter an Email Address");
      } else {
        toast.error("Please enter a valid email address");
      }
    } else if (!validatePassword(password)) {
      if (password.length === 0) {
        toast.error("Enter a Password");
      } else if (password.length < 6) {
        toast.error("Password must be at least 6 characters long");
      } else {
        toast.error(
          "Password must contain letters, numbers, and a special character."
        );
      }
    } else {
      registerUser(email, password);
    }
  };

  // const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="font-mono my-20">
      <div className="w-full lg:w-5/12 bg-white p-5 rounded-lg mx-auto">
        <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
        <form
          className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
          // onSubmit={signUp}
        >
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              for="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
      <div className="mb-4 md:mr-2 md:mb-0">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="password"
        >
          Password
        </label>
        <div className="relative">
          <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="*********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute top-1/3 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiOutlineEyeInvisible/> : <AiOutlineEye />}
          </button>
        </div>
        <p className="text-xs italic text-red-500">Please choose a password.</p>
      </div>
    </div>
          <div className="mb-6 text-center">
            <Link href="">
              <button
                className="w-full px-4 py-2 font-bold text-black bg-[#00df9a] rounded-full hover:bg-[#47ffc5] focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  handleRegister(email, password);
                }}
              >
                {loading ? <Spinner /> : "Register"}
              </button>
            </Link>
          </div>
          <p className="text-center">Or</p>
          <div>
            
            <Link href={"/"} className="text-center flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
              <button className="">
                Sign in with Google
              </button>
            </Link>
          </div>

          <hr className="my-6 border-t" />
          <div className="text-center">
            <Link
              href="#"
              className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="text-center">
            <Link
              href="/login"
              className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
            >
              Already have an account? Login!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
