import CalendlyBooking from "../../../components/CalendlyBooking";
import Hero from "../../../components/Hero";

export default function CSRDVSMECertificationBookingPage() {
  return (
    <>
      <Hero isForCertificationPage={true} />
      <CalendlyBooking csrdVsme={true} />
    </>
  );
}
