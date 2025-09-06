import Hero from "../../components/Hero";
import ContactUsForm from "@/components/ContactUs";


export default function ProfessionalContactUsPage() {
  return (
    <>
      <Hero isForProfessionalsPage={true} />
      <ContactUsForm isForProfessionalsPage={true} />
    </>
  );
}
