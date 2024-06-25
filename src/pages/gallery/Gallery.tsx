import { useState } from "react";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "src/assets/g8.jpg",
    "src/assets/g9.jpg",
    "src/assets/g10.jpg",
    "src/assets/g4.jpg",
    "src/assets/Dance-cool.jpg",
    "src/assets/cap.jpg",
    "src/assets/g6.jpg",
    "src/assets/g7.jpg",
    "src/assets/g1.jpg",
    "src/assets/g3.jpg",
    "src/assets/g5.jpg",
    "src/assets/g2.jpg",
  ];

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-white">
      <div className="relative p-6 bg-cover bg-center bg-[url('src/assets/d2.webp')] min-h-96 flex flex-col items-start justify-center">
        <div className="bg-black bg-opacity-50 p-6 rounded-md text-center">
          <h1 className="text-white text-4xl font-bold mb-4">Gallery</h1>
          <div className="flex items-center justify-center space-x-2">
            <h3
              className="text-red-500 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </h3>
            <FaArrowRight className="text-white" />
            <h3 className="text-white">Gallery</h3>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative group">
              <img src={src} alt={`image${index + 1}`} className="rounded-md w-full h-auto" />
              <div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                onClick={() => openImage(src)}
              >
                <FaPlus className="text-white text-4xl" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="max-w-full max-h-full relative">
            <button
              className="absolute top-2 right-2 text-white text-2xl z-50"
              onClick={closeModal}
            >
              &times;
            </button>
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-full rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
