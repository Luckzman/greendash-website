'use client';

import Link from 'next/link';

interface CTAButtonsProps {
  isForProfessionalsPage?: boolean;
  learnMoreText?: string;
  learnMoreHref?: string;
  showLearnMore?: boolean;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

export default function CTAButtons({ 
  isForProfessionalsPage = false,
  learnMoreText = "Learn more",
  learnMoreHref = "#",
  showLearnMore = true,
  buttonText,
  buttonHref,
  className = "",
}: CTAButtonsProps) {
  // Default button text based on page type
  const defaultButtonText = "Get Started";
  const defaultButtonHref = isForProfessionalsPage ? "/getting-started" : "/join-waiting-list";

  return (
    <div className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-6 ${className}`}>
      <Link href={buttonHref || defaultButtonHref}>
        <button style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)' }} className={`w-full sm:w-auto px-6 py-3 sm:py-2 rounded-lg font-inter font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
          isForProfessionalsPage
            ? 'bg-white text-black border border-black hover:bg-gray-200' 
            : 'bg-black hover:bg-gray-800 text-white'
        }`}>
          {buttonText || defaultButtonText}
        </button>
      </Link>
      
      {showLearnMore && (
        <a 
          href={learnMoreHref} 
          className={`font-inter font-medium text-lg transition-colors ${
            isForProfessionalsPage 
              ? 'text-white hover:text-gray-300' 
              : 'text-gray-700 hover:text-gray-900'
          }`}
        >
          {learnMoreText} →
        </a>
      )}
    </div>
  );
}