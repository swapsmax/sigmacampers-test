import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl mb-6">
          Ready to <span className="italic">embark</span><br />
          on a <span className="italic">new</span> journey?
        </h2>
        <p className="text-gray-600 mb-8">
          Don't let your dream gateway remain a dream any longer. Take action now and let us craft 
          your next unforgettable experience, combining your travel fantasies into unforgettable 
          realities.
        </p>
        
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition-colors"
          >
            Start the Trip
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;