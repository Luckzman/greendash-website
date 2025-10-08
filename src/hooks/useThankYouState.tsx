import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

interface ThankYouData {
  tag: string;
  heading: string;
  desc: string;
  desc2: string;
  desc3?: string;
  isForProfessionalsPage?: boolean;
}

export const useThankYouState = () => {
  const router = useRouter();

  const navigateToThankYou = useCallback((data: ThankYouData) => {
    // Store data in sessionStorage for persistence
    sessionStorage.setItem('thankYouData', JSON.stringify(data));

    // Navigate to thank you page (both regular and professionals use the same page)
    router.push('/thank-you');
  }, [router]);

  const getThankYouData = useCallback((): ThankYouData | null => {
    try {
      const storedData = sessionStorage.getItem('thankYouData');
      if (storedData) {
        return JSON.parse(storedData);
      }
    } catch (error) {
      console.error('Error parsing thank you data:', error);
    }
    return null;
  }, []);

  const clearThankYouData = useCallback(() => {
    sessionStorage.removeItem('thankYouData');
  }, []);

  return {
    navigateToThankYou,
    getThankYouData,
    clearThankYouData
  };
};
