'use client';

import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';

interface AnalyticsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    name: string;
    color: string;
  }>;
  label?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ activeTab, onTabChange }) => {
  const studentData = [
    { class: 'JSS1', students: 45 },
    { class: 'JSS2', students: 52 },
    { class: 'JSS3', students: 38 },
    { class: 'SS1', students: 42 },
    { class: 'SS2', students: 35 },
    { class: 'SS3', students: 28 }
  ];

  const feeData = [
    { name: 'Paid', value: 750000, color: '#8B5CF6' },
    { name: 'Unpaid', value: 250000, color: '#EF4444' }
  ];

  const attendanceData = [
    { day: 'Mon', attendance: 85 },
    { day: 'Tue', attendance: 92 },
    { day: 'Wed', attendance: 78 },
    { day: 'Thu', attendance: 88 },
    { day: 'Fri', attendance: 95 }
  ];

  const CustomTooltip: React.FC<TooltipProps> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-primary-blue text-white p-3 rounded-lg shadow-lg border-0">
          <p className="font-medium">{`${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderStudentDistribution = () => (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={studentData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="class" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="students" fill="#0A3D62" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );

  const renderFeeCollection = () => (
    <div className="flex items-center justify-center h-80">
      <div className="w-full max-w-md">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={feeData} cx="50%" cy="50%" innerRadius={60} outerRadius={120} paddingAngle={5} dataKey="value">
              {feeData.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}
            </Pie>
            <Tooltip formatter={(value: number) => [`₦${value.toLocaleString()}`, 'Amount']} contentStyle={{ backgroundColor: '#0A3D62', border: 'none', borderRadius: '8px', color: 'white' }} />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex justify-center space-x-8 mt-4">
          {feeData.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-sm text-gray-600">{item.name}: ₦{item.value.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAttendanceTrend = () => (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={attendanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="day" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
        <Tooltip content={<CustomTooltip />} formatter={(value: number, name: string) => [`${value}%`, name === 'attendance' ? 'Present' : 'Absent']} />
        <Line type="monotone" dataKey="attendance" stroke="#0A3D62" strokeWidth={3} dot={{ fill: '#0A3D62', strokeWidth: 2, r: 4 }} activeDot={{ r: 6, stroke: '#0A3D62', strokeWidth: 2 }} />
      </LineChart>
    </ResponsiveContainer>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'student':
        return renderStudentDistribution();
      case 'fees':
        return renderFeeCollection();
      case 'attendance':
        return renderAttendanceTrend();
      default:
        return renderStudentDistribution();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-dark-gray">Analytics</h3>
        <div className="flex space-x-1">
          <button
            onClick={() => onTabChange('student')}
            className={`px-3 py-1 text-sm rounded-lg transition-colors ${
              activeTab === 'student'
                ? 'bg-primary-blue text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Student Distribution
          </button>
          <button
            onClick={() => onTabChange('fees')}
            className={`px-3 py-1 text-sm rounded-lg transition-colors ${
              activeTab === 'fees'
                ? 'bg-primary-blue text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Fee Collection
          </button>
          <button
            onClick={() => onTabChange('attendance')}
            className={`px-3 py-1 text-sm rounded-lg transition-colors ${
              activeTab === 'attendance'
                ? 'bg-primary-blue text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Attendance Trend
          </button>
        </div>
      </div>
      {renderContent()}
    </div>
  );
};

export default Analytics; 