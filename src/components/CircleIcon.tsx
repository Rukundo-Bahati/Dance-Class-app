import { BsPlay } from "react-icons/bs";

const CirclePlayButton = () => {
  return (
    <div className="flex items-center space-x-2 mt-3 hover:border hover:border-cyan-500 rounded-md p-2 hover:bg-indigo-950 duration-300">
      <div className="flex items-center justify-center bg-red-600 rounded-full w-10 h-10 sm:w-12 sm:h-10 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:w-10 xl:h-10">
        <BsPlay className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl cursor-pointer" />
      </div>
      <p className="text-base text-gray-300 cursor-pointer hidden sm:inline-block">
        Play Video Now
      </p>
    </div>
  );
};

export default CirclePlayButton;
