"use client";

import Hero from "@/components/common/Hero";
import JoinWaitingListForm from "@/components/JoinWaitingListForm";
import Layout from "@/components/layout/Index";
import React from "react";
import useScrollToElement from "@/hooks/useScrollToElement";

const Page = () => {
  useScrollToElement('esgMaturityCertification');

  return (
      <Layout>
        <Hero isForCertificationPage={true} />
        <div id="esgMaturityCertification">
          <JoinWaitingListForm esgMaturityCertification={true}/>
        </div>
      </Layout>
  );
};

export default Page;
