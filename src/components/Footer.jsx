import React from "react";
import {
  FaYoutubeSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">EduSphere</h1>
        <p className="py-4">
          You may be interested in visiting our sucial media handles. Do well to
          like our page, follow us and share our content with your loved ones!
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <a href="https://www.facebook.com/aishatomoadewoyin" target="_blank">
            <FaFacebookSquare size={30} />
          </a>
          <a href="https://www.instagram.com/aishat_adewoyin" target="_blank">
            <FaInstagram size={30} />
          </a>
          <a href="https://twitter.com/aishaadewoyin" target="_blank">
            <FaTwitterSquare size={30} />
          </a>
          <a href="https://github.com/Aishat452" target="_blank">
            <FaGithubSquare size={30} />
          </a>
          <a href="https://www.youtube.com/c/DigitalIntellectualHub"target="_blank">
            <FaYoutubeSquare size={30} />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">
              <a href="/analytics">Analytics</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/marketing">Marketing</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/commerce">Commerce</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/insights">Insights</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">
              <a href="/pricing">Pricing</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/documentation">Documentation</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/guides">Guides</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/api-status">API Status</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">
              <a href="/about">About</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/blog">Blog</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/jobs">Jobs</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/press">Press</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">
              <a href="/claim">Claim</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/policy">Policy</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/terms">Terms</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
