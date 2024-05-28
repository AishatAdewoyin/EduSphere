import React from "react";
import NavbarMini from "../components/NavbarMini";
import Link from "next/link";
import Image from "next/image";
import studentImage from "../images/laptop.jpeg";

function Connect() {
  return (
    <div>
      <NavbarMini></NavbarMini>
      <div className="items-center lg:w-5/12 p-5 mx-auto">
        <div className="bg-white rounded-lg shadow-xl border py-5 px-10">
          <h1 className="text-2xl font-bold text-center mb-4">Connect</h1>
          <div className="flex justify-center items-center mb-8">
            <div className="w-1/5">
              <Image
                className="w-12 h-12 rounded-full border border-gray-100 shadow-sm"
                src={studentImage}
                alt="user image"
              />
            </div>
            <div className="w-4/5">
              <div>
                <span className="font-semibold text-gray-800">Ezio Dani</span>
                <span className="text-gray-400"> wants to be your friend</span>
              </div>
              <div className="font-semibold">
                <Link href="" className="text-blue-600 mr-2">
                  Accept
                </Link>
                <Link href="" className="text-gray-400">
                  Decline
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mb-8">
            <div className="w-1/5">
              <Image
                className="w-12 h-12 rounded-full border border-gray-100 shadow-sm"
                src={studentImage}
                alt="user image"
              />
            </div>
            <div className="w-4/5">
              <div>
                <span className="font-semibold text-gray-800">Bianca Chen</span>
                <span className="text-gray-400"> wants to be your friend</span>
              </div>
              <div className="font-semibold">
                <Link href="" className="text-blue-600 mr-2">
                  Accept
                </Link>
                <Link href="" className="text-gray-400">
                  Decline
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mb-8">
            <div className="w-1/5">
              <Image
                className="w-12 h-12 rounded-full border border-gray-100 shadow-sm"
                src={studentImage}
                alt="user image"
              />
            </div>
            <div className="w-4/5">
              <div>
                <span className="font-semibold text-gray-800">Ezio Dani</span>
                <span className="text-gray-400"> wants to be your friend</span>
              </div>
              <div className="font-semibold">
                <Link href="" className="text-blue-600 mr-2">
                  Accept
                </Link>
                <Link href="" className="text-gray-400">
                  Decline
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mb-8">
            <div className="w-1/5">
              <Image
                className="w-12 h-12 rounded-full border border-gray-100 shadow-sm"
                src={studentImage}
                alt="user image"
              />
            </div>
            <div className="w-4/5">
              <div>
                <span className="font-semibold text-gray-800">Ezio Dani</span>
                <span className="text-gray-400"> wants to be your friend</span>
              </div>
              <div className="font-semibold">
                <Link href="" className="text-blue-600 mr-2">
                  Accept
                </Link>
                <Link href="" className="text-gray-400">
                  Decline
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mb-8">
            <div className="w-1/5">
              <Image
                className="w-12 h-12 rounded-full border border-gray-100 shadow-sm"
                src={studentImage}
                alt="user image"
              />
            </div>
            <div className="w-4/5">
              <div>
                <span className="font-semibold text-gray-800">Ezio Dani</span>
                <span className="text-gray-400"> wants to be your friend</span>
              </div>
              <div className="font-semibold">
                <Link href="" className="text-blue-600 mr-2">
                  Accept
                </Link>
                <Link href="" className="text-gray-400">
                  Decline
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mb-8">
            <div className="w-1/5">
              <Image
                className="w-12 h-12 rounded-full border border-gray-100 shadow-sm"
                src={studentImage}
                alt="user image"
              />
            </div>
            <div className="w-4/5">
              <div>
                <span className="font-semibold text-gray-800">Ezio Dani</span>
                <span className="text-gray-400"> wants to be your friend</span>
              </div>
              <div className="font-semibold">
                <Link href="" className="text-blue-600 mr-2">
                  Accept
                </Link>
                <Link href="" className="text-gray-400">
                  Decline
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mb-8">
            <div className="w-1/5">
              <Image
                className="w-12 h-12 rounded-full border border-gray-100 shadow-sm"
                src={studentImage}
                alt="user image"
              />
            </div>
            <div className="w-4/5">
              <div>
                <span className="font-semibold text-gray-800">Ezio Dani</span>
                <span className="text-gray-400"> wants to be your friend</span>
              </div>
              <div className="font-semibold">
                <Link href="" className="text-blue-600 mr-2">
                  Accept
                </Link>
                <Link href="" className="text-gray-400">
                  Decline
                </Link>
              </div>
            </div>
          </div>
          <div className="text-right mb-8">
           <Link href={"/Profile"}><button className="text-1xl bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded font-bold">Go to Profile</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;
