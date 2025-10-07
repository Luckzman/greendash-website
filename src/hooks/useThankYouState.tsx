import { useRouter } from 'next/navigation';

interface ThankYouData {
  tag: string;
  heading: string;
  desc: string;
  desc2: string;
  desc3?: string;
}

export const useThankYouState = () => {
  const router = useRouter();

  const navigateToThankYou = (data: ThankYouData) => {
    // Store data in sessionStorage for persistence
    sessionStorage.setItem('thankYouData', JSON.stringify(data));
    
    // Navigate to thank you page
    router.push('/thank-you');
  };

  const getThankYouData = (): ThankYouData | null => {
    try {
      const storedData = sessionStorage.getItem('thankYouData');
      if (storedData) {
        return JSON.parse(storedData);
      }
    } catch (error) {
      console.error('Error parsing thank you data:', error);
    }
    return null;
  };

  const clearThankYouData = () => {
    sessionStorage.removeItem('thankYouData');
  };

  return {
    navigateToThankYou,
    getThankYouData,
    clearThankYouData
  };
};
