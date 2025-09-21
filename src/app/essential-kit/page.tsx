"use client";

import Hero from "@/components/common/Hero";
import JoinWaitingListForm from "../../components/JoinWaitingListForm";
import Layout from "@/components/layout/Index";
import useScrollToElement from "@/hooks/useScrollToElement";

export default function EssentialKitPage() {
  useScrollToElement('essentialKit');
  return (
    <Layout>
      <Hero />
      <div id="essentialKit">
        <JoinWaitingListForm essentialKit={true}/>
      </div>
    </Layout>
  );
}
