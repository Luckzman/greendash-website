import React from "react";
import Detail from "./Detail";

const details = [
  {
    title: "One Shot",
    desc: "For companies needing a single VSME report",
    featuresTitle: "Features included:",
    features: ["1 Annual VSME Report"],
    overview:
      "Ideal for SMEs that just want a one-time, fully compliant sustainability report without ongoing monitoring or recommendations",
  },
  {
    title: "Monitoring",
    desc: "For SMEs that want to track ESG progress all year",
    featuresTitle: "Features included:",
    features: [
      "ESG Data Center",
      "ESG Data Analytics",
      "ESG Recommendations",
      "Data Export",
      "Scope 1, 2 and 3* Emissions",
      "24/7 support on VSME",
    ],
    overview:
      "Perfect for SMEs collecting data continuously, monitoring performance, and staying ready to respond to any ESG request",
  },
  {
    title: "Reporting",
    desc: "For businesses completing their yearly VSME report ",
    featuresTitle: "All in Monitoring, plus:",
    features: [
      "1 Annual VSME Report",
      "VSME Certificate",
      "ESG Policy Service",
    ],
    overview:
      "Perfect for SMEs that want full ESG monitoring, professional VSME/CSRD report generation, a tailored ESG policy, and official VSME certification",
  },
  {
    title: "Tailored",
    desc: "For SMEs that want a personalized design or integrations ",
    featuresTitle: "All in Monitoring, plus:",
    features: ["Report Graphic Design service", "Tailored Integrations"],
    overview:
      "Tailored for SMEs that require full customization of integration and report design",
  },
];

const Details = () => {
  return (
    <div
      data-aos="fade"
      className="flex lg:justify-center items-stretch lg:gap-x-vw30 gap-x-4 px-6 lg:px-0 lg:my-vw45 my-10 myContainer lg:w-full overflow-scroll lg:overflow-visible w-[95.350%] ml-auto mr-0 lg:mx-auto whitespace-nowrap"
    >
      {details.map((detail, index) => (
        <Detail key={index} detail={detail} index={index} details={details} />
      ))}
    </div>
  );
};

export default Details;
