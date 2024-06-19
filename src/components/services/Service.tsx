interface Props {
  span: string;
  bg: string;
}

const Service = ({ span, bg }: Props) => {
  return (
    <div style={{ height: "200px" }} className="hover:shadow-lg hover:shadow-emerald-400 duration-200">
      <div
        className={`max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow item ${bg} h-64 items-center`}
      >
        <a href="#" className="text-center">
          <h5 className="mb-2 text-5xl font-bold tracking-tight dark:text-white">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              {span}
            </span>
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Service;
