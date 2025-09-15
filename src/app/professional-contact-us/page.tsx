// import Hero from "../../components/Hero";
import ContactUsForm from "@/components/ContactUs";
import Layout from "@/components/layout/Index";
import React from "react";
import Hero from "@/components/common/Hero";



export default function ProfessionalContactUsPage() {
  return (
    <Layout>
      <Hero isForProfessionalsPage={true} />
      <ContactUsForm isForProfessionalsPage={true} />
    </Layout>
  );
}
