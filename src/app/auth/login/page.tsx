'use client';

import React, { useState } from 'react';
import Logo from '@/components/shared/Logo';
import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';
import Image from 'next/image';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted:', formData);
    
    // For demo purposes, redirect to admin dashboard
    window.location.href = '/admin';
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Sidebar - Welcome Section */}
      <div className="w-1/3 bg-primary-blue flex flex-col justify-between p-8">
        <div className="flex flex-col items-center">
          <Image src="/star-rise.png" alt="Star Rise College Logo" width={120} height={120} className="rounded-lg mb-8" />
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Welcome Back!
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Not yet a member? Register and setup your school profile
            </p>
            
            <Button
              variant="secondary"
              onClick={() => window.location.href = '/auth/setup'}
              className="w-full"
            >
              Register
            </Button>
          </div>
        </div>
        
        <div className="text-white/60 text-sm">
          Copyright © Educa.
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-2/3 bg-light-gray flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-dark-gray mb-8">
            Login to Your Account
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Email Address"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-primary-blue focus:ring-primary-blue" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-primary-blue hover:underline">
                Forgot password?
              </a>
            </div>
            
            <Button
              type="submit"
              variant="primary"
              className="w-full"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
} 