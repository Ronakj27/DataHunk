import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, ShoppingBag, Hotel, Car, Stethoscope, Scissors, GraduationCap, Wrench } from 'lucide-react';

const categories = [
  { icon: Utensils, name: 'Restaurants', color: 'bg-red-100 text-red-600' },
  { icon: ShoppingBag, name: 'Shopping', color: 'bg-blue-100 text-blue-600' },
  { icon: Hotel, name: 'Hotels', color: 'bg-green-100 text-green-600' },
  { icon: Car, name: 'Auto Services', color: 'bg-yellow-100 text-yellow-600' },
  { icon: Stethoscope, name: 'Healthcare', color: 'bg-purple-100 text-purple-600' },
  { icon: Scissors, name: 'Beauty & Spa', color: 'bg-pink-100 text-pink-600' },
  { icon: GraduationCap, name: 'Education', color: 'bg-indigo-100 text-indigo-600' },
  { icon: Wrench, name: 'Home Services', color: 'bg-orange-100 text-orange-600' },
];

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {categories.map((category, index) => (
        <Link
          to="/categories"
          key={index}
          className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className={`p-4 rounded-full ${category.color} mb-4`}>
            <category.icon size={24} />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid;