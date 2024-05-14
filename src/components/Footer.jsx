import Link from 'next/link';
import {
  FaYoutubeSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          <Link href="/">EduSphere</Link>
        </h1>
        <p className="py-4">
          You may be interested in visiting our social media handles. Do well to
          like our page, follow us and share our content with your loved ones!
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <Link href="https://www.facebook.com/aishatadewoyin.page" target='_blank'>
            <FaFacebookSquare size={30} />
          </Link>
          <Link href="https://www.instagram.com/aishat_adewoyin" target='_blank'>
            <FaInstagram size={30} />
          </Link>
          <Link href="https://twitter.com/aishaadewoyin" target='_blank'>
            <FaTwitterSquare size={30} />
          </Link>
          <Link href="https://github.com/AishatAdewoyin" target='_blank'>
            <FaGithubSquare size={30} />
          </Link>
          <Link href="https://www.youtube.com/@codebytesbyaishat" target='_blank'>
            <FaYoutubeSquare size={30} />
          </Link>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">
              <Link href="/">Analytics</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/">Marketing</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/">Commerce</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/">Insights</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">
              <Link href="/">Pricing</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/">Documentation</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/">Guides</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/">API Status</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">
              <Link href="/About">About</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/">Blog</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/Careers">Career</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/">News</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">
              <Link href="/claim">Claim</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/policy">Policy</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/terms">Terms</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
