import Hero from "@/components/common/Hero";
import Features from "../../components/Features";
import CoursesCertification from "@/components/CoursesCertification";
import Results from "@/components/Results";
import Partners from "@/components/Partners";
import JoinWaitingList from "@/components/JoinWaitingList";
import Layout from "@/components/layout/Index";


export default function ForProfessionalsPage() {
  return (
    <Layout>
      <Hero isForProfessionalsPage={true} />
      <Features isForProfessionalsPage={true} />
      <CoursesCertification isForProfessionalsPage={true} />
      <Results isForProfessionalsPage={true} />
      <Partners />
      <JoinWaitingList />
    </Layout>
  );
}
