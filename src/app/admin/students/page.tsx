'use client';

import React, { useState } from 'react';
import StudentDistribution from '@/components/admin/students/StudentDistribution';
import StudentList from '@/components/admin/students/StudentList';
import AddStudentModal from '@/components/admin/students/AddStudentModal';
import { Download, Printer, Plus } from 'lucide-react';
import Button from '@/components/shared/Button';
import AI_INSIGHT from './AI_INSIGHT';

export default function StudentManagement() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState('JSS2');

  const studentData = [
    {
      id: 'STU-001',
      name: 'Bello Aisha Oyinkan',
      gender: 'F',
      class: 'JSS2',
      status: 'Active'
    },
    {
      id: 'STU-002',
      name: 'Ojo Akinwumi Alabi',
      gender: 'M',
      class: 'JSS2',
      status: 'Inactive'
    },
    {
      id: 'STU-003',
      name: 'Bello Aisha Oyinkan',
      gender: 'F',
      class: 'JSS2',
      status: 'Active'
    },
    {
      id: 'STU-004',
      name: 'Bello Aisha Oyinkan',
      gender: 'F',
      class: 'JSS2',
      status: 'Inactive'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-dark-gray">Student Management</h1>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="flex items-center">
            <Printer className="w-4 h-4 mr-2" />
            Print
          </Button>
          <Button
            variant="primary"
            size="sm"
            className="flex items-center"
            onClick={() => setShowAddModal(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Student +
          </Button>
        </div>
      </div>

      {/* Student Distribution Section */}
      <StudentDistribution />


      {/* Student List Section */}
      <section className='flex gap-4'>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-dark-gray">JSS 2 class</h2>
            <div className="flex items-center space-x-3">
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                <option value="JSS1">JSS1</option>
                <option value="JSS2">JSS2</option>
                <option value="JSS3">JSS3</option>
                <option value="SS1">SS1</option>
                <option value="SS2">SS2</option>
                <option value="SS3">SS3</option>
              </select>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, ID..."
                  className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-sm w-64"
                />
                <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <Button
                variant="primary"
                size="sm"
                className="flex items-center"
                onClick={() => setShowAddModal(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Student +
              </Button>

              <Button variant="outline" size="sm">
                Export List
              </Button>
            </div>
          </div>

          <StudentList students={studentData} />
        </div>

      </div>
      <AI_INSIGHT />

      </section>

      {/* Add Student Modal */}
      <AddStudentModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
      />
    </div>
  );
} 