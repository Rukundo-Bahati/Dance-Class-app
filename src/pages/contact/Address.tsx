import { FaLocationDot, FaPhone, FaClock } from "react-icons/fa6";

const Address = () => {
  return (
    <div className="m-4 p-3 flex items-center gap-4 flex-wrap justify-center">
      <div className="w-full max-w-sm bg-white border-slate-100 rounded-lg shadow dark:border-gray-700 shadow-slate-400 overflow-hidden">
        <div className="flex flex-col items-center pb-10">
          <FaLocationDot className="w-24 h-24 mb-3 rounded-full hover:shadow-md hover:shadow-blue-700 shadow-lg  bg-red-500 text-white p-3 text-sm m-3 duration-150" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-gray-800">
            Our Office Address
          </h5>
          <span className="text-sm text-gray-500  dark:text-gray-800 ">
            835 Middle Country Rd, Selden, NY 11784, United States
          </span>
        </div>
      </div>
      <div className="w-full max-w-sm bg-white border-slate-100 rounded-lg shadow dark:border-gray-700 shadow-slate-400 overflow-hidden">
        <div className="flex flex-col items-center pb-10">
          <FaPhone className="w-24 h-24 mb-3 rounded-full hover:shadow-md hover:shadow-blue-700 shadow-lg  bg-red-500 text-white p-3 text-sm m-3 duration-150" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-gray-800">
            Telephone Number:
          </h5>
          <span className="text-sm text-gray-500  dark:text-gray-800 ">
            +250 7832642
          </span>
          <span className="text-sm text-gray-500  dark:text-gray-800 ">
            +250 7232642
          </span>
        </div>
      </div>
      <div className="w-full max-w-sm bg-white border-slate-100 rounded-lg shadow dark:border-gray-700 shadow-slate-400 overflow-hidden">
        <div className="flex flex-col items-center pb-10">
          <FaClock className="w-24 h-24 mb-3 rounded-full hover:shadow-md hover:shadow-blue-700 shadow-lg  bg-red-500 text-white p-3 text-sm m-3 duration-150" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-gray-800">
            Work Time:
          </h5>
          <span className="text-sm text-gray-500  dark:text-gray-800 ">
            9:00am - 6:00pm ( Mon - Fri ) Saturday & Sunday Half Day
          </span>
        </div>
      </div>
    </div>
  );
};

export default Address;
