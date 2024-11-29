import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PricingCalculator from '../components/PricingCalculator';

const plans = [
  {
    name: 'Starter',
    price: 49,
    description: 'Perfect for small businesses and startups',
    features: [
      '10,000 API requests/month',
      'Basic business data access',
      'Standard support',
      'REST API access',
      'Basic analytics'
    ]
  },
  {
    name: 'Growth',
    price: 99,
    description: 'Ideal for growing companies',
    features: [
      '50,000 API requests/month',
      'Advanced business data access',
      'Priority support',
      'REST & GraphQL API access',
      'Advanced analytics',
      'Custom fields'
    ],
    popular: true
  },
  {
    name: 'Scale',
    price: 199,
    description: 'For large-scale operations',
    features: [
      '200,000 API requests/month',
      'Full business data access',
      '24/7 Priority support',
      'All API endpoints',
      'Advanced analytics & reporting',
      'Custom fields & webhooks',
      'Data export'
    ]
  }
];

const Pricing = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include access to our core features.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-sm p-8 relative ${
                plan.popular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-gray-800">
                  ${plan.price}
                  <span className="text-lg text-gray-600">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/enterprise"
                className={`w-full flex items-center justify-center py-3 rounded-lg transition-colors ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Calculator Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Calculate Your Price
            </h2>
            <p className="text-gray-600">
              Use our calculator to estimate your monthly cost based on API usage
            </p>
          </div>
          <PricingCalculator />
        </motion.div>

        {/* Enterprise Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our sales team for enterprise pricing and custom solutions
          </p>
          <Link
            to="/enterprise"
            className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center"
          >
            Contact Sales
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;