import { BsPlay } from "react-icons/bs";
const Header = () => {
  return (
    <div className="relative p-6 h-88 bg-cover bg-center bg-[url('src/assets/d2.webp')]">
      <div className="absolute inset-0 bg-violet-950 bg-opacity-80"></div>
      <div className="relative z-10 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-5xl font-bold text-gray-100 mb-6 text-center">
              Once A Dancer, Always A Dancer
            </h2>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded mt-4">
                APPLY NOW
              </button>
              <div className="flex items-center space-x-2">
                <BsPlay className="border border-l-violet-600 rounded-2xl text-3xl text-violet-600" />
                <p className="text-lg text-gray-300">Play Video Now</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="src/assets/dance.webp"
              alt="Dance"
              className="w-full h-auto rounded-lg shadow-lg opacity-75"
            />
          </div>
        </div>
        <div className="mt-8">
          <form className="flex flex-wrap items-center justify-between gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="flex-grow p-2 rounded bg-indigo-950 text-white"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="flex-grow p-2 rounded bg-indigo-950 text-white"
            />
            <select className="flex-grow p-2 rounded bg-indigo-950 text-white">
              <option value="0">Select Class</option>
              <option value="1">Hip Hop</option>
              <option value="2">Afro Beat</option>
              <option value="3">Drill</option>
              <option value="4">Amapiano</option>
            </select>
            <button className="p-2 rounded bg-indigo-950 text-white">
              Submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
