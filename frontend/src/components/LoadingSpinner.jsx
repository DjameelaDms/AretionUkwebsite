import React, { useState, useEffect } from 'react';

const LoadingSpinner = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Set loading to false when page is fully loaded
    const handleLoad = () => {
      setIsLoading(false);
      // Remove from DOM after fade animation completes
      setTimeout(() => {
        setShouldRender(false);
      }, 500); // Match this with CSS transition duration
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`loading-overlay ${!isLoading ? 'loading-overlay--hidden' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#fefdfb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        opacity: isLoading ? 1 : 0,
        transition: 'opacity 0.5s ease-out',
        pointerEvents: isLoading ? 'auto' : 'none'
      }}
      role="progressbar"
      aria-busy={isLoading}
      aria-live="polite"
      aria-label="Loading page content"
    >
      <div
        className="loading-spinner"
        style={{
          width: '120px',
          height: '120px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img
          src="/images/logo-orange.png"
          alt="ARETION & Company loading"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            animation: 'gentlePulse 2s ease-in-out infinite'
          }}
        />
      </div>
      
      <style jsx>{`
        @keyframes gentlePulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .loading-spinner img {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
