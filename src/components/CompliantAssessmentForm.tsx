'use client';

import { useState } from 'react';
import PhoneNumberInput from './PhoneNumberInput';
import Link from 'next/link';
import Content from './common/Content';

export default function CompliantAssessmentForm() {
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
    euBase: '',
    largeClients: '',
    largeEuClients: '',
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

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Assessment form submitted:', formData);
    // Handle form submission here
  };

  return (
      <section className="relative lg:pt-vw44 lg:pb-vw200 py-[60px] sm:py-[120px]">
        <span
          style={{
            background: "linear-gradient(180deg, #7FFF6B 3.25%, rgba(173, 255, 160, 0.80) 30.18%, rgba(239, 255, 236, 0.50) 66.1%, rgba(241, 255, 238, 0.10) 96.62%)",
          }}
          className="atlwh_Full pointer-events-none"
        ></span>
        <span
          style={{
            background: "linear-gradient(181deg, #FFF 42.57%, #7FFF6B 99.81%)",
          }}
          className="atlwh_Full lg:h-vw190 h-[30%] top-[unset] bottom-0 pointer-events-none"
        ></span>
        <div className="relative z-[2]">
          <Content
            tag="CSRD/VSME Assessment"
            heading="Should you start VSME/ESG reporting?"
            headingClasses='text-black'
            desc="Answer the assessment below, and check if you should start your VSME/ESG reporting journey"
            wrapperWidth={"lg:w-[65.9027777778vw]"}
            descWidth={"lg:w-[53vw]"}
          />
          
          {/* Form Section */}
        <div className="md:max-w-2xl lg:max-w-xl mx-auto bg-white rounded-xl p-8 shadow-lg mt-10">
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
                  required
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
                  required
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
                required
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
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Phone Number */}
            <PhoneNumberInput
              value={formData.phoneNumber}
              onChange={(value) => setFormData(prev => ({ ...prev, phoneNumber: value }))}
              countryCode={formData.phoneCountry}
              onCountryChange={(countryCode) => setFormData(prev => ({ ...prev, phoneCountry: countryCode }))}
              required
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

            {/* Company Industry */}
            <div>
              <label htmlFor="companyIndustry" className="block text-sm font-medium text-gray-700 mb-2">
                Company Industry
              </label>
              <select
                id="companyIndustry"
                name="companyIndustry"
                value={formData.industry}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select</option>
                <option value="technology">Technology</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="retail">Retail</option>
                <option value="energy">Energy</option>
                <option value="consulting">Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Employee Count */}
            <div>
              <label htmlFor="numberofemployees" className="block text-sm font-medium text-gray-700 mb-2">
                How many employees does your organization have?
              </label>
              <select
                id="numberofemployees"
                name="numberofemployees"
                value={formData.numberofemployees}
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

            {/* Is your company based in the EU? */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Is your company based in the EU?
              </label>
              <div className="flex items-center gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="euBase"
                    value="yes"
                    checked={formData.euBase === 'yes'}
                    onChange={() => handleRadioChange('euBase', 'yes')}
                    className="mr-2 text-green-600 border-gray-300 focus:ring-green-500"
                  />
                  <span className="text-gray-700">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="euBase"
                    value="no"
                    checked={formData.euBase === 'no'}
                    onChange={() => handleRadioChange('euBase', 'no')}
                    className="mr-2 text-green-600 border-gray-300 focus:ring-green-500"
                  />
                  <span className="text-gray-700">No</span>
                </label>
              </div>
            </div>

            {/* Does your company have clients that are large companies? */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Does your company have clients that are large companies (companies that have more than 1000 employees)?
              </label>
              <div className="flex items-center gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="largeClients"
                    value="yes"
                    checked={formData.largeClients === 'yes'}
                    onChange={() => handleRadioChange('largeClients', 'yes')}
                    className="mr-2 text-green-600 border-gray-300 focus:ring-green-500"
                  />
                  <span className="text-gray-700">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="largeClients"
                    value="no"
                    checked={formData.largeClients === 'no'}
                    onChange={() => handleRadioChange('largeClients', 'no')}
                    className="mr-2 text-green-600 border-gray-300 focus:ring-green-500"
                  />
                  <span className="text-gray-700">No</span>
                </label>
              </div>
            </div>

            {/* How many large EU clients does your company have? */}
            <div>
              <label htmlFor="largeEUClientsCount" className="block text-sm font-medium text-gray-700 mb-2">
                How many large EU clients (more than 1000 employees) does your company have?
              </label>
              <select
                id="largeEUClientsCount"
                name="largeEuClients"
                value={formData.largeEuClients}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select</option>
                <option value="0">0</option>
                <option value="1-5">1-5</option>
                <option value="6-10">6-10</option>
                <option value="11-25">11-25</option>
                <option value="26-50">26-50</option>
                <option value="50+">50+</option>
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
                required
                className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label htmlFor="consent" className="text-sm text-gray-700">
                By submitting this form, you are agreeing that GreenDash may store and process your personal data as described in our{' '}
                <Link href="/privacy-policy" className="text-[#6FE451] hover:text-green-700 underline">
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="bg-[#6FE451] hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Get your results
              </button>
            </div>
          </form>
        </div>
        </div>
      </section>
  );
}
