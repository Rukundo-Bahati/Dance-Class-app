import CirclePlayButton from "../CircleIcon";
const Header = () => {
  return (
    <div className="relative p-6 h-screen bg-cover bg-center bg-[url('src/assets/p4.webp')]">
      <div className="absolute inset-0 bg-indigo-950 bg-opacity-80"></div>
      <div className="relative z-10 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-5xl font-bold text-gray-100 mb-6 text-center">
              Once A Dancer, Always A Dancer
            </h2>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded mt-4 duration-300">
                APPLY NOW
              </button>
              <CirclePlayButton />
            </div>
          </div>
          <div>
            <img
              decoding="async"
              src="https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/hero_img.png"
              alt="Dance"
              className="w-full h-auto rounded-lg shadow-lg opacity-75 moving-image z-50"
            />
          </div>
        </div>
        <div className="mt-8">
          <form className="flex flex-wrap items-center justify-between gap-4 bg-indigo-900 p-5 w-full mb-3 rounded-sm shadow-md shadow-cyan-400">
            <input
              type="text"
              placeholder="Your Name"
              className="flex-grow p-3 rounded-xl bg-indigo-950 text-white hover:border hover:border-cyan-400 "
            />
            <input
              type="email"
              placeholder="Email Address"
              className="flex-grow p-3 rounded-xl bg-indigo-950 text-white hover:border hover:border-cyan-400"
            />
            <select className="flex-grow p-3 rounded-xl bg-indigo-950 text-white hover:border hover:border-cyan-400">
              <option value="0">Select Class</option>
              <option value="1">Hip Hop</option>
              <option value="2">Afro Beat</option>
              <option value="3">Drill</option>
              <option value="4">Amapiano</option>
            </select>
            <button className="p-3 rounded-xl bg-indigo-950 text-white hover:bg-white hover:text-indigo-950 hover:border hover:border-indigo-950 duration-300">
              Submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
