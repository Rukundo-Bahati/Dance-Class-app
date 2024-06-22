import { BsArrowBarRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Types from "./Types";
import Type2 from "./Type2";
import Type3 from "./Type3";

const Class = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="relative p-6 bg-cover bg-center bg-[url('src/assets/d2.webp')] min-h-96 flex flex-col items-start justify-center">
        <div className="bg-black bg-opacity-50 p-6 rounded-md text-center">
          <h1 className="text-white text-4xl font-bold mb-4">Class</h1>
          <div className="flex items-center justify-center space-x-2">
            <h3
              className="text-red-500 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </h3>
            <BsArrowBarRight className="text-white" />
            <h3 className="text-white">Classes</h3>
          </div>
        </div>
      </div>
      <Types />
      <Type2 />
      <Type3 />
    </div>
  );
};

export default Class;
