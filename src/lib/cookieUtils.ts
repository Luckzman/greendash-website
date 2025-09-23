export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export const COOKIE_CONSENT_KEY = 'cookie-consent';
export const COOKIE_PREFERENCES_KEY = 'cookie-preferences';

export const getCookieConsent = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(COOKIE_CONSENT_KEY);
};

export const getCookiePreferences = (): CookiePreferences | null => {
  if (typeof window === 'undefined') return null;
  
  const preferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);
  if (!preferences) return null;
  
  try {
    return JSON.parse(preferences);
  } catch {
    return null;
  }
};

export const setCookieConsent = (consent: string): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(COOKIE_CONSENT_KEY, consent);
};

export const setCookiePreferences = (preferences: CookiePreferences): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences));
};

export const hasUserConsented = (): boolean => {
  const consent = getCookieConsent();
  return consent === 'accepted' || consent === 'custom';
};

export const clearCookieConsent = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(COOKIE_CONSENT_KEY);
  localStorage.removeItem(COOKIE_PREFERENCES_KEY);
};

// Google Analytics consent management
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const initializeGoogleAnalyticsConsent = (preferences: CookiePreferences): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  // Set initial consent state
  window.gtag('consent', 'default', {
    analytics_storage: preferences.analytics ? 'granted' : 'denied',
    ad_storage: preferences.marketing ? 'granted' : 'denied',
    ad_user_data: preferences.marketing ? 'granted' : 'denied',
    ad_personalization: preferences.marketing ? 'granted' : 'denied',
    functionality_storage: preferences.functional ? 'granted' : 'denied',
    personalization_storage: preferences.functional ? 'granted' : 'denied',
    security_storage: 'granted', // Always granted for security
  });
};

export const updateGoogleAnalyticsConsent = (preferences: CookiePreferences): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('consent', 'update', {
    analytics_storage: preferences.analytics ? 'granted' : 'denied',
    ad_storage: preferences.marketing ? 'granted' : 'denied',
    ad_user_data: preferences.marketing ? 'granted' : 'denied',
    ad_personalization: preferences.marketing ? 'granted' : 'denied',
    functionality_storage: preferences.functional ? 'granted' : 'denied',
    personalization_storage: preferences.functional ? 'granted' : 'denied',
  });
};

// Cookie banner visibility management
export const shouldShowCookieBanner = (): boolean => {
  const consent = getCookieConsent();
  return !consent; // Show banner if no consent has been given
};

// Utility to check if specific cookie type is enabled
export const isCookieTypeEnabled = (type: keyof CookiePreferences): boolean => {
  const preferences = getCookiePreferences();
  if (!preferences) return type === 'essential'; // Only essential cookies by default
  
  return preferences[type];
};
