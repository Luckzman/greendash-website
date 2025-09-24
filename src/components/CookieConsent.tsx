'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  CookiePreferences, 
  getCookiePreferences, 
  setCookieConsent, 
  setCookiePreferences,
  initializeGoogleAnalyticsConsent,
  updateGoogleAnalyticsConsent,
  shouldShowCookieBanner
} from '@/lib/cookieUtils';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Essential cookies are always enabled
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    if (shouldShowCookieBanner()) {
      setShowConsent(true);
    } else {
      // Load saved preferences
      const savedPreferences = getCookiePreferences();
      if (savedPreferences) {
        setPreferences(savedPreferences);
        // Initialize Google Analytics with saved preferences
        initializeGoogleAnalyticsConsent(savedPreferences);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    
    setCookieConsent('accepted');
    setCookiePreferences(allAccepted);
    setPreferences(allAccepted);
    setShowConsent(false);
    setShowPreferences(false);
    
    // Enable all cookies
    updateGoogleAnalyticsConsent(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyEssential: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    
    setCookieConsent('rejected');
    setCookiePreferences(onlyEssential);
    setPreferences(onlyEssential);
    setShowConsent(false);
    setShowPreferences(false);
    
    // Disable non-essential cookies
    updateGoogleAnalyticsConsent(onlyEssential);
  };

  const handleSavePreferences = () => {
    setCookieConsent('custom');
    setCookiePreferences(preferences);
    setShowConsent(false);
    setShowPreferences(false);
    
    // Apply preferences
    updateGoogleAnalyticsConsent(preferences);
  };

  const togglePreference = (type: keyof CookiePreferences) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };


  if (!showConsent) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" />
      
      {/* Cookie Consent Modal */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                We use cookies to enhance your experience
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                We use cookies to improve your browsing experience, serve personalized content, and analyze our traffic. 
                By clicking &quot;Accept All&quot;, you consent to our use of cookies. You can also customize your preferences 
                or learn more in our{' '}
                <Link href="/cookie-policy" className="text-[#6FE451] hover:text-green-700 underline">
                  Cookie Policy
                </Link>
                .
              </p>
              
              {/* Cookie Types */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Essential</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">Analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600">Marketing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-600">Functional</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 lg:ml-8">
              <button
                onClick={() => setShowPreferences(!showPreferences)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Customize
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2 text-sm font-medium text-white bg-[#6FE451] hover:bg-green-600 rounded-lg transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Cookie Preferences
                </h2>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Essential Cookies */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <h3 className="font-medium text-gray-900">Essential Cookies</h3>
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    Always Active
                  </div>
                </div>
                <p className="text-sm text-gray-600 ml-6">
                  These cookies are necessary for the website to function and cannot be switched off. 
                  They are usually only set in response to actions made by you which amount to a request for services.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <h3 className="font-medium text-gray-900">Analytics Cookies</h3>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={() => togglePreference('analytics')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6FE451]"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-600 ml-6">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <h3 className="font-medium text-gray-900">Marketing Cookies</h3>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={() => togglePreference('marketing')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6FE451]"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-600 ml-6">
                  These cookies may be set through our site by our advertising partners to build a profile of your interests.
                </p>
              </div>

              {/* Functional Cookies */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <h3 className="font-medium text-gray-900">Functional Cookies</h3>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={() => togglePreference('functional')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6FE451]"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-600 ml-6">
                  These cookies enable the website to provide enhanced functionality and personalization.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-2 text-sm font-medium text-white bg-[#6FE451] hover:bg-green-600 rounded-lg transition-colors"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
