"use client";

import Hero from "@/components/common/Hero";
import Layout from "@/components/layout/Index";
import ThankYou from "@/components/ThankYou";
import useScrollToElement from "@/hooks/useScrollToElement";
import { useThankYouState } from "@/hooks/useThankYouState";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ThankYouData {
  tag: string;
  heading: string;
  desc: string;
  desc2: string;
  desc3?: string;
}

export default function ThankYouPage() {
  const router = useRouter();
  const { getThankYouData, clearThankYouData } = useThankYouState();
  const [thankYouData, setThankYouData] = useState<ThankYouData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useScrollToElement('thankYou');

  useEffect(() => {
    // Try to get data from sessionStorage
    const data = getThankYouData();
    
    if (data) {
      setThankYouData(data);
      setIsLoading(false);
    } 
  }, [router, getThankYouData]);

  // Clear the data when component unmounts (optional)
  useEffect(() => {
    return () => {
      // Optionally clear data after a delay to allow for navigation
      setTimeout(() => {
        clearThankYouData();
      }, 1000);
    };
  }, [clearThankYouData]);

  if (!thankYouData) {
    return null; // Will redirect to homepage
  }

  return (
    <Layout>
        <Hero />
        <div id="thankYou">
          <ThankYou 
            wrapperWidth="lg:w-[65.9027777778vw]"
            isForProfessionalsPage={false}
            tag={thankYouData.tag}
            headingClasses="text-black"
            heading={thankYouData.heading}
            desc={thankYouData.desc}
            desc2={thankYouData.desc2}
            desc3={thankYouData.desc3}
          />
        </div>
    </Layout>
  );
}
