import React from 'react';
import { Calendar, Plus, Eye } from 'lucide-react';

const UpcomingEvents: React.FC = () => {
  const events = [
    {
      id: 1,
      title: 'Children Day',
      date: 'March 7, 2025',
      description: 'This event will be celebrated at the school hall. Everyone must prepare an activity for the day.',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'Children Day',
      date: 'March 7, 2025',
      description: 'This event will be celebrated at the school hall. Everyone must prepare an activity for the day.',
      color: 'bg-blue-500'
    },
    {
      id: 3,
      title: 'Children Day',
      date: 'March 7, 2025',
      description: 'This event will be celebrated at the school hall. Everyone must prepare an activity for the day.',
      color: 'bg-blue-500'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-dark-gray">Upcoming Events</h3>
        <div className="flex items-center space-x-2">
          <button className="text-sm text-gray-600 hover:text-gray-800 flex items-center">
            <Eye className="w-4 h-4 mr-1" />
            View All
          </button>
          <button className="bg-primary-blue text-white px-3 py-1 rounded-lg text-sm hover:bg-primary-blue/90 transition-colors flex items-center">
            <Plus className="w-4 h-4 mr-1" />
            Add New Event
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className={`w-2 h-2 ${event.color} rounded-full mt-2 flex-shrink-0`}></div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-dark-gray">{event.title}</h4>
                <span className="text-xs text-gray-500 flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {event.date}
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents; 