import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Plane } from 'lucide-react';
import BackgroundTransition from '../components/BackgroundTransition';
import { motion, AnimatePresence } from 'framer-motion';

const style = document.createElement('style');
style.textContent = `
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideUp {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-20px);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .details-enter {
    animation: slideDown 0.5s ease-out forwards;
  }

  .details-exit {
    animation: slideUp 0.5s ease-out forwards;
  }
`;
document.head.appendChild(style);

const Trips = () => {
  const [selectedTrip, setSelectedTrip] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsClosing(true);
    setTimeout(() => {
      setSelectedTrip(null);
      setIsClosing(false);
    }, 500);
  };

  const handleTripClick = (tripId: number) => {
    if (selectedTrip === tripId) {
      handleClose({ stopPropagation: () => {} } as React.MouseEvent);
    } else {
      setSelectedTrip(tripId);
    }
  };

  const trips = [
    {
      id: 1,
      title: 'Hornbill 2025',
      duration: '10 Days 11 Nights',
      description: 'Experience the world-famous Hornbill Festival, showcasing all 17 major tribes of Nagaland. Witness traditional dances, music, games, and local delicacies in this ultimate cultural extravaganza.',
      price: 'From $1,499',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa',
      fullDescription: `Experience the world-famous Hornbill Festival, a vibrant celebration showcasing all 17 major tribes of Nagaland. 
      This 10-night, 11-day journey takes you deep into the heart of Naga culture.
      
      Highlights:
      • Daily visits to the Hornbill Festival
      • Traditional tribal village stays
      • Cultural performances and workshops
      • Local cuisine masterclasses
      • Tribal market visits
      • Evening bonfire celebrations
      
      Package Includes:
      • Accommodation in premium hotels and traditional homestays
      • All meals - breakfast, lunch, and dinner
      • Private transportation
      • Expert local guides
      • All entrance fees and permits
      • Cultural workshop fees`
    },
    {
      id: 2,
      title: 'Nagaland Flavor',
      duration: '7 Days 6 Nights',
      description: 'Immerse yourself in Naga culture through this comprehensive tour covering major tribal villages, local cuisine experiences, and traditional craft workshops. Perfect for cultural enthusiasts.',
      price: 'From $899',
      image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3',
      fullDescription: `Experience the world-famous Hornbill Festival, a vibrant celebration showcasing all 17 major tribes of Nagaland. 
      This 10-night, 11-day journey takes you deep into the heart of Naga culture.
      
      Highlights:
      • Daily visits to the Hornbill Festival
      • Traditional tribal village stays
      • Cultural performances and workshops
      • Local cuisine masterclasses
      • Tribal market visits
      • Evening bonfire celebrations
      
      Package Includes:
      • Accommodation in premium hotels and traditional homestays
      • All meals - breakfast, lunch, and dinner
      • Private transportation
      • Expert local guides
      • All entrance fees and permits
      • Cultural workshop fees`
    },
    {
      id: 3,
      title: 'Mesmerising Kohima',
      duration: '4 Days 5 Nights',
      description: 'Explore the capital city of Nagaland with its rich history, vibrant markets, and stunning viewpoints. Visit the iconic Kohima War Cemetery and experience local culture through traditional village tours.',
      price: 'From $699',
      image: 'https://images.unsplash.com/photo-1513023840371-dd774fcaee5b',
      fullDescription: `Experience the world-famous Hornbill Festival, a vibrant celebration showcasing all 17 major tribes of Nagaland. 
      This 10-night, 11-day journey takes you deep into the heart of Naga culture.
      
      Highlights:
      • Daily visits to the Hornbill Festival
      • Traditional tribal village stays
      • Cultural performances and workshops
      • Local cuisine masterclasses
      • Tribal market visits
      • Evening bonfire celebrations
      
      Package Includes:
      • Accommodation in premium hotels and traditional homestays
      • All meals - breakfast, lunch, and dinner
      • Private transportation
      • Expert local guides
      • All entrance fees and permits
      • Cultural workshop fees`
    }
  ];

  return (
    <div>
      <BackgroundTransition
        topImage="https://images.unsplash.com/photo-1712055196088-9bc6da4ffbce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        bottomImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      >
        <section className="pt-24 md:pt-20 pb-32 px-6" id="trips">
          <motion.div layout className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 md:px-5 py-1.5 mb-6">
                <p className="text-gray-200 text-sm md:text-base tracking-wide">
                  Discover <span className="font-medium">Extraordinary Journeys</span>
                </p>
              </div>
              <h2 className="text-5xl font-light text-white mb-6">
                Our <span className="font-serif italic">Trips</span>
              </h2>
              <p className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto">
                Choose your perfect adventure from our carefully curated experiences
              </p>
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trips.map((trip) => (
                <motion.div 
                  layout
                  key={trip.id} 
                  className={`bg-white/95 backdrop-blur-sm border border-white/50 rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer ${
                    selectedTrip === trip.id ? 'ring-2 ring-black' : ''
                  }`}
                  onClick={() => handleTripClick(trip.id)}
                >
                  <div className={`relative ${selectedTrip ? 'h-36' : 'h-48'} overflow-hidden`}>
                    <img
                      src={trip.image}
                      alt={trip.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className={`p-6 ${selectedTrip ? 'p-4' : 'p-6'}`}>
                    <h3 className={`font-medium text-gray-900 ${selectedTrip ? 'text-lg mb-1' : 'text-xl mb-2'}`}>
                      {trip.title}
                    </h3>
                    <div className="flex gap-4 text-sm text-gray-600 mb-3">
                      <span>{trip.duration}</span>
                    </div>
                    {!selectedTrip && (
                      <>
                        <p className="text-gray-600 mb-4">{trip.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-900">{trip.price}</span>
                          <span className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-all duration-300">
                            View More
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Selected Trip Details */}
            <AnimatePresence mode="sync">
              {selectedTrip && (
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ 
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                  className="mt-12"
                >
                  <motion.div 
                    layout
                    className="bg-white/95 backdrop-blur-sm border border-white/50 rounded-xl shadow-lg"
                  >
                    <AnimatePresence mode="wait">
                      {trips.map(trip => (
                        trip.id === selectedTrip && (
                          <motion.div
                            key={trip.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="grid md:grid-cols-2">
                              {/* Left Column - Image */}
                              <div className="relative h-[400px] md:h-auto">
                                <img
                                  src={trip.image}
                                  alt={trip.title}
                                  className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                  <p className="text-white/80 text-sm mb-2">{trip.duration}</p>
                                  <p className="text-white text-3xl font-medium">{trip.price}</p>
                                </div>
                              </div>

                              {/* Right Column - Content */}
                              <div className="p-8 space-y-6">
                                <div className="flex justify-between items-start">
                                  <h3 className="text-3xl font-medium text-gray-900">{trip.title}</h3>
                                  <button 
                                    onClick={handleClose}
                                    className="text-gray-500 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-full"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                  </button>
                                </div>

                                <div className="prose prose-lg max-w-none">
                                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    {trip.description}
                                  </p>
                                  <div className="space-y-4">
                                    {trip.fullDescription.split('\n\n').map((section, index) => (
                                      <p key={index} className="text-gray-600">
                                        {section.trim()}
                                      </p>
                                    ))}
                                  </div>
                                </div>

                                <div className="pt-6 border-t border-gray-200">
                                  <button className="w-full px-6 py-4 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors text-lg font-medium">
                                    Book This Trip
                                  </button>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )
                      ))}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Travel Information Section */}
        <motion.section layout className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Plane className="w-8 h-8 text-white mr-2" />
                <h2 className="text-3xl text-white">
                  How to <span className="italic">fly</span> to Nagaland
                </h2>
              </div>
              <p className="text-gray-200 max-w-2xl mx-auto">
                International travelers planning to visit Nagaland should first fly into Kolkata or Delhi. From these major cities, you can take
                domestic flights to Dimapur, Nagaland's primary airport.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-md rounded-lg shadow-lg p-8 border border-white/20">
              <h3 className="text-xl font-medium mb-6 text-white">Travel Steps:</h3>
              <div className="space-y-6">
                <div className="flex items-start bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:bg-white/20 transition-all duration-300">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black text-sm font-medium mr-4 shadow-lg">1</span>
                  <div>
                    <h4 className="font-medium mb-2 text-white/90">Fly to Kolkata or Delhi</h4>
                    <p className="text-white/80">Numerous airlines operate frequent flights from various international destinations to these cities.</p>
                  </div>
                </div>
                <div className="flex items-start bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:bg-white/20 transition-all duration-300">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black text-sm font-medium mr-4 shadow-lg">2</span>
                  <div>
                    <h4 className="font-medium mb-2 text-white/90">Domestic Flight to Dimapur</h4>
                    <p className="text-white/80">Book a direct flight from Kolkata or Delhi to Dimapur. Airlines like IndiGo and Air India offer convenient options.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-white/10 backdrop-blur-md rounded-md text-center border border-white/10 hover:bg-white/20 transition-all duration-300">
                <p className="text-white/90 font-medium">Ensure to check flight schedules and book in advance for the best rates!</p>
              </div>
            </div>
          </div>
        </motion.section>
      </BackgroundTransition>

      <Footer />
    </div>
  );
};

export default Trips; 