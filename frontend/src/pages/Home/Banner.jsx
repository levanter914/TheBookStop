import React, { useState, useEffect } from "react";
import b1 from "../../assets/1.png";
import b2 from "../../assets/2.png";
import b4 from "../../assets/4.png";

import s1 from "../../assets/1.svg";
import s2 from "../../assets/2.svg";
import s4 from "../../assets/4.svg";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of banner images
  const bannerImages = [
    <img src={s1} alt="Banner 1" className="w-full h-auto rounded-[40px]" />,
    <img src={s2} alt="Banner 2" className="w-full h-auto rounded-[40px]" />,
    <img src={s4} alt="Banner 3" className="w-full h-auto rounded-[40px]" />,
  ];

  // Auto-update the index every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 7000);
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
    <div className="relative w-[90%] lg:w-[90%] mx-auto h-[auto] mt-2 overflow-hidden rounded-[40px] flex items-center justify-center">
      {/* Display the current image */}
      <div className="w-full h-auto flex items-center justify-center">
        {bannerImages[currentIndex]}
      </div>

      {/* Left and right swipe buttons with responsive sizing */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent text-black p-2 sm:p-3 rounded-full shadow-lg hover:bg-black hover:bg-opacity-30 transition duration-200 ease-in-out focus:outline-none"
        aria-label="Previous"
      >
        <span className="text-2xl sm:text-4xl">{"<"}</span>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent text-black p-2 sm:p-3 rounded-full shadow-lg hover:bg-black hover:bg-opacity-30 transition duration-200 ease-in-out focus:outline-none"
        aria-label="Next"
      >
        <span className="text-2xl sm:text-4xl">{">"}</span>
      </button>

      {/* Indicator dots positioned closer to the banner */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerImages.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 sm:h-4 sm:w-4 rounded-full cursor-pointer transition-all duration-300 shadow-lg ${
              currentIndex === index
                ? "bg-[#978b85] scale-110 border-2 border-white"
                : "bg-gray-300 opacity-75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
