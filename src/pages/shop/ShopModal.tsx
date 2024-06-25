// ShopModal.tsx
import React from "react";

interface ShopModalProps {
  imageUrl: string;
  name: string;
  description: string;
  onClose: () => void;
}

const ShopModal: React.FC<ShopModalProps> = ({ imageUrl, name, description, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative z-50 bg-white p-4 max-w-lg mx-auto rounded-lg flex">
        <div className="flex-1 p-2">
          <img src={imageUrl} alt="Item" className="w-full h-auto rounded-lg" />
        </div>
        <div className="flex-1 p-4">
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
          <p className="text-gray-700 mb-4">{description}</p>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            onClick={onClose}
          >
            Add to Cart
          </button>
        </div>
        <button
          className="absolute top-2 right-2 text-gray-700 hover:text-black"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ShopModal;
