import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const categories = [
  { name: 'Restaurants', count: 1234, image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4' },
  { name: 'Shopping', count: 856, image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8' },
  { name: 'Hotels', count: 432, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945' },
  { name: 'Healthcare', count: 765, image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907' },
  { name: 'Education', count: 543, image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1' },
  { name: 'Beauty & Spa', count: 678, image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8' },
  { name: 'Auto Services', count: 345, image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc' },
  { name: 'Home Services', count: 890, image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952' },
];

const Categories = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Search */}
      <div className="mb-12">
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search categories..."
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-xl">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-gray-200">{category.count} businesses</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;