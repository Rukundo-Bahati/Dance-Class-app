import { BsCheckCircle } from "react-icons/bs";
const Steps = () => {
  return (
    <div className="flex flex-col md:flex-row p-6 bg-gray-300 space-y-6 md:space-y-0 md:space-x-6 items-center border-t-4 border-blue-600">
      <div className="flex flex-col space-y-4 ">
        <p className="text-red-500 italic text-lg">Our Dance Technique</p>
        <h1 className="text-3xl font-bold">
          We’re Some Simple Steps For Teaching Dance
        </h1>
        <div className="flex gap-5 items-center">
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-700 border border-blue-500 rounded-md hover:bg-blue-600 hover:text-white duration-200"
          >
            Dance Step 01
          </a>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-700 border border-blue-500 rounded-md hover:bg-blue-600 hover:text-white duration-200"
          >
            Dance Step 02
          </a>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-700 border border-blue-500 rounded-md hover:bg-blue-600 hover:text-white duration-200"
          >
            Dance Step 03
          </a>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Credibly leverage other's low-risk high-yield intellectual capital
          with state of the art customer service. Proactively whiteboard
          bricks-and-clicks processes via error-free portals. Intrinsically
          transform professional.
        </p>

        <div className="flex items-center gap-8">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <BsCheckCircle className="text-red-600" />
              <p className="text-gray-700 leading-relaxed">Dance Practice</p>
            </div>
            <div className="flex items-center space-x-2">
              <BsCheckCircle className="text-red-600" />
              <p className="text-gray-700 leading-relaxed">Dance Growth</p>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <BsCheckCircle className="text-red-600" />
              <p className="text-gray-700 leading-relaxed">Dance Training</p>
            </div>
            <div className="flex items-center space-x-2">
              <BsCheckCircle className="text-red-600" />
              <p className="text-gray-700 leading-relaxed">Dance Improvement</p>
            </div>
          </div>
        </div>

        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-800 duration-200 w-28"
        >
          Read more
        </a>
      </div>
      <img
        src="src/assets/d1.webp"
        alt="Dance school image"
        className="w-full md:w-1/2 h-auto object-cover rounded-md"
      />
    </div>
  );
};

export default Steps;
