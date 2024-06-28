import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setDropdownOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <div className="bg-gray-800 text-white border border-blue-800 fixed top-0 w-screen z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <h2 className="bg-gradient-to-r text-center from-blue-500 to-purple-500 text-transparent bg-clip-text font-extrabold m-2 text-4xl">
          SPARK
        </h2>
        <div className="hidden md:flex space-x-6 items-center">
          <ul className="flex space-x-6 items-center">
            <li className="hover:text-purple-400 cursor-pointer list-none duration-200">
              <Link to="/">HOME</Link>
            </li>
            <li className="hover:text-purple-400 cursor-pointer list-none duration-200">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="hover:text-purple-400 cursor-pointer list-none duration-200">
              <Link to="/class">CLASSES</Link>
            </li>
            <li
              className="relative"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button
                className="text-white hover:text-purple-400 cursor-pointer list-none duration-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div
                  id="dropdownHover"
                  className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <Link
                        to="/events"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        EVENTS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/gallery"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        GALLERY
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/pricing"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        PRICING
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shop"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        SHOP
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="hover:text-purple-500 cursor-pointer list-none duration-200">
              <Link to="/blog">BLOG</Link>
            </li>
            <li className="hover:text-purple-500 cursor-pointer list-none duration-200">
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <BsSearch
            className="text-xl cursor-pointer hover:text-gray-400"
            onClick={toggleSearch}
          />
          {searchOpen && (
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                className="ml-2 p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </form>
          )}
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md hover:border hover:border-white duration-300">
            REGISTER
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
            <li className="hover:text-gray-400 cursor-pointer">
              <Link to="/">HOME</Link>
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              <Link to="/class">CLASSES</Link>
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              <Link to="/pages">PAGES</Link>
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              <Link to="/blog">BLOG</Link>
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              <Link to="/contact">CONTACT US</Link>
            </li>
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
