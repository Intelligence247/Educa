'use client';

import React, { useState } from 'react';
import DashboardCard from '@/components/admin/DashboardCard';
import AIInsights from '@/components/admin/AIInsights';
import Analytics from '@/components/admin/Analytics';
import Calendar from '@/components/admin/Calendar';
import UpcomingEvents from '@/components/admin/UpcomingEvents';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('student-distribution');

  const metrics = [
    {
      title: 'Total Students',
      value: '300',
      subtitle: '2 new students',
      icon: '👥',
      color: 'bg-blue-500'
    },
    {
      title: 'Total Teachers',
      value: '50',
      subtitle: '2 new teachers',
      icon: '👨‍🏫',
      color: 'bg-green-500'
    },
    {
      title: 'Attendance Rate',
      value: '80%',
      subtitle: '0.2% ↗',
      icon: '📋',
      color: 'bg-yellow-500'
    },
    {
      title: 'Fees Collected',
      value: '40k',
      subtitle: 'This week',
      icon: '💰',
      color: 'bg-purple-500'
    },
    {
      title: 'Pending Issues',
      value: '3',
      subtitle: 'Today',
      icon: '⚠️',
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-dark-gray">Dashboard</h1>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {metrics.map((metric, index) => (
          <DashboardCard key={index} {...metric} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Insights */}
        <div className="lg:col-span-1">
          <AIInsights />
        </div>

        {/* Analytics */}
        <div className="lg:col-span-2">
          <Analytics activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Calendar */}
        <Calendar />
        
        {/* Upcoming Events */}
        <UpcomingEvents />
      </div>
    </div>
  );
} 