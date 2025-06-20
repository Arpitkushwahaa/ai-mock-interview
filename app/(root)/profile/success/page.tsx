import React from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

// Using a server component to avoid React hook issues
export default function ProfileSuccessPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-2xl mx-auto bg-dark-200 rounded-xl p-8 border border-border">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold text-primary-100 mb-4">Profile Updated Successfully!</h1>
          <p className="text-light-100 mb-8">Your profile information has been updated.</p>
          
          <Link href="/profile" className="px-6 py-2 bg-primary-100 hover:bg-primary-200 text-white rounded-full transition-colors">
            Return to Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
