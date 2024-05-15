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
    <div className="py-16 px-16 text-gray-300">
      <div className='text-center'>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          <Link href="/">EduSphere</Link>
        </h1>
        <p className="py-4">
          You may be interested in visiting our social media handles. Do well to
          like our page, follow us and share our content with your loved ones!
        </p>
        <div className="flex justify-center gap-6 my-6">
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
    </div>
  );
};

export default Footer;
