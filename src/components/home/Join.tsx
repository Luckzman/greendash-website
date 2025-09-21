import React from "react";
import Content from "../common/Content";
import StandardBtn from "../common/link-buttons/StandardBtn";

interface JoinProps {
  isForProfessionalsPage?: boolean;
}

const Join = ({ isForProfessionalsPage = false }: JoinProps) => {
  return (
    <section className="lg:py-vw132 py-[60px] sm:py-[120px] relative">
      <span
        className="atlwh_Full"
        style={{
          background: "linear-gradient(181deg, #FFF 42.57%, #7FFF6B 99.81%)",
        }}
      ></span>
      <div className="w-full relative z-[2] flex flex-col lg:gap-y-vw40 gap-y-6 items-center">
        <Content
          heading={"Join the Waiting List today"}
          desc={`Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.`}
          descWidth={"lg:w-[38.75vw]"}
        />
        <StandardBtn text={"Get Started"} link={isForProfessionalsPage ? "/getting-started" : "/join-waiting-list"} hasShadow={false} />
      </div>
    </section>
  );
};

export default Join;
