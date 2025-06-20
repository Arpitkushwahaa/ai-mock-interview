import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="PrepWise Logo" width={38} height={32} />
            <h3 className="text-primary-100 text-xl">PrepWise</h3>
          </Link>
          <p className="mt-4 text-sm max-w-xs">
            AI-powered platform for preparing for mock interviews with instant feedback.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-links-column">
            <h4>Platform</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/interview">Start Interview</Link></li>
              <li><Link href="/">My Interviews</Link></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h4>Resources</h4>
            <ul>
              <li><Link href="/">Blog</Link></li>
              <li><Link href="/">FAQ</Link></li>
              <li><Link href="/">Support</Link></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h4>Legal</h4>
            <ul>
              <li><Link href="/">Privacy Policy</Link></li>
              <li><Link href="/">Terms of Service</Link></li>
              <li><Link href="/">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} PrepWise. All rights reserved.</p>
        <div className="footer-social">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
