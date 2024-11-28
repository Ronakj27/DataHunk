import React, { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/">
  <img src="src/components/ui/datahunk.svg" alt="DataHunk Logo" className="w-21 h-9" />
</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
            >
              Home
            </Link>
            <Link 
              to="/categories" 
              className={`${isActive('/categories') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
            >
              Categories
            </Link>
            <Link 
              to="/data-services" 
              className={`${isActive('/data-services') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
            >
              Data Services
            </Link>
            <Link 
              to="/pricing" 
              className={`${isActive('/pricing') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
            >
              Pricing
            </Link>
            <Link 
              to="/list-business" 
              className={`${isActive('/list-business') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
            >
              List Your Business
            </Link>
            <div className="flex items-center space-x-1 text-gray-700 cursor-pointer">
              <MapPin size={18} />
              <span>Select City</span>
            </div>
            <Link 
              to="/profile" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`${isActive('/') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/categories" 
                className={`${isActive('/categories') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
                onClick={() => setIsOpen(false)}
              >
                Categories
              </Link>
              <Link 
                to="/data-services" 
                className={`${isActive('/data-services') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
                onClick={() => setIsOpen(false)}
              >
                Data Services
              </Link>
              <Link 
                to="/pricing" 
                className={`${isActive('/pricing') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/list-business" 
                className={`${isActive('/list-business') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
                onClick={() => setIsOpen(false)}
              >
                List Your Business
              </Link>
              <div className="flex items-center space-x-1 text-gray-700">
                <MapPin size={18} />
                <span>Select City</span>
              </div>
              <Link 
                to="/profile" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-center"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
