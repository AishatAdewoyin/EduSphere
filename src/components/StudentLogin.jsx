import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import Link from "next/link";
import usePasswordVisibility from "../helpers/utils";
import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";

const StudentLogin = () => {
  const { passwordVisible, togglePasswordVisibility } = usePasswordVisibility();
  const { password, setPassword, email, setEmail, loading, loginUser } = useAuth();
  const router = useRouter();
  // const auth = getAuth();

  const studentlogin = async (email, password) => {
    if (email.length === 0) {
      alert("Enter your Email Address");
    } else if (password.length === 0) {
      alert("Enter your Password");
    } else {
      loginUser(email, password);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    studentlogin(email, password);
  };

  return (
    <div className="w-full lg:w-5/12 bg-white p-5 font-mono rounded-lg mx-3 my-10">
      <h3 className="pt-4 text-2xl text-center">Login As an Student!</h3>
      <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={studentlogin}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
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
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-6 text-center">
          <button
            className="w-full px-4 py-2 font-bold text-black bg-[#00df9a] rounded-full hover:bg-[#47ffc5] focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
        <hr className="mb-6 border-t" />
        <div className="text-center">
          <Link href="#">
            <span className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
              Forgot Password?
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default StudentLogin;
