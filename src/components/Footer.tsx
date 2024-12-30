import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-medium mb-4">Discover</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Top Packages</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Featured</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Packages</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Group Tours</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Custom Planned</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Special Offers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Booking Guidelines</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">123 Adventure Street</li>
              <li className="text-gray-400">City, State 12345</li>
              <li><a href="tel:+1234567890" className="text-gray-400 hover:text-white">+1 (234) 567-890</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>Copyright © 2024 splore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;