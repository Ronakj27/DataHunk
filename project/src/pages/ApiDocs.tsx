import React from 'react';
import { motion } from 'framer-motion';
import { Code, Copy, Check } from 'lucide-react';

const ApiDocs = () => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-6">API Documentation</h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about integrating with the DataHunk API
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Authentication */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Authentication</h2>
            <div className="bg-gray-900 rounded-lg p-6 mb-6">
              <div className="flex justify-between items-start mb-4">
                <Code className="text-gray-400" />
                <button
                  onClick={() => copyToClipboard('curl -X GET "https://api.datahunk.com/v1/businesses" -H "Authorization: Bearer YOUR_API_KEY"')}
                  className="text-gray-400 hover:text-white"
                >
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
              <pre className="text-green-400 font-mono text-sm">
                curl -X GET "https://api.datahunk.com/v1/businesses" \
                {'\n'}  -H "Authorization: Bearer YOUR_API_KEY"
              </pre>
            </div>
            <p className="text-gray-600">
              All API requests must include your API key in the Authorization header.
            </p>
          </motion.section>

          {/* Endpoints */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Endpoints</h2>
            
            {/* Business Search */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Business Search</h3>
              <p className="text-gray-600 mb-4">Search for businesses with various filters</p>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 font-mono text-sm">
                  GET /v1/businesses/search
                  {'\n'}
                  {'\n'}Parameters:
                  {'\n'}  - query: string
                  {'\n'}  - location: string
                  {'\n'}  - category: string
                  {'\n'}  - radius: number (km)
                </pre>
              </div>
            </div>

            {/* Business Details */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Business Details</h3>
              <p className="text-gray-600 mb-4">Get detailed information about a specific business</p>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 font-mono text-sm">
                  GET /v1/businesses/{'{id}'}
                  {'\n'}
                  {'\n'}Response:
                  {'\n'}  - name: string
                  {'\n'}  - address: object
                  {'\n'}  - contact: object
                  {'\n'}  - reviews: array
                </pre>
              </div>
            </div>
          </motion.section>

          {/* Rate Limits */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Rate Limits</h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Plan</th>
                    <th className="text-left py-2">Requests/min</th>
                    <th className="text-left py-2">Requests/day</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Basic</td>
                    <td className="py-2">60</td>
                    <td className="py-2">10,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Pro</td>
                    <td className="py-2">300</td>
                    <td className="py-2">50,000</td>
                  </tr>
                  <tr>
                    <td className="py-2">Enterprise</td>
                    <td className="py-2">Custom</td>
                    <td className="py-2">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default ApiDocs;