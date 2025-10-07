'use client';

import { useState } from 'react';
import PhoneNumberInput from './PhoneNumberInput';
import Toast from './Toast';
import { handleFormSubmission } from '../lib/hubspot';
import Link from 'next/link';
import Content from './common/Content';
import { useThankYouState } from '../hooks/useThankYouState';

interface ContactUsFormProps {
  isForProfessionalsPage?: boolean;
}

export default function ContactUsForm({ isForProfessionalsPage = false }: ContactUsFormProps) {
  const { navigateToThankYou } = useThankYouState();
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
    message: '',
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
    console.log('Validating contact form with data:', formData);
    const newErrors: Record<string, string> = {};

    // Required field validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }
    if (!formData.companyEmail.trim()) {
      newErrors.companyEmail = 'Company email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.companyEmail)) {
      newErrors.companyEmail = 'Please enter a valid email address';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
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
      }
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    if (!formData.consent) {
      newErrors.consent = 'You must agree to the privacy policy';
    }

    console.log('Contact form validation errors:', newErrors);
    setErrors(newErrors);
    const isValid = Object.keys(newErrors).length === 0;
    console.log('Contact form validation result:', isValid);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
    console.log('Contact form submission intercepted!', { formData, errors });
    
    if (!validateForm()) {
      showToast('error', 'Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      await handleFormSubmission(
        isForProfessionalsPage ? 'contact-us-professional' : 'contact-us',
        formData,
        () => {
          showToast('success', 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
          
          const thankYouData = {
            tag: 'Contact Us',
            heading: 'Thanks for Reaching Out!',
            desc: 'We’ve received your message — thanks for getting in touch with the GreenDash team!',
            desc2: 'One of our team members will get back to you shortly to learn more about your needs and how GreenDash can support your business',
          };
          
          navigateToThankYou(thankYouData);

          // Reset form on success
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
            message: '',
            consent: false
          });
        },
        (error) => {
          showToast('error', `Submission failed: ${error}`);
        },
        setIsSubmitting
      );
    } catch (error) {
      console.error('Form submission error:', error);
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

      <section className="relative lg:pt-vw44 lg:pb-vw200 py-[60px] sm:py-[120px]">
        <span
          style={{
            background: isForProfessionalsPage 
            ? 'linear-gradient(to bottom, #131313 5%, #202120 10%, #2C2D2B 35%, #6FE451 80%, #6FE451 100%)'
            : "linear-gradient(180deg, #7FFF6B 3.25%, rgba(173, 255, 160, 0.80) 30.18%, rgba(239, 255, 236, 0.50) 66.1%, rgba(241, 255, 238, 0.10) 96.62%)",  
          }}
          className="atlwh_Full pointer-events-none"
        ></span>
        <span
          style={{
            background: isForProfessionalsPage 
            ? '#6FE451'
            : "linear-gradient(181deg, #FFF 42.57%, #7FFF6B 99.81%)",
          }}
          className="atlwh_Full lg:h-vw190 h-[30%] top-[unset] bottom-0 pointer-events-none"
        ></span>
        <div className="relative z-[2]">
          <Content
            tag="Contact Us"
            headingClasses={`${isForProfessionalsPage ? 'text-[#6FE451]' : 'text-black'}`}
            heading="Let&apos;s talk!"
            desc="Still have questions or in need of further help? Send us a message and one of our team members will be in touch with you in the next 24h"
            wrapperWidth={"lg:w-[65.9027777778vw]"}
            descWidth={"lg:w-[53vw]"}
            descColor={`${isForProfessionalsPage ? 'text-white' : ''}`}
            isForProfessionalsPage={isForProfessionalsPage}
          />
          
          {/* Form Section */}
          <div className="md:max-w-2xl mx-auto bg-white rounded-xl mt-10 p-14 shadow-lg" style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)' }}>
          <form onSubmit={handleSubmit} id="contact-us-form" method="POST" action="#" className="space-y-6">
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
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
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select</option>
                <option value="0-1">0-1 employees</option>
                <option value="2-10">2-10 employees</option>
                <option value="11-250">11-250 employees</option>
                <option value="251-500">251-500 employees</option>
                <option value="501-1000">501-1000 employees</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Write here your question, please <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Tell us how we can help you..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
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
                className="mt-1 w-4 h-4 text-[#6FE451] border-gray-300 rounded focus:ring-green-500"
              />
              <label htmlFor="consent" className="font-inter text-sm text-gray-700">
                By submitting this form, you agreeing that GreenDash may store and process your personal data as described in our{' '}
                <Link href="/privacy-policy" className="text-[#6FE451] hover:text-green-700 underline">
                  Privacy Policy
                </Link>
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
                    {isSubmitting ? 'Sending...' : 'Processing...'}
                  </span>
                ) : (
                  'Send'
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
