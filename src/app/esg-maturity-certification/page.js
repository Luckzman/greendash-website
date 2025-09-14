import Hero from "@/components/common/Hero";
import JoinWaitingListForm from "@/components/JoinWaitingListForm";
import Layout from "@/components/layout/Index";
import React from "react";

const page = () => {
  return (
      <Layout>
        <Hero isForCertificationPage={true} />
        <JoinWaitingListForm esgMaturityCertification={true}/>
      </Layout>
  );
};

export default page;
