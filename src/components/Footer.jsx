import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-950 via-orange-800 to-yellow-800 text-gray-300 py-10 ">
      <div className="container mx-auto px-5 lg:px-0 flex flex-wrap justify-between space-y-8 lg:space-y-0">
        {/* First Section */}
        <div className="w-full lg:w-1/4">
          <h3 className="text-xl font-semibold text-white mb-3">Srividya Learning Centre</h3>
          <p className="text-sm">
            Srividya Learning Centre is a non-profit organisation established
            to spread the teachings of Universal Mother Sri Lalitha
            Tripurasundari.
          </p>
        </div>

        {/* About Section */}
        <div className="w-full lg:w-1/4">
          <h3 className="text-xl font-semibold text-white mb-3">About</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-500">About Srividya</a></li>
            <li><a href="#" className="hover:text-orange-500">Srividya Learning Centre</a></li>
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
          <h3 className="text-xl font-semibold text-white mb-3">Srividya Learning Centre</h3>
          <address className="not-italic text-sm mb-2">
            27,28 Chairman Rajamanikam Street,<br />
            Near New Railway Station,<br />
            Karthinagar, Kanchipuram, TN 631502, India.
          </address>
          <p className="text-sm">Phone: +91 8088256632</p>
          <p className="text-sm">WhatsApp: +91 8608747873</p>
          <p className="text-sm">
            Email: <a href="mailto:srimeru999@gmail.com" className="hover:text-orange-500">srimeru999@gmail.com</a>
          </p>
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
