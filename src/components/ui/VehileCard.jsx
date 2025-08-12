import React from 'react';
import { Check, Phone } from 'lucide-react';

const VehicleCard = ({ vehicle }) => {
  // Extract the numeric price and convert to proper format for weekly/monthly
  const getPriceValue = (priceString) => {
    const numericValue = parseInt(priceString.replace(/\D/g, ''));
    return numericValue || 60; // Default to 60 if parsing fails
  };
  
  // Format number with thousands separator (dots)
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  
  const basePrice = getPriceValue(vehicle.price);
  
  // Generate WhatsApp link with pre-filled message
  const getWhatsAppLink = () => {
    const phoneNumber = "628179724469"; // Format: country code + number without symbols
    const message = `Saya mau sewa motor ${vehicle.name}`;
    
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border-2 border-blue-500">
      {/* Popular badge - keep this from original design */}
      {vehicle.popular && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Popular Choice
          </span>
        </div>
      )}
      
      {/* Vehicle image - centered in light gray background */}
      <div className="p-6 flex justify-center bg-gray-50">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="h-48 object-contain"
        />
      </div>

      <div className="text-center p-4">
        {/* Vehicle name */}
        <h3 className="text-xl font-bold text-blue-600 mb-1">{vehicle.name}</h3>
        
        {/* Price section with multiple options */}
        <div className="mt-1 mb-3">
          <div className="text-sm text-gray-500">Price:</div>
          <div className="text-3xl font-bold text-green-500">
            IDR <span className="text-green-500">{formatPrice(basePrice)}</span>
            <span className="text-sm text-gray-500">/Day</span>
          </div>
          
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mt-2">

          </div>
        </div>
        
        {/* Include section with cyan theme */}
        <div className="py-3 bg-gray-50 rounded-md mb-4 border-t border-b border-gray-100">
          <div className="text-center font-bold text-gray-800 mb-2">INCLUDE</div>
          <div className="grid grid-cols-2 px-4">
            {vehicle.features.map((feature, idx) => (
              <div key={idx} className="flex items-center mb-1">
                <Check size={16} className="text-cyan-500 mr-1" />
                <span className="text-xs text-gray-700 uppercase">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Action buttons - WhatsApp and Telephone */}
        <div className="grid grid-cols-1 gap-3 px-2">
          <a 
            href={getWhatsAppLink()} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white flex items-center justify-center px-4 py-2 rounded-md font-medium hover:bg-[#22c55e] transition-colors duration-200"
          >
            {/* WhatsApp Logo */}
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>

        </div>
      </div>
    </div>
  );
};

export default VehicleCard;