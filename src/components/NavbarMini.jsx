import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const NavbarMini = () => {
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
            Signout
          </Link>
        </li>
        <li>
          <Link href="/listofrooms" className="p-4">
            Connect With Others
          </Link>
        </li>
        <li>
          <Link href="/Message" className="p-4">
            Create a Chat Room
          </Link>
        </li>
        <li>
          <Link href="/editprofile" className="p-4">
            Edit Profile
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden z-50 relative">
  {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
</div>
{nav && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
)}
<ul
  className={`${
    nav
      ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50"
      : "ease-in-out duration-500 fixed left-[-100%] z-50"
  }`}
>
  <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4 cursor-pointer">
    <Link href="/">EduSphere</Link>
  </h1>
  <ul className="space-y-4">
    <li>
      <Link href="/" className="p-4 border-b border-gray-600">
        Signout
      </Link>
    </li>
    <li>
      <Link href="/listofrooms" className="p-4">
        Connect With Others
      </Link>
    </li>
    <li>
      <Link href="/Message" className="p-4">
        Create a Chat Room
      </Link>
    </li>
    <li>
      <Link href="/EditProfile" className="p-4">
        Edit Profile
      </Link>
    </li>
  </ul>
</ul>

    </div>
  );
};

export default NavbarMini;
