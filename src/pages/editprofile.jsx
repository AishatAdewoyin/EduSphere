import Link from 'next/link';
import React, { useState } from 'react';

import NavbarMini from '../components/NavbarMini';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../helpers/firebase';
import Spinner from '../components/Spinner';
import { toast } from 'react-toastify';
import Router from 'next/router';

const EditProfile = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [job, setJob] = useState('');
  const [company, setCompany] = useState('');
  const [bio, setBio] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const router = Router;

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      setIsSaving(true);

      const profileData = {
        name: name,
        location: location,
        job: job,
        company: company,
        bio: bio,
        userId: auth.currentUser?.uid,
        timestamp: serverTimestamp(), // Add the timestamp field
      };

      console.log('profileData: ', profileData);

      addDoc(collection(db, 'profiles'), profileData);

      // Handle success
      toast.success('Profile saved successfully!');
      router.push('/Profile');
    } catch (error) {
      // Handle error
      toast.error('Error saving profile:', error);
      // alert('Error saving profile. Please try again.');
    } finally {
      setIsSaving(false); // Reset loading state whether it succeeds or fails
    }
  };

  return (
    <div className='px-5'>
      <NavbarMini></NavbarMini>

      <div className='w-full lg:w-5/12 bg-white p-5 my-5 font-mono rounded-lg mx-auto'>
        <form className='rounded w-full'>
          <h3 className='py-4 text-2xl text-center'>
            Update Your Profile <br /> With Your Details
          </h3>

          <div className='mb-4'>
            <div className='mb-4 md:mr-2 md:mb-0'>
              <label
                className='block mb-2 text-sm font-bold text-gray-700 full-name'
                for='fullName'
              >
                Your Name
              </label>
              <input
                className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                id='fullName'
                type='text'
                placeholder='Your Full Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className='mb-4'>
            <div className='mb-4 md:mr-2 md:mb-0'>
              <label
                className='block mb-2 text-sm font-bold text-gray-700 location'
                for='location'
              >
                Location
              </label>
              <input
                className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                id='location'
                type='text'
                placeholder='Los Angeles, California'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          <div className='mb-4'>
            <div className='mb-4 md:mr-2 md:mb-0'>
              <label
                className='block mb-2 text-sm font-bold text-gray-700 job-title'
                for='jobtitle'
              >
                Job Title
              </label>
              <input
                className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                id='jobtitle'
                type='text'
                placeholder='Solution Architect - Creative Tim Officer'
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
            </div>
          </div>
          <div className='mb-4'>
            <div className='mb-4 md:mr-2 md:mb-0'>
              <label
                className='block mb-2 text-sm font-bold text-gray-700 workplace'
                for='workplace'
              >
                Company Name
              </label>
              <input
                className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                id='workplace'
                type='text'
                placeholder='Amazon Web Services, Inc. or Meta Etc'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
          </div>
          <div className='mb-4'>
            <div className='mb-4 md:mr-2 md:mb-0'>
              <label
                className='block mb-2 text-sm font-bold text-gray-700 bio'
                for='bio'
              >
                Bio
              </label>
              <textarea
                className='w-full h-20 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline resize-none'
                id='bio'
                type='text'
                placeholder='Bio'
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
          </div>
          <div className='mb-6 text-center'>
            <Link href=''>
              <button
                className='w-full px-4 py-2 font-bold text-black bg-[#00df9a] rounded-full hover:bg-[#47ffc5] focus:outline-none focus:shadow-outline'
                // type='submit'
                onClick={handleSave}
              >
                {isSaving ? <Spinner /> : 'Update'}
              </button>
            </Link>
          </div>
          <hr className='mb-6 border-t' />
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
