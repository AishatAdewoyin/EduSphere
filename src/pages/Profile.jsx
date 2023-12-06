import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";

const Profile = () => {
  return (
<div className="profile-page">
<Navbar></Navbar>
      <div className="relative py-10 bg-blueGray-200 bg-green-400">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full my-20 py-10 shadow-xl rounded-lg -mt-30">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <Link href="/Students"><button className="bg-green-400 active:bg-green-800 uppercase text-black font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                      Connect with Others
                    </button></Link>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">22</span><span className="text-sm text-blueGray-400">Friends</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span><span className="text-sm text-blueGray-400">Groups</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">89</span><span className="text-sm text-blueGray-400">Likes</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
              <h1 className="text-4xl font-bold leading-normal text-blueGray-700 mb-2">
                  Welcome Back!
                </h1>
                <h5 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700"> 
                Jenna Stones
                </h5>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  Los Angeles, California
                </div>
                <div className="mb-2 text-blueGray-600 mt-10">
                  Solution Architect - Creative Tim Officer
                </div>
                <div className="mb-2 text-blueGray-600">
                  University of California
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut consectetur non, velit, aspernatur doloremque corporis molestias nihil commodi placeat impedit, quam veniam illum ut odio? Laborum quaerat odio eligendi numquam. Neque modi incidunt perferendis ex labore pariatur at mollitia veritatis officia quisquam fuga provident, dignissimos est facilis? Corrupti, aspernatur.
                    </p>
                    <Link href="/Profile" className="font-normal text-red-400">Show more</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
