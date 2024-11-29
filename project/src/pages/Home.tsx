import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import StatsSection from '../components/home/StatsSection';
import TrendingSection from '../components/home/TrendingSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CategoryGrid from '../components/CategoryGrid';
import BusinessList from '../components/BusinessList';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <TrendingSection />
      
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Popular Categories
          </h2>
          <CategoryGrid />
        </div>
      </div>
      
      <TestimonialsSection />
      
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Businesses
          </h2>
          <BusinessList searchQuery="" />
        </div>
      </div>
    </div>
  );
};

export default Home;