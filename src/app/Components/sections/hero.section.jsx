import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="pt-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Find the Right Business.{' '}
              <span className="text-[#2D6CDF]">Instantly.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Biz Connect helps you discover and reach trusted local businesses with ease. 
              Connect with verified businesses and grow your network today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-[#2D6CDF] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                List Your Business
              </button>
              <button className="border-2 border-[#2D6CDF] text-[#2D6CDF] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#2D6CDF] hover:text-white transition-colors">
                Browse Businesses
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Business Directory Interface" 
                className="rounded-lg w-full h-64 object-cover"
              />
              <div className="mt-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-600">Verified Business Listings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-600">Instant Connection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-600">SEO Optimized Profiles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
