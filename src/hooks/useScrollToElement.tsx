"use client";

import { useEffect } from 'react';

/**
 * Custom hook to scroll to an element by ID
 * @param elementId - The ID of the element to scroll to
 * @param delay - Delay in milliseconds before scrolling (default: 100)
 * @param enabled - Whether the scroll should be enabled (default: true)
 */
const useScrollToElement = (
  elementId: string, 
  delay: number = 100, 
  enabled: boolean = true
): void => {
  useEffect(() => {
    if (!enabled || !elementId) return;

    const timer = setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [elementId, delay, enabled]);
};

export default useScrollToElement;
