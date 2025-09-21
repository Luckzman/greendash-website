import Image from "next/image";
import Link from "next/link";
import React from "react";

const navLinks = [
  {
    title: "Solutions",
    links: [
      {
        title: "For SME",
        link: "/",
      },
      {
        title: "For Professionals",
        link: "/for-professionals",
      },
    ],
  },
  {
    title: "Quick Links",
    links: [
      {
        title: "Certification",
        link: "/certification",
      },
      {
        title: "Academy",
        link: "/academy",
      },
    ],
  },
];
const socialLinks = [
  // {
  //   icon: "/images/icons/social-links/insta.svg",
  //   link: "https://www.instagram.com",
  //   alt: "Instagram",
  // },
  {
    icon: "/images/icons/social-links/linkedin.svg",
    link: "https://www.linkedin.com/company/green-dash-ai",
    alt: "LinkedIn",
  },
  // {
  //   icon: "/images/icons/social-links/youtube.svg",
  //   link: "https://www.youtube.com",
  //   alt: "YouTube",
  // },
];

const Footer = () => {
  return (
    <footer className="bg-[#1D1D1D]">
      <div className="lg:px-vw62 lg:pt-vw40 lg:pb-vw57 py-10 myContainer lg:w-full flex justify-between lg:justify-normal flex-wrap lg:gap-x-[43.9583333333vw] gap-6 sm:gap-10 lg:gap-y-0">
        <div className="lg:w-[16.6666666667vw]">
          <Link
            href={"/"}
            className="lg:size-vw40 size-[30px] relative flex justify-center items-center"
          >
            <span
              style={{
                background:
                  "linear-gradient(89deg, #399C17 0.48%, #399C17 24.31%)",
              }}
              className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full lg:h-vw33 h-[23px] blur-[5.5px]"
            ></span>
            <div className="relative z-[2] lg:size-vw38 size-7">
              <Image fill alt="logo" src={"/images/icons/footer_logo.svg"} />
            </div>
          </Link>
          <p className="lg:text14 mtext14 font-inter text-[#F2FFED] lg:mt-vw20 mt-4">
            Sustainability Made Simple for SME
          </p>
        </div>
        <div className="flex lg:gap-x-vw49 gap-x-10 capitalize">
          {navLinks.map((navLink, index) => (
            <div
              key={index}
              className="flex flex-col justify-end lg:gap-y-vw20 gap-y-3 lg:text14 mtext14 font-inter"
            >
              <span className="font-bold text-white">{index === navLinks.length - 1 ? "" : "Solutions"}</span>
              <ul className="flex flex-col lg:gap-y-vw20 gap-y-3 text-7B7B7B">
                {navLink.links.map((link, ind) => (
                  <li key={ind} className="opacity_Hover">
                    <Link href={`${link.link}`}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex lg:gap-x-vw13 gap-x-4 w-full">
          {socialLinks.map((socialLink, index) => (
            <Link
              key={index}
              href={socialLink.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative lg:size-vw24 size-6 block opacity_Hover"
            >
              <Image fill alt={socialLink.alt} src={socialLink.icon} />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-center lg:justify-normal items-center lg:pt-vw20 lg:pb-vw27 pt-6 pb-8 lg:gap-x-[32.5vw] gap-4 lg:px-vw62 myContainer lg:w-full border-[#454A49] border-t text-white lg:text16 lg:leading-vw28 mtext14 font-inter">
        <span>© Copyright 2025. Greendash, LDA. All rights reserved.</span>
        <ul className="flex flex-wrap lg:gap-x-vw8 gap-2 font-light">
          <li className="opacity_Hover">
            <Link href={"/cookie-policy"}>Cookie policy</Link>
          </li>
          <span className="lg:text18 mtext18 font-normal">|</span>
          <li className="opacity_Hover">
            <Link href={"/privacy-policy"}>Privacy policy</Link>
          </li>
          <span className="lg:text18 mtext18 font-normal">|</span>
          <li className="opacity_Hover">
            <Link href={"/subprocessors"}>Subprocessors</Link>
          </li>
          <span className="lg:text18 mtext18 font-normal">|</span>
          <li className="opacity_Hover">
            <Link href={"/legal"}>Legal</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
