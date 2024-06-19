import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-slate-950 p-6">
      <footer className="rounded-lg shadow dark:bg-gray-800">
        <h2 className="bg-gradient-to-r text-center from-blue-500 to-purple-500 text-transparent bg-clip-text font-extrabold m-2">
          SPARK
        </h2>

        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center items-center">
          <ul className="flex flex-wrap justify-center items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                CLASSES
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                PAGES
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center gap-4 p-4">
        <BsTwitter className=" border border-blue-500 text-white rounded-full text-4xl p-2 bg-purple-900 mb-2" />
      <BsFacebook className=" border border-blue-500 text-white rounded-full text-4xl p-2 bg-purple-900  mb-2" />
      <BsInstagram className=" border border-blue-500 text-white rounded-full text-4xl p-2 bg-purple-900 mb-2" />
      <BsYoutube className=" border border-blue-500 text-white rounded-full text-4xl p-2 bg-purple-900   mb-2" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
