import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const isVideoLoaded = () => {
  const video = document.querySelector(".hero-video"); // Select the video in the header
  // return video && video.readyState >= 4; // Check if the video is ready to play
  return true;
};

function areAllAssetsLoaded() {
  // Check if all fonts are loaded
  const fontsLoaded = document.fonts.status === "loaded";

  // Check if all images are loaded
  const heroImg = document.querySelectorAll(".heroImg");
  const imagesLoaded = Array.from(heroImg).every(
    (img) => img.complete && img.naturalHeight !== 0
  );

  // return fontsLoaded && imagesLoaded;
  return isVideoLoaded() && fontsLoaded && imagesLoaded;
}

const loadAOS = () => {
  // setTimeout(() => {
  Aos.init({
    duration: 800,
    once: true,
  });
  // }, 200);
};

const showUI = () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
};

const onAllAssetsLoaded = () => {
  // if (isSafari()) {
  //   document.body.classList.add("safari");
  // }
  loadAOS();
  showUI();
};

function checkAssetsPeriodically() {
  const intervalId = setInterval(() => {
    if (areAllAssetsLoaded()) {
      clearInterval(intervalId); // Stop the interval when everything is loaded
      onAllAssetsLoaded();
    }
  }, 100); // Check every 100 milliseconds
}
function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

const useAos = () => {
  useEffect(() => {
    // Immediately check assets
    if (areAllAssetsLoaded()) {
      onAllAssetsLoaded(); // All assets are already loaded
    } else {
      checkAssetsPeriodically(); // Start periodic checking if not loaded
    }

    // Cleanup on component unmount
    return () => {
      Aos.refresh(); // Optionally refresh AOS on cleanup
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return null; // No UI, it's a utility component
};

export default useAos;
