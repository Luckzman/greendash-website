import JoinWaitingListForm from "@/components/JoinWaitingListForm";
import Hero from "../../components/Hero";



export default function GettingStartedPage() {
  return (
    <>
      <Hero isForProfessionalsPage={true} />
      <JoinWaitingListForm isForProfessionalsPage={true} />
    </>
  );
}
