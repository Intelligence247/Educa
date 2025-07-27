import React from 'react';
import Logo from './Logo';
import Image from 'next/image';

interface LoadingScreenProps {
  progress?: number; // 0-100
  message?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  progress = 25,
  message = "Loading..."
}) => {
  return (
    <div className="fixed inset-0 bg-primary-blue flex flex-col gap-4 items-center justify-center z-50">
      <Image src="/educationmanagementlogo.svg" alt="logo" width={376} height={381} />

      {/* Loading Bar */}
      <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden flex flex-col gap-1 text-center">
        <div
          className="h-full bg-yellow-400 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />

        {/* Loading Message */}
      
      </div>
      <p className="text-white/60 text-sm">
          {message}
        </p>
    </div>
  );
};

export default LoadingScreen; 