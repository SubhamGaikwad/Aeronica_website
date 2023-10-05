import React, { useState } from "react";
import gallary1 from "../../Images/gallary_1.jpeg";
import gallary2 from "../../Images/gallary_2.jpeg";
import gallary3 from "../../Images/gallary_3.jpeg";

const Gallery = () => {
  const images = [gallary1, gallary2, gallary3, gallary1, gallary2, gallary3]; // Add more images as needed
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full">
      <h1 className="text-2xl font-semibold mb-4 text-center">Gallery</h1>
      <div className="flex overflow-hidden gap-16 h-screen w-screen mb-8">
        {images.slice(currentIndex, currentIndex + 2).map((image, index) => (
          <div
            key={index}
            className="w-full h-auto md:w-1/2 p-2 transition-transform transform translate-x-0 hover:scale-105"
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-4 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-600 focus:outline-none"
      >
        &#8592; {/* Left arrow */}
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-600 focus:outline-none"
      >
        &#8594; {/* Right arrow */}
      </button>
    </div>
  );
};

export default Gallery;
