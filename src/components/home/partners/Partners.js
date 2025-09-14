import Content from "@/components/common/Content";
import React from "react";
import Marquee from "react-fast-marquee";
const logos = [
  {
    src: "/images/home/partners/1.svg",
    width: "lg:w-[15.6944444444vw] w-[150px]",
  },
  {
    src: "/images/home/partners/2.svg",
    width: "lg:w-[17.0138888889vw] w-[150px]",
  },
  {
    src: "/images/home/partners/3.svg",
    width: "lg:w-vw105 w-[70px]",
  },
  {
    src: "/images/home/partners/4.svg",
    width: "lg:w-[18.6111111111vw] w-[220px]",
  },
  {
    src: "/images/home/partners/1.svg",
    width: "lg:w-[15.6944444444vw] w-[150px]",
  },
  {
    src: "/images/home/partners/2.svg",
    width: "lg:w-[17.0138888889vw] w-[150px]",
  },
  {
    src: "/images/home/partners/3.svg",
    width: "lg:w-vw105 w-[70px]",
  },
  {
    src: "/images/home/partners/4.svg",
    width: "lg:w-[18.6111111111vw] w-[220px]",
  },
];
const Partners = () => {
  return (
    <section className="lg:pt-vw122 lg:pb-vw30 py-[60px] sm:py-[120px] relative">
      <div className="w-full relative z-[2]">
        <Content
          tag={"Partners"}
          heading={"We are Collaborating with the Best in Town"}
          wrapperWidth={"lg:w-[72.5vw]"}
        />
        <div
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0) 13.92%, rgb(255, 255, 255) 100%)",
          }}
          data-aos="fade"
          className="lg:mt-vw64 mt-10"
        >
          <Marquee>
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt="logo"
                className={`${logo.width} lg:mx-vw60 mx-10`}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Partners;
