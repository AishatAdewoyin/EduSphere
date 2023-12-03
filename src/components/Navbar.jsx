import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white w-full">
      <Link to="/">
        <h1 className="text-3xl font-bold text-[#00df9a]">EduSphere</h1>
      </Link>
      <ul className="hidden md:flex">
        <li>
          <Link to="/" className="p-4">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Careers" className="p-4">
            Careers
          </Link>
        </li>
        <li>
          <Link to="/Login" className="p-4">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/About" className="p-4">
            About
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="p-4">
            Contact
          </Link>
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
          <Link to="/" className="p-4 border-b border-gray-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Careers" className="p-4 border-b border-gray-600">
            Career
          </Link>
        </li>
        <li>
          <Link to="/Login" className="p-4 border-b border-gray-600">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/About" className="p-4 border-b border-gray-600">
            About
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="p-4">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
