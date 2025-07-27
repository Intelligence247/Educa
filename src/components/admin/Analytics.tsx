'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';

interface AnalyticsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Analytics: React.FC<AnalyticsProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'student-distribution', label: 'Student Distribution' },
    { id: 'fee-collection', label: 'Fee Collection' },
    { id: 'attendance-trend', label: 'Attendance Trend' }
  ];

  const studentData = [
    { class: 'PRY1', students: 45 },
    { class: 'PRY2', students: 52 },
    { class: 'PRY3', students: 48 },
    { class: 'PRY4', students: 55 },
    { class: 'PRY5', students: 50 },
    { class: 'PRY6', students: 47 },
    { class: 'JS1', students: 56 },
    { class: 'JS2', students: 53 },
    { class: 'JS3', students: 49 },
    { class: 'SS1', students: 44 },
    { class: 'SS2', students: 51 },
    { class: 'SS3', students: 46 }
  ];

  const feeData = [
    { name: 'Paid', value: 300000, color: '#8B5CF6' },
    { name: 'Unpaid', value: 100000, color: '#F87171' }
  ];

  const attendanceData = [
    { day: 'Mon', attendance: 92, absent: 8 },
    { day: 'Tue', attendance: 45, absent: 55 },
    { day: 'Wed', attendance: 86, absent: 14 },
    { day: 'Thu', attendance: 90, absent: 10 },
    { day: 'Fri', attendance: 69, absent: 31 }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-primary-blue text-white p-3 rounded-lg shadow-lg border-0">
          <p className="font-medium">{`${label}`}</p>
          {payload.map((entry: any, index: number) => (
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
        <XAxis 
          dataKey="class" 
          tick={{ fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis 
          tick={{ fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar 
          dataKey="students" 
          fill="#0A3D62"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );

  const renderFeeCollection = () => (
    <div className="flex items-center justify-center h-80">
      <div className="w-full max-w-md">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={feeData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={120}
              paddingAngle={5}
              dataKey="value"
            >
              {feeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: any) => [`₦${value.toLocaleString()}`, 'Amount']}
              contentStyle={{
                backgroundColor: '#0A3D62',
                border: 'none',
                borderRadius: '8px',
                color: 'white'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        
        {/* Legend */}
        <div className="flex justify-center space-x-8 mt-4">
          {feeData.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm text-gray-600">
                {item.name}: ₦{item.value.toLocaleString()}
              </span>
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
        <XAxis 
          dataKey="day" 
          tick={{ fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis 
          tick={{ fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip 
          content={<CustomTooltip />}
          formatter={(value: any, name: any) => [
            `${value}%`, 
            name === 'attendance' ? 'Present' : 'Absent'
          ]}
        />
        <Line 
          type="monotone" 
          dataKey="attendance" 
          stroke="#0A3D62" 
          strokeWidth={3}
          dot={{ fill: '#0A3D62', strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, stroke: '#0A3D62', strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'student-distribution':
        return renderStudentDistribution();
      case 'fee-collection':
        return renderFeeCollection();
      case 'attendance-trend':
        return renderAttendanceTrend();
      default:
        return renderStudentDistribution();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-dark-gray">Analytics</h3>
          <select className="text-sm border border-gray-300 rounded-lg px-3 py-1 bg-white">
            <option>Week</option>
            <option>Month</option>
            <option>Year</option>
          </select>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeTab === tab.id
                  ? 'bg-primary-blue text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Chart Content */}
        <div className="min-h-80">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Analytics; 