import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import Link from 'next/link';
// import { auth } from "../firebase";
import useAuth from '../hooks/useAuth';
import Spinner from '../components/Spinner';
import { toast } from 'react-toastify';
import useFieldValidation from '../helpers/validations';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const { password, setPassword, email, setEmail, loading, registerUser } =
    useAuth();
  const { validateEmail, validatePassword } = useFieldValidation();

  const handleRegister = async (email, password) => {
    if (!validateEmail(email)) {
      if (email.length === 0) {
        toast.error('Enter an Email Address');
      } else {
        toast.error('Please enter a valid email address');
      }
    } else if (!validatePassword(password)) {
      if (password.length === 0) {
        toast.error('Enter a Password');
      } else if (password.length < 6) {
        toast.error('Password must be at least 6 characters long');
      } else {
        toast.error(
          'Password must contain letters, numbers, and a special character.'
        );
      }
    } else {
      registerUser(email, password);
    }
  };

  return (
    <div className='font-mono my-20'>
      <div className='w-full lg:w-5/12 bg-white p-5 rounded-lg mx-auto'>
        <h3 className='pt-4 text-2xl text-center'>Create an Account!</h3>
        <form
          className='px-8 pt-6 pb-8 mb-4 bg-white rounded'
          // onSubmit={signUp}
        >
          <div className='mb-4'>
            <div className='mb-4 md:mr-2 md:mb-0'>
              <label
                className='block mb-2 text-sm font-bold text-gray-700'
                for='fullName'
              >
                Full Name
              </label>
              <input
                className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                id='fullName'
                type='text'
                placeholder='Full Name'
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </div>
          <div className='mb-4'>
            <label
              className='block mb-2 text-sm font-bold text-gray-700'
              for='email'
            >
              Email
            </label>
            <input
              className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <div className='mb-4 md:mr-2 md:mb-0'>
              <label
                className='block mb-2 text-sm font-bold text-gray-700'
                for='password'
              >
                Password
              </label>
              <input
                className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                id='password'
                type='password'
                placeholder='*********'
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className='text-xs italic text-red-500'>
                Please choose a password.
              </p>
            </div>
          </div>
          <div className='mb-6 text-center'>
            <Link href=''>
              <button
                className='w-full px-4 py-2 font-bold text-black bg-[#00df9a] rounded-full hover:bg-[#47ffc5] focus:outline-none focus:shadow-outline'
                type='submit'
                onClick={(e) => {
                  e.preventDefault();
                  handleRegister(email, password);
                }}
              >
                {loading ? <Spinner /> : 'Register'}
              </button>
            </Link>
          </div>
          <hr className='mb-6 border-t' />
          <div className='text-center'>
            <Link
              href='#'
              className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800'
            >
              Forgot Password?
            </Link>
          </div>
          <div className='text-center'>
            <Link
              href='/login'
              className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800'
            >
              Already have an account? Login!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
