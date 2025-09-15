import Hero from "@/components/common/Hero";
// import Join from "@/components/home/Join";
import JoinWaitingListForm from "../../components/JoinWaitingListForm";
import Layout from "@/components/layout/Index";
// import Hero from "../../components/Hero";



export default function GettingStartedPage() {
  return (
    <Layout>
      <Hero isForProfessionalsPage={true} />
      <JoinWaitingListForm isForProfessionalsPage={true} />
    </Layout>
  );
}
