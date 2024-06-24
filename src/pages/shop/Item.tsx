import { BsStar, BsStarFill } from "react-icons/bs";

interface Props {
  img: string,
  price:string,
  name:string
}
const Item = ({img, price,name}:Props) => {
  return (
    <div className="m-2">
      <div className="max-w-sm bg-white border-18 border-gray-200 rounded-lg shadow  shadow-gray-300">
        <a href="#">
          <div className="p-2">
            <img className="rounded-lg" src={img} alt="" />
          </div>
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-xl text-center font-bold tracking-tight text-gray-900">
             {name}
            </h5>
          </a>
          <div className="flex justify-center gap-3">
            <BsStarFill className="text-red-600" />
            <BsStarFill className="text-red-600" />
            <BsStarFill className="text-red-600" />
            <BsStarFill className="text-red-600" />
          </div>
          <p className="mb-3 font-normal text-gray-900  text-center">
        {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
