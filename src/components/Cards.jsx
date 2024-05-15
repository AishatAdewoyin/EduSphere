import React from "react";
import Image from "next/image";
import Link from "next/link";
import Single from "../images/single.png";
import Double from "../images/double.png";
import Triple from "../images/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[8rem] px-4 bg-white">
      <h1 className="md:text-5xl text-center sm:text-5xl font-bold text-3xl md:py-6 mb-4 text-red-500">
        Why EduSphere?
      </h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 py-[5rem] gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <Image
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8 border-b">
            Tailored for Education
          </h2>
          <div className="text-center font-medium">
            <p className=" mx-8 mt-8">
              EduSphere is specifically designed to meet the unique needs of
              students and administrators, providing a secure and enriching
              environment.
            </p>
          </div>
          <Link href="/Signup" className="bg-[#00df9a] w-[200px] text-center rounded-md font-medium my-6 mx-auto px-6 py-3">Join Us Today</Link>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <Image
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8 border-b">Promotes Collaboration</h2>
          <div className="text-center font-medium">
            <p className=" mx-8 mt-8">
            Foster collaboration and teamwork through group interactions, discussions, and project collaborations.
            </p>
          </div>
          <Link href="/Signup" className="bg-black text-[#00df9a] text-center w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
          Join Us Today
          </Link>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <Image
            className="w-20 mx-auto mt-[-3rem] bg-white"
             src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8 border-b">Enhances Communication</h2>
          <div className="text-center font-medium">
            <p className=" mx-8 mt-8">
            Bridge the gap between students and administrators. Receive timely updates, announcements, and personalized communication.
            </p>
          </div>
          <Link  href="/Signup" className="bg-[#00df9a] w-[200px] text-center rounded-md font-medium my-6 mx-auto px-6 py-3">
          Join Us Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
