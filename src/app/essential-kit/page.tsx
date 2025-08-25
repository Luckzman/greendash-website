import Hero from "../../components/Hero";
import JoinWaitingListForm from "../../components/JoinWaitingListForm";

export default function EssentialKitPage() {
  return (
    <>
      <Hero />
      <JoinWaitingListForm essentialKit={true}/>
    </>
  );
}
