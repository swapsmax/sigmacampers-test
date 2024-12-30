import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';

const Contact = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    // Navigate to home page and scroll to contact section
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact-form');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Small delay to ensure navigation completes
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div>

      {/* Existing Contact Section */}
      <section className="relative pt-24 md:pt-20 pb-32 px-6" id="contact">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1602702131391-9136a92f525e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Nagaland landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 md:px-5 py-1.5 mb-6">
              <p className="text-gray-200 text-sm md:text-base tracking-wide">
                Get in <span className="font-medium">Touch</span>
              </p>
            </div>
            <h2 className="text-5xl font-light text-white mb-6">
              Contact <span className="font-serif italic">Us</span>
            </h2>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              Have questions about our Nagaland tours? We'd love to hear from you!
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-4">
              Looking to <span className="italic">book</span> a trip?
            </h2>
            <p className="text-gray-600 mb-6">
              If you're ready to plan your Nagaland adventure and want to check package availability and pricing, 
              use our dedicated booking form instead.
            </p>
            <button 
              onClick={handleBookingClick}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors"
            >
              Go to Booking Form <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Phone, title: 'Phone', content: '+91 (XXX) XXX-XXXX', subtext: 'Mon-Fri 9am-6pm IST' },
              { icon: Mail, title: 'Email', content: 'info@sigmacampers.com', subtext: 'We reply within 24 hours' },
              { icon: MapPin, title: 'Office', content: 'Kohima, Nagaland', subtext: 'Visit us for a coffee' }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center group hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                <p className="text-gray-200 mb-1">{item.content}</p>
                <p className="text-gray-300 text-sm">{item.subtext}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 
                  focus:ring-white/30 focus:border-white/30 backdrop-blur-sm appearance-none
                  [-webkit-backdrop-filter:blur(12px)] [backdrop-filter:blur(12px)]
                  supports-[-webkit-overflow-scrolling:touch]:bg-black/40
                  supports-[-webkit-overflow-scrolling:touch]:text-white
                  supports-[-webkit-overflow-scrolling:touch]:placeholder-gray-300"
                  required
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 
                  focus:ring-white/30 focus:border-white/30 backdrop-blur-sm appearance-none
                  [-webkit-backdrop-filter:blur(12px)] [backdrop-filter:blur(12px)]
                  supports-[-webkit-overflow-scrolling:touch]:bg-black/40
                  supports-[-webkit-overflow-scrolling:touch]:text-white
                  supports-[-webkit-overflow-scrolling:touch]:placeholder-gray-300"
                  required
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 
                focus:ring-white/30 focus:border-white/30 backdrop-blur-sm appearance-none
                [-webkit-backdrop-filter:blur(12px)] [backdrop-filter:blur(12px)]
                supports-[-webkit-overflow-scrolling:touch]:bg-black/40
                supports-[-webkit-overflow-scrolling:touch]:text-white
                supports-[-webkit-overflow-scrolling:touch]:placeholder-gray-300"
                required
                placeholder="Subject of your message"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-2 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 
                focus:ring-white/30 focus:border-white/30 backdrop-blur-sm appearance-none
                [-webkit-backdrop-filter:blur(12px)] [backdrop-filter:blur(12px)]
                supports-[-webkit-overflow-scrolling:touch]:bg-black/40
                supports-[-webkit-overflow-scrolling:touch]:text-white
                supports-[-webkit-overflow-scrolling:touch]:placeholder-gray-300"
                required
                placeholder="Your message here..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-block px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Business Hours */}
          <div className="mt-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-white mr-2" />
              <h3 className="text-xl font-medium text-white">Business Hours</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200">
              <div>
                <p className="font-medium">Monday - Friday</p>
                <p>9:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="font-medium">Saturday</p>
                <p>10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact; 