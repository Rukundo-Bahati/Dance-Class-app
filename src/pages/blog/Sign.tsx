import React from "react";

const Sign = () => {
  return (
    <div className="bg-slate-800 flex flex-col md:flex-row items-center gap-4 flex-wrap p-6 md:p-9 justify-between border-b-2 border-gray-500">
      <h2 className="bg-gradient-to-r text-center from-blue-500 to-purple-500 text-transparent bg-clip-text font-extrabold m-2 text-4xl">
        SPARK
      </h2>
      <div className="flex flex-col md:flex-row items-center md:gap-3">
        <h2 className="text-2xl md:text-4xl text-center md:text-left text-white mb-2 md:mb-0">
          Sign Up To Get Updates <br /> & News About Us..
        </h2>
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Your Email"
            className="w-full md:w-auto border border-slate-600 bg-slate-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white hover:bg-transparent duration-300"
          />
          <a
            href="#"
            className="inline-block md:ml-3 px-4 py-2 text-sm md:text-base bg-red-500 font-medium text-white rounded-md hover:bg-white hover:text-black hover:shadow-md hover:shadow-gray-600 duration-300 ease-out"
          >
            SUBSCRIBE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sign;
