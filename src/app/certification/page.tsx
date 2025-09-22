"use client";

import CertificationPage from "@/components/certification/Index";
import Layout from "@/components/layout/Index";
import Hero from "@/components/common/Hero";
import React from "react";
import useScrollToElement from "@/hooks/useScrollToElement";

const Page = () => {
  useScrollToElement('certification');

  return (
    <>
      <Layout>
        <Hero isForCertificationPage={true} />
        <div id="certification">
          <CertificationPage />
        </div>
      </Layout>
    </>
  );
};

export default Page;
