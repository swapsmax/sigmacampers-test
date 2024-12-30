import React from 'react';
import Footer from '../components/Footer';
import { Camera } from 'lucide-react';

const Gallery = () => {
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d', alt: 'Tribal Festival' },
    { id: 2, src: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0', alt: 'Traditional Dance' },
    { id: 3, src: 'https://images.unsplash.com/photo-1516815231560-8f41ec531527', alt: 'Local Cuisine' },
    { id: 4, src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05', alt: 'Scenic Landscapes' },
    { id: 5, src: 'https://images.unsplash.com/photo-1497906539264-eb74442e37a9', alt: 'Village Life' },
    { id: 6, src: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9', alt: 'Cultural Heritage' },
  ];

  return (
    <div>
      <section className="relative pt-24 md:pt-20 pb-32 px-6" id="gallery">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 md:px-5 py-1.5 mb-6">
              <p className="text-gray-200 text-sm md:text-base tracking-wide">
                Capturing <span className="font-medium">Nagaland's Beauty</span>
              </p>
            </div>
            <h2 className="text-5xl font-light text-white mb-6">
              Our <span className="font-serif italic">Gallery</span>
            </h2>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              Glimpses of extraordinary moments and breathtaking landscapes from the land of festivals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image) => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-3"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center">
                    <Camera className="w-8 h-8 text-white mb-3 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                    <p className="text-white text-lg font-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { number: '1000+', label: 'Photos Captured' },
              { number: '50+', label: 'Locations' },
              { number: '17', label: 'Tribes Featured' },
              { number: '100+', label: 'Happy Clients' }
            ].map((stat, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-sm p-6 rounded-lg text-center">
                <p className="text-3xl font-light text-white mb-2">{stat.number}</p>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Gallery; 