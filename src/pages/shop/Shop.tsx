import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Items from "./Items";

const Shop = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      <div className="relative p-6 bg-cover bg-center bg-[url('src/assets/d2.webp')] min-h-96 flex flex-col items-start justify-center">
        <div className="bg-black bg-opacity-50 p-6 rounded-md text-center">
          <h1 className="text-white text-4xl font-bold mb-4">Shop</h1>
          <div className="flex items-center justify-center space-x-2">
            <h3
              className="text-red-500 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </h3>
            <FaArrowRight className="text-white" />
            <h3 className="text-white">Shop</h3>
          </div>
        </div>
      </div>

      {/* sorting */}
      <div className="flex items-center p-3 justify-between rounded-xl m-3 border-4 border-gray-300 bg-gray-200">
        <div className="text">
          <span className="text-slate-900">Showing 1–12 of 14 results</span>
        </div>

        <form className="">
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-300 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Default Sorting</option>
            <option value="US">Popular</option>
            <option value="CA">Latest</option>
            <option value="FR">Cheap</option>
            <option value="DE">Expensive</option>
          </select>
        </form>
      </div>
      <Items />
    </div>
  );
};

export default Shop;
