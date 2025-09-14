import React from "react";
import Content from "../common/Content";
import Link from "next/link";
import Image from "next/image";

const HelpingHand = () => {
  return (
    <section className="lg:pt-vw50 lg:pb-vw67 py-[60px] sm:py-[120px]">
      <Content
        tag={"Helping Hand"}
        heading={"Don’t Know Where to Start?"}
        desc={`Not sure if your company should be reporting? <br/> Know that you have to report but don’t know where to start?`}
        descWidth={"lg:w-[59.72222222222222vw]"}
      />
      <div className="flex justify-center myContainer lg:mt-vw60 mt-10">
        <div className="flex flex-wrap lg:gap-vw22 gap-1.5 sm:gap-2 border border-[#1F1F1F] lg:rounded-vw12 rounded-[12px] lg:p-vw9 p-1.5 sm:p-2">
          <Link
            data-aos="fade"
            href={"/quizz"}
            className={`w-full lg:w-auto flex justify-center text-center items-center lg:gap-x-vw12 gap-x-2 bg-green lg:rounded-vw8 rounded-[8px] lg:px-vw21 lg:py-vw12 px-6 py-2`}
          >
            <span className="text16 text-white font-medium capitalize">
              Take your FREE Compliance CSRD/VSME Assessement now
            </span>
            <div className="relative sm:block hidden lg:size-vw20 size-6 lg:min-w-vw20 min-w-6">
              <Image
                fill
                alt="chevron"
                src={"/images/icons/white_chevron.svg"}
              />
            </div>
          </Link>
          <Link
            data-aos="fade"
            data-aos-delay="150"
            href={"/"}
            className={`w-full lg:w-auto flex justify-center text-center items-center lg:gap-x-vw12 gap-x-2 bg-black lg:rounded-vw8 rounded-[8px] lg:px-vw21 lg:py-vw12 px-6 py-2`}
          >
            <span className="text16 text-white font-medium capitalize">
              Download your FREE CSRD Essentials Kit
            </span>
            <div className="relative sm:block hidden lg:size-vw20 size-6 lg:min-w-vw20 min-w-6">
              <Image
                fill
                alt="chevron"
                src={"/images/icons/white_chevron.svg"}
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HelpingHand;
