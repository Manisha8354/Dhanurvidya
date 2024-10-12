import React, { useEffect, useRef, useState } from 'react';
import image from "../assets/homegada.jpeg";
import image1 from "../assets/homedhanush.jpeg";
import image2 from "../assets/home1image2.jpeg";
import image3 from "../assets/home1image4.jpeg";
import image4 from "../assets/home1image4.jpeg";
import backgroundImage from "../assets/home1bgimage.jpeg"

// Sample product data
const products = [
  { id: 1, image: image,  },
  { id: 2, image: image1, },
  { id: 3, image: image2, },
  { id: 4, image: image3,  },
  { id: 5, image: image4, },
];

const Home1 = () => {
  const leftSliderRef = useRef(null);
  const rightSliderRef = useRef(null);
  const [scrollPositionLeft, setScrollPositionLeft] = useState(0);
  const [scrollPositionRight, setScrollPositionRight] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatically scroll products vertically for both sliders
  useEffect(() => {
    if (isPaused) return; // Do not scroll if paused

    const interval = setInterval(() => {
      if (leftSliderRef.current && rightSliderRef.current) {
        setScrollPositionLeft((prevPosition) => {
          const maxScrollLeft = leftSliderRef.current.scrollHeight - leftSliderRef.current.clientHeight;
          const newPosition = prevPosition + 1;

          // Reset to the start when reaching the end (for the left slider)
          return newPosition >= maxScrollLeft ? 0 : newPosition;
        });

        setScrollPositionRight((prevPosition) => {
          const maxScrollRight = rightSliderRef.current.scrollHeight - rightSliderRef.current.clientHeight;
          const newPosition = prevPosition - 1;

          // Reset to the bottom when reaching the top (for the right slider)
          return newPosition <= 0 ? maxScrollRight : newPosition;
        });
      }
    }, 30); // Adjust scroll speed by changing the interval time

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [isPaused]);

  // Apply the scroll positions to both sliders
  useEffect(() => {
    if (leftSliderRef.current) {
      leftSliderRef.current.scrollTop = scrollPositionLeft;
    }
    if (rightSliderRef.current) {
      rightSliderRef.current.scrollTop = scrollPositionRight;
    }
  }, [scrollPositionLeft, scrollPositionRight]);

  // Handle pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      className="relative py-20 px-5 lg:px-20 bg-cover bg-fixed"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use the imported image
        backgroundSize: 'cover', // Make sure the image covers the whole div
        backgroundPosition: 'center', // Center the image
        height: '155vh', // Increased height
      }}
    >
      <h2 className="text-5xl font-bold text-center text-white mb-12 drop-shadow-lg">
       Dhanurveda Seven types of battle
      </h2>

      <div className="flex justify-between items-start h-[130vh] lg:flex-row flex-col">
        {/* Left side (Products) */}
        <div
          ref={leftSliderRef}
          className="flex flex-col space-y-10 overflow-y-hidden h-[130vh] px-4 w-full lg:w-[320px] transition-transform duration-300 ease-in-out"
          style={{ whiteSpace: 'nowrap' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-2xl rounded-lg overflow-hidden p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
              style={{ flex: 'none', width: '100%' }}
            >
              <div className="relative overflow-hidden w-full h-80">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mt-4 text-center">{product.name}</h3>
              <p className="text-xl text-gray-600 mt-2 text-center">{product.price}</p>
            </div>
          ))}
        </div>

        {/* Middle Empty Space with Gap */}
        <div className="flex-grow" style={{ height: '130vh', margin: '0 20px', border: 'none' }} />

        {/* Right side (Products) */}
        <div
          ref={rightSliderRef}
          className="flex flex-col space-y-10 overflow-y-hidden h-[130vh] px-4 w-full lg:w-[320px] transition-transform duration-300 ease-in-out"
          style={{ whiteSpace: 'nowrap' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-2xl rounded-lg overflow-hidden p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
              style={{ flex: 'none', width: '100%' }}
            >
              <div className="relative overflow-hidden w-full h-80">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mt-4 text-center">{product.name}</h3>
              <p className="text-xl text-gray-600 mt-2 text-center">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home1;
