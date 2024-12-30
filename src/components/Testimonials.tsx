import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "United Kingdom",
    text: "Our trip to Nagaland was absolutely magical. The Hornbill Festival exceeded all expectations, and our guide's knowledge made the experience even more special. The traditional homestay was a highlight!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    name: "David Chen",
    location: "Singapore",
    text: "The cultural immersion and trekking experiences were outstanding. Sigma Campers thought of everything - from comfortable accommodations to authentic local experiences. Truly unforgettable!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    text: "As a solo traveler, safety was my priority. The team made me feel secure throughout the journey while ensuring I experienced the best of Nagaland's rich culture and stunning landscapes.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl mb-4">
            What our <span className="italic">travelers</span><br />
            say about us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real experiences from real travelers who have explored Nagaland with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-gray-200" />
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;