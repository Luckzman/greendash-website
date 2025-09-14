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

const Index = () => {
  return (
    <>
      <Hero />
      <FeaturesSection />
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
