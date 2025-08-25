'use client';

import { useState, useEffect } from 'react';

interface CountryCode {
  code: string;
  flag: string;
  name: string;
  dialCode: string;
}

interface PhoneNumberInputProps {
  value: string;
  onChange: (value: string) => void;
  countryCode: string;
  onCountryChange: (countryCode: string) => void;
  required?: boolean;
  className?: string;
  label?: string;
}

const countries: CountryCode[] = [
  { code: 'US', flag: '🇺🇸', name: 'United States', dialCode: '+1' },
  { code: 'UK', flag: '🇬🇧', name: 'United Kingdom', dialCode: '+44' },
  { code: 'CA', flag: '🇨🇦', name: 'Canada', dialCode: '+1' },
  { code: 'AU', flag: '🇦🇺', name: 'Australia', dialCode: '+61' },
  { code: 'DE', flag: '🇩🇪', name: 'Germany', dialCode: '+49' },
  { code: 'FR', flag: '🇫🇷', name: 'France', dialCode: '+33' },
];

export default function PhoneNumberInput({
  value,
  onChange,
  countryCode,
  onCountryChange,
  required = false,
  className = '',
  label = 'Phone number'
}: PhoneNumberInputProps) {
  const [localValue, setLocalValue] = useState(value);

  // Get current country info
  const currentCountry = countries.find(c => c.code === countryCode) || countries[0];

  // Update local value when country changes
  useEffect(() => {
    const newValue = currentCountry.dialCode + (value.replace(/^\+\d+/, '') || '');
    setLocalValue(newValue);
  }, [countryCode, currentCountry.dialCode, value]);

  // Handle country change
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCountryCode = e.target.value;
    const newCountry = countries.find(c => c.code === newCountryCode);
    
    if (newCountry) {
      // Extract the number part (remove old country code)
      const numberPart = localValue.replace(/^\+\d+/, '');
      const newValue = newCountry.dialCode + numberPart;
      
      setLocalValue(newValue);
      onCountryChange(newCountryCode);
      // Don't call onChange here to avoid loops
    }
  };

  // Handle phone number input
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    // Prevent deletion of country code
    if (inputValue.length < currentCountry.dialCode.length) {
      return;
    }
    
    // Ensure the country code is always present
    if (!inputValue.startsWith(currentCountry.dialCode)) {
      const numberPart = inputValue.replace(/^\+\d+/, '');
      const correctedValue = currentCountry.dialCode + numberPart;
      setLocalValue(correctedValue);
      onChange(correctedValue);
      return;
    }
    
    setLocalValue(inputValue);
    onChange(inputValue);
  };

  // Handle focus to maintain cursor position
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    // Set cursor after country code if it's at the beginning
    if (e.target.selectionStart === 0) {
      e.target.setSelectionRange(currentCountry.dialCode.length, currentCountry.dialCode.length);
    }
  };

  // Handle click to prevent cursor before country code
  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.selectionStart && target.selectionStart < currentCountry.dialCode.length) {
      target.setSelectionRange(currentCountry.dialCode.length, currentCountry.dialCode.length);
    }
  };

  // Handle key down to prevent backspace on country code
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const cursorPos = target.selectionStart || 0;
    
    if (e.key === 'Backspace' && cursorPos <= currentCountry.dialCode.length) {
      e.preventDefault();
    }
  };

  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex gap-3">
        <select
          name="phoneCountry"
          value={countryCode}
          onChange={handleCountryChange}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.flag} {country.name}
            </option>
          ))}
        </select>
        <input
          type="tel"
          name="phoneNumber"
          value={localValue}
          onChange={handlePhoneChange}
          onFocus={handleFocus}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          required={required}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder={currentCountry.dialCode}
        />
      </div>
    </div>
  );
}
