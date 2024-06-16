import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-800 text-white border  border-blue-800 shadow-md shadow-violet-600">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">Spark</h1>
        <div className="hidden md:flex space-x-6">
          <li className="hover:text-purple-400 cursor-pointer list-none duration-200">
            HOME
          </li>
          <li className="hover:text-purple-400 cursor-pointer list-none duration-200">
            ABOUT
          </li>
          <li className="hover:text-purple-400 cursor-pointer list-none duration-200">
            CLASSES
          </li>
          <li className="hover:text-purple-500 cursor-pointer list-none duration-200">
            PAGES
          </li>
          <li className="hover:text-purple-500 cursor-pointer list-none duration-200">
            CONTACT US
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
