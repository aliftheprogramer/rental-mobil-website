import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="flex items-center mb-6">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
          <p className="text-gray-600">{testimonial.country}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700 leading-relaxed">"{testimonial.text}"</p>
    </div>
  );
};

export default TestimonialCard;