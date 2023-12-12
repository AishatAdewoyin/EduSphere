import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";

function Students() {
  return (
    <div>
      <Navbar></Navbar>
      {/* Profile page remains edit and settings 
      Assignment: Create an image gallerry that displays random images when a button is clicked */}
<div className="flex items-center justify-center h-[80vh]">
   <div className="bg-white rounded-lg shadow-xl border p-8 w-3xl">
     <div className="mb-4">
       <h1 className="font-semibold text-gray-800">Invite a Friend</h1>
     </div>
     <div className="flex justify-center items-center mb-8">
       <div className="w-1/5">
         <img className="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="../images/aishat_adewoyin.png" alt="user image" />
       </div>
       <div className="w-4/5">
         <div>
           <span className="font-semibold text-gray-800">Ezio Dani</span>
           <span className="text-gray-400"> wants to be your friend</span>
         </div>
         <div className="font-semibold">
           <Link href="" className="text-blue-600 mr-2">Accept</Link>
           <Link href="" className="text-gray-400">Decline</Link>
         </div>
       </div>
     </div>
     <div className="flex justify-center items-center">
       <div className="w-1/5">
         <img className="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="../images/aishat_adewoyin.png" alt="user image" />
       </div>
       <div className="w-4/5">
         <div>
           <span className="font-semibold text-gray-800">Bianca Chen</span>
           <span className="text-gray-400"> wants to be your friend</span>
         </div>
         <div className="font-semibold">
           <Link href="" className="text-blue-600 mr-2">Accept</Link>
           <Link href="" className="text-gray-400">Decline</Link>
         </div>
       </div>
     </div>
     <div className="flex justify-center items-center mb-8">
       <div className="w-1/5">
         <img className="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="../images/aishat_adewoyin.png" alt="user image" />
       </div>
       <div className="w-4/5">
         <div>
           <span className="font-semibold text-gray-800">Ezio Dani</span>
           <span className="text-gray-400"> wants to be your friend</span>
         </div>
         <div className="font-semibold">
           <Link href="" className="text-blue-600 mr-2">Accept</Link>
           <Link href="" className="text-gray-400">Decline</Link>
         </div>
       </div>
     </div>
     <div className="flex justify-center items-center mb-8">
       <div className="w-1/5">
         <img className="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="../images/aishat_adewoyin.png" alt="user image" />
       </div>
       <div className="w-4/5">
         <div>
           <span className="font-semibold text-gray-800">Ezio Dani</span>
           <span className="text-gray-400"> wants to be your friend</span>
         </div>
         <div className="font-semibold">
           <Link href="" className="text-blue-600 mr-2">Accept</Link>
           <Link href="" className="text-gray-400">Decline</Link>
         </div>
       </div>
     </div>
     <div className="flex justify-center items-center mb-8">
       <div className="w-1/5">
         <img className="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="../images/aishat_adewoyin.png" alt="user image" />
       </div>
       <div className="w-4/5">
         <div>
           <span className="font-semibold text-gray-800">Ezio Dani</span>
           <span className="text-gray-400"> wants to be your friend</span>
         </div>
         <div className="font-semibold">
           <Link href="" className="text-blue-600 mr-2">Accept</Link>
           <Link href="" className="text-gray-400">Decline</Link>
         </div>
       </div>
     </div>
     <div className="flex justify-center items-center mb-8">
       <div className="w-1/5">
         <img className="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="../images/aishat_adewoyin.png" alt="user image" />
       </div>
       <div className="w-4/5">
         <div>
           <span className="font-semibold text-gray-800">Ezio Dani</span>
           <span className="text-gray-400"> wants to be your friend</span>
         </div>
         <div className="font-semibold">
           <Link href="" className="text-blue-600 mr-2">Accept</Link>
           <Link href="" className="text-gray-400">Decline</Link>
         </div>
       </div>
     </div>
     <div className="flex justify-center items-center mb-8">
       <div className="w-1/5">
         <img className="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="../images/aishat_adewoyin.png" alt="user image" />
       </div>
       <div className="w-4/5">
         <div>
           <span className="font-semibold text-gray-800">Ezio Dani</span>
           <span className="text-gray-400"> wants to be your friend</span>
         </div>
         <div className="font-semibold">
           <Link href="" className="text-blue-600 mr-2">Accept</Link>
           <Link href="" className="text-gray-400">Decline</Link>
         </div>
       </div>
     </div>   
   </div>
 </div>
      </div>
  );
}

export default Students;
