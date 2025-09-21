'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  
  // Determine if we're on the for-professionals page
  const isForProfessionalsPage = pathname === '/for-professionals' || pathname === '/professional-contact-us' || pathname === '/getting-started';

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Close desktop dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPlatformOpen(false);
      }
    }

    // Only add listener for desktop dropdown
    if (window.innerWidth >= 1024) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile dropdown when mobile menu closes
  useEffect(() => {
    if (!isMobileOpen) {
      setIsPlatformOpen(false);
    }
  }, [isMobileOpen]);

  // Handle mobile dropdown clicks
  const handleMobileDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlatformOpen(!isPlatformOpen);
  };

  // Handle mobile menu clicks to close dropdown when clicking outside
  const handleMobileMenuClick = (e: React.MouseEvent) => {
    // If clicking on the mobile menu container but not on the dropdown button or links
    if (e.target === e.currentTarget) {
      setIsPlatformOpen(false);
    }
  };

  // Smooth scroll to features section
  const scrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === '/for-professionals') {
      // On for-professionals page, scroll to pro-features section
      const proFeaturesSection = document.getElementById('pro-features');
      if (proFeaturesSection) {
        proFeaturesSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else if (isForProfessionalsPage) {
      // On other professional pages, navigate to for-professionals page with hash
      window.location.href = '/for-professionals#pro-features';
    } else {
      // On other pages, scroll to features section
      const featuresSection = document.getElementById('features');
      if (featuresSection) {
        featuresSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    // Close mobile menu if open
    setIsMobileOpen(false);
    setIsPlatformOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isForProfessionalsPage ? 'bg-[#131313]' : 'bg-[#EEFFEC]'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={isForProfessionalsPage ? "/green-dash-light-logo.svg" : "/green-dash-logo.png"}
                alt="Green Dash Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                suppressHydrationWarning
                style={{ width: 'auto', height: 'auto' }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Platform Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsPlatformOpen(!isPlatformOpen)}
                className={`flex items-center space-x-1 font-regular transition-colors ${
                  isForProfessionalsPage 
                    ? 'text-white hover:text-gray-300' 
                    : 'text-[rgba(0, 0, 0, 0.6)] hover:text-gray-900'
                }`}
              >
                <span className={isForProfessionalsPage ? 'text-white' : 'text-[rgba(0, 0, 0, 0.6)]'}>Platform</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isPlatformOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isPlatformOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                  <a href="#features" onClick={scrollToFeatures} className="block px-4 py-2 text-sm text-[rgba(0, 0, 0, 0.6)] hover:bg-gray-100 font-regular">
                    Features
                  </a>
                  <a href="/pricing" className="block px-4 py-2 text-sm text-[rgba(0, 0, 0, 0.6)] hover:bg-gray-100 font-regular">
                    Pricing
                  </a>
                </div>
              )}
            </div>

            {/* Navigation Links */}
            <a href="#" className={`font-inter font-regular transition-colors ${
              isForProfessionalsPage 
                ? 'text-white hover:text-gray-300' 
                : 'text-[rgba(0, 0, 0, 0.6)] hover:text-gray-900'
            }`}>
              Academy
            </a>
            <Link href="/certification" className={`font-inter font-regular transition-colors ${
              isForProfessionalsPage 
                ? 'text-white hover:text-gray-300' 
                : 'text-[rgba(0,0, 0, 0.6)] hover:text-gray-900'
            }`}>
              Certification
            </Link>
            <Link 
              href={isForProfessionalsPage ? "/" : "/for-professionals"} 
              className={`font-inter font-regular transition-colors ${
                isForProfessionalsPage 
                  ? 'text-white hover:text-gray-300' 
                  : 'text-[rgba(0, 0, 0, 0.6)] hover:text-gray-900'
              }`}
            >
              {isForProfessionalsPage ? "For SMEs" : "For Professionals"}
            </Link>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Link href={isForProfessionalsPage ? "/professional-contact-us" : "/contact-us"}>
                <button className="bg-[#6FE451] text-white px-6 py-2 rounded-lg font-inter font-semibold hover:bg-lime-600 transition-all duration-200 transform hover:-translate-y-0.5" style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)' }}>
                  Contact Us
                </button>
              </Link>
              <Link href={isForProfessionalsPage ? '/getting-started' :`/join-waiting-list`}>
                <button className={`px-6 py-2 rounded-lg font-inter font-semibold transition-all duration-200 transform hover:-translate-y-0.5 ${
                  isForProfessionalsPage 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-black text-white hover:bg-gray-500'
                }`} style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)' }}>
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex-shrink-0 z-50">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`p-3 rounded-md transition-colors border-2 bg-gray-800 ${
                isForProfessionalsPage 
                  ? "text-white hover:text-gray-300 hover:bg-[#6FE451] border-white" 
                  : "text-white hover:text-gray-200 hover:bg-[#6FE451] border-white"
              }`}
              aria-label="Toggle mobile menu"
              style={{ minWidth: '48px', minHeight: '48px' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200" ref={mobileMenuRef} onClick={handleMobileMenuClick}>
            {/* Mobile Platform Dropdown */}
            <div className="mb-4">
              <button
                onClick={handleMobileDropdownClick}
                className={`flex items-center justify-between w-full text-left font-medium py-2 ${
                  isForProfessionalsPage 
                    ? 'text-white hover:text-gray-300' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <span>Platform</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isPlatformOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isPlatformOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <a 
                    href="#features" 
                    onClick={scrollToFeatures}
                    className={`block text-sm ${
                      isForProfessionalsPage 
                        ? 'text-white hover:text-gray-300' 
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    Features
                  </a>
                  <a 
                    href="/pricing" 
                    onClick={() => setIsPlatformOpen(false)}
                    className={`block text-sm ${
                      isForProfessionalsPage 
                        ? 'text-white hover:text-gray-300' 
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    Pricing
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-2 mb-4">
              <a 
                href="#" 
                onClick={() => setIsPlatformOpen(false)}
                className={`block font-inter font-medium py-2 ${
                  isForProfessionalsPage 
                    ? 'text-white hover:text-gray-300' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Academy
              </a>
              <Link 
                href="/certification" 
                onClick={() => setIsPlatformOpen(false)}
                className={`block font-inter font-medium py-2 ${
                  isForProfessionalsPage 
                    ? 'text-white hover:text-gray-300' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Certification
              </Link>
              <Link 
                href={isForProfessionalsPage ? "/" : "/for-professionals"} 
                onClick={() => setIsPlatformOpen(false)}
                className={`block font-inter font-medium py-2 ${
                  isForProfessionalsPage 
                    ? 'text-white hover:text-gray-300' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {isForProfessionalsPage ? "For SMEs" : "For Professionals"}
              </Link>
            </div>

            {/* Mobile Call-to-Action Buttons */}
            <div className="pt-4 space-y-3">
              <Link href={isForProfessionalsPage ? "/professional-contact-us" : "/contact-us"}>
                <button 
                  onClick={() => setIsPlatformOpen(false)}
                  className="w-full bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-lg font-inter font-medium transition-all duration-200 transform hover:-translate-y-0.5"
                  style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)' }}
                >
                  Contact Us
                </button>
              </Link>
              <Link href={isForProfessionalsPage ? "/getting-started" : "/join-waiting-list"}>
                <button 
                  onClick={() => setIsPlatformOpen(false)}
                  className={`w-full px-6 py-3 rounded-lg mt-5 font-inter font-medium transition-all duration-200 transform hover:-translate-y-0.5 ${
                    isForProfessionalsPage 
                      ? 'bg-white text-black hover:bg-gray-200' 
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                  style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)' }}
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
