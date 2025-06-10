import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Restaurant Owner',
      company: "Sarah's Bistro",
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
      rating: 5,
      content: "Biz Connect transformed how customers find us. Our reservations increased by 40% within the first month!"
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'TechStart Solutions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
      rating: 5,
      content: "The SEO boost from our premium listing helped us rank #1 for local tech services. Absolutely worth the investment."
    },
    {
      name: 'Emily Rodriguez',
      role: 'Boutique Owner',
      company: 'Bella Fashions',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
      rating: 5,
      content: "The platform is so easy to use, and the customer support team is incredibly helpful. Highly recommend to any small business."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted by Thousands</h2>
          <p className="text-xl text-gray-600">
            See what successful business owners are saying about Biz Connect.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-[#2D6CDF] text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-blue-50 px-8 py-4 rounded-full">
            <div className="flex -space-x-2">
              {testimonials.map((testimonial, index) => (
                <img 
                  key={index}
                  src={testimonial.image} 
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <span className="text-gray-700 font-medium">
              Join 10,000+ happy business owners
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;