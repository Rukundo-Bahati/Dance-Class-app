import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Address from "./Address";
import GetInTouch from "./GetInTouch";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      <div className="relative p-6 bg-cover bg-center bg-[url('src/assets/d2.webp')] min-h-96 flex flex-col items-start justify-center">
        <div className="bg-black bg-opacity-50 p-6 rounded-md text-center">
          <h1 className="text-white text-4xl font-bold mb-4">Contact</h1>
          <div className="flex items-center justify-center space-x-2">
            <h3
              className="text-red-500 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </h3>
            <FaArrowRight className="text-white" />
            <h3 className="text-white">Contact</h3>
          </div>
        </div>
      </div>
      <Address />
      <GetInTouch />
    </div>
  );
};

export default Contact;
