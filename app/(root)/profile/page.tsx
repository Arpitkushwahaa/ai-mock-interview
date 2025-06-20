import React from 'react';
import { getCurrentUser } from '@/lib/actions/auth.action';
import Image from 'next/image';
import Link from 'next/link';

export default async function ProfilePage() {
  const user = await getCurrentUser();

  if (!user) {
    return (
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-2xl font-bold text-primary-100 mb-6">User Profile</h1>
        <p className="text-light-100">Unable to load user profile. Please sign in again.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto bg-dark-200 rounded-xl p-8 border border-border">
        <h1 className="text-2xl font-bold text-primary-100 mb-6">User Profile</h1>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full bg-dark-100 flex items-center justify-center border-2 border-primary-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-light-100">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
          
          <div className="flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-light-400 text-sm mb-1">Name</h3>
                <p className="text-light-100 text-lg">{user.name}</p>
              </div>
              
              <div>
                <h3 className="text-light-400 text-sm mb-1">Email</h3>
                <p className="text-light-100 text-lg">{user.email}</p>
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-light-400 text-sm mb-1">Account Status</h3>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-success-100"></span>
                  <p className="text-light-100">Active</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-primary-100 mb-4">Interview Statistics</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-dark-100 rounded-lg p-4 border border-border">
                  <h4 className="text-light-400 text-sm">Total Interviews</h4>
                  <p className="text-2xl font-bold text-light-100">0</p>
                </div>
                
                <div className="bg-dark-100 rounded-lg p-4 border border-border">
                  <h4 className="text-light-400 text-sm">Completed</h4>
                  <p className="text-2xl font-bold text-light-100">0</p>
                </div>
                
                <div className="bg-dark-100 rounded-lg p-4 border border-border">
                  <h4 className="text-light-400 text-sm">Average Score</h4>
                  <p className="text-2xl font-bold text-light-100">N/A</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between">
              <Link href="/" className="px-6 py-2 bg-dark-100 hover:bg-dark-50 text-light-100 rounded-full transition-colors border border-border inline-block">
                Back to Home
              </Link>
              <Link href="/profile/edit" className="px-6 py-2 bg-primary-100 hover:bg-primary-200 text-white rounded-full transition-colors inline-block">
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
