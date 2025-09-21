"use client";

import Hero from "@/components/common/Hero";
import JoinWaitingListForm from "../../components/JoinWaitingListForm";
import Layout from "@/components/layout/Index";
import useScrollToElement from "@/hooks/useScrollToElement";



export default function GettingStartedPage() {
  useScrollToElement('gettingStarted');
  return (
    <Layout>
      <Hero isForProfessionalsPage={true} />
      <div id="gettingStarted">
        <JoinWaitingListForm isForProfessionalsPage={true} />
      </div>
    </Layout>
  );
}
