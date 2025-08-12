import React, { useState } from 'react';
import ServiceCard from '../ui/ServiceCard';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    { title: "Airport Transfer", price: "From IDR 35.000", features: ["24/7 Available", "Professional Driver", "Hotel Pickup", "Fixed Price"] },
    { title: "Scooter Rental", price: "From IDR 55.000", features: ["New Scooters", "Free Helmet", "Insurance Included", "Flexible Duration"] },
    { title: "Tour Package", price: "From IDR 500.000", features: ["Local Guide", "Popular Destinations", "Photo Stops", "Traditional Lunch"] }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our range of professional services designed to make your Bali experience unforgettable
          </p>
        </div>

        <div className="flex flex-col justify-center">
          {/* Mobile: column, Desktop: row + wrap */}
          <div className="flex flex-col gap-6 lg:flex-row lg:flex-wrap lg:gap-8 justify-center">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                isActive={activeService === index}
                onClick={() => setActiveService(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;