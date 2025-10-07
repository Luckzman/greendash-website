import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import AOS from "aos";
import "aos/dist/aos.css";

const useLenisScroll = (): void => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Initialize Lenis
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1, // Adjust for smoothness (default is 0.1)
    });

    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 🔹 Fix AOS: Refresh animations when scrolling
    lenis.on("scroll", () => {
      AOS.refreshHard();
    });

    // Initialize AOS
    AOS.init({ duration: 800, once: true });

    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useLenisScroll;
