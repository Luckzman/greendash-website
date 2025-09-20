"use client";

import Hero from "@/components/common/Hero";
import ContactUsForm from "../../components/ContactUs";
import Layout from "@/components/layout/Index";
import useScrollToElement from "@/hooks/useScrollToElement";

export default function ContactUsPage() {
  useScrollToElement('contactUs');

  return (
    <Layout>
      <Hero />
      <div id="contactUs">
        <ContactUsForm />
      </div>
    </Layout>
  );
}
