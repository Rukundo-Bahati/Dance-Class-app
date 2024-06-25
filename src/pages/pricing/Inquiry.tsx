const Inquiry = () => {
  return (
    <div className="flex  justify-center p-4 bg-gray-100">
      <form className="bg-white p-6 w-full max-w-xl shadow-lg rounded-lg">
        <div className="flex flex-col lg:flex-row lg:space-x-4 gap-2 mb-3">
          <div className="w-full">
            <input
              type="text"
              id="name"
              className="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full">
            <input
              type="email"
              id="email"
              className="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-4 gap-2 mb-3">
          <div className="w-full">
            <select
              id="categories"
              className="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5"
            >
              <option selected>Contemporary</option>
              <option value="1">Drill</option>
              <option value="2">Modern</option>
              <option value="3">Kid's</option>
              <option value="4">Traditional</option>
            </select>
          </div>
          <div className="w-full">
            <select
              id="budget"
              className="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5"
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
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none mb-3"
          placeholder="Your Message"
        ></textarea>
        <button
          type="submit"
          className="w-full text-white bg-red-700 hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 text-center hover:border hover:border-red-500 hover:text-red-700 duration-500"
        >
          SEND AN INQUIRY
        </button>
      </form>
    </div>
  );
};

export default Inquiry;
