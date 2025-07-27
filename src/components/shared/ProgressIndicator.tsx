'use client';

import React from 'react';

interface ProgressIndicatorProps {
  currentStep: number;
  steps: string[];
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep, steps }) => {
  return (
    <div className="flex items-center space-x-4 mb-8">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep - 1;
        const isCurrent = index === currentStep - 1;
        
        return (
          <div key={index} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                isCompleted
                  ? 'bg-primary-blue text-white'
                  : isCurrent
                  ? 'bg-secondary-blue text-primary-blue border-2 border-primary-blue'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {isCompleted ? '✓' : index + 1}
            </div>
            <span
              className={`ml-2 text-sm font-medium ${
                isCompleted
                  ? 'text-primary-blue'
                  : isCurrent
                  ? 'text-primary-blue'
                  : 'text-gray-500'
              }`}
            >
              {step}
            </span>
            {index < steps.length - 1 && (
              <div
                className={`ml-4 w-8 h-0.5 ${
                  isCompleted ? 'bg-primary-blue' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressIndicator; 