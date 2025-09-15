import Hero from "@/components/common/Hero";
// import Features from "../../components/Features";
// import CoursesCertification from "@/components/CoursesCertification";
// import Results from "@/components/Results";
import Partners from "@/components/Partners";
// import JoinWaitingList from "@/components/JoinWaitingList";
import Layout from "@/components/layout/Index";
import FeaturesSection from "@/components/home/features-section/FeaturesSection";
import Beyond from "@/components/home/beyond/Beyond";
import WhyChoose from "@/components/home/why-choose/WhyChoose";
import Join from "@/components/home/Join";

export default function ForProfessionalsPage() {
  return (
    <Layout>
      <Hero isForProfessionalsPage={true} />
      <FeaturesSection isForProfessionalsPage={true} />
      <Beyond isForProfessionalsPage={true} />
      <WhyChoose />
      <Partners />
      <Join />
    </Layout>
  );
}
