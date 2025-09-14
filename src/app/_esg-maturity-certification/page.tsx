import JoinWaitingListForm from "@/components/JoinWaitingListForm";
import Hero from "../../components/Hero";

export default function ESGMaturityCertificationPage() {
  return (
    <>
      <Hero isForCertificationPage={true} />
      <JoinWaitingListForm esgMaturityCertification={true}/>
    </>
  );
}
