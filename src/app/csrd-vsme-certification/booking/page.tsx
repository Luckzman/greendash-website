"use client";

import CalendlyBooking from "../../../components/CalendlyBooking";
import Hero from "@/components/common/Hero";
import Layout from "@/components/layout/Index";
import useScrollToElement from "@/hooks/useScrollToElement";

export default function CSRDVSMECertificationBookingPage() {
  useScrollToElement('csrdVsmeCertificationBooking');
  return (
    <Layout>
      <Hero isForCertificationPage={true} />
      <div id="csrdVsmeCertificationBooking">
        <CalendlyBooking csrdVsme={true} />
      </div>
    </Layout>
  );
}
