import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import Services from './components/sections/Services';
import VehicleFleet from './components/sections/VehicleFleet';
// import Testimonials from './components/sections/Testimonials';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';
import Contact from './components/sections/Contact';

const ModernScooterRental = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar scrollY={scrollY} />
      <Hero />
      <Stats />
      <Services />
      <VehicleFleet />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default ModernScooterRental;