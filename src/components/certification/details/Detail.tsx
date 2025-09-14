import React from "react";

import Image from "next/image";
import ChevronBtn from "@/components/common/link-buttons/ChevronBtn";

import { DetailProps } from "./Details";

const Detail = ({ detail }: { detail: DetailProps }) => {
  return (
    <div
      style={{
        boxShadow: `${"0 5px 30px 0 rgba(25, 33, 61, 0.06)"}`,
        border: `1px solid #F1F2F9`,
        background: `#FFF`,
      }}
      className="whitespace-normal flex flex-col lg:gap-y-vw36 gap-y-5 lg:w-[26.875vw] lg:min-w-[26.875vw] w-[92%] min-w-[92%] sm:w-[76%] sm:min-w-[76%] font-inter lg:p-vw36 px-5 py-[30px] lg:rounded-vw24 rounded-[24px]"
    >
      <div className="flex flex-col lg:gap-y-vw12 gap-y-3">
        <h5
          className={`lg:text24 mtext20 font-semibold text-170F49 capitalize`}
        >
          {detail.title}
        </h5>
        <p
          className={`font-medium lg:text14 lg:leading-vw21 mtext14 text-514F6E`}
        >
          {detail.desc}
        </p>
      </div>
      <span className="lg:text48 mtext24 font-semibold text-[#170F49]">
        {detail.price}
      </span>
      <div
        style={{
          background:
            "linear-gradient(151deg, var(--Colors-Neutrals-White, #FFF) -62.65%, var(--Colors-Neutrals-Neutral-200, #FBFBFE) 83.01%)",
          boxShadow:
            "0 3px 6px 0 rgba(7, 0, 110, 0.03), 0 -2px 2px 0 rgba(27, 35, 85, 0.07) inset, 0 4px 6px 0 rgba(255, 255, 255, 0.40) inset",
        }}
        className="flex justify-center items-center lg:mt-vw6 lg:px-vw17 lg:py-vw11 py-1.5 px-4 w-full border border-[#D9DBE9] lg:rounded-vw12 rounded-[12px]"
      >
        <ChevronBtn text={"Get started"} link={detail.link} colorInherit={"#170F49"} />
      </div>
      <span className={`bg-[#D9DBE9] h-[1px] w-full block`}></span>
      <div>
        <h6 className={`text16 font-medium text-170F49`}>
          {" "}
          {detail.featuresTitle}
        </h6>
        <ul
          className={`text16 text-6F6C8F flex flex-col lg:gap-y-vw28 gap-y-3 lg:mt-vw20 mt-4`}
        >
          {detail.features.map((feature, index) => (
            <li key={index} className="flex items-center lg:gap-x-vw8 gap-x-2">
              <div className="relative lg:size-vw18 lg:min-w-vw18 size-4 min-w-4">
                {/* {detail.active ? (
                  <Image
                    fill
                    alt="check"
                    src={"/images/icons/pricing_check_white.svg"}
                  />
                ) : ( */}
                  <Image
                    fill
                    alt="check"
                    src={"/images/icons/pricing_check.svg"}
                  />
                {/* )} */}
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Detail;
