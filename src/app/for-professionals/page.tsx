'use client'

import Hero from "@/components/common/Hero";
import Layout from "@/components/layout/Index";
import FeaturesSection from "@/components/home/features-section/FeaturesSection";
import Beyond from "@/components/home/beyond/Beyond";
import WhyChoose from "@/components/home/why-choose/WhyChoose";
import Join from "@/components/home/Join";
import Partners from "@/components/home/partners/Partners";
import useScrollToElement from "@/hooks/useScrollToElement";

export default function ForProfessionalsPage() {
  const shouldScrollToFeatures = typeof window !== 'undefined' && window.location.hash === '#pro-features';
  useScrollToElement('pro-features', 100, shouldScrollToFeatures);

  return (
    <Layout>
      <Hero isForProfessionalsPage={true} />
      <FeaturesSection isForProfessionalsPage={true} />
      <Beyond isForProfessionalsPage={true} />
      <WhyChoose isForProfessionalsPage={true} />
      <Partners />
      <Join isForProfessionalsPage={true} />
    </Layout>
  );
}
