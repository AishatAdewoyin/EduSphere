import React from 'react';
// import Typed from 'react-typed';

const Hero = () => {
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
          {/* <Typed
          className='md:text-4xl sm:text-4xl md:pl-4 text-red-400 pl-2'
            strings={['Connect.', 'Colaborate.', 'Thrive.']}
            typeSpeed={120}
            backSpeed={140}
            loop
          /> */}
        </div>
        <p className='md:text-l text-l text-gray-600'>The dynamic social media platform designed exclusively for students and administrators of our school. eduSphere is more than just a virtual space; it's a vibrant community where knowledge meets collaboration, and connections flourish.</p>
        <a href='../pages/signup.jsx'><button className='bg-[#00df9a] w-[300px] rounded-md font-bold my-6 mx-auto py-3 text-black'>Join Us</button></a>
      </div>
    </div>
  );
};

export default Hero;