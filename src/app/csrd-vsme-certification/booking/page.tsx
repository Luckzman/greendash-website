import CalendlyBooking from "../../../components/CalendlyBooking";
import Hero from "@/components/common/Hero";
import Layout from "@/components/layout/Index";

export default function CSRDVSMECertificationBookingPage() {
  return (
    <Layout>
      <Hero isForCertificationPage={true} />
      <CalendlyBooking csrdVsme={true} />
    </Layout>
  );
}
