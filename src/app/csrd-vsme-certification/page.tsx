"use client";

import JoinWaitingListForm from "@/components/JoinWaitingListForm";
import Hero from "@/components/common/Hero";
import Layout from "@/components/layout/Index";
import useScrollToElement from "@/hooks/useScrollToElement";

export default function CSRDVSMECertificationPage() {
  useScrollToElement('csrdVsmeCertification');
  return (
    <Layout>
      <Hero isForCertificationPage={true} />
      <div id="csrdVsmeCertification">
        <JoinWaitingListForm csrdVsmeCertification={true}/>
      </div>
    </Layout>
  );
}
