"use client";
import React from "react";
import Hero from "../common/Hero";
import FeaturesSection from "./features-section/FeaturesSection";
import Industry from "./industry/Industry";
import HelpingHand from "./HelpingHand";
import Reporting from "./Reporting";
import Beyond from "./beyond/Beyond";
import WhyChoose from "./why-choose/WhyChoose";
import Partners from "./partners/Partners";
import Join from "./Join";
import useScrollToElement from "@/hooks/useScrollToElement";

const Index = () => {
  // Check if URL has hash for features section and scroll to it
  const shouldScrollToFeatures = typeof window !== 'undefined' && window.location.hash === '#features';
  useScrollToElement('features', 100, shouldScrollToFeatures);

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
