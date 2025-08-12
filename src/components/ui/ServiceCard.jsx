import React from 'react';

const ServiceCard = ({ service, isActive, onClick }) => {
  return (
    <div
      className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
        isActive
          ? 'bg-white shadow-xl border-2 border-cyan-200'
          : 'bg-white/60 hover:bg-white hover:shadow-lg'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
        <span className="text-2xl font-bold text-cyan-600">{service.price}</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {service.features.map((feature, idx) => (
          <div key={idx} className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <span className="text-gray-700 font-medium">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;