import React from 'react';
import { Shield, Zap, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Verified Listings',
      description: 'All businesses are thoroughly verified to ensure quality and trustworthiness.'
    },
    {
      icon: Zap,
      title: 'Instant Leads',
      description: 'Connect with potential customers immediately through our streamlined platform.'
    },
    {
      icon: TrendingUp,
      title: 'SEO Boosted',
      description: 'Premium listings get enhanced SEO optimization to increase online visibility.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mission is to bridge the gap between businesses and customers by creating 
            a trusted platform where local businesses can grow by connecting with verified 
            customers who are actively seeking their services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2D6CDF] text-white rounded-full mb-6">
                <feature.icon size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#2D6CDF] to-blue-700 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful businesses already using Biz Connect to expand their reach.
          </p>
          <button className="bg-white text-[#2D6CDF] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
