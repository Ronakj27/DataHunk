import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Filter, MapPin, Star, Clock, Phone, ChevronDown } from 'lucide-react';

interface Business {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  address: string;
  phone: string;
  hours: string;
  price: string;
  tags: string[];
}

const businesses: Business[] = [
  {
    id: 1,
    name: "The Urban Spice",
    category: "Restaurants",
    rating: 4.5,
    reviews: 328,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    description: "Contemporary Indian cuisine in a modern setting with craft cocktails.",
    address: "123 Main Street, Downtown",
    phone: "+1 234-567-8900",
    hours: "9:00 AM - 10:00 PM",
    price: "$$$",
    tags: ["Indian", "Cocktails", "Dinner"]
  },
  {
    id: 2,
    name: "Bytes & Beans",
    category: "Coffee Shops",
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
    description: "Artisanal coffee shop with fast Wi-Fi and homemade pastries.",
    address: "456 Tech Avenue",
    phone: "+1 234-567-8901",
    hours: "7:00 AM - 8:00 PM",
    price: "$$",
    tags: ["Coffee", "Pastries", "Wi-Fi"]
  },
  {
    id: 3,
    name: "FlexFit Studio",
    category: "Fitness Centers",
    rating: 4.7,
    reviews: 243,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    description: "Modern fitness studio offering group classes and personal training.",
    address: "789 Health Boulevard",
    phone: "+1 234-567-8902",
    hours: "5:00 AM - 11:00 PM",
    price: "$$$",
    tags: ["Gym", "Classes", "Training"]
  }
];

const Businesses = () => {
  const { category } = useParams();
  const [selectedPrice, setSelectedPrice] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState('rating');

  const filteredBusinesses = businesses.filter(business => {
    if (category && business.category.toLowerCase() !== category.toLowerCase()) {
      return false;
    }
    if (selectedPrice.length > 0 && !selectedPrice.includes(business.price)) {
      return false;
    }
    if (selectedRating && business.rating < selectedRating) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {category || 'All Businesses'}
          </h1>
          <p className="text-gray-600">
            Discover and connect with local businesses
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center mb-6">
                <Filter className="w-5 h-5 text-gray-600 mr-2" />
                <h2 className="text-lg font-semibold">Filters</h2>
              </div>

              <div className="space-y-6">
                {/* Price Filter */}
                <div>
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <div className="space-y-2">
                    {['$', '$$', '$$$', '$$$$'].map((price) => (
                      <label key={price} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedPrice.includes(price)}
                          onChange={() => {
                            if (selectedPrice.includes(price)) {
                              setSelectedPrice(selectedPrice.filter(p => p !== price));
                            } else {
                              setSelectedPrice([...selectedPrice, price]);
                            }
                          }}
                          className="rounded text-blue-600"
                        />
                        <span className="ml-2">{price}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <h3 className="font-medium mb-3">Rating</h3>
                  <div className="space-y-2">
                    {[4, 3, 2].map((rating) => (
                      <label key={rating} className="flex items-center">
                        <input
                          type="radio"
                          name="rating"
                          checked={selectedRating === rating}
                          onChange={() => setSelectedRating(rating)}
                          className="text-blue-600"
                        />
                        <span className="ml-2">{rating}+ Stars</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Sort By */}
                <div>
                  <h3 className="font-medium mb-3">Sort By</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full rounded-lg border-gray-200"
                  >
                    <option value="rating">Rating</option>
                    <option value="reviews">Review Count</option>
                    <option value="name">Name</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Business List */}
          <div className="lg:col-span-3">
            <div className="grid gap-6">
              {filteredBusinesses.map((business, index) => (
                <motion.div
                  key={business.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={business.image}
                        alt={business.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {business.name}
                          </h3>
                          <p className="text-gray-600 mb-4">{business.description}</p>
                        </div>
                        <div className="flex items-center bg-blue-50 px-3 py-1 rounded-lg">
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          <span className="ml-1 font-semibold">{business.rating}</span>
                          <span className="text-gray-600 text-sm ml-1">
                            ({business.reviews})
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{business.address}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Phone className="w-4 h-4 mr-2" />
                          <span>{business.phone}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{business.hours}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {business.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Link
                          to={`/business/${business.id}`}
                          className="flex items-center text-blue-600 hover:text-blue-700"
                        >
                          View Details
                          <ChevronDown className="w-4 h-4 ml-1 transform -rotate-90" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Businesses;