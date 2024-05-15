import React from "react";
import Link from "next/link";
import Aishat from "../images/aishat_adewoyin.png";
import Blessing from "../images/blessing_udeji.png";
import Image from "next/image";

const Developer = () => {
  return (
    <div className="py-16 px-6">
      <h1 className="text-red-400 text-center md:text-4xl sm:text-3xl text-2xl font-bold py-2">
        GET TO KNOW THE DEVELOPERS
      </h1>
      <div className="py-16 px-10 gap-4 text-white">
        <div className="max-w-[1240px] mx-auto grid gap-2 py-6 md:grid-cols-2">
          <Image
            src={Aishat}
            className="w-[400px] mx-auto rounded-full"
            alt="/"
          />
          {/* <img   /> */}
          <div className="text-center">
           <div className="py-6">
           <h1 className="md:text-4xl sm:text-3xl text-2xl text-center font-bold">
             Meet Aishat Adewoyin
            </h1>
            <p className="text-center">BackEnd Engineer</p>
           </div>
            <p className="text-gray-400">
              A passionate software developer with an unwavering commitment to
              crafting visually stunning, user-friendly and fully functional
              websites. Dedicated to blending cutting-edge technology with a keen eye for
              design, Blessing continues to bring creativity and precision to
              every project.
            </p>
            <Link
              href="https://www.linkedin.com/in/aishatadewoyin/"
              target="_blank"
            >
              <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
                Connect on LinkedIn
              </button>
            </Link>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto grid gap-2 md:grid-cols-2">
          <Image
            src={Blessing}
            className="w-[400px] mx-auto rounded-full"
            alt="/"
          />
          {/* <img   /> */}
          <div className="text-center">
            <div className="py-6">
            <h1 className="md:text-4xl sm:text-3xl text-2xl text-center font-bold">
             Meet Blessing Udeji
            </h1>
            <p className="text-center">FrontEnd Engineer</p>
            </div>
            <p className="text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum velit, voluptas maxime qui atque, cupiditate necessitatibus ad libero itaque, quia praesentium sunt placeat id ipsam sed et dolorum quasi deserunt suscipit assumenda doloribus possimus laboriosam nemo corrupti. Corporis tenetur soluta laborum cum error quasi aspernatur eius suscipit tempore! Eligendi, soluta accusamus. 
            </p>
            <Link
              href="https://www.linkedin.com/in/blessing-udeji/"
              target="_blank"
            >
              <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
                Connect on LinkedIn
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
