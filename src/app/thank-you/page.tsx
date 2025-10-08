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
  isForProfessionalsPage?: boolean;
}

export default function ThankYouPage() {
  const router = useRouter();
  const { getThankYouData, clearThankYouData } = useThankYouState();
  const [thankYouData, setThankYouData] = useState<ThankYouData | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

console.log('thankYouData', getThankYouData());
  console.log(thankYouData);

  useScrollToElement('thankYou');

  useEffect(() => {
    // Try to get data from sessionStorage
    const data = getThankYouData();
    
    if (data) {
      setThankYouData(data);
    //   setIsLoading(false);
    }
    // else {
    //   // If no stored data, redirect to homepage
    //   router.push('/');
    // }
  }, [router, getThankYouData]);

  // Clear the data when component unmounts (optional)
//   useEffect(() => {
//     return () => {
//       // Optionally clear data after a delay to allow for navigation
//       setTimeout(() => {
//         clearThankYouData();
//       }, 1000);
//     };
//   }, [clearThankYouData]);

//   if (isLoading) {
//     return (
//       <Layout>
//         <Hero isForProfessionalsPage={thankYouData?.isForProfessionalsPage} />
//         <div className="flex items-center justify-center min-h-screen">
//           <div className="text-center">
//             <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green mx-auto"></div>
//             <p className="mt-4 text-lg">Loading...</p>
//           </div>
//         </div>
//       </Layout>
//     );
//   }

  if (!thankYouData) {
    return null; // Will redirect to homepage
  }

  return (
    <Layout>
        <Hero isForProfessionalsPage={thankYouData?.isForProfessionalsPage} />
        <div id="thankYou">
          <ThankYou 
            wrapperWidth="lg:w-[65.9027777778vw]"
            isForProfessionalsPage={thankYouData.isForProfessionalsPage}
            tag={thankYouData.tag}
            headingClasses={thankYouData.isForProfessionalsPage ? 'text-[#6FE451]' : 'text-black'}
            heading={thankYouData.heading}
            desc={thankYouData.desc}
            desc2={thankYouData.desc2}
            desc3={thankYouData.desc3}
          />
        </div>
    </Layout>
  );
}
