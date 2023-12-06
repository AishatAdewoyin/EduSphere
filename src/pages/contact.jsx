import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function contact() {
  return (
    <div className="bg-[#1c002d]">
      <Navbar></Navbar>
      <div className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.5734284008267!2d7.402300275658205!3d9.102566287831786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e752cfc5557e7%3A0xcc7ed1f045d79b27!2sAptech%20Computer%20Education%20Gwarinpa%20Centre!5e0!3m2!1sen!2sng!4v1701781376177!5m2!1sen!2sng"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Send Us a Message Today
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur aspernatur odiototam eum corporis porro perspiciatis
              accusantium? Ab, natus?
            </p>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-[#1c002d] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-[#1c002d] border-0 py-2 px-6 focus:outline-none hover:bg-[#591c7f] rounded text-lg">
              Button
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default contact;
