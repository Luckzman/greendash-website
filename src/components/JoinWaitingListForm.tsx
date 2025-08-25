'use client';

import { useState } from 'react';
import PhoneNumberInput from './PhoneNumberInput';

export default function JoinWaitingListForm({ essentialKit }: { essentialKit?: boolean }) {
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
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#7FFF6B] via-[#EEFFEC] to-[#7FFF6B]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Top Badge */}
          <div className="inline-block bg-white rounded-[10px] px-10 py-1 mb-6 border border-[rgba(34, 34, 34, 0.1)] shadow-sm">
            <span className="text-sm font-medium text-black">{essentialKit ? 'CSRD/VSME Essentials Kit' : 'Join the Waiting List'}</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-b from-[#000000] to-[#001354] bg-clip-text text-transparent pb-6 leading-[70px]">
            {essentialKit ? 'Get your free CSRD/VSME Essentials Now!' : 'Hold Tight, GreenDash is Coming Soon'}
          </h1>
          
          {/* Description */}
          <p className="text-xl text-[#010D3E] max-w-3xl mx-auto leading-relaxed">
            {essentialKit ? 'Answer to the questions below and download your FREE CSRD/VSME Essentials Kit, so you can start your reporting journey!' : 'We&apos;re preparing for a launch that will make a real impact. By joining the waiting list, you&apos;ll secure your spot, receive early updates, and be the first to experience our platform'}
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
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                {essentialKit ? 'Download your CSRD/VSME Essentials PDF' : 'Join Waiting List'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
