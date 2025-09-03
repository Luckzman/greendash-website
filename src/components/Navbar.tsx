'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  
  // Determine if we're on the for-professionals page
  const isForProfessionalsPage = pathname === '/for-professionals';

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPlatformOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isForProfessionalsPage ? 'bg-black' : 'bg-[#EEFFEC]'}`}>
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
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
                  <a href="#" className="block px-4 py-2 text-sm text-[rgba(0, 0, 0, 0.6)] hover:bg-gray-100 font-regular">
                    Features
                  </a>
                  <a href="/pricing" className="block px-4 py-2 text-sm text-[rgba(0, 0, 0, 0.6)] hover:bg-gray-100 font-regular">
                    Pricing
                  </a>
                </div>
              )}
            </div>

            {/* Navigation Links */}
            <a href="#" className={`font-regular transition-colors ${
              isForProfessionalsPage 
                ? 'text-white hover:text-gray-300' 
                : 'text-[rgba(0, 0, 0, 0.6)] hover:text-gray-900'
            }`}>
              Academy
            </a>
            <Link href="/certification" className={`font-regular transition-colors ${
              isForProfessionalsPage 
                ? 'text-white hover:text-gray-300' 
                : 'text-[rgba(0,0, 0, 0.6)] hover:text-gray-900'
            }`}>
              Certification
            </Link>
            <Link 
              href={isForProfessionalsPage ? "/" : "/for-professionals"} 
              className={`font-regular transition-colors ${
                isForProfessionalsPage 
                  ? 'text-white hover:text-gray-300' 
                  : 'text-[rgba(0, 0, 0, 0.6)] hover:text-gray-900'
              }`}
            >
              {isForProfessionalsPage ? "For SMEs" : "For Professionals"}
            </Link>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Link href="/contact-us">
                <button className="bg-[#6FE451] text-white px-6 py-2 rounded-lg font-semibold hover:bg-lime-600 transition-colors">
                  Contact Us
                </button>
              </Link>
              <Link href="/join-waiting-list">
                <button className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  isForProfessionalsPage 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-black text-white hover:bg-gray-500'
                }`}>
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={isForProfessionalsPage ? "text-white hover:text-gray-300" : "text-gray-700 hover:text-gray-900"}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {/* Mobile Logo */}
            <div className="mb-4">
              <Link href="/">
                <Image
                  src={isForProfessionalsPage ? "/green-dash-light-logo.svg" : "/green-dash-logo.png"}
                  alt="Green Dash Logo"
                  width={100}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Mobile Platform Dropdown */}
            <div className="mb-4">
              <button
                onClick={() => setIsPlatformOpen(!isPlatformOpen)}
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
                <div className="ml-4 mt-2 space-y-2">]
                  <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">
                    Features
                  </a>
                  <a href="/pricing" className="block text-sm text-gray-600 hover:text-gray-900">
                    Pricing
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-2 mb-4">
              <a href="#" className={`block font-medium py-2 ${
                isForProfessionalsPage 
                  ? 'text-white hover:text-gray-300' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}>
                Academy
              </a>
              <Link href="/certification" className={`block font-medium py-2 ${
                isForProfessionalsPage 
                  ? 'text-white hover:text-gray-300' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}>
                Certification
              </Link>
              <Link 
                href={isForProfessionalsPage ? "/" : "/for-professionals"} 
                className={`block font-medium py-2 ${
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
              <Link href="/contact-us">
                <button className="w-full bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md">
                  Contact Us
                </button>
              </Link>
              <Link href="/join-waiting-list">
                <button className={`w-full px-6 py-3 rounded-lg font-medium transition-colors shadow-md ${
                  isForProfessionalsPage 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-black text-white hover:bg-gray-800'
                }`}>
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
