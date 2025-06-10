// pages/business-listing.jsx
// import './globals.css';
"use client";
import React from 'react';
import Navbar from '@/app/Components/layout/navbar';
import HeroSection from '@/app/Components/sections/hero.section';
import AboutSection from '@/app/Components/sections/about.section';
import PricingSection from '@/app/Components/sections/pricing.section';
import TestimonialsSection from '@/app/Components/sections/testimonial.section';
import ContactSection from '@/app/Components/sections/contact.section';
import Footer from '@/app/Components/sections/footer.section';

const BusinessListingPage = () => {
  return (

    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
       <main className="flex-grow">
      <HeroSection />
      <AboutSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
       </main>
      <Footer />
     


    </div>
  );
};

export default BusinessListingPage;
