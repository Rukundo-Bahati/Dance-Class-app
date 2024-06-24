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

          <button
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            className="text-white hover:text-purple-400 cursor-pointer list-none duration-200  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
            type="button"
          >
            PAGES{" "}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdownHover"
            className="z-100 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownHoverButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  EVENTS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  GALLERY
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  PRICING
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
              <Link to="/shop">SHOP</Link>
                </a>
              </li>
            </ul>
          </div>

          <li className="hover:text-purple-500 cursor-pointer list-none duration-200">
            <Link to="/blog">BLOG</Link>
          </li>
          <li className="hover:text-purple-500 cursor-pointer list-none duration-200">
            <Link to="/contact">CONTACT</Link>
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
