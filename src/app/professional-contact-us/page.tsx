"use client";

import ContactUsForm from "@/components/ContactUs";
import Layout from "@/components/layout/Index";
import React from "react";
import Hero from "@/components/common/Hero";
import useScrollToElement from "@/hooks/useScrollToElement";



export default function ProfessionalContactUsPage() {
  useScrollToElement('professionalContactUs');

  return (
    <Layout>
      <Hero isForProfessionalsPage={true} />
      <div id="professionalContactUs">
        <ContactUsForm isForProfessionalsPage={true} />
      </div>
    </Layout>
  );
}
