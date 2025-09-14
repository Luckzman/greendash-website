import React from "react";
import Hero from "../common/Hero";
import Content from "../common/Content";
import Details from "./details/Details";
import StandardBtn from "../common/link-buttons/StandardBtn";

const PricingPage = () => {
  return (
      <section className="relative lg:pt-vw44 lg:pb-vw200 py-[60px] sm:py-[120px]">
        <span
          style={{
            background:
              "linear-gradient(180deg, #7FFF6B 3.25%, rgba(173, 255, 160, 0.80) 30.18%, rgba(239, 255, 236, 0.50) 66.1%, rgba(241, 255, 238, 0.10) 96.62%)",
          }}
          className="atlwh_Full pointer-events-none"
        ></span>
        <span
          style={{
            background: "linear-gradient(181deg, #FFF 42.57%, #7FFF6B 99.81%)",
          }}
          className="atlwh_Full lg:h-vw190 h-[30%] top-[unset] bottom-0 pointer-events-none"
        ></span>
        <div className="relative z-[2]">
          <Content
            tag={"Perfect-Fit Prices"}
            heading={
              "Personalized price tailored for your company size and needs"
            }
            desc={"Start Your ESG Journey Today"}
          />
          <Details />
          <div className="myContainer flex flex-wrap gap-3 lg:gap-x-vw12 justify-center items-center text-black font-inter font-medium text22">
            <span> Still not sure?</span>{" "}
            <StandardBtn text={"Contact Us"} link={"/"} greenVersion />
            <span>
              for a free consultation to help choose the right plan for you
            </span>
          </div>
        </div>
      </section>
  );
};

export default PricingPage;
