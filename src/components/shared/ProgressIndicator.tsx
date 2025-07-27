import React from 'react';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
  totalSteps,
  steps
}) => {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isActive = index + 1 === currentStep;
          const isCompleted = index + 1 < currentStep;
          const isFuture = index + 1 > currentStep;

          return (
            <div key={index} className="flex items-center">
              {/* Step Circle */}
              <div
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                  ${isCompleted || isActive 
                    ? 'bg-success-green text-white' 
                    : 'bg-light-gray text-gray-500 border border-gray-300'
                  }
                `}
              >
                {isCompleted ? '✓' : index + 1}
              </div>
              
              {/* Step Label */}
              <span
                className={`
                  ml-2 text-sm font-medium
                  ${isActive ? 'text-success-green' : 'text-gray-500'}
                `}
              >
                {step}
              </span>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div
                  className={`
                    w-32 h-0.5 mx-4
                    ${isCompleted ? 'bg-success-green' : 'bg-gray-300'}
                  `}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressIndicator; 