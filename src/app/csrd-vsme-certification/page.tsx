import JoinWaitingListForm from "@/components/JoinWaitingListForm";
import Hero from "../../components/Hero";

export default function CSRDVSMECertificationPage() {
  return (
    <>
      <Hero isForCertificationPage={true} />
      <JoinWaitingListForm csrdVsmeCertification={true}/>
    </>
  );
}
