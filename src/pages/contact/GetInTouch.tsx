const GetInTouch = () => {
  return (
    <div className="flex  m-3 p-2 justify-center gap-4 flex-wrap">
      <div className="md:w-1/2">
        <img src="src/assets/p4.webp" alt="" className=" rounded-md w-full" />
      </div>
      <div className="flex flex-col">
        <p className="text-red-600 italic m-4 text-center">Get In Touch</p>
        <h1 className="text-4xl font-bold mb-2 text-center">
          Let’s Talk To An Expert
        </h1>
        <p className="text-slate-500 text-center text-lg">
          Efficiently integrate wireless value whereas cross-platform e-tailers.
        </p>
        <form className="max-w-lg w-full mt-3">
          <div className="flex flex-col lg:flex-row lg:space-x-4 gap-2">
            <div className="mb-6 lg:mb-0 w-full lg:w-1/2 mb-3">
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
                type="number"
                id="phone"
                className="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-none"
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
                className="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-6 lg:mb-0 w-full lg:w-1/2">
              <input
                type="text"
                id="subject"
                className="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                required
                placeholder="Subject"
              />
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
            className="text-white bg-red-700 hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-3 text-center hover:border hover:border-red-500 hover:text-slate-700 duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
