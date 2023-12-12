import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

function about() {
  return (
    <div className="text-[#00df9a]">
      <Navbar></Navbar>

<div className="container mx-auto mt-4 mb-8 px-10">

    <p className="text-lg text-white mb-8 leading-relaxed">
        Welcome to eduSphere, your school's exclusive social hub designed to foster collaboration, enhance communication, and create a thriving community for both students and administrators. At eduSphere, we believe in the power of connection and the transformative impact it can have on your educational journey.
    </p>

    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>

    <p className="text-lg text-white mb-8 leading-relaxed">
        Our mission at eduSphere is to provide a dedicated platform that goes beyond the traditional boundaries of education. We aim to create an interactive space where students can connect with peers, join meaningful discussions, and stay informed about the latest happenings in the school community. eduSphere is not just a social network; it's a catalyst for academic and personal growth.
    </p>

    <h2 className="text-2xl font-bold mb-4">Why Choose eduSphere?</h2>

    <ul className="list-disc ml-8 text-lg text-white mb-8">
        <li><span className="font-bold text-red-400">Tailored for Education:</span> eduSphere is crafted specifically to meet the unique needs of students and administrators, ensuring a secure and enriching environment.</li>
        <li><span className="font-bold text-red-400">Promotes Collaboration:</span> Foster collaboration and teamwork through group interactions, discussions, and project collaborations.</li>
        <li><span className="font-bold text-red-400">Enhances Communication:</span> Bridge the gap between students and administrators. Receive timely updates, announcements, and personalized communication.</li>
        <li><span className="font-bold text-red-400">Centralized Information:</span> Access all important school-related information in one centralized platform, making your academic journey smoother.</li>
    </ul>

    <h2 className="text-2xl font-bold mb-4">Join eduSphere Today</h2>

    <p className="text-lg text-white mb-8 leading-relaxed">
        Ready to experience a new era of connectivity and collaboration? Join eduSphere today and embark on a journey where education meets innovation. Connect, collaborate, and thrive in your school community like never before.
    </p>

    <div className="text-center">
        <Link href="/Signup" className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full inline-block">Join Us Now</Link>
    </div>

</div>
  </div>
  )
}

export default about