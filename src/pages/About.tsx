import React from 'react';
import Footer from '../components/Footer';
import { Users, Shield, Leaf, Target } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero-like section with background */}
      <section className="relative pt-24 md:pt-20 pb-32 px-6" id="about">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
            alt="Nature background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 md:px-4 py-1.5 mb-6">
              <p className="text-gray-200 text-[13px] md:text-base tracking-wide">
                Your Gateway to <span className="font-medium">Authentic Naga Experiences</span>
              </p>
            </div>
            <h2 className="text-5xl font-light text-white mb-6">
              About <span className="font-serif italic">Us</span>
            </h2>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              We craft extraordinary experiences that connect you with the rich culture, 
              traditions, and natural beauty of Nagaland.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <Target className="w-8 h-8 text-white" />
                <h3 className="text-xl text-white font-medium">Our Mission</h3>
              </div>
              <p className="text-gray-200">
                To provide unforgettable adventures that inspire, educate, and connect people 
                with Nagaland's rich cultural heritage. We believe in sustainable tourism and 
                preserving the authenticity of our destinations for future generations.
              </p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-8 h-8 text-white" />
                <h3 className="text-xl text-white font-medium">Our Experience</h3>
              </div>
              <p className="text-gray-200">
                With deep roots in Nagaland and years of experience, we've mastered the art 
                of creating perfect cultural experiences. From festival tours to village 
                homestays, we cater to all interests and comfort levels.
              </p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <Shield className="w-8 h-8 text-white" />
                <h3 className="text-xl text-white font-medium">Safety First</h3>
              </div>
              <p className="text-gray-200">
                Your safety is our top priority. Our experienced guides are locals with deep 
                knowledge of the region. We maintain strict safety protocols while ensuring 
                you have an authentic and memorable experience.
              </p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <Leaf className="w-8 h-8 text-white" />
                <h3 className="text-xl text-white font-medium">Sustainable Tourism</h3>
              </div>
              <p className="text-gray-200">
                We're committed to responsible tourism. We work closely with local communities, 
                promote traditional crafts, and ensure our activities contribute positively to 
                the region's socio-economic development.
              </p>
            </div>
          </div>

          {/* Additional Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '1000+', label: 'Happy Travelers' },
              { number: '17', label: 'Tribes Covered' },
              { number: '50+', label: 'Local Partners' }
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

export default About; 