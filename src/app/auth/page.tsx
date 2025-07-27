'use client';

import React, { useState } from 'react';
import Logo from '@/components/shared/Logo';
import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);
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
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Sidebar - Welcome Section */}
      <div className="w-1/3 bg-primary-blue flex flex-col justify-between p-8">
        <div className="flex flex-col items-center gap-20">
          <Image src="/educationmanagementlogo.svg" alt="logo" width={143} height={143} />

          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Hi! Welcome
            </h1>
            <p className="text-white/80 text-lg mb-8">
              {isLogin
                ? "Not yet a member? Register and setup your school profile"
                : "Already a member? Log in to your school portal"
              }
            </p>

            <Button
              variant="secondary"
              onClick={() => setIsLogin(!isLogin)}
              className="w-full"
            >
              {isLogin ? 'Register' : 'Login'}
            </Button>
          </div>
        </div>

        <div className="text-white/60 text-sm">
          Copyright © Educa.
        </div>
      </div>

      {/* Right Section - Login/Register Form */}
      <div className="w-2/3 bg-light-gray flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-dark-gray mb-8">
            {isLogin ? 'Login' : 'Register'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Email"
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

            <Link className='pt-2 block' href={"/admin"}>
              <Button
                type="submit"
                variant="primary"
                className="w-full"
              >
                {isLogin ? 'Login' : 'Register'}
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
