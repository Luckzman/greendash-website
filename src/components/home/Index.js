"use client";
import React, { useEffect } from "react";
import Hero from "../common/Hero";
import FeaturesSection from "./features-section/FeaturesSection";
import Industry from "./industry/Industry";
import HelpingHand from "./HelpingHand";
import Reporting from "./Reporting";
import Beyond from "./beyond/Beyond";
import WhyChoose from "./why-choose/WhyChoose";
import Partners from "./partners/Partners";
import Join from "./Join";

const Index = () => {
  useEffect(() => {
    // Check if URL has hash for features section
    if (window.location.hash === '#features') {
      const timer = setTimeout(() => {
        const featuresSection = document.getElementById('features');
        if (featuresSection) {
          featuresSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Hero />
      <div id="features">
        <FeaturesSection />
      </div>
      <Industry />
      <HelpingHand />
      <Reporting />
      <Beyond />
      <WhyChoose />
      <Partners />
      <Join />
    </>
  );
};

export default Index;
