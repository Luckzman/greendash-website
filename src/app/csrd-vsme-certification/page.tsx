import JoinWaitingListForm from "@/components/JoinWaitingListForm";
import Hero from "@/components/common/Hero";
import Layout from "@/components/layout/Index";

export default function CSRDVSMECertificationPage() {
  return (
    <Layout>
      <Hero isForCertificationPage={true} />
      <JoinWaitingListForm csrdVsmeCertification={true}/>
    </Layout>
  );
}
