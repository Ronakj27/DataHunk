import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, Award, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import CategoryGrid from '../components/CategoryGrid';
import BusinessList from '../components/BusinessList';
import TrustedBy from '../components/home/TrustedBy';
import DataInsights from '../components/home/DataInsights';
import HowItWorks from '../components/home/HowItWorks';
import PricingCalculator from '../components/PricingCalculator';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    { label: 'Active Businesses', value: '10K+' },
    { label: 'Happy Customers', value: '50K+' },
    { label: 'Cities Covered', value: '100+' },
    { label: 'Monthly Visitors', value: '1M+' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Restaurant Owner',
      content: 'DataHunk has transformed my business reach. The platform is intuitive and the results are amazing.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Tech Entrepreneur',
      content: 'The best platform for local business discovery. The analytics and insights are invaluable.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      rating: 5
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-gradient-to-r from-blue-600 to-blue-800 h-[600px] md:h-[700px]"
      >
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
            alt="Hero background"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 py-32 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-7xl font-bold text-white mb-6"
          >
            Discover Your Next
            <span className="block text-blue-400">Favorite Place</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
          >
            Connect with the best local businesses, read reviews, and find exactly what you're looking for
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <SearchBar onSearch={setSearchQuery} />
          </motion.div>
        </div>
      </motion.div>

      {/* Trusted By Section */}
      <TrustedBy />

      {/* How It Works */}
      <HowItWorks />

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Insights Section */}
      <DataInsights />

      {/* Popular Categories */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Explore Popular Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through the most popular categories and find exactly what you're looking for
            </p>
          </motion.div>
          <CategoryGrid />
        </div>
      </div>

      {/* Pricing Calculator */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Calculate Your Plan
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find the perfect plan for your business needs
              </p>
            </div>
            <PricingCalculator />
          </motion.div>
        </div>
      </div>

      {/* Featured Businesses */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Businesses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover top-rated local businesses that consistently deliver exceptional experiences
            </p>
          </motion.div>
          <BusinessList searchQuery={searchQuery} />
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What People Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read what business owners and customers have to say about their experience
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust DataHunk to connect with customers
            </p>
            <Link
              to="/list-business"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              List Your Business
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;