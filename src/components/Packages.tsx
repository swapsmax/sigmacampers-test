import React from 'react';
import { Link } from 'react-router-dom';

const packages = [
  {
    title: "Mesmerising Kohima",
    description: "Explore the capital city of Nagaland with its rich history, vibrant markets, and stunning viewpoints. Visit the iconic Kohima War Cemetery and experience local culture through traditional village tours.",
    image: "https://images.unsplash.com/photo-1513023840371-dd774fcaee5b",
    duration: "4 Nights, 5 Days"
  },
  {
    title: "Nagaland Flavor",
    description: "Immerse yourself in Naga culture through this comprehensive tour covering major tribal villages, local cuisine experiences, and traditional craft workshops. Perfect for cultural enthusiasts.",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
    duration: "6 Nights, 7 Days"
  },
  {
    title: "Hornbill 2025",
    description: "Experience the world-famous Hornbill Festival, showcasing all 17 major tribes of Nagaland. Witness traditional dances, music, games, and local delicacies in this ultimate cultural extravaganza.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa",
    duration: "10 Nights, 11 Days"
  }
];

const Packages = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-12">
          Experience <span className="italic">Nagaland</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="group bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-64">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm">
                  {pkg.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3">{pkg.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">{pkg.description}</p>
                <Link to="/trips" className="block">
                  <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition-colors">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;