import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Categories from './pages/Categories';
import BusinessDetails from './pages/BusinessDetails';
import ListBusiness from './pages/ListBusiness';
import Profile from './pages/Profile';
import DataServices from './pages/DataServices';
import Pricing from './pages/Pricing';
import Enterprise from './pages/Enterprise';
import ApiDocs from './pages/ApiDocs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/business/:id" element={<BusinessDetails />} />
            <Route path="/list-business" element={<ListBusiness />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/data-services" element={<DataServices />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/api-docs" element={<ApiDocs />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;