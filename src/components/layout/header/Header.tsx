"use client";
import StandardBtn from "@/components/common/link-buttons/StandardBtn";
import useAos from "@/hooks/useAos";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import OutlineBtn from "@/components/common/link-buttons/OutlineBtn";

const Header = () => {
  const dropDown = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const pathname = usePathname();

  // Determine if we're on the for-professionals page
  const isForProfessionalsPage = pathname === '/for-professionals' || pathname === '/professional-contact-us' || pathname === '/getting-started';

  useAos();
  function toggleSidebar() {
    if (window.innerWidth < 1024) {
      const body = document.querySelector("body");
      const sideBar = document.querySelector(".sideBar");
      const menu = document.querySelector(".menu");
      const header = document.querySelector("header");
      body?.classList.toggle("active");
      header?.classList.toggle("header_bg");
      sideBar?.classList.toggle("active");
      menu?.classList.toggle("active");
    }
  }
  function toggleDropDown() {
    if (window.innerWidth < 1024) {
      if (!dropDown.current) return;

      if (!open && dropDown.current) {
        // open: set height to the ul's content height
        dropDown.current.style.maxHeight = `${dropDown.current.scrollHeight}px`;
        setOpen(true);
      } else {
        // close: set back to 0
        dropDown.current.style.maxHeight = "0px";
        setOpen(false);
      }
    }
  }
  const navLinks = [
    {
      link: "",
      title: "platform",
      dropDown: [
        {
          link: "#feature",
          title: "Features",
        },
        {
          link: "/pricing",
          title: "Pricing",
        },
      ],
    },
    {
      link: "/academy",
      title: "Academy",
    },
    {
      link: "/certification",
      title: "Certification",
    },
  ];

  return (
    <>
      <header className={`absolute top-0 left-0 w-full ${isForProfessionalsPage ? 'bg-[#131313]' : 'bg-[#EEFFEC]'} header_bg z-10`}>
        <div className="flex items-center justify-between lg:px-vw50 lg:py-vw20 px-5 py-10">
          <Link
            href={"/"}
            className="lg:w-vw138 lg:h-vw37 w-[120px] h-[33px] sm:w-[210px] sm:h-[57px] relative z-[2]"
          >
            <Image fill alt="logo" src={isForProfessionalsPage ? "/green-dash-light-logo.svg" : "/images/icons/logo.svg"} />
          </Link>
          <nav className="sideBar absolute flex flex-wrap items-center lg:gap-x-vw24 inset-0 w-full fullVhcm fullSvhcm lg:static lg:!size-[unset] px-5 pt-36 pb-5 lg:p-0">
            <ul className="flex lg:flex-row flex-col gap-y-6 lg:items-center lg:gap-x-vw24 capitalize w-full lg:w-auto">
              {navLinks.map((navLink, index) => (
                <li
                  key={index}
                  className="lg:text16 mtext18 lg:py-vw8 font-inter ls016 group relative"
                >
                  <div
                    onClick={toggleDropDown}
                    className={`flex cursor-pointer lg:gap-x-vw4 gap-x-4 items-center  transition ${
                      isForProfessionalsPage 
                        ? 'text-white hover:text-gray-300' 
                        : 'lg:text-black/60 lg:group-hover:text-black text-black'
                    }`}
                  >
                    {navLink.dropDown ? (
                      <button className="capitalize">{navLink.title}</button>
                    ) : (
                      <Link onClick={toggleSidebar} href={`${navLink.link}`}>
                        {navLink.title}
                      </Link>
                    )}
                    {navLink.dropDown && (
                      <div
                        className={`${
                          open ? "-scale-100" : "scale-100"
                        } relative lg:size-vw20 size-4 lg:group-hover:opacity-100 lg:opacity-60 opacity-100 lg:group-hover:-scale-y-100 transition`}
                      >
                        <Image
                          fill
                          alt="chevron"
                          src={"/images/icons/header_dropdown_chevron.svg"}
                        />
                      </div>
                    )}
                  </div>
                  {navLink.dropDown && (
                    <div
                      ref={dropDown}
                      style={{ maxHeight: "0px" }}
                      className="lg:w-vw134 lg:absolute lg:top-vw40 lg:!max-h-[unset] lg:opacity-0 lg:pointer-events-none lg:group-hover:pointer-events-auto lg:scale-95 lg:group-hover:opacity-100 lg:group-hover:scale-100 lg:origin-bottom overflow-hidden lg:overflow-visible transition-all duration-500 lg:duration-300"
                    >
                      <ul className="flex flex-col font-dm_sans font-medium tracking-normal border border-[#818181] bg-[rgba(255,255,255)] lg:rounded-vw8 rounded-[8px]">
                        {navLink.dropDown.map((dropDownLink, ind) => (
                          <li
                            onClick={() => {
                              toggleSidebar();
                              toggleDropDown();
                            }}
                            className="lg:w-vw104 lg:mx-auto lg:py-vw9 border-b border-[#DEDEDE] last:border-0 lg:px-0 p-3 lg:text-black/60 lg:hover:text-black text-black transition flex lg:justify-center"
                            key={ind}
                          >
                            {" "}
                            <Link
                              href={`${dropDownLink.link}`}
                              className="w-full lg:text-center"
                            >
                              {dropDownLink.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
              <li className="lg:text16 mtext18 lg:py-vw8 font-inter ls016 group relative">
                <div className="flex cursor-pointer lg:gap-x-vw4 gap-x-4 items-center lg:text-black/60 lg:group-hover:text-black text-black transition">
                  <div className="relative">
                    <Link 
                      href={isForProfessionalsPage ? "/" : "/for-professionals"} 
                      onClick={() => toggleSidebar()}
                      className={`block font-inter py-2 ${
                        isForProfessionalsPage 
                        ? 'text-white hover:text-gray-300' 
                        : 'lg:text-black/60 lg:group-hover:text-black text-black'
                      }`}
                    >
                      {isForProfessionalsPage ? "For SMEs" : "For Professionals"}
                    </Link>
                    {/* <div className="group-hover:opacity-0 opacity-100 transition-all duration-5">
                      For Professionals
                    </div>
                    <span className="group-hover:opacity-100 opacity-0 transition-all duration-500 absolute size-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                      Coming soon
                    </span> */}
                  </div>
                </div>
              </li>
            </ul>
            <div className="flex flex-wrap justify-between lg:items-center lg:gap-x-vw24 gap-4 w-full lg:w-auto">
              <div onClick={toggleSidebar}>
                <StandardBtn text="contact Us" link={isForProfessionalsPage ? '/professional-contact-us' : "/contact-us"} greenVersion />
              </div>

              <div onClick={toggleSidebar}>
                {/* <Link href={isForProfessionalsPage ? '/getting-started' :`/join-waiting-list`}>
                  <button className={`px-4 py-1.5 rounded-lg font-inter font-semibold transition-all duration-200 transform hover:-translate-y-0.5 ${
                    isForProfessionalsPage 
                      ? 'bg-white text-black hover:bg-gray-200' 
                      : 'bg-black text-white hover:bg-gray-500'
                  }`} style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)' }}>
                    Get Started
                  </button>
                </Link> */}
                <OutlineBtn text="Get Started" link={isForProfessionalsPage ? '/getting-started' :`/join-waiting-list`} isForProfessionalsPage={isForProfessionalsPage} />
              </div>
            </div>
          </nav>
          <div
            onClick={toggleSidebar}
            className="block lg:hidden menu min-w-[20px] h-[20px] sm:w-[4vw] sm:h-[4vw] cursor-pointer z-[2] top-[4px]  "
          >
            <span className="top-0"></span>
            <span className="top-[30%]"></span>
            <span className="top-[60%]"></span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
