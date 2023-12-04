import React from 'react';
// import { Link } from 'react-router-dom';
import Link from 'next/link';

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-black bg-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want to learn more about other services <br /> available at Edusphere?
          </h1>
          <p>Sign up for our newsletter to stay updated.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md border border-red-600 text-black'
              type='email'
              placeholder='Enter Email'
            />
            <Link href="/"><button className='bg-[#00df9a] text-black rounded-md font-medium w-[150px] ml-4 my-6 px-6 py-3'>
              Join Us
            </button></Link>
          </div>
          <p>
            We protect your data. Read our{' '}
            <span className='text-red-600'><Link href="/">Privacy Policy.</Link></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;