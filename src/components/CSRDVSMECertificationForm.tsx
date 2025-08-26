'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PhoneNumberInput from './PhoneNumberInput';

export default function CSRDVSMECertificationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    companyEmail: '',
    phoneCountry: 'US',
    phoneNumber: '+1',
    jobTitle: '',
    industry: '',
    employeeCount: '',
    consent: false
  });

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
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('CSRD/VSME Certification form submitted:', formData);
    // Navigate to the booking page
    router.push('/csrd-vsme-certification/booking');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#7FFF6B] via-[#EEFFEC] to-[#7FFF6B]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Top Badge */}
          <div className="inline-block bg-white rounded-[10px] px-10 py-1 mb-6 border border-[rgba(34, 34, 34, 0.1)] shadow-sm">
            <span className="text-sm font-medium text-black">Certification</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl lg:text-5xl font-bold text-[#001354] pb-6 leading-[70px]">
          Let&apos;s start your CSRD/VSME Certification journey
          </h1>
          
          {/* Description */}
          <p className="text-xl text-[#010D3E] max-w-3xl mx-auto leading-relaxed">
            Please provide us some initial information and book your first call with us!
          </p>
        </div>

        {/* Form Section */}
        <div className="md:max-w-2xl lg:max-w-xl mx-auto bg-white rounded-xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
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
  
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
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
  
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
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

                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
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

                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Phone Number */}
            <PhoneNumberInput
              value={formData.phoneNumber}
              onChange={(value) => setFormData(prev => ({ ...prev, phoneNumber: value }))}
              countryCode={formData.phoneCountry}
              onCountryChange={(countryCode) => setFormData(prev => ({ ...prev, phoneCountry: countryCode }))}
            />

            {/* Job Title */}
            <div>
              <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                Job title
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
                Which industry do you come from?
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
              <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700 mb-2">
                How many employees does your organization have?
              </label>
              <select
                id="employeeCount"
                name="employeeCount"
                value={formData.employeeCount}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select</option>
                <option value="0-1">0-1 employees</option>
                <option value="2-10">2-10 employees</option>
                <option value="11-250">11-250 employees</option>
                <option value="251-500">251-500 employees</option>
                <option value="501-1000">501-1000 employees</option>
                <option value="1000+">1000+ employees</option>
              </select>
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
              <label htmlFor="consent" className="text-sm text-gray-700">
                By submitting this form, you are agreeing that GreenDash may store and process your personal data as described in our{' '}
                <a href="#" className="text-green-600 hover:text-green-700 underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                And now book your call to start the journey!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
