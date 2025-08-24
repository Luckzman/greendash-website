'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    <nav className="fixed top-0 left-0 right-0 bg-[#EEFFEC] z-30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/green-dash-logo.png"
              alt="Green Dash Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Platform Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsPlatformOpen(!isPlatformOpen)}
                className="flex items-center space-x-1 text-[rgba(0, 0, 0, 0.6)] hover:text-gray-900 font-regular transition-colors"
              >
                <span className="t ext-[rgba(0, 0, 0, 0.6)]">Platform</span>
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
                    Dashboard
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-[rgba(0, 0, 0, 0.6)] hover:bg-gray-100 font-regular">
                    Reporting
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-[rgba(0, 0, 0, 0.6)] hover:bg-gray-100 font-regular">
                    Analytics
                  </a>
                </div>
              )}
            </div>

            {/* Navigation Links */}
            <a href="#" className="text-[rgba(0, 0, 0, 0.6)] hover:text-gray-900 font-regular transition-colors">
              Academy
            </a>
            <a href="#" className="text-[rgba(0, 0, 0, 0.6)] hover:text-gray-900 font-regular transition-colors">
              Certification
            </a>
            <a href="#" className="text-[rgba(0, 0, 0, 0.6)] hover:text-gray-900 font-regular transition-colors">
              For Consultants
            </a>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <button className="bg-[#6FE451] text-white px-6 py-2 rounded-lg font-semibold hover:bg-lime-600 transition-colors">
                Contact Us
              </button>
              <button className="text-white bg-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-500 hover:text-white transition-colors">
                Join Our Waiting List
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-gray-700 hover:text-gray-900"
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

            {/* Mobile Platform Dropdown */}
            <div className="mb-4">
              <button
                onClick={() => setIsPlatformOpen(!isPlatformOpen)}
                className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900 font-medium py-2"
              >
                <span>Platform</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isPlatformOpen ? "rotate-180" : "rotate-0"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isPlatformOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">
                    Dashboard
                  </a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">
                    Reporting
                  </a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">
                    Analytics
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-2 mb-4">
              <a href="#" className="block text-gray-700 hover:text-gray-900 font-medium py-2">
                Academy
              </a>
              <a href="#" className="block text-gray-700 hover:text-gray-900 font-medium py-2">
                Certification
              </a>
              <a href="#" className="block text-gray-700 hover:text-gray-900 font-medium py-2">
                For Consultants
              </a>
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
    </nav>
  );
}
