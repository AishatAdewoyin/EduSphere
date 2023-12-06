import React from 'react'
import Link from "next/link";


function Signup() {
  return (
    <div className="font-mono my-20">
      <div className="w-full lg:w-5/12 bg-white p-5 rounded-lg lg:rounded-l-none mx-auto"> {/* Added mx-auto class */}
        <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      for="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      for="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
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
                  />
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      for="password"
                    >
                      Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="*********"
                    />
                    <p className="text-xs italic text-red-500">
                      Please choose a password.
                    </p>
                  </div>
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
                    />
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-black bg-[#00df9a] rounded-full hover:bg-[#47ffc5] focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Register Account
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link href="#" className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                      Forgot Password?
                  </Link>
                </div>
                <div className="text-center">
                  <Link href="/" className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                      Already have an account? Login!
                  </Link>
                </div>
              </form>
      </div>
    </div>
  )
}

export default Signup