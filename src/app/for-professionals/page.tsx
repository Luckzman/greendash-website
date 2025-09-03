import Hero from "../../components/Hero";
import Features from "../../components/Features";

export default function ForProfessionalsPage() {
  return (
    <>
      <Hero isForProfessionalsPage={true} />
      <Features isForProfessionalsPage={true} />
    </>
  );
}
