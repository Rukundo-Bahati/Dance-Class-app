import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

interface Props {
  main: string;
  place: string;
  time: string;
  summary: string;
}

const Actions = ({ main, place, time, summary }: Props) => {
  return (
    <div className="m-3">
      <div className="bg-gray-200 p-5 flex items-center justify-between gap-6 rounded-lg border-2 border-slate-300">
        <div className="bg-red-600 p-4 rounded-xl">
          <h1 className="text-white text-2xl text-center font-semibold">20</h1>
          <p className="text-white text-2xl">Jan</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-4xl font-semibold">{main}</h2>
          <div className="flex items-center m-3 gap-3">
            <div className="flex items-center gap-3">
              <FaClock className="text-red-600" />
              <p className="text-slate-700">{time}</p>
            </div>
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-red-600" />
              <p className="text-slate-700">{place}</p>
            </div>
          </div>
          <p className="text-slate-700 text-xl">{summary}</p>
        </div>
        <button className="bg-red-600 text-white hover:bg-white hover:text-slate-500 mb-14 p-3 w-72 hover:border      hover:border-slate-300 rounded-xl duration-300">
          CHECK EVENT
        </button>
      </div>
    </div>
  );
};

export default Actions;
