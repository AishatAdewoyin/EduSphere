import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import { auth } from '../firebase/firebase';
import Navbar from '../components/NavbarMini';
import Link from 'next/link';
import NavbarMini from '../components/NavbarMini';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const userId = auth.currentUser?.uid;
        if (!userId) {
          setLoading(false);
          return;
        }

        const response = await fetch(`/api/profile?userId=${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }

        const data = await response.json();
        setProfileData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setLoading(false);
      }
    };

    if (auth.currentUser) {
      fetchProfileData();
    }
  }, [auth.currentUser]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='profile-page'>
      <NavbarMini></NavbarMini>
      <div className='relative py-10 bg-blueGray-200 bg-green-400'>
        <div className='container mx-auto px-4'>
          <div className='relative flex flex-col min-w-0 break-words bg-white w-full my-20 py-10 shadow-xl rounded-lg -mt-30'>
            <div className='px-6'>
              <div className='text-center mt-12'>
                <h1 className='text-4xl font-bold leading-normal text-blueGray-700 mb-2'>
                  Welcome Back!
                </h1>
                <h5 className='text-2xl font-semibold leading-normal mb-2 text-blueGray-700 full-name'>
                  {profileData?.name || 'User'}
                </h5>
                <div className='text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase location'>
                  {profileData?.location || 'Your Current location'}
                </div>
                <div className='mb-2 text-blueGray-600 mt-10'>
                  {profileData?.company || 'My company'}
                </div>
                {/* <div className='mb-2 text-blueGray-600'>
                  University of California
                </div> */}
              </div>
              <div className='mt-10 py-10 border-t border-blueGray-200 text-center'>
                <div className='flex flex-wrap justify-center'>
                  <div className='w-full lg:w-9/12 px-4'>
                    <p className='mb-4 text-lg leading-relaxed text-blueGray-700'>
                      {profileData?.bio ||
                        'Our mission at eduSphere is to provide a dedicated platform that goes beyond the traditional boundaries of education. We aim to create an interactive space where students can connect with peers, join meaningful discussions, and stay informed about the latest happenings in the school community. eduSphere is not just a social network; its a catalyst for academic and personal growth'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
