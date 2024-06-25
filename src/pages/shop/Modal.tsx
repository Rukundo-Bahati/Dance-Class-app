import React from "react";

interface ModalProps {
  imageUrl: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative z-50 bg-white p-4 max-w-lg max-h-md overflow-auto rounded-lg">
        <img src={imageUrl} alt="Zoomed Image" className="w-full" />
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

export default Modal;
