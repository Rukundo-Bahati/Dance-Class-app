import { BsCalendar, BsFire } from "react-icons/bs";

interface Props {
  img: string;
  header: string;
}

const Article = ({ img, header }: Props) => {
  return (
    <div className="flex justify-center items-center p-4 w-full sm:w-full md:w-1/2 lg:w-1/3">
      <div className="w-full sm:w-95p max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <div className="p-4">
            <img className="rounded-lg" src={img} alt="" />
          </div>
        </a>
        <div className="m-3">
          <div className="flex justify-between items-center">
            <div className="flex">
              <BsCalendar className="text-orange-500 items-center justify-center" />
              <p className="text-white ml-2 mb-2">30 Jan 2025</p>
            </div>
            <div className="flex">
              <BsFire className="text-yellow-300" />
              <p className="text-white">7 Sept 2024</p>
            </div>
          </div>
          <a href="#">
            <h5 className="mb-2 mt-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {header}
            </h5>
          </a>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Article;
