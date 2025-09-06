import Hero from "../../components/Hero";
import Features from "../../components/Features";
import CoursesCertification from "@/components/CoursesCertification";
import Results from "@/components/Results";
import Partners from "@/components/Partners";
import JoinWaitingList from "@/components/JoinWaitingList";


export default function ForProfessionalsPage() {
  return (
    <>
      <Hero isForProfessionalsPage={true} />
      <Features isForProfessionalsPage={true} />
      <CoursesCertification isForProfessionalsPage={true} />
      <Results isForProfessionalsPage={true} />
      <Partners />
      <JoinWaitingList />
    </>
  );
}
