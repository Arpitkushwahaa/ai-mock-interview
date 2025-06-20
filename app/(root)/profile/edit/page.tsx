import React from 'react';
import Link from 'next/link';
import { getCurrentUser } from '@/lib/actions/auth.action';
import { updateUserProfile } from '@/lib/actions/profile.action';

// Server component that doesn't rely on React hooks
export default async function EditProfilePage() {
  const user = await getCurrentUser();
  
  if (!user) {
    return (
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-2xl font-bold text-primary-100 mb-6">Edit Profile</h1>
        <p className="text-light-100">Unable to load user profile. Please sign in again.</p>
        <div className="mt-4">
          <Link 
            href="/profile" 
            className="text-primary-100 hover:underline"
          >
            Return to Profile
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-2xl mx-auto bg-dark-200 rounded-xl p-8 border border-border">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-primary-100">Edit Profile</h1>
          <Link 
            href="/profile" 
            className="text-light-100 hover:text-primary-100 transition-colors"
          >
            Cancel
          </Link>
        </div>
        
        <form action={updateUserProfile}>
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-light-100 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={user.name || ''}
                className="w-full px-4 py-2 bg-dark-100 border border-border rounded-md text-light-100 focus:outline-none focus:ring-2 focus:ring-primary-100"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-light-100 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue={user.email || ''}
                className="w-full px-4 py-2 bg-dark-100 border border-border rounded-md text-light-100 focus:outline-none focus:ring-2 focus:ring-primary-100"
                disabled
              />
              <p className="text-light-400 text-sm mt-1">Email cannot be changed</p>
            </div>
            
            <div>
              <label htmlFor="bio" className="block text-light-100 mb-2">Bio</label>
              <textarea
                id="bio"
                name="bio"
                rows={4}
                defaultValue={''}
                className="w-full px-4 py-2 bg-dark-100 border border-border rounded-md text-light-100 focus:outline-none focus:ring-2 focus:ring-primary-100"
              />
            </div>
          </div>
          
          <div className="mt-8 flex justify-between">
            <Link 
              href="/profile" 
              className="px-6 py-2 bg-dark-100 hover:bg-dark-50 text-light-100 rounded-full transition-colors border border-border"
            >
              Cancel
            </Link>
            <button 
              type="submit" 
              className="px-6 py-2 bg-primary-100 hover:bg-primary-200 text-white rounded-full transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
