import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BackgroundTransition from './BackgroundTransition';

const Hero = () => {
  return (
    <BackgroundTransition
      topImage="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
      bottomImage="https://images.unsplash.com/photo-1712055196088-9bc6da4ffbce"
      overlayOpacity="30"
    >
      <div className="relative min-h-screen">
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <div className="h-24 md:h-28" />
          
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 md:px-6 py-2 mb-6 relative z-[5]"
            >
              <p className="text-gray-200 md:text-lg text-base tracking-wide md:block hidden">
                Planning a trip to Nagaland? <span className="font-medium">Your search ends here!</span>
              </p>
              <p className="text-gray-200 text-sm md:text-lg tracking-wide block md:hidden">
                Planning a trip to Nagaland?<br />
                <span className="font-medium">Your search ends here!</span>
              </p>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8"
            >
              Welcome to <span className="font-serif italic">Nagaland</span>
            </motion.h1>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                "17 vibrant tribes with rich heritage and diverse sub-tribes",
                "Warm hospitality, delectable cuisine & lively dances",
                "Adventure through hiking, trekking & off-roading"
              ].map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.2, duration: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <p className="text-white text-base">{text}</p>
                </motion.div>
              ))}
            </div>

            <Link to="/trips">
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                Explore Packages <ChevronRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </BackgroundTransition>
  );
}

export default Hero;