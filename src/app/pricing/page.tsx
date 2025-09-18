"use client";
// import Pricing from "../../components/_Pricing";
import Pricing from "../../components/pricing/Index";
import Hero from "@/components/common/Hero";
import Layout from "@/components/layout/Index";
import { useEffect } from "react";

export default function PricingPage() {
  useEffect(() => {
    // Scroll to pricing component after a short delay to ensure it's rendered
    const timer = setTimeout(() => {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <Hero />
      <div id="pricing">
        <Pricing /> 
      </div>
    </Layout>
  );
}
