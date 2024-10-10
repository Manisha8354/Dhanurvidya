import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10); // Show navbar if scrolling up or near top
    setPrevScrollPos(currentScrollPos); // Update previous scroll position
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener on unmount
    };
  }, [prevScrollPos]);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="bg-orange-100 text-black w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-10 w-full">
          <span className="text-xs md:text-sm lg:text-base hover:text-maroon hover:scale-110 transition-transform transition-colors duration-300 ease-in-out">
            Trayodashi Calendar
          </span>
          <span className="mx-2 text-maroon hover:text-white transition-colors duration-300 ease-in-out">
            |
          </span>
          <span className="text-xs md:text-sm lg:text-base hover:text-maroon hover:scale-110 transition-transform transition-colors duration-300 ease-in-out">
            + 91 9154264942
          </span>
          <span className="mx-2 text-maroon hover:text-white transition-colors duration-300 ease-in-out">
            |
          </span>
          <span className="text-xs md:text-sm lg:text-base hover:text-maroon hover:scale-110 transition-transform transition-colors duration-300 ease-in-out">
            Subscribe
          </span>
          <span className="mx-2 text-maroon hover:text-white transition-colors duration-300 ease-in-out">
            |
          </span>
          <span className="text-xs md:text-sm lg:text-base hover:text-maroon hover:scale-110 transition-transform transition-colors duration-300 ease-in-out">
            Donate
          </span>
          <span className="mx-2 text-maroon hover:text-white transition-colors duration-300 ease-in-out">
            |
          </span>
          <span className="text-xs md:text-sm lg:text-base hover:text-maroon hover:scale-110 transition-transform transition-colors duration-300 ease-in-out">
            Signup
          </span>
          <span className="mx-2 text-maroon hover:text-white transition-colors duration-300 ease-in-out">
            |
          </span>
          <span className="text-xs md:text-sm lg:text-base hover:text-maroon hover:scale-110 transition-transform transition-colors duration-300 ease-in-out">
            Shops
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
