import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const trendingCategories = [
  {
    name: 'Coffee Shops',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb',
    count: 128
  },
  {
    name: 'Fitness Centers',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
    count: 95
  },
  {
    name: 'Co-working Spaces',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    count: 84
  }
];

const TrendingSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">Trending Now</h2>
            <p className="text-gray-600">Discover what's popular in your area</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/categories"
              className="flex items-center text-blue-600 hover:text-blue-700"
            >
              View All Categories
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trendingCategories.map((category, index) => (
            <Link
              key={category.name}
              to={`/businesses/category/${category.name.toLowerCase()}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <motion.img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-64 object-cover transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {category.name}
                        </h3>
                        <p className="text-white/80">{category.count} places</p>
                      </div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="bg-white/20 p-2 rounded-full"
                      >
                        <TrendingUp className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;