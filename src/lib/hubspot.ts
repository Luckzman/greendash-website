// HubSpot API utility functions

export interface HubSpotContact {
  firstname?: string;
  lastname?: string;
  company?: string;
  email?: string;
  phone?: string;
  jobtitle?: string;
  industry?: string;
  numberofemployees?: string;
  esg_maturity_assessment?: string;
  csrd_vsme_assessment?: string;
  contact_form_type?: string;
  lead_source?: string;
  lead_status?: string;
}

export interface FormSubmissionData {
  formType: string;
  formData: Record<string, string | boolean>;
}

export interface FormData {
  firstName?: string;
  lastName?: string;
  company?: string;
  companyEmail?: string;
  email?: string;
  phoneNumber?: string;
  jobTitle?: string;
  industry?: string;
  numberofemployees?: string;
  consent?: boolean;
  // lead_status?: string | boolean;
  [key: string]: string | boolean | undefined;
}

export interface HubSpotResponse {
  success: boolean;
  message?: string;
  error?: string;
  contactId?: string;
}

// Submit form data to HubSpot
export async function submitFormToHubSpot(formType: string, formData: FormData): Promise<HubSpotResponse> {
  try {
    const response = await fetch('/api/hubspot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formType,
        formData
      })
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit form');
    }

    return {
      success: true,
      message: result.message,
      contactId: result.contactId
    };

  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

// Validate email format
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate phone number format
export function validatePhone(phone: string): boolean {
  const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// Format form data for HubSpot
export function formatFormDataForHubSpot(formData: FormData, formType: string): HubSpotContact {
  const contact: HubSpotContact = {};

  // Map basic fields
  if (formData.firstName) contact.firstname = formData.firstName;
  if (formData.lastName) contact.lastname = formData.lastName;
  if (formData.company) contact.company = formData.company;
  if (formData.companyEmail || formData.email) contact.email = formData.companyEmail || formData.email;
  if (formData.phoneNumber) contact.phone = formData.phoneNumber;
  if (formData.jobTitle) contact.jobtitle = formData.jobTitle;
  if (formData.industry) contact.industry = formData.industry;
  if (formData.numberofemployees) contact.numberofemployees = formData.numberofemployees;

  // Add form-specific properties
  contact.contact_form_type = getFormTypeLabel(formType);
  contact.lead_source = 'Website Form';
  // contact.lead_status = 'New';

  // Add assessment-specific properties
  if (formType === 'compliant-assessment') {
    contact.csrd_vsme_assessment = 'Requested';
  }
  if (formType === 'esg-maturity-certification') {
    contact.esg_maturity_assessment = 'Requested';
  }

  return contact;
}

// Get human-readable form type label
function getFormTypeLabel(formType: string): string {
  const formTypes: { [key: string]: string } = {
    'join-waiting-list': 'Join Waiting List',
    'contact-us': 'Contact Us',
    'compliant-assessment': 'CSRD/VSME Assessment',
    'esg-maturity-certification': 'ESG Maturity Certification',
    'csrd-vsme-certification': 'CSRD/VSME Certification'
  };

  return formTypes[formType] || formType;
}

// Handle form submission with loading state and error handling
export async function handleFormSubmission(
  formType: string,
  formData: FormData,
  onSuccess?: (result: HubSpotResponse) => void,
  onError?: (error: string) => void,
  onLoading?: (loading: boolean) => void
): Promise<void> {
  try {
    if (onLoading) onLoading(true);

    const result = await submitFormToHubSpot(formType, formData);

    if (result.success) {
      if (onSuccess) onSuccess(result);
    } else {
      if (onError) onError(result.error || 'Form submission failed');
    }

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    if (onError) onError(errorMessage);
  } finally {
    if (onLoading) onLoading(false);
  }
}
