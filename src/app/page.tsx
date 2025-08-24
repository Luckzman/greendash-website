import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ESGCompliance from "../components/ESGCompliance";
import Features from "../components/Features";
import IndustryCompliance from "../components/IndustryCompliance";
import CTA from "../components/CTA";
import WhyReporting from "../components/WhyReporting";
import CoursesCertification from "../components/CoursesCertification";
import Results from "../components/Results";
import Partners from "../components/Partners";
import JoinWaitingList from "../components/JoinWaitingList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <ESGCompliance />
        <Features />
        <IndustryCompliance />
        <CTA />
        <WhyReporting />
        <CoursesCertification />
        <Results />
        <Partners />
        <JoinWaitingList />
        <Footer />
      </div>
    </div>
  );
}
