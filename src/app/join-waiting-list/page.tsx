"use client";

import Hero from "@/components/common/Hero";
import Layout from "@/components/layout/Index";
import useScrollToElement from "@/hooks/useScrollToElement";
import JoinWaitingListForm from "@/components/JoinWaitingListForm";

export default function JoinWaitingListPage() {
  useScrollToElement('joinWaitingList');

  return (
    <Layout>
      <Hero />
      <div id="joinWaitingList">
        <JoinWaitingListForm />
      </div>
    </Layout>
  );
}
