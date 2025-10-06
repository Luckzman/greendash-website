'use client';

import { useState, useEffect } from 'react';
import Toast from './Toast';

interface EmailVerificationModalProps {
  isOpen: boolean;
  email: string;
  onClose: () => void;
  onVerified: () => void;
}

export default function EmailVerificationModal({ 
  isOpen, 
  email, 
  onClose, 
  onVerified 
}: EmailVerificationModalProps) {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [toast, setToast] = useState<{
    type: 'success' | 'error';
    message: string;
    isVisible: boolean;
  }>({
    type: 'success',
    message: '',
    isVisible: false
  });

  // Reset timer when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeLeft(600);
      setCode('');
    }
  }, [isOpen]);

  // Countdown timer
  useEffect(() => {
    if (!isOpen || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, timeLeft]);

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message, isVisible: true });
    setTimeout(() => {
      setToast(prev => ({ ...prev, isVisible: false }));
    }, 5000);
  };

  const handleVerify = async () => {
    if (!code.trim()) {
      showToast('error', 'Please enter the verification code');
      return;
    }

    if (code.length !== 6) {
      showToast('error', 'Please enter a complete 6-digit code');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, action: 'verify', code })
      });

      const data = await response.json();

      if (data.success) {
        showToast('success', 'Email verified successfully!');
        setTimeout(() => {
          onVerified();
        }, 1500);
      } else {
        showToast('error', data.error || 'Verification failed');
      }
    } catch (error) {
      showToast('error', 'Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    setIsResending(true);
    try {
      const response = await fetch('/api/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, action: 'send' })
      });

      const data = await response.json();

      if (data.success) {
        showToast('success', 'New verification code sent!');
        setTimeLeft(600); // Reset timer
        setCode(''); // Clear current code
      } else {
        showToast('error', data.error || 'Failed to resend code');
      }
    } catch (error) {
      showToast('error', 'Network error. Please try again.');
    } finally {
      setIsResending(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && code.length === 6 && !isLoading) {
      handleVerify();
    }
  };

  if (!isOpen) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
          <div className="text-center">
            {/* Header */}
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Verify Your Email
              </h2>
              <p className="text-gray-600 mb-2">
                We've sent a 6-digit verification code to:
              </p>
              <p className="font-semibold text-green-600 mb-6">{email}</p>
            </div>
            
            {/* Verification Code Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter verification code
              </label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                onKeyPress={handleKeyPress}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-2xl font-mono tracking-widest focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                placeholder="000000"
                maxLength={6}
                disabled={isLoading}
                autoComplete="one-time-code"
              />
            </div>

            {/* Timer */}
            <div className="mb-6">
              {timeLeft > 0 ? (
                <p className="text-sm text-gray-500">
                  Code expires in: <span className="font-semibold text-orange-600">{formatTime(timeLeft)}</span>
                </p>
              ) : (
                <p className="text-sm text-red-500 font-semibold">
                  Verification code has expired
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-4">
              <button
                onClick={handleVerify}
                disabled={isLoading || !code.trim() || code.length !== 6 || timeLeft <= 0}
                className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Verifying...
                  </div>
                ) : 'Verify Email'}
              </button>
              
              <button
                onClick={handleResend}
                disabled={isResending || timeLeft > 540} // Can't resend in first minute
                className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
              >
                {isResending ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : 'Resend'}
              </button>
            </div>

            {/* Cancel Button */}
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
            >
              Cancel
            </button>

            {/* Help Text */}
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-xs text-blue-700">
                <strong>Tip:</strong> Check your spam folder if you don't see the email. The code expires in 10 minutes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      {toast.isVisible && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(prev => ({ ...prev, isVisible: false }))}
        />
      )}
    </>
  );
}
