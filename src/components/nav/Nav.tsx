import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-800 text-white border  border-blue-800 fixed top-0 w-screen z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <h2 className="bg-gradient-to-r text-center from-blue-500 to-purple-500 text-transparent bg-clip-text font-extrabold m-2">
          SPARK
        </h2>
        <div className="hidden md:flex space-x-6">
          <li className="hover:text-purple-400 cursor-pointer list-none duration-200">
            <Link to="/">HOME</Link>
          </li>
          <li className="hover:text-purple-400 cursor-pointer list-none duration-200">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="hover:text-purple-400 cursor-pointer list-none duration-200">
            <Link to="/class">CLASSES</Link>
          </li>
          <li className="hover:text-purple-500 cursor-pointer list-none duration-200">
            PAGES
          </li>
          <li className="hover:text-purple-500 cursor-pointer list-none duration-200">
            <Link to="/blog">BLOG</Link>
          </li>
          <li className="hover:text-purple-500 cursor-pointer list-none duration-200">
            CONTACT
          </li>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <BsSearch className="text-xl cursor-pointer hover:text-gray-400" />
          <button className="px-4 py-2 bg-indigo-700 hover:bg-blue-700 text-white font-semibold rounded">
            REGISTER NOW
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <AiOutlineClose className="text-2xl" />
            ) : (
              <AiOutlineMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-6 py-4 bg-gray-800">
          <ul className="flex flex-col space-y-4">
            <li className="hover:text-gray-400 cursor-pointer">HOME</li>
            <li className="hover:text-gray-400 cursor-pointer">ABOUT</li>
            <li className="hover:text-gray-400 cursor-pointer">CLASSES</li>
            <li className="hover:text-gray-400 cursor-pointer">PAGES</li>
            <li className="hover:text-gray-400 cursor-pointer">CONTACT US</li>
            <BsSearch className="text-xl cursor-pointer hover:text-gray-400" />
            <button className="px-4 py-2 bg-indigo-900 hover:bg-blue-700 text-white font-semibold rounded mt-4">
              REGISTER NOW
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
