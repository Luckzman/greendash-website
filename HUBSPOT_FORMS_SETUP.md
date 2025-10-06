# HubSpot Native Form Tracking Setup

This guide explains how to use HubSpot's native form tracking instead of API-based submissions for better analytics and automatic data capture.

## 🎯 **Benefits of Native HubSpot Forms**

- ✅ **Automatic tracking** - No API calls needed
- ✅ **Better analytics** - Full HubSpot reporting
- ✅ **Lead scoring** - Automatic lead qualification
- ✅ **Workflow triggers** - Automatic follow-up sequences
- ✅ **Form analytics** - Conversion rates, drop-off points
- ✅ **A/B testing** - Built-in form optimization
- ✅ **Mobile responsive** - Automatically optimized

## 📋 **Setup Steps**

### **Step 1: Create Forms in HubSpot**

1. **Go to HubSpot Dashboard**
   - Navigate to Marketing → Lead Capture → Forms
   - Click "Create form"

2. **Create Contact Us Form**
   - Form name: "Contact Us Form"
   - Add fields:
     - First Name (required)
     - Last Name (required)
     - Company (required)
     - Email (required)
     - Phone Number
     - Job Title
     - Industry
     - Number of Employees
     - Message
   - Copy the Form ID

3. **Create Join Waiting List Form**
   - Form name: "Join Waiting List"
   - Add fields:
     - First Name (required)
     - Last Name (required)
     - Company (required)
     - Email (required)
     - Phone Number
     - Industry
     - Number of Employees
   - Copy the Form ID

4. **Create Additional Forms** (if needed)
   - Essential Kit Form
   - ESG Maturity Certification Form
   - CSRD/VSME Certification Form

### **Step 2: Update Environment Variables**

Add these to your `.env.local` file:

```bash
# HubSpot Portal ID
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=146725220

# Form IDs (replace with your actual form IDs)
NEXT_PUBLIC_CONTACT_US_FORM_ID=your_contact_us_form_id_here
NEXT_PUBLIC_JOIN_WAITING_LIST_FORM_ID=your_join_waiting_list_form_id_here
NEXT_PUBLIC_ESSENTIAL_KIT_FORM_ID=your_essential_kit_form_id_here
NEXT_PUBLIC_ESG_MATURITY_FORM_ID=your_esg_maturity_form_id_here
NEXT_PUBLIC_CSRD_VSME_FORM_ID=your_csrd_vsme_form_id_here
```

### **Step 3: Replace Form Components**

Replace your existing form components with the new HubSpot versions:

**For Contact Us forms:**
```tsx
// Replace this:
import ContactUs from '@/components/ContactUs';

// With this:
import ContactUsHubSpot from '@/components/ContactUsHubSpot';
```

**For Join Waiting List forms:**
```tsx
// Replace this:
import JoinWaitingListForm from '@/components/JoinWaitingListForm';

// With this:
import JoinWaitingListFormHubSpot from '@/components/JoinWaitingListFormHubSpot';
```

### **Step 4: Update Page Components**

**Contact Us Page:**
```tsx
// src/app/contact-us/page.tsx
import ContactUsHubSpot from '@/components/ContactUsHubSpot';

export default function ContactUsPage() {
  return <ContactUsHubSpot />;
}
```

**Join Waiting List Page:**
```tsx
// src/app/join-waiting-list/page.tsx
import JoinWaitingListFormHubSpot from '@/components/JoinWaitingListFormHubSpot';

export default function JoinWaitingListPage() {
  return <JoinWaitingListFormHubSpot />;
}
```

**Essential Kit Page:**
```tsx
// src/app/essential-kit/page.tsx
import JoinWaitingListFormHubSpot from '@/components/JoinWaitingListFormHubSpot';

export default function EssentialKitPage() {
  return <JoinWaitingListFormHubSpot essentialKit={true} />;
}
```

## 🎨 **Customization Options**

### **Form Styling**

The HubSpot forms can be customized using CSS classes:

```tsx
<HubSpotForm
  portalId="146725220"
  formId="your-form-id"
  cssClass="custom-form-style"
  submitButtonClass="custom-submit-button"
  errorClass="custom-error-style"
  successMessageClass="custom-success-style"
/>
```

### **Custom CSS**

Add custom styles to your global CSS:

```css
/* Custom form styling */
.custom-form-style .hs-form {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.custom-submit-button {
  background: #2d5a27 !important;
  border: none !important;
  border-radius: 8px !important;
  padding: 12px 24px !important;
  font-weight: 600 !important;
  color: white !important;
}

.custom-submit-button:hover {
  background: #1e3d1a !important;
}
```

## 🔧 **Advanced Configuration**

### **Form Callbacks**

```tsx
const handleFormSubmit = () => {
  console.log('Form submitted');
  // Track custom events
};

const handleFormSubmitted = () => {
  console.log('Form submission completed');
  // Show success message
  // Redirect user
  // Download files
};
```

### **Multiple Forms on Same Page**

```tsx
<HubSpotForm
  portalId="146725220"
  formId="contact-form-id"
  target="contact-form"
  onFormSubmitted={() => showSuccessMessage('Contact form submitted!')}
/>

<HubSpotForm
  portalId="146725220"
  formId="newsletter-form-id"
  target="newsletter-form"
  onFormSubmitted={() => showSuccessMessage('Newsletter subscription successful!')}
/>
```

## 📊 **Analytics & Tracking**

### **HubSpot Analytics**

Once forms are set up, you'll automatically get:

- **Form submissions** - Real-time submission tracking
- **Conversion rates** - Form completion analytics
- **Lead sources** - Traffic source attribution
- **Form performance** - Drop-off analysis
- **A/B testing** - Form optimization insights

### **Custom Event Tracking**

```tsx
const handleFormSubmitted = () => {
  // Track custom events
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'engagement',
      event_label: 'contact_form'
    });
  }
  
  // Show success message
  showToast('success', 'Thank you! Your message has been sent.');
};
```

## 🚀 **Migration Checklist**

- [ ] Create forms in HubSpot dashboard
- [ ] Copy form IDs to environment variables
- [ ] Replace form components with HubSpot versions
- [ ] Update page imports
- [ ] Test form submissions
- [ ] Verify data appears in HubSpot
- [ ] Set up form analytics
- [ ] Configure lead scoring rules
- [ ] Set up workflow triggers

## 🔍 **Troubleshooting**

### **Form Not Loading**

1. Check form ID is correct
2. Verify form is published in HubSpot
3. Check browser console for errors
4. Ensure HubSpot script is loaded

### **Styling Issues**

1. Use `cssClass` prop for custom styling
2. Check CSS specificity
3. Use `!important` for overriding HubSpot styles
4. Test on different screen sizes

### **Data Not Appearing**

1. Check form field mapping in HubSpot
2. Verify form is published
3. Check HubSpot contact records
4. Review form submission logs

## 📞 **Support**

For HubSpot-specific issues:
- HubSpot Knowledge Base
- HubSpot Community
- HubSpot Support

For implementation questions:
- Check the component documentation
- Review the example implementations
- Test with HubSpot's form testing tools

---

**Next Steps:** After setting up native HubSpot forms, you can remove the API-based submission code and email verification system if you prefer the simpler native approach.
