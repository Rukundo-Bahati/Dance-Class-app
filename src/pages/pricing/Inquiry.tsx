const Inquiry = () => {
  return (
    <div className="flex items-center justify-center ">
      <form className="bg-white p-5 w-1/2">
        <div className="flex flex-col lg:flex-row lg:space-x-4 gap-2">
          <div className="lg:mb-0 w-full lg:w-1/2">
            <input
              type="text"
              id="name"
              className="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-6 lg:mb-0 w-full lg:w-1/2">
            <input
              type="email"
              id="email"
              className="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-4 mt-3">
          <div className="mb-6 lg:mb-0 w-full lg:w-1/2">
            <select
              id="countries"
              className="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:border-gray-300 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Contemporary</option>
              <option value="1">Drill</option>
              <option value="2">Modern</option>
              <option value="3">Kid's</option>
              <option value="4">Traditional</option>
            </select>
          </div>
          <div className="mb-6 lg:mb-0 w-full lg:w-1/2">
            <select
              id="countries"
              className="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:border-gray-300 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected value="1">
                Under $300
              </option>
              <option value="2">Under $600</option>
              <option value="3">Under $900</option>
              <option value="4">Under $1000</option>
            </select>
          </div>
        </div>
        <textarea
          id="message"
          rows="4"
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300   dark:placeholder-gray-400 resize-none mb-6 mt-4"
          placeholder="Your Message"
        ></textarea>
        <button
          type="submit"
          className="text-white bg-red-700 hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-3 text-center hover:border hover:border-red-500 hover:text-slate-700 duration-500"
        >
          SEND AN INQUIRY
        </button>
      </form>
    </div>
  );
};

export default Inquiry;
