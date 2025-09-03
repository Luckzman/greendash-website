# 🚀 HubSpot CRM Integration Setup Guide

## 📋 Prerequisites

- HubSpot account with API access
- HubSpot Private App with appropriate permissions
- Next.js project with the integration code

## 🔑 Required HubSpot Permissions

For form submission, you need these **HubSpot API permissions**:

### **Contacts**
- ✅ **Read & Write** access to create new contacts
- ✅ **Read** access to contact properties

### **Forms** 
- ✅ **Read & Write** access for form tracking
- ✅ **Read** access to form submissions

### **Properties**
- ✅ **Read** access to contact properties
- ✅ **Write** access to custom properties

## 🛠️ Setup Steps

### 1. Create HubSpot Private App

1. Go to **HubSpot Settings** → **Account Setup** → **Integrations** → **Private Apps**
2. Click **Create private app**
3. Give it a name (e.g., "GreenDash Website Integration")
4. Select the required scopes:
   - **Contacts**: Read & Write
   - **Forms**: Read & Write
   - **Properties**: Read & Write

### 2. Get Your Credentials

After creating the private app, you'll get:

- **API Key** (Private App Access Token)
- **Portal ID** (found in your HubSpot account settings)

### 3. Set Environment Variables

Create a `.env.local` file in your project root:

```bash
# HubSpot API Configuration
HUBSPOT_API_KEY=your_private_app_access_token_here
HUBSPOT_PORTAL_ID=your_portal_id_here
HUBSPOT_FORM_ID=your_form_id_here
WEBSITE_DOMAIN=https://yourdomain.com
```

### 4. Create Custom Properties in HubSpot

In HubSpot, create these custom contact properties:

| Property Name | Type | Group | Description |
|---------------|------|-------|-------------|
| `esg_maturity_assessment` | Single-line text | Contact information | Tracks ESG assessment requests |
| `csrd_vsme_assessment` | Single-line text | Contact information | Tracks CSRD/VSME assessment requests |
| `contact_form_type` | Single-line text | Contact information | Type of form submitted |
| `lead_source` | Single-line text | Contact information | Source of the lead |
| `lead_status` | Single-line text | Contact information | Current lead status |

### 5. Test the Integration

1. Start your development server: `npm run dev`
2. Fill out any form on your website
3. Check HubSpot CRM for new contacts
4. Verify all data is properly mapped

## 🔧 API Endpoints

### **POST** `/api/hubspot`

**Request Body:**
```json
{
  "formType": "esg-maturity-certification",
  "formData": {
    "firstName": "John",
    "lastName": "Doe",
    "company": "Example Corp",
    "companyEmail": "john@example.com",
    "phoneNumber": "+1234567890",
    "jobTitle": "Manager",
    "industry": "Technology",
    "employeeCount": "11-250",
    "consent": true
  }
}
```

**Response:**
```json
{
  "success": true,
  "message": "Form submitted successfully",
  "contactId": "12345"
}
```

## 📊 Data Mapping

The integration automatically maps form fields to HubSpot properties:

| Form Field | HubSpot Property | Description |
|------------|------------------|-------------|
| `firstName` | `firstname` | Contact's first name |
| `lastName` | `lastname` | Contact's last name |
| `company` | `company` | Company name |
| `companyEmail` | `email` | Primary email address |
| `phoneNumber` | `phone` | Phone number |
| `jobTitle` | `jobtitle` | Job title |
| `industry` | `industry` | Industry sector |
| `employeeCount` | `numberofemployees` | Company size |

## 🎯 Form Types Supported

- `join-waiting-list` → Join Waiting List
- `contact-us` → Contact Us
- `compliant-assessment` → CSRD/VSME Assessment
- `esg-maturity-certification` → ESG Maturity Certification
- `csrd-vsme-certification` → CSRD/VSME Certification

## 🚨 Troubleshooting

### Common Issues

1. **"HubSpot configuration missing"**
   - Check your `.env.local` file
   - Verify environment variable names
   - Restart your development server

2. **"HubSpot API error: 401"**
   - Verify your API key is correct
   - Check if your private app has the right permissions
   - Ensure your API key hasn't expired

3. **"HubSpot API error: 403"**
   - Check if you have the required scopes
   - Verify your private app is active
   - Contact HubSpot support if needed

4. **Form data not appearing in HubSpot**
   - Check the browser console for errors
   - Verify the API endpoint is working
   - Check HubSpot contact properties mapping

### Debug Mode

Enable debug logging by adding to your `.env.local`:

```bash
DEBUG=true
NODE_ENV=development
```

## 🔒 Security Considerations

- **Never commit** your `.env.local` file to version control
- **Rotate API keys** regularly
- **Monitor API usage** in HubSpot
- **Use HTTPS** in production
- **Validate form data** on both client and server

## 📈 Next Steps

After successful integration:

1. **Set up HubSpot workflows** for lead nurturing
2. **Create email sequences** for follow-ups
3. **Set up lead scoring** based on form submissions
4. **Configure reporting** and analytics
5. **Set up team notifications** for new leads

## 🆘 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review HubSpot API documentation
3. Check your browser's Network tab for API calls
4. Verify your HubSpot account permissions
5. Contact HubSpot support for API-related issues

---

**🎉 Congratulations!** Your HubSpot integration is now ready to capture leads and manage contacts automatically.
