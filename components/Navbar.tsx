"use client";
import Link from "next/link";
import Image from "next/image";
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/client';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      // Sign out from Firebase
      await signOut(auth);
      
      // Call the server action to clear the session cookie
      await fetch('/api/auth/signout', {
        method: 'POST',
      });
      
      // Redirect to sign-in page
      router.push('/sign-in');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center border-b border-border">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.svg" alt="PrepWise Logo" width={38} height={32} />
        <h2 className="text-primary-100 text-xl font-semibold">PrepWise</h2>
      </Link>

      <div className="flex items-center gap-4">
        <button 
          onClick={handleSignOut}
          className="text-light-100 hover:text-primary-100 transition-colors px-4 py-2 rounded-full border border-border hover:border-primary-100"
        >
          Sign Out
        </button>
        
        <Link href="/profile" className="flex items-center justify-center w-10 h-10 rounded-full bg-dark-200 border border-border hover:border-primary-100 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-light-100">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
