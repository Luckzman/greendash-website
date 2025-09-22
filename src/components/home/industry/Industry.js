"use client";
import Content from "@/components/common/Content";
import React, { useState } from "react";
import Tabs from "./Tabs";
import PairedButtons from "@/components/common/PairedButtons";

const Industry = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      label: "Industrial",
      content: {
        heading: "Manufacturing & Industry",
        desc: "GreenDash helps manufacturing SMEs track energy and emissions, and demonstrate supply chain sustainability to large B2B clients",
        list: [
          "Simple GHG emissions and electricity calculation",
          "Energy efficiency and consume reduction recommendations",
          "Ready to share ESG data",
        ],
      },
    },
    {
      label: "Food/Beverage & Retail",
      content: {
        heading: "Food/Beverage & Retail",
        desc: "Enables food companies to easily track water and waste, and deliver VSME-aligned reports to retail and enterprise customers",
        list: [
          "Simple GHG emissions and electricity calculation",
          "Energy efficiency and consume reduction recommendations",
          "Ready to share ESG data",
        ],
      },
    },
    {
      label: "Construction & Real Estate",
      content: {
        heading: "Construction & Real Estate",
        desc: "Supports SMEs collect ESG data, monitor materials and safety metrics, and create compliant reports for clients and regulators",
        list: [
          "Simple GHG emissions and electricity calculation",
          "Safety and ethics recommendations",
          "Ready to share ESG data",
        ],
      },
    },
    {
      label: "Transport & Logistics",
      content: {
        heading: "Transport & Logistics",
        desc: "Supports Transport & Logistic SME to fully track ESG metrics and report with success to their clients",
        list: [
          "Simple GHG emissions and electricity calculation",
          "Energy efficiency and consumptions reduction recommendations",
          "Ready to share ESG data",
        ],
      },
    },
    {
      label: "Services",
      content: {
        heading: "Services",
        desc: "Supports Services SME to fully track ESG metrics and report with success to their clients",
        list: [
          "Simple GHG emissions and electricity calculation",
          "Energy efficiency and consumptions reduction recommendations",
          "Ready to share ESG data",
        ],
      },
    },
  ];
  return (
    <section className="lg:pt-vw50 lg:pb-vw62 py-[60px] sm:py-[120px]">
      <Content
        tag={"Perfect Match"}
        heading={"Industry Compliance"}
        desc={
          "Aligned with CSRD/VSME, we provide an industry-fit and up-to-date solution that allows you to stay ahead of the evolving sustainability reporting standards"
        }
        descWidth={"lg:w-[59.72222222222222vw]"}
      />
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex justify-center lg:mt-vw37 mt-6 w-full">
        <PairedButtons
          standardBtn={{
            text: "Get Started",
            link: "/join-waiting-list",
          }}
          chevronBtn={{
            text: "Contact Us",
            link: "/contact-us",
          }}
        />
      </div>
    </section>
  );
};

export default Industry;
