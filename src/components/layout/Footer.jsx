import React from 'react';
import { Heart } from 'lucide-react';
import logo from '../../assets/logo.png'; // Make sure the path is correct

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <img src={logo} alt="WhyBali Tour Logo" className="h-16 w-auto" />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted partner for scooter rentals, airport transfers, and tours in Bali.
              Experience the island with comfort, safety, and style.
            </p>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-gray-400">Made with love in Bali</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              {/* <li><a href="#about" className="hover:text-white transition-colors">About</a></li> */}
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a className="hover:text-white transition-colors">Airport Transfer</a></li>
              <li><a className="hover:text-white transition-colors">Scooter Rental</a></li>
              <li><a className="hover:text-white transition-colors">Tour Package</a></li>
              <li><a className="hover:text-white transition-colors">24/7 Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 WhyBali Tour. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;