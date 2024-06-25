import { FaCheck } from "react-icons/fa";

interface Props {
  img: string;
  bg: string;
  price: string;
  color1: string;
  color2: string;
}

const Plan = ({ img, bg, price, color1, color2 }: Props) => {
  return (
    <div className="bg-white rounded-xl m-4 b w-full shadow-md shadow-gray-300 hover:translate-y-5 hover:shadow-red-500 duration-500">
      <div className="my-4">
        <img src={img} alt="" />
      </div>
      <div className="others p-5">
        <h1 className="mb-2xl">
          <span className="text-red-600 text-4xl font-semibold">$</span>
          <span className="text-black font-semibold text-4xl">{price}</span>
          <span>/Month</span>
        </h1>

        <div className="w-48 text-gray-900">
          <div className="flex items-center gap-2  text-slate-700">
            <FaCheck className="text-red-600" />
            12 Hour Session
          </div>

          <div className="flex items-center gap-2 text-slate-700 my-2">
            <FaCheck className="text-red-600" />
            Daily Workouts
          </div>
          <div className={`flex items-center gap-2`}>
            <FaCheck className="text-red-600" />
            Individual Prices
          </div>
          <div className={`flex items-center gap-2 ${color1}`}>
            <FaCheck className="text-red-600" />
            Online Classes
          </div>
          <div className={`flex items-center gap-2 ${color2}`}>
            <FaCheck className="text-red-600" />
            24/7 Full Support
          </div>
        </div>
        <button
          className={`${bg} text-white hover:bg-white hover:text-slate-500 m-7 p-3 w-72 hover:border      hover:border-slate-300 rounded-xl duration-300`}
        >
          CHECK EVENT
        </button>
      </div>
    </div>
  );
};

export default Plan;
