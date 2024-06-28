import { BsPlay } from "react-icons/bs";

const CirclePlayButton = () => {
  return (
    <div className="flex items-center space-x-2 mt-3">
      <div className="w-11 h-11 flex items-center justify-center bg-red-600 rounded-full">
        <BsPlay className="text-white text-3xl cursor-pointer" />
      </div>
      <p className="text-lg text-gray-300 cursor-pointer">Play Video Now</p>
    </div>
  );
};

export default CirclePlayButton;
