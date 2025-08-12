import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1920&h=1080&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-300 text-sm font-medium rounded-full backdrop-blur-sm">
              #1 Rental in Bali
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Explore Bali with{' '}
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Freedom & Style
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Premium scooter rentals, reliable airport transfers, and unforgettable tours. 
            Your Bali adventure starts here with our modern fleet and exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Book Your Ride
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              View Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;