import React from 'react';
import { motion } from 'framer-motion';
import { Search, Map, Star } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Easy Discovery',
    description: 'Find exactly what you need with our smart search'
  },
  {
    icon: Map,
    title: 'Local First',
    description: 'Connect with businesses in your neighborhood'
  },
  {
    icon: Star,
    title: 'Trusted Reviews',
    description: 'Make informed decisions with authentic reviews'
  }
];

const FeaturesSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-6 bg-blue-50 rounded-2xl flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <feature.icon className="w-8 h-8 text-blue-600" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;