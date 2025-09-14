import React from "react";
import Detail from "./Detail";

export interface DetailProps {
  title: string;
  desc: string;
  price: string;
  link: string;
  featuresTitle: string;
  features: string[];
}

const details: DetailProps[] = [
  {
    title: "ESG Maturity Certification",
    desc: "For companies that want to assess and demonstrate how they are integrating ESG principles across their business",
    price: "250€",
    link: "/esg-maturity-certification",
    featuresTitle: "included:",
    features: [
      "ESG Maturity Assessment  ",
      "Tailored Improvement Roadmap",
      "GreenDash Certification ",
    ],
  },
  {
    title: "CSRD/VSME Certification",
    desc: "For companies that want to ensure their sustainability report is fully compliant with the new European CSRD/VSME standards",
    price: "290€",
    link: "/csrd-vsme-certification",
    featuresTitle: "included:",
    features: [
      "Detailed Conformity Analysis",
      "Corrective recommendations ",
      "GreenDash Certification ",
    ],
  },
];

const Details = () => {
  return (
    <div
      data-aos="fade"
      className="flex lg:justify-center lg:gap-x-vw92 gap-x-4 px-6 lg:px-0 lg:my-vw45 my-10 myContainer lg:w-full overflow-scroll lg:overflow-visible w-[95.350%] ml-auto mr-0 lg:mx-auto whitespace-nowrap"
    >
      {details.map((detail, index) => (
        <Detail key={index} detail={detail} />
      ))}
    </div>
  );
};

export default Details;
