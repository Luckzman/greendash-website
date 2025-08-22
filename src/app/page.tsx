import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ESGCompliance from "../components/ESGCompliance";
import Features from "../components/Features";
import IndustryCompliance from "../components/IndustryCompliance";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ESGCompliance />
      <Features />
      <IndustryCompliance />
    </div>
  );
}
