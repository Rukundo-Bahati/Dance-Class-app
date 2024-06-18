import { BsPlay } from "react-icons/bs";

const Style = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-indigo-800">
        <div className="flex flex-col justify-center items-center m-4">
          <p className="italic text-blue-400">Find the one for you</p>
          <h2 className="text-3xl font-bold text-gray-100 mb-6 text-center">
            Break dance class
          </h2>
          <p className="text-center text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            magni voluptates neque rerum. Placeat dolores dignissimos minima
            velit consectetur quod fuga magni. Sapiente, nobis?
          </p>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded mt-4">
              APPLY NOW
            </button>
            <button className="px-4 py-2 bg-transparent border hover:bg-blue-700 text-white font-semibold rounded mt-4">
              APPLY NOW
            </button>
          </div>
        </div>
        <div>
          <img
            src="src/assets/d3.jpg"
            alt="Dance"
            className="w-full h-auto rounded-lg shadow-lg opacity-75 my-3"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-indigo-800">
        <div>
          <img
            src="src/assets/d1.jpg"
            alt="Dance"
            className="w-full h-auto rounded-lg shadow-lg opacity-75 my-3 mx-3"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="italic text-blue-400">Find the one for you</p>
          <h2 className="text-3xl font-bold text-gray-100 mb-6 text-center">
            Hip Hop dance Class
          </h2>
          <p className="text-center text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            magni voluptates neque rerum. Placeat dolores dignissimos minima
            velit consectetur quod fuga magni. Sapiente, nobis?
          </p>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded mt-4">
              APPLY NOW
            </button>
            <button className="px-4 py-2 bg-transparent border hover:bg-blue-700 text-white font-semibold rounded mt-4">
              APPLY NOW
            </button>
          </div>
        </div>
        <button className="px-4 py-2 bg-transparent border hover:bg-blue-700 text-white font-semibold rounded m-4 w-40">
          View All classes
        </button>
      </div>
    </div>
  );
};

export default Style;
