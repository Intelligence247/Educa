'use client';

import React, { useState, useEffect } from 'react';
import LoadingScreen from '@/components/shared/LoadingScreen';

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState('Initializing Educa...');

  useEffect(() => {
    // Simulate progressive loading with different messages
    const messages = [
      'Initializing Educa...',
      'Loading school data...',
      'Checking user status...',
      'Preparing dashboard...',
      'Almost ready...',
      'Welcome to Educa!'
    ];

    let messageIndex = 0;
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 10;
        
        // Update loading message based on progress
        if (newProgress >= 20 && messageIndex === 0) {
          setLoadingMessage(messages[1]);
          messageIndex = 1;
        } else if (newProgress >= 40 && messageIndex === 1) {
          setLoadingMessage(messages[2]);
          messageIndex = 2;
        } else if (newProgress >= 60 && messageIndex === 2) {
          setLoadingMessage(messages[3]);
          messageIndex = 3;
        } else if (newProgress >= 80 && messageIndex === 3) {
          setLoadingMessage(messages[4]);
          messageIndex = 4;
        } else if (newProgress >= 100 && messageIndex === 4) {
          setLoadingMessage(messages[5]);
          messageIndex = 5;
        }

        if (newProgress >= 100) {
          clearInterval(interval);
          
          // Simulate checking if user is registered
          // In a real app, this would be an API call
          const isUserRegistered = localStorage.getItem('educa_user_registered');
          
          setTimeout(() => {
            if (isUserRegistered === 'true') {
              // User is registered, go to login
              window.location.href = '/auth/login';
            } else {
              // User is not registered, go to setup
              window.location.href = '/auth/setup';
            }
          }, 1000);
          
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (true) { // isLoading is removed, so always render LoadingScreen
    return (
      <LoadingScreen 
        progress={progress} 
        message={loadingMessage}
      />
    );
  }

  return null;
}
