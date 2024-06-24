import { BsStarFill } from "react-icons/bs";

interface Props {
  img: string;
  price: string;
  name: string;
}

const Item = ({ img, price, name }: Props) => {
  return (
    <div className="m-2 flex flex-col h-full">
      <div className="flex flex-col flex-grow max-w-sm bg-white border border-gray-200 rounded-lg shadow shadow-gray-300">
        <a href="#">
          <div className="p-2 h-48 flex-shrink-0">
            <img className="rounded-lg object-cover w-full h-full" src={img} alt={name} />
          </div>
        </a>
        <div className="p-5 flex flex-col flex-grow">
          <a href="#">
            <h5 className="mb-2 text-xl text-center font-bold tracking-tight text-gray-900">
              {name}
            </h5>
          </a>
          <div className="flex justify-center gap-3 mb-3">
            <BsStarFill className="text-red-600" />
            <BsStarFill className="text-red-600" />
            <BsStarFill className="text-red-600" />
            <BsStarFill className="text-red-600" />
          </div>
          <p className="font-normal text-gray-900 text-center mt-auto">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
