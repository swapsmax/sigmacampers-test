import React from 'react';
import { Car, Hotel, Map, UtensilsCrossed, Backpack } from 'lucide-react';

const Benefits = () => {
  return (
    <section className="relative py-20 px-6">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1533578135607-4db5c9fb8ef2?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        <div>
          
          <h2 className="text-4xl text-white mb-6">
            Experience <span className="font-serif italic">comfort</span><br />
            and <span className="font-serif italic">convenience</span>
          </h2>
          <p className="text-gray-200 text-lg">
            At Sigma Campers, we pride ourselves on delivering an exceptional experience from the moment you arrive in Nagaland.
            From the moment you set foot in Nagaland, every detail is meticulously taken care of, allowing you to relax and
            fully immerse yourself in this unique destination.
          </p>
        </div>
        
        <div className="space-y-6">
          {[
            {
              icon: <Car className="w-6 h-6" />,
              title: "Airport Pickup",
              description: "Enjoy a seamless start to your journey with our chauffeured SUV cars ready to greet you at the airport."
            },
            {
              icon: <Hotel className="w-6 h-6" />,
              title: "Accommodation Options",
              description: "Choose from a range of luxurious accommodations, including glamping tents, hotels, and resorts, all designed for your comfort."
            },
            {
              icon: <Map className="w-6 h-6" />,
              title: "Daily Guided Tours",
              description: "Explore the breathtaking landscapes and rich culture of Nagaland with our knowledgeable guides who ensure you don't miss any highlights."
            },
            {
              icon: <UtensilsCrossed className="w-6 h-6" />,
              title: "Culinary Delights",
              description: "Indulge in daily meals that are freshly prepared, showcasing the authentic flavors of local cuisine."
            },
            {
              icon: <Backpack className="w-6 h-6" />,
              title: "Trekking Support",
              description: "For those seeking adventure, we provide porters to assist you during trekking activities, ensuring a stress-free experience."
            }
          ].map((benefit, index) => (
            <div 
              key={index} 
              className="flex gap-4 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                <div className="text-white">
                  {benefit.icon}
                </div>
              </div>
              <div>
                <h3 className="font-medium text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-200">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;