import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          THE SCHOOL'S SOCIAL HUB
        </p>
        <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-6'>
          Welcome to EduSphere
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-4xl text-xl font-bold py-4'>
            Here, We 
          </p>
          <Typed
          className='md:text-4xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Connect.', 'Colaborate.', 'Thrive.']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-xl text-xl font-bold text-gray-500'>The dynamic social media platform designed exclusively for students and administrators of our school. eduSphere is more than just a virtual space; it's a vibrant community where knowledge meets collaboration, and connections flourish.</p>
        <a href='../pages/signup.jsx'><button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button></a>
      </div>
    </div>
  );
};

export default Hero;