import { BsArrowBarRight } from "react-icons/bs";
import School from "./School";
import { useNavigate } from "react-router-dom";
import Steps from "./Steps";
import Count from "./Count";
import Others from "./Others";
import Instructors from "../../components/teachers/Instructors";
import FreeRegistration from "./FreeRegistration";
import Testimonials from "../../components/testimonial/Testimonials";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="relative p-6 bg-cover bg-center bg-[url('src/assets/d2.webp')] min-h-96 flex flex-col items-start justify-center">
        <div className="bg-black bg-opacity-50 p-6 rounded-md text-center">
          <h1 className="text-white text-4xl font-bold mb-4">About</h1>
          <div className="flex items-center justify-center space-x-2">
            <h3
              className="text-red-500 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </h3>
            <BsArrowBarRight className="text-white" />
            <h3 className="text-white">About</h3>
          </div>
        </div>
      </div>
      <School />
      <Steps />
      <Count />
      <Others />
      <Instructors />
      <FreeRegistration />
      <Testimonials />
    </div>
  );
};

export default About;
