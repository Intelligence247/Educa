'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const navigationItems = [
  { name: 'Dashboard', href: '/admin', icon: '📊' },
  { name: 'Student Management', href: '/admin/students', icon: '👥' },
  { name: 'Teacher Management', href: '/admin/teachers', icon: '👨‍🏫' },
  { name: 'Class & Course', href: '/admin/classes', icon: '📚' },
  { name: 'Attendance', href: '/admin/attendance', icon: '📋' },
  { name: 'Exam & Result', href: '/admin/exams', icon: '📝' },
  { name: 'Fees & Payments', href: '/admin/fees', icon: '💰' },
  { name: 'ID Card Management', href: '/admin/id-cards', icon: '🆔' },
  { name: 'Communication Tools', href: '/admin/communication', icon: '💬' },
  { name: 'Payroll Management', href: '/admin/payroll', icon: '💼' },
  { name: 'Calendar & Events', href: '/admin/calendar', icon: '📅' },
  { name: 'AI Reports & Analytics', href: '/admin/analytics', icon: '🤖' },
  { name: 'Subscription', href: '/admin/subscription', icon: '📦' },
  { name: 'Settings', href: '/admin/settings', icon: '⚙️' },
  { name: 'Marketplace', href: '/admin/marketplace', icon: '🛒' },
];

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm border-b border-gray-200 z-40">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo and School Name */}
          <div className="flex items-center border-r-[1px] border-border-1">
            <div className="flex items-center space-x-3">
              <Image 
                src="/star-rise.svg" 
                alt="Star Rise College Logo" 
                width={40} 
                height={40}
                className="rounded-lg"
              />
              <span className="text-base font-semibold text-dark-gray">
                Star Rise College
              </span>
            </div>
          </div>

          {/* Header Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Search */}
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Messages */}
            <button className="relative p-2 text-gray-500 hover:text-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Notifications */}
            <button className="relative p-2 text-gray-500 hover:text-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.5 3.75a6 6 0 00-6 6v3.75a6 6 0 0012 0V9.75a6 6 0 00-6-6z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>

            {/* User Profile */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center text-white font-medium">
                LB
              </div>
              <div className="hidden md:block">
                <div className="text-sm font-medium text-dark-gray">Lotus Bliss</div>
                <div className="text-xs text-gray-500">Admin</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex pt-16"> {/* Add top padding to account for fixed header */}
        {/* Fixed Sidebar */}
        <aside className={`fixed top-16 left-0 z-30 w-64 h-[calc(100vh-4rem)] bg-white transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          <div className="flex flex-col h-full">
            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'bg-primary-blue text-white'
                        : 'text-primary-gray hover:bg-white/10'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Sidebar Footer */}
            <div className="p-4 border-t border-white/20">
              <div className="flex items-center space-x-2">
              <Image src={"/educa-blue.svg"} alt="Educa logo blue" height={32} width={32}/>
                <div className="text-xs text-primary-gray">
                  <div>All rights reserve</div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 md:ml-64 p-6">
          {children}
        </main>       
      </div>
    </div>
  );
} 