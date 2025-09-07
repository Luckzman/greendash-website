'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PhoneNumberInput from './PhoneNumberInput';
import Toast from './Toast';
import { handleFormSubmission } from '../lib/hubspot';

interface JoinWaitingListFormProps {
  essentialKit?: boolean;
  esgMaturityCertification?: boolean;
  csrdVsmeCertification?: boolean;
  isForProfessionalsPage?: boolean;
}

export default function JoinWaitingListForm({ essentialKit, esgMaturityCertification, csrdVsmeCertification, isForProfessionalsPage = false }: JoinWaitingListFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    companyEmail: '',
    phoneNumber: '',
    phoneCountry: '+1',
    jobTitle: '',
    industry: '',
    numberofemployees: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    type: 'success' | 'error';
    message: string;
    isVisible: boolean;
  }>({
    type: 'success',
    message: '',
    isVisible: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    console.log('Validating form with data:', formData);
    const newErrors: Record<string, string> = {};

    // Required field validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      console.log('First name validation failed');
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      console.log('Last name validation failed');
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
      console.log('Company validation failed');
    }
    if (!formData.companyEmail.trim()) {
      newErrors.companyEmail = 'Company email is required';
      console.log('Company email validation failed');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.companyEmail)) {
      newErrors.companyEmail = 'Please enter a valid email address';
      console.log('Company email format validation failed');
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
      console.log('Phone number validation failed');
    } else {
      // Extract the number part (after country code) for length validation
      // Find the country code that matches the beginning of the phone number
      const phoneNumber = formData.phoneNumber;
      let numberPart = '';
      
      // Try to match with the stored country code first
      if (formData.phoneCountry && phoneNumber.startsWith(formData.phoneCountry)) {
        numberPart = phoneNumber.substring(formData.phoneCountry.length);
      } else {
        // Fallback: try to extract using regex for common country codes
        const match = phoneNumber.match(/^(\+\d{1,4})(\d+)$/);
        if (match) {
          numberPart = match[2];
        } else {
          // Last resort: remove the + and first few digits
          numberPart = phoneNumber.replace(/^\+\d{1,4}/, '');
        }
      }
      
      console.log('Phone validation - Full number:', phoneNumber, 'Country code:', formData.phoneCountry, 'Number part:', numberPart, 'Length:', numberPart.length);
      if (numberPart.length < 7) {
        newErrors.phoneNumber = 'Phone number must be at least 7 digits';
        console.log('Phone number length validation failed');
      }
    }
    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = 'Job title is required';
      console.log('Job title validation failed');
    }
    if (!formData.industry.trim()) {
      newErrors.industry = 'Industry is required';
      console.log('Industry validation failed');
    }
    if (!formData.numberofemployees) {
      newErrors.numberofemployees = 'Number of employees is required';
      console.log('Number of employees validation failed');
    }
    if (!formData.consent) {
      newErrors.consent = 'You must agree to the privacy policy';
      console.log('Consent validation failed');
    }

    console.log('Validation errors:', newErrors);
    setErrors(newErrors);
    const isValid = Object.keys(newErrors).length === 0;
    console.log('Form validation result:', isValid);
    return isValid;
  };

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({
      type,
      message,
      isVisible: true
    });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  const downloadEssentialKitPDF = () => {
    // Create a temporary link element to trigger the download
    const link = document.createElement('a');
    link.href = '/ESSENTIAL_KIT.pdf';
    link.download = 'CSRD_VSME_Essentials_Kit.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: target.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission intercepted!', { formData, errors });
    
    if (!validateForm()) {
      console.log('Validation failed, showing error toast');
      showToast('error', 'Please fix the errors in the form');
      return;
    }

    console.log('Validation passed, submitting to HubSpot...');
    setIsSubmitting(true);

    try {
      await handleFormSubmission(
        essentialKit ? 'essential-kit' : esgMaturityCertification ? 'esg-maturity-certification' : csrdVsmeCertification ? 'csrd-vsme-certification' : 'join-waiting-list',
        formData,
        () => {
          showToast('success', essentialKit 
            ? 'Thank you! Your CSRD/VSME Essentials Kit will be sent to your email shortly.' 
            : esgMaturityCertification || csrdVsmeCertification
            ? 'Thank you! Redirecting to booking page...'
            : 'Thank you! You have been added to the waiting list successfully.'
          );
          
          // Download PDF if this is for the essential kit
          if (essentialKit) {
            downloadEssentialKitPDF();
          }
          
          // Redirect to booking page if this is for ESG Maturity Certification
          if (esgMaturityCertification || csrdVsmeCertification) {
            setTimeout(() => {
              router.push('/esg-maturity-certification/booking');
            }, 2000);
          }
          
          // Reset form on success (only if not redirecting)
          if (!esgMaturityCertification && !csrdVsmeCertification) {
            setFormData({
              firstName: '',
              lastName: '',
              company: '',
              companyEmail: '',
              phoneNumber: '',
              phoneCountry: '+1',
              jobTitle: '',
              industry: '',
              numberofemployees: '',
              consent: false
            });
          }
        },
        (error) => {
          showToast('error', `Submission failed: ${error}`);
        },
        setIsSubmitting
      );
    } catch {
      showToast('error', 'An unexpected error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toast
        type={toast.type}
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={hideToast}
        duration={5000}
      />

      <section className={`py-20 ${isForProfessionalsPage ? 'bg-gradient-to-b from-[#131313] via-[#202120] to-[#6FE451]' : 'bg-gradient-to-b from-[#7FFF6B] via-[#EEFFEC] to-[#7FFF6B] '}`}>
        <div className="max-w-5xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-12">
            {/* Top Badge */}
            <div className="inline-block bg-white rounded-[10px] px-10 py-1 mb-6 border border-[rgba(34, 34, 34, 0.1)] shadow-sm">
              <span className="text-sm font-medium text-black">{essentialKit ? 'CSRD/VSME Essentials Kit' : esgMaturityCertification ? 'Certification' : csrdVsmeCertification ? 'Certification' : 'Join the Waiting List'}</span>
            </div>
            
            {/* Main Headline */}
            <h1 className={`text-4xl lg:text-5xl font-dm-sans font-bold pb-6 leading-[70px]  ${isForProfessionalsPage ? 'text-[#6FE451]' : 'text-black'}`}>
              {essentialKit ? 'Get your free CSRD/VSME Essentials Now!' : 
              esgMaturityCertification ? 'Let\'s start your ESG Maturity Certification journey' :
              csrdVsmeCertification ? 'Let\'s start your CSRD/VSME Certification journey' :
              'Hold Tight, GreenDash is Coming Soon'}
            </h1>
            
            {/* Description */}
            <p className={`text-xl ${isForProfessionalsPage ? 'text-white' : 'text-[#010D3E]'} font-inter  max-w-2xl mx-auto leading-relaxed`}>
              {essentialKit ? 
              'Answer to the questions below and download your FREE CSRD/VSME Essentials Kit, so you can start your reporting journey!' : 
              esgMaturityCertification || csrdVsmeCertification ? 'Please provide us some initial information and book your first call with us!' :
              "We're preparing for a launch that will make a real impact. By joining the waiting list, you'll secure your spot, receive early updates, and be the first to experience our platform"}
            </p>
          </div>

          {/* Form Section */}
          <div className="md:max-w-2xl lg:max-w-xl mx-auto bg-white rounded-xl p-8 shadow-lg" style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)' }}>
            <form onSubmit={handleSubmit} method="POST" action="#" className="space-y-6">
              {/* First Row - First Name and Last Name */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.company ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.company && (
                  <p className="mt-1 text-sm text-red-600">{errors.company}</p>
                )}
              </div>

              {/* Company Email */}
              <div>
                <label htmlFor="companyEmail" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="companyEmail"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.companyEmail ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.companyEmail && (
                  <p className="mt-1 text-sm text-red-600">{errors.companyEmail}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <PhoneNumberInput
                  value={formData.phoneNumber}
                  onChange={(value) => {
                    setFormData(prev => ({ ...prev, phoneNumber: value }));
                    if (errors.phoneNumber) {
                      setErrors(prev => ({ ...prev, phoneNumber: '' }));
                    }
                  }}
                  countryCode={formData.phoneCountry}
                  onCountryChange={(countryCode) => setFormData(prev => ({ ...prev, phoneCountry: countryCode }))}
                  required={true}
                  error={errors.phoneNumber}
                />
              </div>

              {/* Job Title */}
              <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                  Job title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.jobTitle ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.jobTitle && (
                  <p className="mt-1 text-sm text-red-600">{errors.jobTitle}</p>
                )}
              </div>

              {/* Industry */}
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                  Which industry do you come from? <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.industry ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.industry && (
                  <p className="mt-1 text-sm text-red-600">{errors.industry}</p>
                )}
              </div>

              {/* Employee Count */}
              <div>
                <label htmlFor="numberofemployees" className="block text-sm font-medium text-gray-700 mb-2">
                  How many employees does your organization has? <span className="text-red-500">*</span>
                </label>
                <select
                  id="numberofemployees"
                  name="numberofemployees"
                  value={formData.numberofemployees}
                  onChange={handleInputChange}
                  className={`px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.numberofemployees ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select</option>
                  <option value="0-1">0-1 employees</option>
                  <option value="2-10">2-10 employees</option>
                  <option value="11-250">11-250 employees</option>
                  <option value="251-500">251-500 employees</option>
                  <option value="501-1000">501-1000 employees</option>
                </select>
                {errors.numberofemployees && (
                  <p className="mt-1 text-sm text-red-600">{errors.numberofemployees}</p>
                )}
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <label htmlFor="consent" className="font-inter text-sm text-gray-700">
                  By submitting this form, you are agreeing that GreenDash may store and process your personal data as described in our{' '}
                  <a href="#" className="text-[#6FE451] hover:text-green-700 underline">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>
              {errors.consent && (
                <p className="text-sm text-red-600">{errors.consent}</p>
              )}

              {/* Submit Button */}
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-2 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:-translate-y-0.5 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-[#6FE451] hover:bg-green-600 text-white'
                  }`}
                  style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)' }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {isSubmitting ? 'Submitting...' : 'Processing...'}
                    </span>
                  ) : (
                    essentialKit ? 
                    'Download your CSRD/VSME Essentials PDF' : 
                    esgMaturityCertification || csrdVsmeCertification ? 'And now book your call to start the journey!' :
                    'Join Waiting List'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
