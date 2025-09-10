'use client';

import Image from "next/image";
import Link from "next/link";

export default function Footer() {

  return (
    <footer className="bg-[#242424] text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Company Information */}
          <div className="md:col-span-7">
            {/* Logo */}
            <div className="mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                <Image
                  src="/green-dash-small-logo.svg"
                  alt="Green Dash Logo"
                  width={120}
                  height={40}
                  className="h-20 sm:h-28 w-auto"
                  suppressHydrationWarning
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
            </div>
            
            {/* Tagline */}
            <p className="text-[#F2FFED] text-sm sm:text-base mb-6 sm:mb-10">
              Sustainability Made Simple for SME
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/company/green-dash-ai" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column - Solutions & Quick Links */}
          <div className="md:col-span-5">
            <h3 className="text-white font-bold text-sm mb-4 sm:mb-6">Solutions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              <div>
                <ul className="space-y-3">
                  <li><Link href="/" className="text-[#7B7B7B] hover:text-white transition-colors text-sm">For SME</Link></li>
                  <li><Link href="/for-professionals" className="text-[#7B7B7B] hover:text-white transition-colors text-sm">For Professionals</Link></li>
                </ul>
              </div>
              
              <div>
                <ul className="space-y-3">
                  <li><Link href="/certification" className="text-[#7B7B7B] hover:text-white transition-colors text-sm">Certification</Link></li>
                  <li><Link href="/" className="text-[#7B7B7B] hover:text-white transition-colors text-sm">Academy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Divider Line */}
      <div className="border-t border-gray-600"></div>
      
      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Left Side - Copyright */}
          <div className="text-white text-xs sm:text-sm">
            © Copyright 2025. Greendash, LDA. All rights reserved.
          </div>
          
          {/* Right Side - Legal Links */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <Link href="/cookie-policy" className="text-white hover:text-[#7B7B7B] transition-colors">Cookie policy</Link>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <Link href="/privacy-policy" className="text-white hover:text-[#7B7B7B] transition-colors">Privacy policy</Link>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <Link href="/subprocessors" className="text-white hover:text-[#7B7B7B] transition-colors">Subprocessors</Link>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <Link href="/legal" className="text-white hover:text-[#7B7B7B] transition-colors">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
