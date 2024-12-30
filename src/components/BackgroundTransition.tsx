import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundTransitionProps {
  topImage: string;
  bottomImage: string;
  children: React.ReactNode;
  overlayOpacity?: string;
}

const BackgroundTransition = ({ 
  topImage, 
  bottomImage, 
  children, 
  overlayOpacity = "50" 
}: BackgroundTransitionProps) => {
  return (
    <div className="relative">
      {/* Top section background */}
      <div className="absolute inset-0 z-0">
        <img
          src={topImage}
          alt="Background top"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-black/${overlayOpacity}`} />
        {/* Gradient transition at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-black/90" />
      </div>

      {/* Bottom section background */}
      <div className="absolute inset-0 z-[-1]">
        <img
          src={bottomImage}
          alt="Background bottom"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-black/${overlayOpacity}`} />
        {/* Gradient transition at the top */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-t from-transparent to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundTransition; 