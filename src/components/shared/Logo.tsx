import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, className = '' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo Icon - Graduation cap on book */}
      <div className={`${sizeClasses[size]} relative`}>
        {/* Book */}
        <div className="absolute bottom-0 w-full h-3/4 bg-white rounded-sm border border-white/20"></div>
        {/* Graduation Cap */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1/2 bg-white rounded-t-full border border-white/20">
          {/* Tassel */}
          <div className="absolute top-0 right-0 w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold text-white ${textSizeClasses[size]}`}>
            Educa
          </span>
          <span className="text-white/80 text-xs">
            Education Management System
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo; 