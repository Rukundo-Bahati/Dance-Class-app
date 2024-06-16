interface Props {
  header: string;
  content: string;
  img: string;
}
const Card = ({ header, content, img }: Props) => {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={img} alt="" />
      </a>
      <div className="p-3">
        <a href="#">
          <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {header}
          </h5>
        </a>
        <p className="mb-2 text-sm font-normal text-gray-700 dark:text-gray-400">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Card;
