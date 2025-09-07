// Example usage of the CTA component

import CTA from './CTA';

// Example 1: Default usage (same as Hero component)
<CTA 
  isForProfessionalsPage={false}
  learnMoreText="Learn more"
  learnMoreHref="#"
  showLearnMore={true}
/>

// Example 2: Custom learn more text
<CTA 
  isForProfessionalsPage={true}
  learnMoreText="View Documentation"
  learnMoreHref="/docs"
  showLearnMore={true}
/>

// Example 3: Hide learn more link (only show button)
<CTA 
  isForProfessionalsPage={false}
  showLearnMore={false}
/>

// Example 4: Custom button text and link
<CTA 
  isForProfessionalsPage={false}
  buttonText="Sign Up Now"
  buttonHref="/signup"
  learnMoreText="Read our FAQ"
  learnMoreHref="/faq"
  showLearnMore={true}
/>

// Example 5: Professional page with custom styling
<CTA 
  isForProfessionalsPage={true}
  learnMoreText="Schedule Demo"
  learnMoreHref="/demo"
  showLearnMore={true}
  className="mt-8"
/>

