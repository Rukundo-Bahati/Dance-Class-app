interface Props {
  header: string;
  content: string;
  img: string;
}

const Card = ({ header, content, img }: Props) => {
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow-md shadow-sky-500">
        <a href="#">
          <div className="p-4">
            <img
              className="rounded-lg border border-pink-500"
              src={img}
              alt=""
            />
          </div>
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {header}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {content}
          </p>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm md:text-base font-medium text-center text-white border border-white rounded-md hover:bg-white hover:text-blue-600 hover:shadow-md hover:shadow-sky-600 duration-200 "
          >
            EXPLORE MORE DETAILS
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
