import React from 'react';
import { motion } from 'framer-motion';
import { Database, Shield, Zap, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Database,
    title: 'Rich Business Data',
    description: 'Access comprehensive data on millions of businesses including contact details, reviews, and analytics.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and security measures to protect sensitive business information.'
  },
  {
    icon: Zap,
    title: 'Real-time Updates',
    description: 'Get instant access to the latest business information with real-time data synchronization.'
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Access business data from multiple countries and regions worldwide.'
  }
];

const DataServices = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Enterprise Data Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Access comprehensive business data through our powerful API. Perfect for enterprises, researchers, and developers.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/pricing"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Pricing
            </Link>
            <Link
              to="/api-docs"
              className="bg-gray-100 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              API Documentation
            </Link>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Popular Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Market Research</h3>
              <p className="text-gray-600 mb-4">
                Analyze market trends, competitor insights, and consumer behavior patterns.
              </p>
              <Link to="/enterprise" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Lead Generation</h3>
              <p className="text-gray-600 mb-4">
                Access verified business contacts and detailed company information.
              </p>
              <Link to="/enterprise" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Analytics</h3>
              <p className="text-gray-600 mb-4">
                Build custom analytics solutions with our comprehensive data sets.
              </p>
              <Link to="/enterprise" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join leading companies using DataHunk's enterprise data solutions
          </p>
          <Link
            to="/enterprise"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Contact Sales <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DataServices;