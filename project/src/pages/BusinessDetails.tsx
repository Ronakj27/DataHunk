import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Phone, MapPin, Clock, Globe, Share2, Heart } from 'lucide-react';

const BusinessDetails = () => {
  const { id } = useParams();

  // Mock data - In a real app, fetch based on id
  const business = {
    name: "The Urban Spice",
    category: "Restaurant",
    rating: 4.5,
    reviews: 328,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    address: "123 Main Street, Downtown",
    phone: "+1 234-567-8900",
    hours: "9:00 AM - 10:00 PM",
    website: "https://urbanspice.com",
    description: "Experience the finest Indian cuisine in a modern setting...",
    photos: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9"
    ]
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-sm overflow-hidden"
      >
        {/* Header */}
        <div className="relative h-96">
          <img
            src={business.image}
            alt={business.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">{business.name}</h1>
            <p className="text-xl mb-4">{business.category}</p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-white/20 px-3 py-1 rounded-full">
                <Star className="text-yellow-400 w-5 h-5 mr-1" />
                <span className="font-semibold">{business.rating}</span>
                <span className="ml-1">({business.reviews} reviews)</span>
              </div>
              <button className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full hover:bg-white/30">
                <Heart className="w-5 h-5" />
                <span>Save</span>
              </button>
              <button className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full hover:bg-white/30">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">About</h2>
              <p className="text-gray-600">{business.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Photos</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {business.photos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={`${business.name} ${index + 1}`}
                    className="rounded-lg h-32 w-full object-cover"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl space-y-4">
              <div className="flex items-center text-gray-700">
                <MapPin className="w-5 h-5 mr-3" />
                <span>{business.address}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Phone className="w-5 h-5 mr-3" />
                <span>{business.phone}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Clock className="w-5 h-5 mr-3" />
                <span>{business.hours}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Globe className="w-5 h-5 mr-3" />
                <a href={business.website} className="text-blue-600 hover:underline">
                  Visit website
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BusinessDetails;