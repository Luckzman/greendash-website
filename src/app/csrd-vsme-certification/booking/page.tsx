import CalendlyBooking from "../../../components/CalendlyBooking";
import Hero from "../../../components/Hero";

export default function CSRDVSMECertificationBookingPage() {
  return (
    <>
      <Hero />
      <CalendlyBooking csrdVsme={true} />
    </>
  );
}
