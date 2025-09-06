import Hero from "../components/Hero";
// import ESGCompliance from "../components/ESGCompliance";
import Features from "../components/Features";
import IndustryCompliance from "../components/IndustryCompliance";
import CTA from "../components/CTA";
import WhyReporting from "../components/WhyReporting";
import CoursesCertification from "../components/CoursesCertification";
import Results from "../components/Results";
import Partners from "../components/Partners";
import JoinWaitingList from "../components/JoinWaitingList";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <ESGCompliance /> */}
      <Features />
      <Results />
      <IndustryCompliance />
      <WhyReporting />
      <CoursesCertification />
      <CTA />
      <Partners />
      <JoinWaitingList />
    </>
  );
}
