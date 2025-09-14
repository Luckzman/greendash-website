import Certification from "../../components/Certification";
import Hero from "../../components/Hero";

export default function CertificationPage() {
  return (
    <>
      <Hero isForCertificationPage={true} />
      <Certification />
    </>
  );
}
