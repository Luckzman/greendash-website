import React, { useEffect, useState } from "react";

interface ResponsivenessState {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
}

const useResponsivness = (): ResponsivenessState => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = (): void => {
      setIsDesktop(window.innerWidth >= 1081);
      setIsTablet(window.innerWidth < 1081 && window.innerWidth > 600);
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize state on mount

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isDesktop, isTablet, isMobile };
};

export default useResponsivness;
