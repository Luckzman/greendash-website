'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPlatformOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-lime-50 px-6 py-4 shadow-sm border-b border-lime-100">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/green-dash-logo.png"
              alt="Green Dash"
              width={120}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </div>

          {/* Right Side - Navigation Links and Buttons */}
          <div className="flex items-center space-x-8">
            {/* Platform Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsPlatformOpen(!isPlatformOpen)}
                className="flex items-center text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
              >
                Platform
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isPlatformOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isPlatformOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">Features</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">Pricing</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">Integrations</a>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2">
              Academy
            </a>
            
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2">
              Certification
            </a>
            
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2">
              For Consultants
            </a>

            {/* Call-to-Action Buttons */}
            <div className="flex items-center space-x-4">
              <button className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Contact Us
              </button>
              <button className="bg-black hover:bg-gray-800 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Join Waiting List
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          {/* Mobile Header */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/green-dash-logo.png"
                alt="Green Dash"
                width={100}
                height={26}
                className="h-6 w-auto"
                priority
              />
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-lime-100 rounded-lg transition-colors"
            >
              <svg
                className="h-6 w-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="mt-4 pb-4 border-t border-lime-200">
              {/* Platform Section */}
              <div className="pt-4">
                <button
                  onClick={() => setIsPlatformOpen(!isPlatformOpen)}
                  className="flex items-center justify-between w-full text-left text-gray-700 font-medium py-2"
                >
                  Platform
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isPlatformOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                {isPlatformOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <a href="#" className="block text-gray-600 py-1">Features</a>
                    <a href="#" className="block text-gray-600 py-1">Pricing</a>
                    <a href="#" className="block text-gray-600 py-1">Integrations</a>
                  </div>
                )}
              </div>

              {/* Other Navigation Links */}
              <div className="pt-4 space-y-2">
                <a href="#" className="block text-gray-700 font-medium py-2">Academy</a>
                <a href="#" className="block text-gray-700 font-medium py-2">Certification</a>
                <a href="#" className="block text-gray-700 font-medium py-2">For Consultants</a>
              </div>

              {/* Mobile Call-to-Action Buttons */}
              <div className="pt-4 space-y-3">
                <button className="w-full bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md">
                  Contact Us
                </button>
                <button className="w-full bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md">
                  Join Waiting List
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
