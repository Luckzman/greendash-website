"use client";
// import Pricing from "../../components/_Pricing";
import Pricing from "../../components/pricing/Index";
import Hero from "@/components/common/Hero";
import Layout from "@/components/layout/Index";
import useScrollToElement from "@/hooks/useScrollToElement";

export default function PricingPage() {
  useScrollToElement('pricing');

  return (
    <Layout>
      <Hero />
      <div id="pricing">
        <Pricing /> 
      </div>
    </Layout>
  );
}
