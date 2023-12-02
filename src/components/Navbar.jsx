import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white w-full">
      <a href="#">
        <h1 className="text-3xl font-bold text-[#00df9a]">EduSphere</h1>
      </a>
      <ul className="hidden md:flex">
        <li>
          <a href="#" className="p-4">
            Home
          </a>
        </li>
        <li>
          <a href="../pages/careers.jsx" className="p-4">
            Careers
          </a>
        </li>
        <li>
          <a href="../pages/login.jsx" className="p-4">
            Profile
          </a>
        </li>
        <li>
          <a href="../pages/about.jsx" className="p-4">
            About
          </a>
        </li>
        <li>
          <a href="../pages/contact.jsx" className="p-4">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          EduSphere
        </h1>
        <li>
          <a href="#" className="p-4 border-b border-gray-600">Home</a>
        </li>
        <li>
          <a href="../pages/careers.jsx" className="p-4 border-b border-gray-600">Career</a>
        </li>
        <li>
          <a href="../pages/login.jsx" className="p-4 border-b border-gray-600">Profile</a>
        </li>
        <li>
          <a href="../pages/about.jsx" className="p-4 border-b border-gray-600">About</a>
        </li>
        <li>
          <a href="../pages/contact.jsx" className="p-4 border-b border-gray-600">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
