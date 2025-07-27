'use client';

import React, { useState } from 'react';
import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';
import ProgressIndicator from '@/components/shared/ProgressIndicator';
import SuccessModal from '@/components/shared/SuccessModal';

import Image from 'next/image';
const setupSteps = [
  '',
  '',
  '',
  '',
];

export default function SchoolSetup() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Basic Information
    schoolName: '',
    schoolType: '',
    registrationNumber: '',
    yearEstablished: '',
    schoolMotto: '',

    // Step 2: Contact Information
    address: '',
    city: '',
    state: '',
    phone: '',
    email: '',
    website: '',

    // Step 3: Session & Term
    currentSession: '2024/2025',
    currentTerm: 'First Term',
    termStartDate: '2024-09-01',
    termEndDate: '2024-12-20',

    // Step 4: Principal Info
    principalName: 'Mr. Adelani Olalekan',
    position: 'Principal',
    principalPhone: '08081049986',
    principalEmail: 'adelaniola@gmail.com',

    // Step 5: Payment
    paymentGateway: '',
    bankAccountName: '',
    bankAccountNumber: '',
    bankName: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle final submission
    console.log('School setup completed:', formData);
    
    // Mark user as registered
    localStorage.setItem('educa_user_registered', 'true');
    
    // Show success modal
    setShowSuccessModal(true);
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    // Redirect to admin dashboard
    window.location.href = '/admin';
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-dark-gray mb-6">
              1. Basic School Information
            </h3>
            <Input
              label="School Name"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleInputChange}
              required
            />
            <Input
              label="School Type"
              name="schoolType"
              value={formData.schoolType}
              onChange={handleInputChange}
              placeholder="Primary, Secondary, etc."
              required
            />
            <Input
              label="Registration Number (If applicable)"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleInputChange}
            />
            <Input
              label="Year Established"
              name="yearEstablished"
              type="number"
              value={formData.yearEstablished}
              onChange={handleInputChange}
              required
            />
            <Input
              label="School Motto (optional)"
              name="schoolMotto"
              value={formData.schoolMotto}
              onChange={handleInputChange}
            />
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-dark-gray mb-6">
              2. Contact Information
            </h3>
            <Input
              label="School Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
            <Input
              label="City"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
            <Input
              label="State/Country"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required
            />
            <Input
              label="School Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <Input
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <Input
              label="Website URL (optional)"
              name="website"
              type="url"
              value={formData.website}
              onChange={handleInputChange}
            />
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-dark-gray mb-6">
              3. Session & Term Settings
            </h3>
            <Input
              label="Current Academic Session"
              name="currentSession"
              value={formData.currentSession}
              onChange={handleInputChange}
              disabled
            />
            <Input
              label="Current Term"
              name="currentTerm"
              value={formData.currentTerm}
              onChange={handleInputChange}
              disabled
            />
            <Input
              label="Term Start Date"
              name="termStartDate"
              type="date"
              value={formData.termStartDate}
              onChange={handleInputChange}
              disabled
            />
            <Input
              label="Term End Date"
              name="termEndDate"
              type="date"
              value={formData.termEndDate}
              onChange={handleInputChange}
              disabled
            />
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-dark-gray mb-6">
              4. School Owner / Principal Info
            </h3>
            <Input
              label="Name"
              name="principalName"
              value={formData.principalName}
              onChange={handleInputChange}
              required
            />
            <Input
              label="Position"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              required
            />
            <Input
              label="Phone Number"
              name="principalPhone"
              type="tel"
              value={formData.principalPhone}
              onChange={handleInputChange}
              required
            />
            <Input
              label="Email Address"
              name="principalEmail"
              type="email"
              value={formData.principalEmail}
              onChange={handleInputChange}
              required
            />
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-dark-gray mb-6">
              5. Payment & Finance Settings
            </h3>
            <Input
              label="Preferred Payment Gateway"
              name="paymentGateway"
              value={formData.paymentGateway}
              onChange={handleInputChange}
              placeholder="Paystack, Flutterwave, etc."
              required
            />
            <Input
              label="Bank Account Name"
              name="bankAccountName"
              value={formData.bankAccountName}
              onChange={handleInputChange}
              required
            />
            <Input
              label="Bank Account Number"
              name="bankAccountNumber"
              value={formData.bankAccountNumber}
              onChange={handleInputChange}
              required
            />
            <Input
              label="Bank Name"
              name="bankName"
              value={formData.bankName}
              onChange={handleInputChange}
              required
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Sidebar */}
      <div className="w-1/3 bg-primary-blue flex flex-col justify-between p-8">
        <div className="flex flex-col items-center gap-20">
          <Image src="/educationmanagementlogo.svg" alt="logo" width={143} height={143} />

          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Hi! Welcome
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Already a member? Log in to your school portal
            </p>

            <Button
              variant="secondary"
              onClick={() => window.location.href = '/auth'}
              className="w-full"
            >
              Login
            </Button>
          </div>
        </div>

        <div className="text-white/60 text-sm">
          Copyright © Educa.
        </div>
      </div>

      {/* Right Section - Setup Form */}
      <div className="w-2/3 bg-white p-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-dark-gray mb-8">
            Setup Your School Profile
          </h2>

          <ProgressIndicator
            currentStep={currentStep}
            totalSteps={5}
            steps={setupSteps}
          />

          <form onSubmit={handleSubmit} className="space-y-6">
            {renderStepContent()}

            <div className="flex justify-between pt-8">
              {currentStep > 1 && (
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                >
                  Previous
                </Button>
              )}

              <div className="ml-auto">
                {currentStep < 5 ? (
                  <Button
                    variant="primary"
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="primary"
                  >
                    Save
                  </Button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleSuccessModalClose}
        title="Setup Complete!"
        message="Your school profile has been successfully created. You can now access your admin dashboard."
      />
    </div>
  );
} 