'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const StudentDistribution: React.FC = () => {
  const classData = [
    { class: 'Pry 1', female: 36, male: 36, total: 60 },
    { class: 'Pry 2', female: 36, male: 36, total: 60 },
    { class: 'Pry 3', female: 36, male: 36, total: 60 },
    { class: 'Pry 4', female: 36, male: 36, total: 60 },
    { class: 'Pry 5', female: 36, male: 36, total: 60 },
    { class: 'Pry 6', female: 36, male: 36, total: 60 },
    { class: 'JSS1', female: 38, male: 36, total: 60 },
    { class: 'JSS2', female: 36, male: 36, total: 60 },
    { class: 'JSS3', female: 36, male: 36, total: 60 },
    { class: 'SS1', female: 36, male: 36, total: 60 },
    { class: 'SS2', female: 36, male: 36, total: 60 },
    { class: 'SS3', female: 36, male: 36, total: 60 }
  ];

  const chartData = [
    { class: 'PRY1', students: 60 },
    { class: 'PRY2', students: 60 },
    { class: 'PRY3', students: 60 },
    { class: 'PRY4', students: 60 },
    { class: 'PRY5', students: 60 },
    { class: 'PRY6', students: 60 },
    { class: 'JSS1', students: 60 },
    { class: 'JSS2', students: 60 },
    { class: 'JSS3', students: 60 },
    { class: 'SS1', students: 60 },
    { class: 'SS2', students: 60 },
    { class: 'SS3', students: 60 }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-primary-blue text-white p-3 rounded-lg shadow-lg border-0">
          <p className="font-medium">{`${label}`}</p>
          <p>{`Students: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-dark-gray mb-6">Student Distribution by Class</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Summary Table */}
        <div className="border-border-1 rounded">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 font-medium text-gray-600">Class</th>
                  <th className="text-left py-2 font-medium text-gray-600">No. of Students (F/M)</th>
                  <th className="text-left py-2 font-medium text-gray-600">Total</th>
                </tr>
              </thead>
              <tbody>
                {classData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-2 text-gray-700">{item.class}</td>
                    <td className="py-2 text-gray-700">{item.female}/{item.male}</td>
                    <td className="py-2 text-gray-700">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <section>
          {/* Key Metrics */}
          <div className=" flex justify-around items-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-lg font-bold text-green-600">500</h3>
              <p className="text-sm text-green-700">Total Students</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-lg font-bold text-blue-600">500</h3>
              <p className="text-sm text-blue-700">Total Female std.</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="text-lg font-bold text-purple-600">500</h3>
              <p className="text-sm text-purple-700">Total Male std.</p>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="border-border-1 rounded">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="class"
                    tick={{ fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 10 }}
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StudentDistribution; 