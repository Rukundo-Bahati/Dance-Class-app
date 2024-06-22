import React from "react";

const Contact = () => {
  return (
    <div className="bg-slate-950 text-white py-12">
      <div className="flex flex-col lg:flex-row items-center justify-evenly bg-slate-800 p-6 lg:p-12">
        <img
          className="mb-8 lg:mb-0 lg:mr-12 rounded-md my-6 lg:my-0"
          src="src/assets/d5.jpg"
          alt=""
          style={{ width: "400px", height: "auto" }}
        />

        <form className="max-w-lg w-full">
          <div className="flex flex-col lg:flex-row lg:space-x-4 gap-2">
            <div className="mb-6 lg:mb-0 w-full lg:w-1/2 mb-3">
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-6 lg:mb-0 w-full lg:w-1/2">
              <input
                type="number"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-4 mt-3">
            <div className="mb-6 lg:mb-0 w-full lg:w-1/2">
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-6 lg:mb-0 w-full lg:w-1/2">
              <input
                type="text"
                id="subject"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                required
                placeholder="Subject"
              />
            </div>
          </div>
          <textarea
            id="message"
            rows="4"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none mb-6 mt-4"
            placeholder="Leave a comment..."
          ></textarea>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send a Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
