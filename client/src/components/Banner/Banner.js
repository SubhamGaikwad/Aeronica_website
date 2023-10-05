import React, { useState } from "react";
import slide1 from "../../Images/slide1.jpg";
import slide2 from "../../Images/slide2.jpg";
import slide3 from "../../Images/slide3.jpg";
import slide4 from "../../Images/slide4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 3 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1));
  };

  const slides = [
    {
      image: slide1,
      name: "Drone 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: slide2,
      name: "Drone 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: slide3,
      name: "Drone 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: slide4,
      name: "Drone 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const handleDetails = () => {
    // Navigate to the respective image information based on the current slide
    const currentSlideInfo = slides[currentSlide];
    navigate(`/product/${currentSlideInfo.name.toLowerCase()}`);
  };

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-screen h-full relative">
              <img
                className="w-full h-full object-cover"
                src={slide.image}
                alt={`slide_${index + 1}`}
                loading="priority"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 mb-20">
                <h2 className="text-xl font-bold text-center">{slide.name}</h2>
                <button
                  onClick={handleDetails}
                  className="bg-transparent  border-gray-500 border hover:bg-gray-400 hover:text-white text-white-800 mt-16 px-4 py-2 rounded duration-300"
                >
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-40">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
