import React, { useEffect, useState } from 'react';
import { FaBars, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
 import logo from '../assets/logo1.jpeg'

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // State to manage dropdown visibility
  const [dropdowns, setDropdowns] = useState({
    about: false,
    dhanurveda: false,
    gurukulam: false,
    courses: false,
    temple: false,
  });

  // Function to toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle scroll events
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setIsScrolled(currentScrollPos > 0); // Check if the page is scrolled down

    // Show navbar if scrolling up or at the top
    setNavbarVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos); // Update previous scroll position
  };

  // Function to toggle dropdown visibility
  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`fixed top-10 w-full z-50 transition-transform duration-300 ease-in-out ${
        navbarVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolled ? 'bg-blur backdrop-blur-lg top-14' : 'bg-gradient-to-r from-red-800 via-maroon-800 to-yellow-400 '} text-white`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Hamburger for mobile on the left side */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <FaBars size={24} /> {/* Keep the hamburger icon */}
          </button>
        </div>

        {/* Left Side Logo */}
        <div className="text-2xl font-bold lg:ml-6">
        <Link to="/">
  <img src={logo} alt="Logo" class="h-16 w-auto" />
</Link>

        </div>

        {/* Menu Links */}
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:space-x-6 lg:static absolute top-16 left-0 w-full lg:w-auto lg:bg-transparent lg:h-auto transition-all ease-in-out duration-300`}
        >
          {[
            { title: 'Home', hasDropdown: false },
            { title: 'About', hasDropdown: true },
            { title: 'Dhanurveda', hasDropdown: true },
            { title: 'Gurukulam', hasDropdown: true },
            { title: 'Temple', hasDropdown: true },
            { title: 'Courses', hasDropdown: true },
            { title: 'Rituals', hasDropdown: false },
            { title: 'Get Involved', hasDropdown: false },
            { title: 'Events', hasDropdown: false },
            { title: 'Contact', hasDropdown: false },
          ].map((item, index) => (
            <li key={index} className="group relative text-center lg:inline-block w-full lg:w-auto">
              <a
                href="#"
                className="block py-2 lg:py-0 px-4 lg:px-0 text-white hover:underline lg:hover:no-underline transition duration-300"
                onClick={item.hasDropdown ? () => toggleDropdown(item.title.toLowerCase()) : null}
              >
                {item.title === 'Contact' ? (
                  <div className="flex items-center justify-center">
                    <FaPhone className="mr-2" />
                    {item.title}
                  </div>
                ) : (
                  item.title
                )}
              </a>

              {/* Dropdown Menu */}
              {item.hasDropdown && dropdowns[item.title.toLowerCase()] && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                  {item.title === 'About' && (
                    <>
                      <li className="hover:bg-gray-200">
                        <a href="#" className="block px-4 py-2">About Us</a>
                      </li>
                      <li className="hover:bg-gray-200">
                        <a href="#" className="block px-4 py-2">Our Team</a>
                      </li>
                    </>
                  )}
                  {item.title === 'Dhanurveda' && (
                    <>
                      <li className="hover:bg-gray-200">
                        <a href="#" className="block px-4 py-2">Overview</a>
                      </li>
                      <li className="hover:bg-gray-200">
                        <a href="#" className="block px-4 py-2">Practices</a>
                      </li>
                    </>
                  )}
                  {item.title === 'Gurukulam' && (
                    <>
                      <li className="hover:bg-gray-200">
                        <a href="#" className="block px-4 py-2">Programs</a>
                      </li>
                      <li className="hover:bg-gray-200">
                        <a href="#" className="block px-4 py-2">Enrollment</a>
                      </li>
                    </>
                  )}
                  {item.title === 'Courses' && (
                    <>
                      <li className="hover:bg-gray-200">
                        <a href="#" className="block px-4 py-2">Course List</a>
                      </li>
                      <li className="hover:bg-gray-200">
                        <a href="#" className="block px-4 py-2">Registration</a>
                      </li>
                    </>
                  )}
                  {item.title === 'Temple' && (
                    <>
                      <li className="hover:bg-gray-200">
                        <a href="#" className="block px-4 py-2">Temple History</a>
                      </li>
                      <li className="hover:bg-gray-200">
                        <a href="#" className="block px-4 py-2">Visiting Hours</a>
                      </li>
                    </>
                  )}
              </ul>
              )}

              {/* Underline on hover */}
              <span className="block w-full h-0.5 bg-white absolute left-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar2;
