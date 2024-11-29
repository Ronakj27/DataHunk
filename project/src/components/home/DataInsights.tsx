import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, PieChart, LineChart, TrendingUp } from 'lucide-react';

const insights = [
  {
    icon: BarChart2,
    title: 'Market Analysis',
    description: 'Deep dive into market trends and competitor analysis'
  },
  {
    icon: PieChart,
    title: 'Demographics',
    description: 'Understand customer segments and behavior patterns'
  },
  {
    icon: LineChart,
    title: 'Growth Metrics',
    description: 'Track business performance and growth indicators'
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Forecast trends and make data-driven decisions'
  }
];

const DataInsights = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Powerful Data Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform raw data into actionable business intelligence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <insight.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {insight.title}
              </h3>
              <p className="text-gray-600">{insight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataInsights;