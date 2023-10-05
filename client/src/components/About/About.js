import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import slide1 from "../../Images/slide1.jpg";
import slide2 from "../../Images/slide2.jpg";
import slide3 from "../../Images/slide3.jpg";
import slide4 from "../../Images/slide4.jpg";
import light from "../../Images/light-bulb-2.png";
import team from "../../Images/team_2.png";
import man from "../../Images/manufa_2.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gallary from "../Gallary/Gallary";
import Team from "../Team/Team";

const About = () => {
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

  // Set up automatic scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
      prevSlide();
    }, 1000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div>
      <div className="w-full h-auto overflow-hidden">
        {/* Slider Section */}
        <div className="w-screen h-screen relative">
          <Slider
            infinite={true}
            autoplay={true}
            speed={1000}
            slidesToShow={1}
            slidesToScroll={1}
            initialSlide={currentSlide}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-screen h-full relative">
                <img
                  className="w-screen h-screen/2 object-cover"
                  src={slide.image}
                  alt={`slide_${index + 1}`}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 mb-20">
                  <h2 className="text-xl font-bold text-center">
                    {slide.name}
                  </h2>
                  <p className="text-center">{slide.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Content Section Below Slider */}
      </div>
      <div className="flex justify-between mt-20 mb-20">
        <div className="mx-auto flex flex-col items-center">
          <img src={light} alt="light" className="w-16 h-16 mb-5" />
          <div className="text-center">
            <h1>CONCEPTUAL DESIGN</h1>
            <p className="text-sm mt-5">
              simple solutions for complex problem statements. Best Drone Design
              Consultation will be provided by our domain experts. Give it a try
              to test us out.
            </p>
          </div>
        </div>
        <div className="mx-auto flex flex-col items-center">
          <img src={man} alt="manufacturing" className="w-16 h-16 mb-5" />
          <div className="text-center">
            <h1>MANUFACTURING</h1>
            <p className="text-sm mt-5">
              simple solutions for complex problem statements. Best Drone Design
              Consultation will be provided by our domain experts. Give it a try
              to test us out.
            </p>
          </div>
        </div>
        <div className="mx-auto flex flex-col items-center">
          <img src={man} alt="manufacturing" className="w-16 h-16 mb-5" />
          <div className="text-center">
            <h1>MAINTENANCE AND SERVICE</h1>
            <p className="text-sm mt-5">
              simple solutions for complex problem statements. Best Drone Design
              Consultation will be provided by our domain experts. Give it a try
              to test us out.
            </p>
          </div>
        </div>
        <div className="mx-auto flex flex-col items-center">
          <img src={team} alt="team" className="w-16 h-16 mb-5" />
          <div className="text-center">
            <h1>DEDICATED SUPPORT</h1>
            <p className="text-sm mt-5">
              simple solutions for complex problem statements. Best Drone Design
              Consultation will be provided by our domain experts. Give it a try
              to test us out.
            </p>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex-1">
          <img src={slide1} alt="Slide 1" />
        </div>
        <div className="flex-1">Details of drone</div>
      </div>
      <Gallary />
      <Team />
    </div>
  );
};

export default About;
