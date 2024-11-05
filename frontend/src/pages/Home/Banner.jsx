import React, { useState, useEffect } from "react";
import b1 from "../../assets/1.png";
import b2 from "../../assets/2.png";
import b4 from "../../assets/4.png";

import s1 from "../../assets/1.svg"
import s2 from "../../assets/2.svg"
import s4 from "../../assets/4.svg"


const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of banner images
  const bannerImages = [
    <img src={s1} alt="Banner 1" className="w-full h-full rounded-[40px]" />,
    <img src={s2} alt="Banner 2" className="w-full h-full rounded-[40px]" />,
    <img src={s4} alt="Banner 3" className="w-full h-full rounded-[40px]" />,
  ];

  // Auto-update the index every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerImages.length]);

  // Manual control for left and right navigation
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % bannerImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex - 1 + bannerImages.length) % bannerImages.length
    );
  };

  return (
    <div className="relative w-[90%] lg:w-[90%] mx-auto h-[400px] overflow-hidden rounded-[40px] flex items-center justify-center">
      {/* Display the current image */}
      <div className="w-full h-full flex items-center justify-center">
        {bannerImages[currentIndex]}
      </div>

      {/* Left and right swipe buttons with enhanced styling */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 text-black p-3 rounded-full shadow-lg hover:bg-opacity-90 transition duration-200 ease-in-out focus:outline-none"
        aria-label="Previous"
      >
        <span className="text-xl font-bold">{"<"}</span>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 text-black p-3 rounded-full shadow-lg hover:bg-opacity-90 transition duration-200 ease-in-out focus:outline-none"
        aria-label="Next"
      >
        <span className="text-xl font-bold">{">"}</span>
      </button>

      {/* Stylish Indicator dots positioned at the bottom center of the banner */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {bannerImages.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-4 w-4 rounded-full cursor-pointer transition-all duration-300 shadow-lg ${
              currentIndex === index
                ? "bg-yellow-500 scale-125 border-2 border-white"
                : "bg-gray-300 opacity-75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
