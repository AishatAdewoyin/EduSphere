import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white w-full">
      <div>
        <Link href="/">
          <h1 className="text-3xl font-bold text-[#00df9a] cursor-pointer">
            EduSphere
          </h1>
        </Link>
      </div>
      <ul className="hidden md:flex space-x-4">
        <li>
          <Link href="/" className="p-4">
            Home
          </Link>
        </li>
        <li>
          <Link href="/careers" className="p-4">
            Careers
          </Link>
        </li>
        <li>
          <Link href="/login" className="p-4">
            Login
          </Link>
        </li>
        <li>
          <Link href="/about" className="p-4">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="p-4">
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={`${
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }`}
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4 cursor-pointer">
          <Link href="/">EduSphere</Link>
        </h1>
        <ul className="space-y-4">
          <li>
            <Link href="/" className="p-4 border-b border-gray-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/Careers" className="p-4 border-b border-gray-600">
              Career
            </Link>
          </li>
          <li>
            <Link href="/Login" className="p-4 border-b border-gray-600">
              Profile
            </Link>
          </li>
          <li>
            <Link href="/About" className="p-4 border-b border-gray-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="p-4">
              Contact
            </Link>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Navbar;
