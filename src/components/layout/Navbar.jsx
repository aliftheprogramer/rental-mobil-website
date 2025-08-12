import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">

            <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              WhyBali
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">Services</a>
            {/* <a href="#about" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">About</a> */}
            <a href="#contact" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">Contact</a>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium">
              Book Now
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <a href="#home" className="block text-gray-700 hover:text-cyan-600 font-medium">Home</a>
            <a href="#services" className="block text-gray-700 hover:text-cyan-600 font-medium">Services</a>
            {/* <a href="#about" className="block text-gray-700 hover:text-cyan-600 font-medium">About</a> */}
            <a href="#contact" className="block text-gray-700 hover:text-cyan-600 font-medium">Contact</a>
            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-medium">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;