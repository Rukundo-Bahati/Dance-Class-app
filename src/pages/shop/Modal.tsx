// Modal.tsx
import React from "react";

interface ModalProps {
  imageUrl: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative z-50 bg-white p-4 max-w-md mx-h-md mx-auto rounded-lg">
        <button
          className="absolute top-2 right-2 text-gray-700 hover:text-black"
          onClick={onClose}
        >
          Close
        </button>
        <img src={imageUrl} alt="Item" className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default Modal;
