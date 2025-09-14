import CalendlyBooking from "@/components/CalendlyBooking";
import Hero from "@/components/common/Hero";
import Layout from "@/components/layout/Index";

export default function ESGMaturityCertificationBookingPage() {
  return (
    <Layout>
      <Hero isForCertificationPage={true} />
      <CalendlyBooking />
    </Layout>
  );
}
