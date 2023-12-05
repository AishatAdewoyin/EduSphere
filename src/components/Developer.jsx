import React from 'react';
import Aishat from '../images/aishat_adewoyin.png';
import Image from 'next/image';
// import { Link } from "react-router-dom"; 
// import Link from 'next/link';

const Developer = () => {
  return (
    <div className='w-full py-16 px-4 text-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <Image 
        src={Aishat}
        className='w-[500px] mx-auto rounded-full my-4' alt='/'
        />
        {/* <img   /> */}
        <div className='flex flex-col justify-center'>
          <p className='text-red-400 font-bold '>GET TO KNOW THE DEVELOPER</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Meet Aishat Adewoyin</h1>
          <p className='text-gray-400'>
          A passionate software developer with an unwavering commitment to crafting visually stunning and user-friendly websites. Dedicated to blending cutting-edge technology with a keen eye for design, I bring creativity and precision to every project, ensuring an exceptional user experience and aesthetic appeal that captivates and engages visitors.
          </p>
          <a href="https://www.linkedin.com/in/aishatadewoyin/" target='_blank'><button className='bg-[#00df9a] text-black w-[300px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Connect With me on LinkedIn</button></a>
        </div>
      </div>
    </div>
  );
};

export default Developer;