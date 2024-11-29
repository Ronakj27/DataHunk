import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const companies = [
  'Microsoft',
  'Amazon',
  'Google',
  'IBM',
  'Oracle',
  'Salesforce',
  'Adobe',
  'Intel'
];

const TrustedBy = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600">
            Join thousands of companies using DataHunk for business intelligence
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="flex items-center space-x-2 text-gray-600">
                <Building2 className="w-6 h-6" />
                <span className="text-lg font-semibold">{company}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;