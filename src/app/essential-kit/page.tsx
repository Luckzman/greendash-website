// import Hero from "../../components/Hero";
import Hero from "@/components/common/Hero";
import JoinWaitingListForm from "../../components/JoinWaitingListForm";
import Layout from "@/components/layout/Index";

export default function EssentialKitPage() {
  return (
    <Layout>
      <Hero />
      <JoinWaitingListForm essentialKit={true}/>
    </Layout>
  );
}
