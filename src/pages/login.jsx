import React from 'react';
// import AdminLogin from '../components/AdminLogin';
import StudentLogin from '../components/StudentLogin';
import Navbar from '../components/Navbar';

const Login = () => {
  return (
    <div>
      <Navbar />
      {/* <div className='md:flex item-center'> */}
        {/* <AdminLogin /> */}
      {/* </div> */}
      <StudentLogin />
    </div>
  );
};

export default Login;
