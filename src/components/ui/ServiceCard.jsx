import React from 'react';

const ServiceCard = ({ service, isActive, onClick }) => {
  const mid = Math.ceil(service.features.length / 2);
  const leftFeatures = service.features.slice(0, mid);
  const rightFeatures = service.features.slice(mid);

  return (
    <button
      type="button"
      aria-pressed={isActive ? true : undefined}
      aria-label={`${service.title} - ${service.price}`}
      className={`group relative overflow-hidden p-8 rounded-3xl transition-all duration-500 
                  w-auto min-w-[320px] max-w-full text-left transform hover:scale-105
                  focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/50
                  ${isActive
                    ? 'bg-gradient-to-br from-white via-cyan-50 to-blue-50 shadow-2xl border-2 border-cyan-300 ring-4 ring-cyan-200/30'
                    : 'bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-xl border border-gray-200/50'
                  }`}
      onClick={onClick}
    >
      {/* Background gradient overlay */}
      <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 
                     ${isActive ? 'opacity-100' : 'group-hover:opacity-50'}
                     bg-gradient-to-r from-cyan-100/20 to-blue-100/20`} />
      
      {/* Header with title and price */}
      <div className="relative flex justify-between items-start mb-6">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-cyan-800 transition-colors">
            {service.title}
          </h3>
          <div className={`w-12 h-1 rounded-full transition-all duration-300
                         ${isActive ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-gray-300 group-hover:bg-cyan-400'}`} />
        </div>
        <div className={`px-4 py-2 rounded-2xl font-bold text-lg transition-all duration-300
                       ${isActive 
                         ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg' 
                         : 'bg-cyan-100 text-cyan-700 group-hover:bg-cyan-200'}`}>
          {service.price}
        </div>
      </div>

      {/* Features grid */}
      <div className="relative grid grid-cols-2 gap-x-6 gap-y-4">
        {/* Left column */}
        <div className="space-y-4">
          {leftFeatures.map((feature, idx) => (
            <div key={idx} className="flex items-center group-hover:translate-x-1 transition-transform duration-300">
              <div className={`flex-shrink-0 w-3 h-3 rounded-full mr-3 transition-all duration-300
                             ${isActive 
                               ? 'bg-gradient-to-r from-cyan-500 to-blue-500 shadow-sm' 
                               : 'bg-cyan-400 group-hover:bg-cyan-500'}`}>
                <div className={`w-full h-full rounded-full transition-all duration-500
                               ${isActive ? 'animate-pulse bg-white/30' : ''}`} />
              </div>
              <span className="text-gray-700 font-medium text-sm group-hover:text-gray-900 transition-colors">
                {feature}
              </span>
            </div>
          ))}
        </div>
        
        {/* Right column */}
        <div className="space-y-4">
          {rightFeatures.map((feature, idx) => (
            <div key={idx} className="flex items-center group-hover:translate-x-1 transition-transform duration-300">
              <div className={`flex-shrink-0 w-3 h-3 rounded-full mr-3 transition-all duration-300
                             ${isActive 
                               ? 'bg-gradient-to-r from-cyan-500 to-blue-500 shadow-sm' 
                               : 'bg-cyan-400 group-hover:bg-cyan-500'}`}>
                <div className={`w-full h-full rounded-full transition-all duration-500
                               ${isActive ? 'animate-pulse bg-white/30' : ''}`} />
              </div>
              <span className="text-gray-700 font-medium text-sm group-hover:text-gray-900 transition-colors">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-500
                     ${isActive 
                       ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500' 
                       : 'bg-gray-200 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400'}`} />
    </button>
  );
};

export default ServiceCard;