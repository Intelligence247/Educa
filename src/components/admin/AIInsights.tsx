import React from 'react';
import { Sparkles, Eye } from 'lucide-react';

const AIInsights: React.FC = () => {
  const insights = [
    'JSS 2A has the lowest attendance this week',
    '5 students have unpaid fees for over 2 months',
    '2 teachers haven\'t marked attendance for 3 days',
    'AI recommends rescheduling Mathematics for JSS2 due to clashes',
    'AI recommends rescheduling Mathematics for JSS2 due to clashes'
  ];

  return (
    <div className="bg-primary-blue rounded-lg p-6 text-white">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Sparkles className="w-6 h-6 mr-2" />
          <h3 className="text-lg font-semibold">AI Insights</h3>
        </div>
        <button className="text-sm bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg transition-colors flex items-center">
          <Eye className="w-4 h-4 mr-1" />
          View More
        </button>
      </div>
      
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-sm text-white/90 leading-relaxed">{insight}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIInsights; 