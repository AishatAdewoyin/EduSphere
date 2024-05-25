// import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import Link from "next/link";
import { auth } from "../Firebase/firebase";

const AdminLogin = () => {
  const [userCredentials, setUserCredentials] = useState({})

  const adminLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full lg:w-5/12 bg-white p-5 font-mono rounded-lg mx-3 my-10">
      <h3 className="pt-4 text-2xl text-center">Login As an Admin!</h3>
      <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={adminLogin}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
            Email
          <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            onChange=''
          />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
            Password
          <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          </label>
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

export default AdminLogin;
