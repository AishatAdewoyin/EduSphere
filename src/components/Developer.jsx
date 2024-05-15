import React from 'react';
import Link from 'next/link';
import Aishat from '../images/aishat_adewoyin.png';
import Image from 'next/image';
// import { Link } from "react-router-dom"; 
// import Link from 'next/link';

const Developer = () => {
  return (
    <div className='py-16 px-6'>
      <h1 className='text-red-400 text-center md:text-4xl sm:text-3xl text-2xl font-bold py-2'>GET TO KNOW THE DEVELOPERS</h1>
    <div className='grid md:grid-cols-2 py-16 px-6 text-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <Image 
        src={Aishat}
        className='w-[400px] mx-auto rounded-full my-4' alt='/'
        />
        {/* <img   /> */}
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>Aishat Adewoyin</h1>
          <p>BackEnd Engineer</p>
          <p className='text-gray-400'>
          A passionate software developer with an unwavering commitment to crafting visually stunning, user-friendly and fully functional websites.
          </p>
          <Link href="https://www.linkedin.com/in/aishatadewoyin/" target='_blank'><button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Connect on LinkedIn</button></Link>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <Image 
        src={Aishat}
        className='w-[400px] mx-auto rounded-full my-4' alt='/'
        />
        {/* <img   /> */}
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>Blessing Udeji</h1>
          <p>FrontEnd Engineer</p>
          <p className='text-gray-400'>
          Dedicated to blending cutting-edge technology with a keen eye for design, Blessing continues to bring creativity and precision to every project.
          </p>
          <Link href="https://www.linkedin.com/in/aishatadewoyin/" target='_blank'><button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Connect on LinkedIn</button></Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Developer;