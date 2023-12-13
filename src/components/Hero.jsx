import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Link from "next/link";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Connect.', 'Collaborate.', 'Thrive.'],
      typeSpeed: 120,
      backSpeed: 140,
      loop: true,
    };

    if (typedRef.current) {
      const typed = new Typed(typedRef.current, options);
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] p-2'>
          THE SCHOOL'S SOCIAL HUB
        </p>
        <h1 className='md:text-6xl sm:text-6xl text-4xl md:py-6'>
          Welcome to EduSphere
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-4xl text-xl py-4'>
            Here, We 
          </p>
          <span ref={typedRef} className='md:text-4xl sm:text-4xl md:pl-4 text-red-400 pl-2' />
        </div>
        <p className='md:text-l text-l text-gray-400'>The dynamic social media platform designed exclusively for students and administrators of our school. eduSphere is more than just a virtual space; it's a vibrant community where knowledge meets collaboration, and connections flourish.</p>
        <Link href='/signup'><button className='bg-[#00df9a] w-[300px] rounded-md font-bold my-6 mx-auto py-3 text-black'>Join Us</button></Link>
      </div>
    </div>
  );
};

export default Hero;
