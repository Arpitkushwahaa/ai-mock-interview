import { NextResponse } from 'next/server';
import { signOut } from '@/lib/actions/auth.action';

export async function POST() {
  try {
    // Call the server action to clear the session cookie
    await signOut();
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error signing out:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
