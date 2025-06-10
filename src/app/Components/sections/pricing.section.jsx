import React from 'react';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for getting started',
      features: [
        'Basic business listing',
        'Contact information display',
        'Standard customer support',
        'Basic analytics'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Standard',
      price: '$29',
      period: '/month',
      description: 'Best for growing businesses',
      features: [
        'Everything in Free',
        'Premium listing placement',
        'Photo gallery (up to 10 images)',
        'Customer reviews management',
        'Priority customer support',
        'Advanced analytics'
      ],
      cta: 'Choose Standard',
      popular: false
    },
    {
      name: 'Premium',
      price: '$79',
      period: '/month',
      description: 'Maximum visibility and features',
      features: [
        'Everything in Standard',
        'Featured listing badge',
        'Unlimited photo gallery',
        'SEO optimization boost',
        'Social media integration',
        'Lead generation tools',
        'Dedicated account manager',
        'Custom business page design'
      ],
      cta: 'Get Started',
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Choose Your Package</h2>
          <p className="text-xl text-gray-600">
            Select the perfect plan to showcase your business and connect with more customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-[#2D6CDF] scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#2D6CDF] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-lg font-semibold transition-colors ${
                plan.popular 
                  ? 'bg-[#2D6CDF] text-white hover:bg-blue-700' 
                  : 'border-2 border-[#2D6CDF] text-[#2D6CDF] hover:bg-[#2D6CDF] hover:text-white'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
