import React, { useEffect } from "react";

const useScrollProgress = (): void => {
  useEffect(() => {
    const offset = 400;
    const circleContainer = document.querySelector(".circle-container") as HTMLElement;
    const circlePath = document.querySelector(".circle-container path") as SVGPathElement;
    
    if (!circleContainer || !circlePath) return;
    
    const pathLength = circlePath.getTotalLength();
    circlePath.style.transition = circlePath.style.WebkitTransition = "none";
    circlePath.style.strokeDasharray = pathLength.toString();
    circlePath.style.strokeDashoffset = pathLength.toString();
    circlePath.getBoundingClientRect();
    circlePath.style.transition = circlePath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";

    const updateLoader = (): void => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const height = docHeight - winHeight;
      const progress = pathLength - (scrollTop * pathLength) / height;
      circlePath.style.strokeDashoffset = progress.toString();
      
      const cta = document.querySelector(".btn__Global") as HTMLElement;
      if (cta) {
        if (scrollTop > window.innerHeight) {
          cta.classList.add("show");
        } else {
          cta.classList.remove("show");
        }
      }

      if (scrollTop > offset) {
        circleContainer.classList.add("active");
      } else {
        circleContainer.classList.remove("active");
      }
    };

    circleContainer.onclick = function (): void {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.onscroll = (): void => {
      updateLoader();
    };

    updateLoader();
  }, []);
};

export default useScrollProgress;
