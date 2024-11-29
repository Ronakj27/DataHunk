import React from 'react';
import { Star, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Business {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  address: string;
  phone: string;
  hours: string;
}

const businesses: Business[] = [
  {
    id: 1,
    name: "The Urban Spice",
    category: "Restaurant",
    rating: 4.5,
    reviews: 328,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    address: "123 Main Street, Downtown",
    phone: "+1 234-567-8900",
    hours: "9:00 AM - 10:00 PM"
  },
  {
    id: 2,
    name: "Tech Solutions Hub",
    category: "Electronics",
    rating: 4.3,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80",
    address: "456 Tech Avenue",
    phone: "+1 234-567-8901",
    hours: "10:00 AM - 8:00 PM"
  },
  {
    id: 3,
    name: "Wellness Spa & Salon",
    category: "Beauty & Spa",
    rating: 4.7,
    reviews: 243,
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    address: "789 Relaxation Road",
    phone: "+1 234-567-8902",
    hours: "8:00 AM - 9:00 PM"
  }
];

interface BusinessListProps {
  searchQuery: string;
}

const BusinessList = ({ searchQuery }: BusinessListProps) => {
  const filteredBusinesses = businesses.filter(business =>
    business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    business.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredBusinesses.map((business) => (
        <div key={business.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
          <img
            src={business.image}
            alt={business.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{business.name}</h3>
                <p className="text-gray-600">{business.category}</p>
              </div>
              <div className="flex items-center bg-green-100 px-2 py-1 rounded">
                <Star className="text-yellow-500 w-4 h-4 mr-1" />
                <span className="text-green-700 font-semibold">{business.rating}</span>
                <span className="text-gray-600 text-sm ml-1">({business.reviews})</span>
              </div>
            </div>
            
            <div className="space-y-2">
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
            
            <Link 
              to={`/business/${business.id}`}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors block text-center"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessList;