import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import Link from "next/link";
import { auth } from "../firebase";


const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <div className="w-full lg:w-5/12 bg-white p-5 font-mono rounded-lg mx-auto">
      <h3 className="pt-4 text-2xl text-center">
        Login To Your Account As an Admin!
      </h3>
      <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={adminLogin}>
      <div className="mb-4 md:flex md:justify-between"></div>
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
            <div className="md:ml-2">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="c_password"
              >
                Confirm Password
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="c_password"
                type="password"
                placeholder="*********"
              onChange={(e) => setPassword(e.target.value)}
              />
            </div>
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
            <Link
              href="#"
              className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
            >
              Forgot Password?
            </Link>
          </div>
      </form>
    </div>
  );
};

export default AdminLogin