import React, { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineEye,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Modal from "./Modal"; // import the Modal component

interface Props {
  img: string;
  price: string;
  name: string;
}

const Item: React.FC<Props> = ({ img, price, name }) => {
  const [showIcons, setShowIcons] = useState(false);
  const [liked, setLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleIconClick = (action: string, e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    switch (action) {
      case "like":
        setLiked(!liked);
        break;
      case "view":
        setShowModal(true);
        break;
      case "shop":
        // Implement shopping functionality (e.g., open modal to add item to cart)
        break;
      default:
        break;
    }
  };

  return (
    <div
      className="m-2 flex flex-col h-full relative"
      onMouseEnter={() => setShowIcons(true)}
      onMouseLeave={() => setShowIcons(false)}
    >
      <div className="flex flex-col flex-grow max-w-sm bg-white border border-gray-200 rounded-lg shadow shadow-gray-300 mb-5">
        <div className="p-2 h-48 flex-shrink-0 relative">
          <img className="rounded-lg object-cover w-full h-full" src={img} alt={name} />
          {showIcons && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="flex items-center gap-2 text-white">
                {liked ? (
                  <AiFillHeart
                    className="cursor-pointer transition-transform text-red-600 transform hover:scale-110 text-4xl"
                    onClick={(e) => handleIconClick("like", e)}
                  />
                ) : (
                  <AiOutlineHeart
                    className="cursor-pointer text-4xl transition-transform transform hover:scale-110"
                    onClick={(e) => handleIconClick("like", e)}
                  />
                )}
                <AiOutlineEye
                  className="cursor-pointer text-4xl"
                  onClick={(e) => handleIconClick("view", e)}
                />
                <AiOutlineShoppingCart
                  className="cursor-pointer text-4xl"
                  onClick={(e) => handleIconClick("shop", e)}
                />
              </div>
            </div>
          )}
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <a href="#">
            <h5 className="mb-2 text-xl text-center font-bold tracking-tight text-gray-900">
              {name}
            </h5>
          </a>
          <div className="flex justify-center gap-3 mb-3">
            <BsStarFill className="text-red-600 text-4xl" />
            <BsStarFill className="text-red-600 text-4xl" />
            <BsStarFill className="text-red-600 text-4xl" />
            <BsStarFill className="text-red-600 text-4xl" />
          </div>
          <p className="font-normal text-gray-900 text-center mt-auto">{price}</p>
        </div>
      </div>
      {showModal && <Modal imageUrl={img} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Item;
