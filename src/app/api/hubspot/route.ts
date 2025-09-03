import { NextRequest, NextResponse } from 'next/server';

// HubSpot API configuration
const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;
const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID;
const JOIN_WAITING_LIST_FORM_ID = process.env.JOIN_WAITING_LIST_FORM_ID;
const CONTACT_US_FORM_ID = process.env.CONTACT_US_FORM_ID;

// HubSpot API endpoints
const HUBSPOT_BASE_URL = 'https://api.hubapi.com';
const CONTACTS_ENDPOINT = `${HUBSPOT_BASE_URL}/crm/v3/objects/contacts`;
const FORMS_ENDPOINT = `${HUBSPOT_BASE_URL}/forms/v2/forms/${JOIN_WAITING_LIST_FORM_ID}/submissions`;
const CONTACT_US_FORMS_ENDPOINT = `${HUBSPOT_BASE_URL}/forms/v2/forms/${CONTACT_US_FORM_ID}/submissions`;

// Contact properties mapping
const CONTACT_PROPERTIES = {
  firstname: 'firstname',
  lastname: 'lastname',
  company: 'company',
  email: 'email',
  phone: 'phone',
  jobtitle: 'jobtitle',
  industry: 'industry',
  numberofemployees: 'numberofemployees',
  // Custom properties for your specific needs
  // esg_maturity_assessment: 'esg_maturity_assessment',
  // csrd_vsme_assessment: 'csrd_vsme_assessment',
  contact_form_type: 'contact_form_type',
  lead_source: 'lead_source',
  message: 'question',
  // lead_status: 'lead_status'
};

// Form type mapping
const FORM_TYPES = {
  'join-waiting-list': 'Join Waiting List',
  'contact-us': 'Contact Us',
  'compliant-assessment': 'CSRD/VSME Assessment',
  'esg-maturity-certification': 'ESG Maturity Certification',
  'csrd-vsme-certification': 'CSRD/VSME Certification'
};

interface FormData {
  firstName?: string;
  lastName?: string;
  company?: string;
  companyEmail?: string;
  email?: string;
  phoneNumber?: string;
  jobTitle?: string;
  industry?: string;
  numberofemployees?: string;
  message?: string;
  consent?: boolean;
  [key: string]: string | boolean | undefined;
}

interface RequestBody {
  formType: string;
  formData: FormData;
}

export async function POST(request: NextRequest) {
  try {
    // Validate environment variables
    if (!HUBSPOT_API_KEY || !HUBSPOT_PORTAL_ID || !JOIN_WAITING_LIST_FORM_ID) {
      console.error('Missing HubSpot environment variables');
      return NextResponse.json(
        { error: 'HubSpot configuration missing' },
        { status: 500 }
      );
    }

    // Parse request body
    const body: RequestBody = await request.json();
    const { formType, formData } = body;

    if (!formType || !formData) {
      return NextResponse.json(
        { error: 'Missing form type or data' },
        { status: 400 }
      );
    }

    // Transform and map form data to HubSpot properties
    const hubspotContactData = transformFormDataToHubSpot(formData, formType);
    console.log('HubSpot contact data:', hubspotContactData);

    // Create contact in HubSpot
    const contactResponse = await createHubSpotContact(hubspotContactData);

    if (contactResponse.success) {
      // Submit form data to HubSpot form (for tracking)
      await submitToHubSpotForm(formData, formType);

      return NextResponse.json({
        success: true,
        message: 'Form submitted successfully',
        contactId: contactResponse.contactId
      });
    } else {
      throw new Error(contactResponse.error || 'Failed to create contact');
    }

  } catch (error) {
    console.error('HubSpot API error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to submit form',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Transform form data to HubSpot contact properties
function transformFormDataToHubSpot(formData: FormData, formType: string): Record<string, string> {
  const properties: Record<string, string> = {};

  // Map basic contact properties
  if (formData.firstName) properties[CONTACT_PROPERTIES.firstname] = formData.firstName;
  if (formData.lastName) properties[CONTACT_PROPERTIES.lastname] = formData.lastName;
  if (formData.company) properties[CONTACT_PROPERTIES.company] = formData.company;
  if (formData.companyEmail) properties[CONTACT_PROPERTIES.email] = formData.companyEmail;
  if (formData.phoneNumber) properties[CONTACT_PROPERTIES.phone] = formData.phoneNumber;
  if (formData.jobTitle) properties[CONTACT_PROPERTIES.jobtitle] = formData.jobTitle;
  if (formData.industry) properties[CONTACT_PROPERTIES.industry] = formData.industry;
  if (formData.numberofemployees) properties[CONTACT_PROPERTIES.numberofemployees] = formData.numberofemployees;
  if (formData.message) properties[CONTACT_PROPERTIES.message] = formData.message;

  // Add custom properties
  properties[CONTACT_PROPERTIES.contact_form_type] = FORM_TYPES[formType as keyof typeof FORM_TYPES] || formType;
  properties[CONTACT_PROPERTIES.lead_source] = 'Website Form';
  // if (formData.lead_status) properties[CONTACT_PROPERTIES.lead_status] = String(formData.lead_status);

  // Add form-specific properties
  // if (formType === 'compliant-assessment') {
  //   properties[CONTACT_PROPERTIES.csrd_vsme_assessment] = 'Requested';
  // }
  // if (formType === 'esg-maturity-certification') {
  //   properties[CONTACT_PROPERTIES.esg_maturity_assessment] = 'Requested';
  // }

  return properties;
}

// Create contact in HubSpot CRM
async function createHubSpotContact(properties: Record<string, string>) {
  try {
    const response = await fetch(CONTACTS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties: properties
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('HubSpot contact creation error:', errorData);
      return {
        success: false,
        error: `HubSpot API error: ${response.status} ${response.statusText}`
      };
    }

    const data = await response.json();
    return {
      success: true,
      contactId: data.id
    };

  } catch (error) {
    console.error('Error creating HubSpot contact:', error);
    return {
      success: false,
      error: 'Failed to create contact'
    };
  }
}

// Submit form data to HubSpot form for tracking
async function submitToHubSpotForm(formData: FormData, formType: string) {
  try {
    // Choose the correct form endpoint based on form type
    const formEndpoint = formType === 'contact-us' ? CONTACT_US_FORMS_ENDPOINT : FORMS_ENDPOINT;
    
    const formPayload = {
      fields: [
        { name: 'email', value: formData.companyEmail || formData.email || '' },
        { name: 'firstname', value: formData.firstName || '' },
        { name: 'lastname', value: formData.lastName || '' },
        { name: 'company', value: formData.company || '' },
        { name: 'phone', value: formData.phoneNumber || '' },
        { name: 'numberofemployees', value: formData.numberofemployees || '' },
        { name: 'question', value: formData.message || '' },
        { name: 'form_type', value: formType },
        { name: 'lead_source', value: 'Website Form' },
        // { name: 'lead_status', value: formData.lead_status ? String(formData.lead_status) : '' }
      ],
      context: {
        pageUri: 'https://yourdomain.com',
        pageName: `${formType} Form`
      }
    };

    console.log('formPayload', formPayload);

    const response = await fetch(formEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formPayload)
    });

    if (!response.ok) {
      console.warn('Form submission tracking failed:', response.status);
    }

  } catch (error) {
    console.warn('Form submission tracking error:', error);
  }
}
