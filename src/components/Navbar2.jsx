import React, { useEffect, useState } from 'react';
import { FaBars, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.jpeg';

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
    setIsScrolled(currentScrollPos > 0);

    setNavbarVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  // Function to toggle dropdown visibility
  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const toggleDropdown1 = (dropdownName) => {
    setDropdowns((prev) => ({
      ...prev,
      [dropdownName]: !prev[dropdownName], // Toggle the dropdown state
    }));
  };

  return (
    <header
      className={`fixed top-10 w-full z-50 transition-transform duration-300 ease-in-out ${
        navbarVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolled ? 'bg-blur backdrop-blur-lg top-14' : 'bg-gradient-to-r from-red-800 via-maroon-800 to-yellow-400 '} text-white`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Hamburger for mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <FaBars size={24} />
          </button>
        </div>

        {/* Logo */}
        <div className="text-2xl font-bold lg:ml-6">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </Link>
        </div>

        {/* Menu Links */}
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:space-x-6 lg:static absolute top-16 left-0 w-full lg:w-auto lg:bg-transparent lg:h-auto transition-all ease-in-out duration-300`}
        >
          <li className="group relative text-center lg:inline-block w-full lg:w-auto">
            <a href="#" className="block py-2 lg:py-0 px-4 lg:px-0 text-white hover:underline lg:hover:no-underline transition duration-300">
              Home
            </a>
          </li>

          {/* About Us Dropdown */}
          <li className="group relative text-center lg:inline-block w-full lg:w-auto">
      <a
        href="#"
        className="block py-2 lg:py-0 px-4 lg:px-0 text-white hover:underline lg:hover:no-underline transition duration-300"
        onClick={(e) => {
          e.preventDefault(); // Prevent default anchor action
          toggleDropdown1('about'); // Toggle dropdown state
        }}
        onMouseEnter={() => setDropdowns({ about: true })} // Show dropdown on hover
        onMouseLeave={() => setDropdowns((prev) => ({ ...prev, about: false }))} // Hide dropdown on hover leave
      >
        About
      </a>
      {dropdowns.about && (
        <ul className="absolute left-0 mt-2 w-48 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 text-black rounded-md shadow-lg z-10 transition-opacity duration-300 ease-in-out opacity-100">
          <li className="hover:bg-gray-200">
            <a href="#" className="block px-4 py-2">Guru</a>
          </li>
          <li className="hover:bg-gray-200">
            <a href="#" className="block px-4 py-2">Our Mission</a>
          </li>
          <li className="hover:bg-gray-200">
            <a href="#" className="block px-4 py-2">Associated Centers</a>
          </li>
          <li className="hover:bg-gray-200">
            <a href="#" className="block px-4 py-2">Upcoming Projects</a>
          </li>
          <li className="hover:bg-gray-200">
            <a href="#" className="block px-4 py-2">18 Parashuram Temples and Gurukul</a>
          </li>
          <li className="hover:bg-gray-200">
            <a href="#" className="block px-4 py-2">Bhargava Upasana</a>
          </li>
        </ul>
      )}
    </li>


          {/* Dhanurveda Dropdown */}
          <li className="group relative text-center lg:inline-block w-full lg:w-auto"
    onMouseEnter={() => toggleDropdown('dhanurveda')}
    onMouseLeave={() => toggleDropdown('dhanurveda')}
>
  <a
    href="#"
    className="block py-2 lg:py-0 px-4 lg:px-0 text-white hover:underline lg:hover:no-underline transition duration-300"
  >
    Dhanurveda
  </a>
  {dropdowns.dhanurveda && (
    <ul className="absolute left-0 mt-2 w-48 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 text-black rounded-md shadow-lg z-10 transition-opacity duration-300 ease-in-out opacity-100">
      <li className="hover:bg-gray-200">
        <a href="#" className="block px-4 py-2">Overview</a>
      </li>
      <li className="hover:bg-gray-200">
        <a href="#" className="block px-4 py-2">Practices</a>
      </li>
      <li className="hover:bg-gray-200">
        <a href="#" className="block px-4 py-2">Origin Dhanurvidya</a>
      </li>
      <li className="hover:bg-gray-200">
        <a href="#" className="block px-4 py-2">Khadgavidya</a>
      </li>
      <li className="hover:bg-gray-200">
        <a href="#" className="block px-4 py-2">Gadavidya</a>
      </li>
    </ul>
  )}
</li>


          {/* Gurukulam Dropdown */}
          <li className="group relative text-center lg:inline-block w-full lg:w-auto"
    onMouseEnter={() => toggleDropdown('gurukulam')}
    onMouseLeave={() => toggleDropdown('gurukulam')}
>
  <a
    href="#"
    className="block py-2 lg:py-0 px-4 lg:px-0 text-white hover:underline lg:hover:no-underline transition duration-300"
  >
    Gurukulam
  </a>
  {dropdowns.gurukulam && (
    <ul className="absolute left-0 mt-2 w-48 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 text-black rounded-md shadow-lg z-10 transition-opacity duration-300 ease-in-out opacity-100">
      <li className="hover:bg-gray-200">
        <a href="#" className="block px-4 py-2">Tirupati</a>
      </li>
    </ul>
  )}
</li>


          {/* Temple Dropdown */}
          <li className="group relative text-center lg:inline-block w-full lg:w-auto"
    onMouseEnter={() => toggleDropdown('temple')}
    onMouseLeave={() => toggleDropdown('temple')}
>
  <a
    href="#"
    className="block py-2 lg:py-0 px-4 lg:px-0 text-white hover:underline lg:hover:no-underline transition duration-300"
  >
    Temple
  </a>
  {dropdowns.temple && (
    <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10 transition-transform duration-300 ease-in-out transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
      <li className="hover:bg-gray-200">
        <a href="#" className="block px-4 py-2">Temple History</a>
      </li>
      <li className="hover:bg-gray-200">
        <a href="#" className="block px-4 py-2">Visiting Hours</a>
      </li>
    </ul>
  )}
</li>


          <li className="group relative text-center lg:inline-block w-full lg:w-auto">
            <a href="#" className="block py-2 lg:py-0 px-4 lg:px-0 text-white hover:underline lg:hover:no-underline transition duration-300">
              Rituals
            </a>
          </li>

          <li className="group relative text-center lg:inline-block w-full lg:w-auto">
  <a
    href="#"
    className="block py-2 lg:py-0 px-4 lg:px-0 text-white hover:underline lg:hover:no-underline transition duration-300"
    onMouseEnter={() => toggleDropdown('involved')}
    onMouseLeave={() => toggleDropdown('involved')}
  >
    Get Involved
  </a>
  {dropdowns.involved && (
    <ul className="absolute left-0 mt-2 w-48 bg-gradient-to-r from-yellow-200 to-yellow-400 text-black rounded-md shadow-lg z-10 transition-transform duration-300 ease-in-out transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
      <li className="hover:bg-gray-200">
        <a href="#" className="block px-4 py-2">Volunteer</a>
      </li>
      <li className="hover:bg-gray-200">
        <a href="#" className="block px-4 py-2">Offer Seva</a>
      </li>
      <li className="hover:bg-gray-200">
        <a href="#" className="block px-4 py-2">Careers</a>
      </li>
    </ul>
  )}
</li>


<li className="group relative text-center lg:inline-block w-full lg:w-auto">
  <a
    href="#"
    className="block py-2 lg:py-0 px-4 lg:px-0 text-white hover:underline lg:hover:no-underline transition duration-300"
    onClick={() => toggleDropdown('events')}
  >
    Events
  </a>
  {dropdowns.events && (
    <ul className="absolute left-0 mt-2 w-48 bg-gradient-to-r from-yellow-200 to-yellow-400 text-black rounded-md shadow-lg z-10 transition-transform duration-300 ease-in-out transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
      <li className="hover:bg-gray-200">
        <a href="#" className="block px-4 py-2">Trayodashi Maha Abhishekam</a>
      </li>
      <li className="hover:bg-gray-200">
        <a href="#" className="block px-4 py-2">Parashurama Jayanti</a>
      </li>
      <li className="hover:bg-gray-200">
        <a href="#" className="block px-4 py-2">Parashurama Dwadashi</a>
      </li>
      <li className="hover:bg-gray-200">
        <a href="#" className="block px-4 py-2">Ayudha Pooja</a>
      </li>
      <li className="hover:bg-gray-200">
        <a href="#" className="block px-4 py-2">Vaikuntha Ekadashi</a>
      </li>
    </ul>
  )}
</li>


          <li className="group relative text-center lg:inline-block w-full lg:w-auto">
  <a href="#" className="block py-2 lg:py-0 px-4 lg:px-0 text-white transition duration-300">
    <FaPhone className="animate-tring inline-block text-white" size={24} />
  </a>
</li>

        </ul>
      </nav>
    </header>
  );
};

export default Navbar2;
