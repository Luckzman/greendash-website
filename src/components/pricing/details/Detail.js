"use client";

import React, { useState } from "react";

import Image from "next/image";
import ChevronBtn from "@/components/common/link-buttons/ChevronBtn";
import Link from "next/link";
const Detail = ({ detail, index, details }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine if card should appear active (either default active or on hover)
  const isActive = detail.active || isHovered;
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: `${
          isActive
            ? "0 8px 13px 0 rgba(74, 58, 255, 0.23), 0 -2px 2px 0 rgba(0, 66, 137, 0.15) inset, 0 1px 1px 0 rgba(255, 255, 255, 0.10) inset, 0 3px 4px 0 rgba(223, 238, 255, 0.10) inset"
            : "0 5px 30px 0 rgba(25, 33, 61, 0.06)"
        }`,
        border: `1px solid ${isActive ? "#D2CEFF" : "#F1F2F9"}`,
        background: `${
          isActive ? "linear-gradient(0deg, #000 0%, #000 100%)" : "white"
        }`,
      }}
      className="whitespace-normal flex flex-col lg:gap-y-vw36 gap-y-5 lg:w-[20vw] lg:min-w-[20vw] w-[92%] min-w-[92%] sm:w-[76%] sm:min-w-[76%] font-inter lg:p-vw36 px-5 py-[30px] lg:rounded-vw24 rounded-[24px] h-full transition-all duration-300 cursor-pointer"
    >
      {/* <div className=" flex flex-col"> */}
        <div className="flex flex-col lg:gap-y-vw12 gap-y-3">
          <h5
            className={`lg:text24 mtext20 font-semibold ${
              isActive ? "text-white" : "text-170F49"
            } capitalize`}
          >
            {detail.title}
          </h5>
          <p
            className={`font-medium lg:text14 lg:leading-vw21 mtext14 ${
              isActive ? "text-[#F1F2F9]" : "text-514F6E"
            }`}
          >
            {detail.desc}
          </p>
        </div>
        <div
          style={{
            background:
              "linear-gradient(151deg, var(--Colors-Neutrals-White, #FFF) -62.65%, var(--Colors-Neutrals-Neutral-200, #FBFBFE) 83.01%)",
            boxShadow:
              "0 3px 6px 0 rgba(7, 0, 110, 0.03), 0 -2px 2px 0 rgba(27, 35, 85, 0.07) inset, 0 4px 6px 0 rgba(255, 255, 255, 0.40) inset",
          }}
          className="flex justify-center items-center lg:mt-vw6 lg:px-vw17 lg:py-vw11 py-1.5 px-4 w-full border border-[#D9DBE9] lg:rounded-vw12 rounded-[12px]"
        >
          {index === details.length - 1 ? (
            <Link
              data-aos="fade"
              data-aos-delay="100"
              href={"/"}
              className={`flex items-center lg:gap-x-vw6 gap-x-1.5 capitalize lg:rounded-vw10 rounded-[10px] lg:text16 mtext18 ls032 font-inter font-medium transition`}
            >
              <div className="relative lg:size-vw16 size-4">
                <Image
                  fill
                  alt="chevron"
                  src={"/images/icons/pricing_email.svg"}
                />
              </div>
              Contact us
            </Link>
          ) : (
            <ChevronBtn
              text={"Get started"}
              link={"/"}
              colorInherit={"#170F49"}
            />
          )}
        </div>
        <span
          className={`${
            isActive ? "bg-[#9E97FF]" : "bg-[#D9DBE9]"
          } h-[1px] w-full block`}
        ></span>
      {/* </div> */}
      <h6
        className={`text16 font-medium ${
          isActive ? "text-white" : "text-170F49"
        }`}
      >
        {" "}
        {detail.featuresTitle}
      </h6>
      <ul
        className={`text16 ${
          isActive ? "text-white" : "text-6F6C8F"
        } flex flex-col lg:gap-y-vw28 gap-y-3 flex-1`}
      >
        {detail.features.map((feature, index) => (
          <li key={index} className="flex items-center lg:gap-x-vw8 gap-x-2">
            <div className="relative lg:size-vw18 lg:min-w-vw18 size-4 min-w-4">
              {isActive ? (
                <Image
                  fill
                  alt="check"
                  src={"/images/icons/pricing_check_white.svg"}
                />
              ) : (
                <Image
                  fill
                  alt="check"
                  src={"/images/icons/pricing_check.svg"}
                />
              )}
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <span
        className={`${
          isActive ? "bg-[#9E97FF]" : "bg-[#D9DBE9]"
        } h-[1px] w-full block`}
      ></span>
      <span
        className={`text16 ${isActive ? "text-white" : "text-6F6C8F"}`}
      >
        {detail.overview}
      </span>
    </div>
  );
};

export default Detail;
