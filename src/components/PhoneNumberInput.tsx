'use client';

import { useState, useEffect } from 'react';

interface CountryCode {
  code: string;
  flag: string;
  name: string;
  dialCode: string;
  maxLength: number; // Maximum number of digits after country code
}

interface PhoneNumberInputProps {
  value: string;
  onChange: (value: string) => void;
  countryCode: string;
  onCountryChange: (countryCode: string) => void;
  required?: boolean;
  className?: string;
  label?: string;
  error?: string;
}

const countries: CountryCode[] = [
  { code: 'US', flag: '🇺🇸', name: 'United States', dialCode: '+1', maxLength: 10 },
  { code: 'UK', flag: '🇬🇧', name: 'United Kingdom', dialCode: '+44', maxLength: 10 },
  { code: 'CA', flag: '🇨🇦', name: 'Canada', dialCode: '+1', maxLength: 10 },
  { code: 'AU', flag: '🇦🇺', name: 'Australia', dialCode: '+61', maxLength: 9 },
  { code: 'DE', flag: '🇩🇪', name: 'Germany', dialCode: '+49', maxLength: 11 },
  { code: 'FR', flag: '🇫🇷', name: 'France', dialCode: '+33', maxLength: 9 },
  { code: 'PT', flag: '🇵🇹', name: 'Portugal', dialCode: '+351', maxLength: 9 },
  { code: 'ES', flag: '🇪🇸', name: 'Spain', dialCode: '+34', maxLength: 9 },
  { code: 'IT', flag: '🇮🇹', name: 'Italy', dialCode: '+39', maxLength: 9 },
  { code: 'NL', flag: '🇳🇱', name: 'Netherlands', dialCode: '+31', maxLength: 9 },
  { code: 'BE', flag: '🇧🇪', name: 'Belgium', dialCode: '+32', maxLength: 9 },
  { code: 'CH', flag: '🇨🇭', name: 'Switzerland', dialCode: '+41', maxLength: 9 },
  { code: 'AT', flag: '🇦🇹', name: 'Austria', dialCode: '+43', maxLength: 9 },
  { code: 'SE', flag: '🇸🇪', name: 'Sweden', dialCode: '+46', maxLength: 9 },
  { code: 'NO', flag: '🇳🇴', name: 'Norway', dialCode: '+47', maxLength: 9 },
  { code: 'DK', flag: '🇩🇰', name: 'Denmark', dialCode: '+45', maxLength: 9 },
  { code: 'FI', flag: '🇫🇮', name: 'Finland', dialCode: '+358', maxLength: 9 },
  { code: 'EE', flag: '🇪🇪', name: 'Estonia', dialCode: '+372', maxLength: 9 },
  { code: 'LT', flag: '🇱🇹', name: 'Lithuania', dialCode: '+370', maxLength: 9 },
  { code: 'LV', flag: '🇱🇻', name: 'Latvia', dialCode: '+371', maxLength: 9 },
];

export default function PhoneNumberInput({
  value,
  onChange,
  countryCode,
  onCountryChange,
  required = false,
  className = '',
  label = 'Phone number',
  error
}: PhoneNumberInputProps) {
  const [localValue, setLocalValue] = useState(value);

  // Get current country info
  const currentCountry = countries.find(c => c.code === countryCode) || countries[0];

  // Update local value when country changes (but not when value changes from user input)
  useEffect(() => {
    // Only update if the country code actually changed, not when user is typing
    if (value && !value.startsWith(currentCountry.dialCode)) {
      const numberPart = value.replace(/^\+\d+/, '');
      const newValue = currentCountry.dialCode + numberPart;
      setLocalValue(newValue);
    }
  }, [countryCode, currentCountry.dialCode, value]);

  // Handle country change
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCountryCode = e.target.value;
    const newCountry = countries.find(c => c.code === newCountryCode);
    
    if (newCountry) {
      // Extract the number part (remove old country code)
      const numberPart = localValue.replace(/^\+\d+/, '');
      const newValue = newCountry.dialCode + numberPart;
      
      console.log('Country changed to:', newCountryCode, 'Dial code:', newCountry.dialCode, 'New value:', newValue);
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
    
    // Extract the number part (after country code) and filter out non-numeric characters
    const numberPart = inputValue.substring(currentCountry.dialCode.length);
    const filteredNumberPart = numberPart.replace(/[^\d]/g, ''); // Only allow digits
    
    // Limit the number of digits based on country's max length
    const limitedNumberPart = filteredNumberPart.substring(0, currentCountry.maxLength);
    const finalValue = currentCountry.dialCode + limitedNumberPart;
    
    console.log('Phone input - Input:', inputValue, 'Country:', currentCountry.dialCode, 'Number part:', numberPart, 'Filtered:', filteredNumberPart, 'Final:', finalValue);
    setLocalValue(finalValue);
    onChange(finalValue);
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
          pattern="\+\d+.*"
          className={`flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder={currentCountry.dialCode}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
