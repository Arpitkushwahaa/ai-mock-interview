"use client";

import * as React from 'react';
import { useRouter } from 'next/navigation';

// React 19 compatible state management
function useFormState() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState('');
  
  return {
    isSubmitting,
    setIsSubmitting,
    error,
    setError
  };
}

interface ProfileFormProps {
  user: {
    id: string;
    name?: string;
    email?: string;
  };
  updateAction: (formData: FormData) => Promise<any>;
}

export default function ProfileForm({ user, updateAction }: ProfileFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setError('');
    
    try {
      // Client-side validation
      const name = formData.get('name') as string;
      if (!name || name.trim() === '') {
        setError('Name is required');
        setIsSubmitting(false);
        return;
      }
      
      // Submit the form using the provided action
      const result = await updateAction(formData);
      
      if (result && !result.success) {
        setError(result.message || 'Failed to update profile');
        setIsSubmitting(false);
      } else {
        // Force a refresh of the current route
        router.refresh();
        
        // Redirect to success page
        router.push('/profile/success');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('An unexpected error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <form action={handleSubmit}>
      {error && (
        <div className="bg-error-100 bg-opacity-10 border border-error-100 text-error-100 px-4 py-3 rounded-md mb-6">
          {error}
        </div>
      )}
      
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
        <button
          type="button"
          onClick={() => router.push('/profile')}
          className="px-6 py-2 bg-dark-100 hover:bg-dark-50 text-light-100 rounded-full transition-colors border border-border"
        >
          Cancel
        </button>
        <button 
          type="submit" 
          className="px-6 py-2 bg-primary-100 hover:bg-primary-200 text-white rounded-full transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
}
