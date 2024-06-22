import { useEffect } from "react";
import { BsArrowBarRight } from "react-icons/bs";
import { FaUserCircle, FaCalendar, FaTags, FaComments } from "react-icons/fa";

const Category = () => {
  useEffect(() => {
    const line = document.getElementById("moving-line");
    let position = 0;
    const moveLine = () => {
      position += 0.5; // Speed of the moving line
      if (position > 90) {
        position = 0;
      }
      if (line) {
        // Null check
        line.style.left = `${position}%`;
      }
      requestAnimationFrame(moveLine);
    };
    moveLine();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-4 bg-white">
      <div className="flex-1 min-w-[300px] bg-white border border-gray-100 rounded-lg shadow dark:bg-white dark:border-gray-200 shadow-gray-200">
        <a href="#">
          <div className="p-4">
            <img
              className="rounded-lg border"
              src="src/assets/dance.webp"
              alt=""
            />
          </div>
          <div className="flex items-center justify-between mx-5 flex-wrap">
            <div className="flex items-center justify-between gap-2">
              <FaUserCircle className="text-red-600" />
              <p>BY Spark</p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <FaCalendar className="text-red-600" />
              <p>Septermber 10,2024</p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <FaTags className="text-red-600" />
              <p>Classic Dance</p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <FaComments className="text-red-600" />
              <p>Comments</p>
            </div>
          </div>
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Community centers, Gyms or cultural centers
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from “de
            Finibus Bonorum et Malorum” by Cicero
          </p>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm md:text-base bg-red-500 font-medium text-center text-white border border-white rounded-md hover:bg-slate-800 hover:text-white hover:shadow-md hover:shadow-gray-600 duration-300 ease-out"
          >
            READ MORE
          </a>
        </div>
      </div>
      <div className="flex-1 min-w-[300px] flex flex-col items-center">
        <div className="search mb-5 bg-gray-200 w-full rounded-lg p-6">
          <form className="max-w-md mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="bg-gray-200 w-full rounded-lg p-10">
          <h2 className="text-3xl m-3">Categories</h2>
          <div className="relative bg-gray-400 h-1 mb-4">
            <div
              id="moving-line"
              className="absolute top-0 h-full bg-red-600 w-16"
              style={{ animation: "moveLine 2s linear infinite" }}
            />
          </div>
          <div className="bg-white flex items-center justify-between p-4 m-3 rounded-md w-full hover:bg-red-600 hover:text-white duration-300">
            <h3>Ballet Dance(2)</h3>
            <BsArrowBarRight />
          </div>
          <div className="bg-white flex items-center justify-between p-4 m-3 rounded-md w-full hover:bg-red-600 hover:text-white duration-300">
            <h3>Hip Hop Dance(5)</h3>
            <BsArrowBarRight />
          </div>
          <div className="bg-white flex items-center justify-between p-4 m-3 rounded-md w-full hover:bg-red-600 hover:text-white duration-300">
            <h3>Jazz Dance(3)</h3>
            <BsArrowBarRight />
          </div>
          <div className="bg-white flex items-center justify-between p-4 m-3 rounded-md w-full hover:bg-red-600 hover:text-white duration-300">
            <h3>Contemporary Dance(4)</h3>
            <BsArrowBarRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
