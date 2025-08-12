import React from 'react';
import { Users, Award, Shield, Globe } from 'lucide-react';
import StatItem from '../ui/StatItem';

const Stats = () => {
  const stats = [
    { icon: Users, number: "50K+", label: "Happy Customers" },
    { icon: Award, number: "17 Years", label: "Experience" },
    { icon: Shield, number: "100%", label: "Insured" },
    { icon: Globe, number: "24/7", label: "Support" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem 
              key={index} 
              icon={stat.icon} 
              number={stat.number} 
              label={stat.label} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;