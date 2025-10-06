import { NextRequest, NextResponse } from 'next/server';

// HubSpot API configuration
const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;
const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID;
const JOIN_WAITING_LIST_FORM_ID = process.env.JOIN_WAITING_LIST_FORM_ID;
const CONTACT_US_FORM_ID = process.env.CONTACT_US_FORM_ID;
const ESSENTIAL_KIT_FORM_ID = process.env.ESSENTIAL_KIT_FORM_ID;
const ESG_MATURITY_FORM_ID = process.env.ESG_MATURITY_CERTIFICATION_FORM_ID;
const CSRD_VSME_FORM_ID = process.env.CSRD_VSME_CERTIFICATION_FORM_ID;
const CSRD_VSME_ASSESSMENT_FORM_ID = process.env.CSRD_VSME_ASSESSMENT_FORM_ID;

// Professional form IDs
const JOIN_WAITING_LIST_FORM_ID_FOR_PROFESSIONALS = process.env.JOIN_WAITING_LIST_FORM_ID_FOR_PROFESSIONALS;
const CONTACT_US_FORM_ID_FOR_PROFESSIONALS = process.env.CONTACT_US_FORM_ID_FOR_PROFESSIONALS;

// HubSpot API endpoints
const HUBSPOT_BASE_URL = 'https://api.hubapi.com';
const CONTACTS_ENDPOINT = `${HUBSPOT_BASE_URL}/crm/v3/objects/contacts`;

// Alternative: Use HubSpot Forms API v3 (more reliable)
const FORMS_V3_ENDPOINT = `${HUBSPOT_BASE_URL}/forms/v3/forms/${JOIN_WAITING_LIST_FORM_ID}/submissions`;
const CONTACT_US_FORMS_V3_ENDPOINT = `${HUBSPOT_BASE_URL}/forms/v3/forms/${CONTACT_US_FORM_ID}/submissions`;
const ESSENTIAL_KIT_FORMS_V3_ENDPOINT = `${HUBSPOT_BASE_URL}/forms/v3/forms/${ESSENTIAL_KIT_FORM_ID}/submissions`;
const ESG_MATURITY_FORMS_V3_ENDPOINT = `${HUBSPOT_BASE_URL}/forms/v3/forms/${ESG_MATURITY_FORM_ID}/submissions`;
const CSRD_VSME_FORMS_V3_ENDPOINT = `${HUBSPOT_BASE_URL}/forms/v3/forms/${CSRD_VSME_FORM_ID}/submissions`;
const CSRD_VSME_ASSESSMENT_FORMS_V3_ENDPOINT = `${HUBSPOT_BASE_URL}/forms/v3/forms/${CSRD_VSME_ASSESSMENT_FORM_ID}/submissions`;

// Professional form endpoints
const JOIN_WAITING_LIST_FORMS_V3_ENDPOINT_FOR_PROFESSIONALS = `${HUBSPOT_BASE_URL}/forms/v3/forms/${JOIN_WAITING_LIST_FORM_ID_FOR_PROFESSIONALS}/submissions`;
const CONTACT_US_FORMS_V3_ENDPOINT_FOR_PROFESSIONALS = `${HUBSPOT_BASE_URL}/forms/v3/forms/${CONTACT_US_FORM_ID_FOR_PROFESSIONALS}/submissions`;

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
  message: 'question',
  // lead_status: 'lead_status'
};

// Contact properties mapping

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

// Function to list all HubSpot forms (for debugging)
async function listHubSpotForms() {
  try {
    const response = await fetch(`${HUBSPOT_BASE_URL}/forms/v2/forms`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('Failed to fetch forms:', response.status, response.statusText);
      return null;
    }

    const data = await response.json();
    console.log('Available HubSpot forms:');
    data.forEach((form: { name: string; guid: string; published: boolean }) => {
      console.log(`- Name: "${form.name}", ID: "${form.guid}", Published: ${form.published}`);
    });
    
    return data;
  } catch (error) {
    console.error('Error fetching forms:', error);
    return null;
  }
}

// Function to get form field details (for debugging)
async function getFormFields(formId: string) {
  try {
    console.log(`Fetching form details for ${formId}...`);
    const response = await fetch(`${HUBSPOT_BASE_URL}/forms/v2/forms/${formId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    console.log(`Form details response status: ${response.status}`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to fetch form details:', response.status, response.statusText, errorText);
      return null;
    }

    const data = await response.json();
    console.log(`Form fields for ${formId}:`);
    console.log('Full form data:', JSON.stringify(data, null, 2));
    
    if (data.fields) {
      data.fields.forEach((field: { name: string; label: string; required: boolean }) => {
        console.log(`- Field: "${field.name}", Label: "${field.label}", Required: ${field.required}`);
      });
    } else {
      console.log('No fields found in form data');
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching form fields:', error);
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Validate environment variables
    if (!HUBSPOT_API_KEY 
      || !HUBSPOT_PORTAL_ID 
      || !JOIN_WAITING_LIST_FORM_ID 
      || !CONTACT_US_FORM_ID 
      || !ESSENTIAL_KIT_FORM_ID 
      || !ESG_MATURITY_FORM_ID 
      || !CSRD_VSME_FORM_ID
      || !CSRD_VSME_ASSESSMENT_FORM_ID
      || !JOIN_WAITING_LIST_FORM_ID_FOR_PROFESSIONALS
      || !CONTACT_US_FORM_ID_FOR_PROFESSIONALS) {
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

  // Add compliant assessment specific fields
  if (formType === 'compliant-assessment') {
    if (formData.euBase && typeof formData.euBase === 'string') properties['based_in_eu'] = formData.euBase; // Keep lowercase as HubSpot expects
    if (formData.largeClients && typeof formData.largeClients === 'string') properties['company_has_large_clients'] = formData.largeClients === 'yes' ? 'Yes' : 'No';
    if (formData.largeEuClients && typeof formData.largeEuClients === 'string') properties['large_eu_clients'] = formData.largeEuClients;
    if (formData.companyProfile && typeof formData.companyProfile === 'string') {
      // Map form values to HubSpot expected values
      const companyFitMapping: { [key: string]: string } = {
        'large-eu-pies': 'Large EU PIEs with > 1000 employees',
        'eu-company-large': 'EU Company with > 1000 employees and Net volume > 50M€ or Balance sheet > 25M€',
        'listed-smes-eu': 'Listed SMEs in the EU',
        'non-eu-parents': 'Non-EU Parents with Turnover >450M€ and large EU subsidiary or EU branch with >50M€ turnover',
        'other': 'Other'
      };
      properties['company_fit'] = companyFitMapping[formData.companyProfile] || formData.companyProfile;
    }
  }

  // Add custom properties
  // properties[CONTACT_PROPERTIES.contact_form_type] = FORM_TYPES[formType as keyof typeof FORM_TYPES] || formType;
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

// Submit form data to HubSpot form for tracking using the public form submission endpoint
async function submitToHubSpotForm(formData: FormData, formType: string) {
  try {
    // Use the public form submission endpoint (no authentication required)
    const formId = formType === 'contact-us' ? CONTACT_US_FORM_ID 
    : formType === 'contact-us-professional' ? CONTACT_US_FORM_ID_FOR_PROFESSIONALS
    : formType === 'essential-kit' ? ESSENTIAL_KIT_FORM_ID 
    : formType === 'esg-maturity-certification' ? ESG_MATURITY_FORM_ID 
    : formType === 'csrd-vsme-certification' ? CSRD_VSME_FORM_ID 
    : formType === 'compliant-assessment' ? CSRD_VSME_ASSESSMENT_FORM_ID
    : formType === 'join-waiting-list-professional' ? JOIN_WAITING_LIST_FORM_ID_FOR_PROFESSIONALS
    : JOIN_WAITING_LIST_FORM_ID;
    
    // Try v1 API first (more compatible)
    const formEndpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${formId}`;
    
    // Build form payload for public submission endpoint - using correct object structure
    const formPayload = {
      fields: [
        { name: 'email', value: formData.companyEmail || formData.email || '' },
        { name: 'firstname', value: formData.firstName || '' },
        { name: 'lastname', value: formData.lastName || '' },
        { name: 'phone', value: formData.phoneNumber || '' },
        { name: 'numberofemployees', value: formData.numberofemployees || '' },
        { name: 'industry', value: formData.industry || '' },
        { name: 'jobtitle', value: formData.jobTitle || '' },
        // Add compliant assessment specific fields
        ...(formType === 'compliant-assessment' ? [
          { name: 'based_in_eu', value: (typeof formData.euBase === 'string' ? formData.euBase : '') || '' }, // Keep lowercase as HubSpot expects
          { name: 'company_has_large_clients', value: (typeof formData.largeClients === 'string' && formData.largeClients === 'yes') ? 'Yes' : 'No' },
          { name: 'large_eu_clients', value: (typeof formData.largeEuClients === 'string' ? formData.largeEuClients : '') || '' },
          { name: 'company_fit', value: (() => {
            const companyFitMapping: { [key: string]: string } = {
              'large-eu-pies': 'Large EU PIEs with > 1000 employees',
              'eu-company-large': 'EU Company with > 1000 employees and Net volume > 50M€ or Balance sheet > 25M€',
              'listed-smes-eu': 'Listed SMEs in the EU',
              'non-eu-parents': 'Non-EU Parents with Turnover >450M€ and large EU subsidiary or EU branch with >50M€ turnover',
              'other': 'Other'
            };
            const profileValue = typeof formData.companyProfile === 'string' ? formData.companyProfile : '';
            return companyFitMapping[profileValue] || profileValue || '';
          })() },
        ] : []),
      ],
      // Company field needs to be in a separate object structure
      company: [
        { name: 'name', value: formData.company || '' }
      ],
      context: {
        pageUri: process.env.WEBSITE_DOMAIN || 'https://greendash-website.vercel.app',
        pageName: `${formType} Form`
      }
    };

    // Log the actual field values for debugging
    console.log('Form field values:', formPayload.fields.map(field => ({ name: field.name, value: field.value })));
    console.log('Company field values:', formPayload.company.map(field => ({ name: field.name, value: field.value })));

    console.log('Submitting form to HubSpot public endpoint:', {
      endpoint: formEndpoint,
      formId: formId,
      payload: formPayload
    });

    const response = await fetch(formEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formPayload)
    });

    const responseData = await response.text();
    console.log('HubSpot public form submission response:', {
      status: response.status,
      statusText: response.statusText,
      data: responseData
    });

    if (!response.ok) {
      console.error('Public form submission failed:', {
        status: response.status,
        statusText: response.statusText,
        response: responseData,
        formId: formId
      });
      
      // If field mapping error, get the actual form fields
      if (response.status === 400 && responseData.includes('REQUIRED_FIELD')) {
        console.log('Field mapping error detected. Fetching actual form fields...');
        await getFormFields(formId || '');
        
        // Try v1 API as fallback for field mapping issues
        console.log('Trying v1 API as fallback...');
        await submitToHubSpotFormV1(formData, formType);
        return;
      }
      
      // Try the authenticated API as fallback
      console.log('Trying authenticated API as fallback...');
      await submitToHubSpotFormAuthenticated(formData, formType);
      return;
    }

    console.log('Form submission tracking successful with public endpoint');

  } catch (error) {
    console.error('Form submission tracking error:', error);
    // Don't throw the error to prevent breaking the main contact creation flow
  }
}

// Fallback function using v1 API
async function submitToHubSpotFormV1(formData: FormData, formType: string) {
  try {
    const formId = formType === 'contact-us' ? CONTACT_US_FORM_ID 
    : formType === 'contact-us-professional' ? CONTACT_US_FORM_ID_FOR_PROFESSIONALS
    : formType === 'essential-kit' ? ESSENTIAL_KIT_FORM_ID 
    : formType === 'esg-maturity-certification' ? ESG_MATURITY_FORM_ID 
    : formType === 'csrd-vsme-certification' ? CSRD_VSME_FORM_ID 
    : formType === 'compliant-assessment' ? CSRD_VSME_ASSESSMENT_FORM_ID
    : formType === 'join-waiting-list-professional' ? JOIN_WAITING_LIST_FORM_ID_FOR_PROFESSIONALS
    : JOIN_WAITING_LIST_FORM_ID;
    const formEndpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${formId}`;
    
    // Corrected payload for v1 API with proper object structure
    const formPayload = {
      fields: [
        { name: 'email', value: formData.companyEmail || formData.email || '' },
        { name: 'firstname', value: formData.firstName || '' },
        { name: 'lastname', value: formData.lastName || '' },
        { name: 'phone', value: formData.phoneNumber || '' },
        { name: 'numberofemployees', value: formData.numberofemployees || '' },
        { name: 'industry', value: formData.industry || '' },
        { name: 'jobtitle', value: formData.jobTitle || '' },
        // Add compliant assessment specific fields
        ...(formType === 'compliant-assessment' ? [
          { name: 'based_in_eu', value: (typeof formData.euBase === 'string' ? formData.euBase : '') || '' }, // Keep lowercase as HubSpot expects
          { name: 'company_has_large_clients', value: (typeof formData.largeClients === 'string' && formData.largeClients === 'yes') ? 'Yes' : 'No' },
          { name: 'large_eu_clients', value: (typeof formData.largeEuClients === 'string' ? formData.largeEuClients : '') || '' },
          { name: 'company_fit', value: (() => {
            const companyFitMapping: { [key: string]: string } = {
              'large-eu-pies': 'Large EU PIEs with > 1000 employees',
              'eu-company-large': 'EU Company with > 1000 employees and Net volume > 50M€ or Balance sheet > 25M€',
              'listed-smes-eu': 'Listed SMEs in the EU',
              'non-eu-parents': 'Non-EU Parents with Turnover >450M€ and large EU subsidiary or EU branch with >50M€ turnover',
              'other': 'Other'
            };
            const profileValue = typeof formData.companyProfile === 'string' ? formData.companyProfile : '';
            return companyFitMapping[profileValue] || profileValue || '';
          })() },
        ] : []),
      ],
      // Company field needs to be in a separate object structure
      company: [
        { name: 'name', value: formData.company || '' }
      ],
      context: {
        pageUri: process.env.WEBSITE_DOMAIN || 'https://greendash-website.vercel.app',
        pageName: `${formType} Form`
      }
    };

    console.log('Trying v1 API:', { endpoint: formEndpoint, payload: formPayload });

    const response = await fetch(formEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formPayload)
    });

    const responseData = await response.text();
    console.log('HubSpot v1 form submission response:', {
      status: response.status,
      statusText: response.statusText,
      data: responseData
    });

    if (!response.ok) {
      console.error('v1 API also failed:', {
        status: response.status,
        statusText: response.statusText,
        response: responseData
      });
    } else {
      console.log('Form submission tracking successful with v1 API');
    }

  } catch (error) {
    console.error('v1 Form submission tracking error:', error);
  }
}

// Fallback function using authenticated API
async function submitToHubSpotFormAuthenticated(formData: FormData, formType: string) {
  try {
    const formEndpoint = formType === 'contact-us' ? CONTACT_US_FORMS_V3_ENDPOINT 
    : formType === 'contact-us-professional' ? CONTACT_US_FORMS_V3_ENDPOINT_FOR_PROFESSIONALS
    : formType === 'essential-kit' ? ESSENTIAL_KIT_FORMS_V3_ENDPOINT 
    : formType === 'esg-maturity-certification' ? ESG_MATURITY_FORMS_V3_ENDPOINT 
    : formType === 'csrd-vsme-certification' ? CSRD_VSME_FORMS_V3_ENDPOINT 
    : formType === 'compliant-assessment' ? CSRD_VSME_ASSESSMENT_FORMS_V3_ENDPOINT
    : formType === 'join-waiting-list-professional' ? JOIN_WAITING_LIST_FORMS_V3_ENDPOINT_FOR_PROFESSIONALS
    : FORMS_V3_ENDPOINT;
    
    const formPayload = {
      fields: [
        { name: 'email', value: formData.companyEmail || formData.email || '' },
        { name: 'firstname', value: formData.firstName || '' },
        { name: 'lastname', value: formData.lastName || '' },
        { name: 'phone', value: formData.phoneNumber || '' },
        { name: 'numberofemployees', value: formData.numberofemployees || '' },
        { name: 'industry', value: formData.industry || '' },
        { name: 'jobtitle', value: formData.jobTitle || '' },
        // Add compliant assessment specific fields
        ...(formType === 'compliant-assessment' ? [
          { name: 'based_in_eu', value: (typeof formData.euBase === 'string' ? formData.euBase : '') || '' }, // Keep lowercase as HubSpot expects
          { name: 'company_has_large_clients', value: (typeof formData.largeClients === 'string' && formData.largeClients === 'yes') ? 'Yes' : 'No' },
          { name: 'large_eu_clients', value: (typeof formData.largeEuClients === 'string' ? formData.largeEuClients : '') || '' },
          { name: 'company_fit', value: (() => {
            const companyFitMapping: { [key: string]: string } = {
              'large-eu-pies': 'Large EU PIEs with > 1000 employees',
              'eu-company-large': 'EU Company with > 1000 employees and Net volume > 50M€ or Balance sheet > 25M€',
              'listed-smes-eu': 'Listed SMEs in the EU',
              'non-eu-parents': 'Non-EU Parents with Turnover >450M€ and large EU subsidiary or EU branch with >50M€ turnover',
              'other': 'Other'
            };
            const profileValue = typeof formData.companyProfile === 'string' ? formData.companyProfile : '';
            return companyFitMapping[profileValue] || profileValue || '';
          })() },
        ] : []),
      ],
      // Company field needs to be in a separate object structure
      company: [
        { name: 'name', value: formData.company || '' }
      ],
      context: {
        pageUri: process.env.WEBSITE_DOMAIN || 'https://greendash-website.vercel.app',
        pageName: `${formType} Form`
      }
    };

    console.log('Trying authenticated API:', { endpoint: formEndpoint });

    const response = await fetch(formEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
      },
      body: JSON.stringify(formPayload)
    });

    const responseData = await response.text();
    console.log('HubSpot authenticated form submission response:', {
      status: response.status,
      statusText: response.statusText,
      data: responseData
    });

    if (!response.ok) {
      console.error('Both public and authenticated form submission failed:', {
        status: response.status,
        statusText: response.statusText,
        response: responseData
      });
      
      // If 404, list all available forms to help debug
      if (response.status === 404) {
        console.log('Authenticated API also failed. Listing all available forms...');
        await listHubSpotForms();
      }
    } else {
      console.log('Form submission tracking successful with authenticated API');
    }

  } catch (error) {
    console.error('Authenticated form submission tracking error:', error);
  }
}
