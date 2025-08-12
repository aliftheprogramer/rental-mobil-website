import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "Australia",
      rating: 5,
      text: "Amazing service! The scooter was in perfect condition and the staff was incredibly helpful.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Marco Rossi",
      country: "Italy",
      rating: 5,
      text: "Best airport transfer service in Bali. Professional, punctual, and very affordable.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Chen",
      country: "Singapore",
      rating: 5,
      text: "The tour was fantastic! Our guide showed us hidden gems we would never have found.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Real experiences from travelers who chose BaliRide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;