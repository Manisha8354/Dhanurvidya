import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram ,faYoutube, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-800 via-orange-800 to-red-950 text-gray-300 py-10 ">
      <div className="container mx-auto px-5 lg:px-0 flex flex-wrap justify-between space-y-8 lg:space-y-0">
        {/* First Section */}
        <div className="w-full lg:w-1/4">
  <h3 className="text-xl font-semibold text-white mb-3">Isodhan International Society</h3>
  <img 
    src="http://localhost:5173/src/assets/logo1.jpeg" 
    alt="Isodhan International Society Logo" 
    className="w-32 h-auto" 
  />
</div>


        {/* About Section */}
        <div className="w-full lg:w-1/4">
          <h3 className="text-xl font-semibold text-white mb-3">Information</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-500">Home</a></li>
            <li><a href="#" className="hover:text-orange-500">About Us</a></li>
            <li><a href="#" className="hover:text-orange-500">Sri Guru Karunamaya</a></li>
            <li><a href="#" className="hover:text-orange-500">Guru Lineage</a></li>
            <li><a href="#" className="hover:text-orange-500">Events</a></li>
            <li><a href="#" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="w-full lg:w-1/4">
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-500">Upcoming Srividya Classes</a></li>
            <li><a href="#" className="hover:text-orange-500">Special Workshops</a></li>
            <li><a href="#" className="hover:text-orange-500">Puja</a></li>
            <li><a href="#" className="hover:text-orange-500">Guruvaani</a></li>
            <li><a href="#" className="hover:text-orange-500">Remedies</a></li>
            <li><a href="#" className="hover:text-orange-500">FAQ</a></li>
            <li><a href="#" className="hover:text-orange-500">Testimonials</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full lg:w-1/4">
  <h3 className="text-xl font-semibold text-white mb-3">Connect With Us</h3>

  {/* Social Media Icons */}
  <div className="flex space-x-4 mb-3">
    <a href="https://www.facebook.com/Dhanurveda" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
      <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>
    <a href="https://www.instagram.com/isodhan_dhanurveda/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
      <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
    <a href="https://www.youtube.com/channel/UCBnrjXRrwJtXze9LmnS7y3Q" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
      <FontAwesomeIcon icon={faYoutube} size="2x" />
    </a>
    <a href="https://api.whatsapp.com/send?phone=+919154264942&text=Hello" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
    </a>
    <a href="mailto:internationaldhanurveda@gmail.com" className="hover:text-orange-500">
      <FontAwesomeIcon icon={faEnvelope} size="2x" />
    </a>
  </div>

  {/* Address Row */}
  <div className="flex items-center mb-2">
    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-lg mr-2 mb-14" />
    <address className="not-italic text-sm">
    Head office : ISODHAN DHANURVEDA GURUKULAM , Anna Rao Circle, beside more super market, Srinivasa Nagar, N G O Colony, Tirupati 517501
    </address>
  </div>



</div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 pt-4 border-t border-gray-600 text-center">
        <p className="text-sm">
          Copyright © 2024 Srividya Learning Centre (A knowledge partner of Soundarya Lahari)
        </p>
        <p className="text-sm">
          <a href="#" className="hover:text-orange-500">Privacy Policy</a> | <a href="#" className="hover:text-orange-500">Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
