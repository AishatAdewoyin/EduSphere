import React, { useState, useEffect } from 'react';
import PrivateRoute from '../components/PrivateRoute';
import Spinner from '../components/Spinner';
import { auth, db } from '../helpers/firebase';
import NavbarMini from '../components/NavbarMini';
import {
  collection,
  query,
  where,
  onSnapshot,
  limit,
  orderBy,
} from 'firebase/firestore';
const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const profileQuery = query(
          collection(db, 'profiles'),
          where('userId', '==', auth.currentUser?.uid),
          // orderBy('timestamp', 'desc'),
          limit(1)
        );

        console.log('current data:', profileQuery);

        const unsubscribe = onSnapshot(profileQuery, (querySnapshot) => {
          if (!querySnapshot.empty) {
            // Check if the querySnapshot is not empty
            querySnapshot.forEach((doc) => {
              const data = doc.data();
              console.log('Profile data:', data);
              setProfileData(data);
              setLoading(false);
            });
          } else {
            // Set profileData to null or an empty object if no data is found
            setProfileData(null);
            setLoading(false);
          }
        });

        // console.log('Profile data:', profileData);

        return () => unsubscribe();
      } catch (error) {
        // Handle error while fetching profile data
        console.error('Error fetching profile data:', error);
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
    <PrivateRoute>
      <div className='profile-page'>
        <NavbarMini />
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
      </div>
    </PrivateRoute>
  );
};

export default Profile;
