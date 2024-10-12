// import React, { useState, useEffect } from 'react';
// import image1 from '../assets/banner2.jpeg';
// import image2 from '../assets/banner6.jpeg';
// import image3 from '../assets/banner1.jpeg';
// import image4 from '../assets/banner7.jpeg';
// import image5 from '../assets/banner5.jpeg';

// const Home = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const banners = [
//     { image: image1 },
//     { image: image2 },
//     { image: image3 },
//     { image: image4 },
//     { image: image5 },
//   ];

//   // Function to go to the next slide
//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % banners.length);
//   };

//   // Function to go to the previous slide
//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
//   };

//   // Set up an interval to change the slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
//     return () => clearInterval(interval); // Clean up the interval on unmount
//   }, []);

//   return (
//     <div className="relative overflow-hidden mt-24">
//       {/* Slider */}
//       <div className="w-full h-[720px]"> {/* You can adjust height as needed */}
//         <img
//           src={banners[currentSlide].image}
//           alt={`Banner ${currentSlide + 1}`} // Provide appropriate alt text
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Previous Button */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-pink-600 text-white p-2 rounded-full focus:outline-none"
//       >
//         &#8592; {/* Left Arrow */}
//       </button>

//       {/* Next Button */}
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-pink-600 text-white p-2 rounded-full focus:outline-none"
//       >
//         &#8594; {/* Right Arrow */}
//       </button>

//       {/* Dots for slide navigation */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {banners.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`cursor-pointer w-3 h-3 rounded-full ${
//               index === currentSlide ? "bg-pink-600" : "bg-white"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

// Importing images from the assets folder
import image1 from '../assets/banner2.jpeg';
import image2 from '../assets/homepooja.jpeg';
import image3 from '../assets/bannerimage.jpeg';
import image4 from '../assets/banner1.jpeg';
import image5 from '../assets/bannerimage1.jpeg';
import image6 from '../assets/banner3.jpeg';
import image7 from '../assets/homepooja1.jpeg';
import Home1 from "./Home1";
import About from "./About";
// import Testimonials from "./Testimonial";
// import Testimonial from "./Testimonial";

const imgs = [image1, image2, image3, image4, image5, image6, image7];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 4;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const Home = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-neutral-950 py-8">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </div>
  );
};

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-screen shrink-0 rounded-xl bg-neutral-800 object-cover"
          />
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0"  />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
      <Home1/>
      <About/>
      {/* <Testimonial/> */}
    </>
  );
};

export default Home;
