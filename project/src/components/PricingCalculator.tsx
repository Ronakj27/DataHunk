import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Slider } from './ui/Slider';

interface PricingTier {
  name: string;
  price: number;
  requests: number;
}

const pricingTiers: PricingTier[] = [
  { name: 'Starter', price: 49, requests: 10000 },
  { name: 'Growth', price: 99, requests: 50000 },
  { name: 'Scale', price: 199, requests: 200000 },
  { name: 'Enterprise', price: 499, requests: 1000000 },
];

const PricingCalculator = () => {
  const [requestsPerMonth, setRequestsPerMonth] = useState(50000);

  const calculatePrice = (requests: number): number => {
    const tier = pricingTiers.find(t => requests <= t.requests) || pricingTiers[pricingTiers.length - 1];
    return tier.price;
  };

  const currentPrice = calculatePrice(requestsPerMonth);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm p-8"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Calculate Your Price</h3>
      
      <div className="space-y-8">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            API Requests per Month
          </label>
          <Slider
            value={[requestsPerMonth]}
            onValueChange={(value) => setRequestsPerMonth(value[0])}
            max={1000000}
            step={10000}
            className="w-full"
          />
          <div className="mt-2 flex justify-between text-sm text-gray-600">
            <span>0</span>
            <span>1M requests</span>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600">Estimated Monthly Cost</p>
              <p className="text-3xl font-bold text-blue-600">${currentPrice}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600">Current Usage</p>
              <p className="text-lg font-semibold">{(requestsPerMonth / 1000).toFixed(0)}K requests</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PricingCalculator;