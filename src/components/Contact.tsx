import React from 'react';

const packages = [
  { id: "kohima", name: "Mesmerising Kohima (4N/5D)" },
  { id: "flavor", name: "Nagaland Flavor (6N/7D)" },
  { id: "hornbill", name: "Hornbill 2025 (10N/11D)" }
];

const Contact = () => {
  // Get tomorrow's date as the minimum selectable date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <section id="contact-form" className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl mb-6">
          Ready to <span className="italic">embark</span><br />
          on a <span className="italic">new</span> journey?
        </h2>
        <p className="text-gray-600 mb-8">
          Take the first step towards your Nagaland adventure. Share your details with us, 
          and our team will reach out within 24 hours to help plan your perfect trip.
        </p>
        
        <form className="space-y-4 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="package" className="block text-sm font-medium text-gray-700">
                Select Package
              </label>
              <select
                id="package"
                required
                defaultValue=""
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 bg-white"
              >
                <option value="" disabled>Choose a package</option>
                {packages.map((pkg) => (
                  <option key={pkg.id} value={pkg.id}>
                    {pkg.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="people" className="block text-sm font-medium text-gray-700">
                Number of People
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="people"
                  min="1"
                  max="20"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                  Max: 20
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
              Preferred Start Date (dd/mm/yyyy)
            </label>
            <input
              type="date"
              id="startDate"
              required
              min={minDate}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 bg-white"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">
              Special Requirements or Questions
            </label>
            <textarea
              id="requirements"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition-colors mt-6"
          >
            Submit Interest
          </button>
          
          <p className="text-sm text-gray-500 mt-4 text-center">
            Our team will contact you within 24 hours to discuss your trip details and provide a customized quote.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;