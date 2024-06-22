import { useEffect } from "react";
import { BsArrowBarRight } from "react-icons/bs";
import { FaUserCircle, FaCalendar, FaTags, FaComments } from "react-icons/fa";

const Pole = () => {
  useEffect(() => {
    const line = document.getElementById("moving-line");
    let position = 0;
    const moveLine = () => {
      position += 0.5; // Speed of the moving line
      if (position > 90) {
        position = 0;
      }
      if (line) {
        // Null check
        line.style.left = `${position}%`;
      }
      requestAnimationFrame(moveLine);
    };
    moveLine();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-4 bg-white">
      <div className="flex-1 min-w-[300px] bg-white border border-gray-100 rounded-lg shadow dark:bg-white dark:border-gray-200 shadow-gray-200">
        <a href="#">
          <div className="p-4">
            <img
              className="rounded-lg border"
              src="src/assets/dance.webp"
              alt=""
            />
          </div>
          <div className="flex items-center justify-between mx-5 flex-wrap">
            <div className="flex items-center justify-between gap-2">
              <FaUserCircle className="text-red-600" />
              <p>BY Spark</p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <FaCalendar className="text-red-600" />
              <p>Septermber 10,2024</p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <FaTags className="text-red-600" />
              <p>Pole Dance</p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <FaComments className="text-red-600" />
              <p>Comments</p>
            </div>
          </div>
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Community centers, Gyms or cultural centers
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from “de
            Finibus Bonorum et Malorum” by Cicero
          </p>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm md:text-base bg-red-500 font-medium text-center text-white border border-white rounded-md hover:bg-slate-800 hover:text-white hover:shadow-md hover:shadow-gray-600 duration-300 ease-out"
          >
            READ MORE
          </a>
        </div>
      </div>
       <div
          className=" flex items-center flex-col bg-cover bg-center justify-center rounded-lg m-5 p-8 lg:p-12 bg-no-repeat bg-opacity-90"
          style={{ backgroundImage: `url(src/assets/d6.jpg)` }}
        >
       
          <h1 className="text-3xl lg:text-4xl text-white font-bold mb-4">
            Have Any Questions?
          </h1>
          <p className="text-lg lg:text-xl text-white mb-6 max-w-lg text-center">
            Synergistically strategize vertical best practices and leading-edge
            best.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 text-base lg:text-lg bg-red-500 font-medium text-white rounded-md hover:bg-white hover:text-black hover:shadow-md hover:shadow-gray-600 duration-300 ease-out"
          >
            READ MORE
          </a>
        </div>
    </div>
  );
};

export default Pole;
