import { NextRequest, NextResponse } from 'next/server';

const INSTAGRAM_APP_ID = process.env.NEXT_PUBLIC_INSTAGRAM_APP_ID || process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;
const INSTAGRAM_APP_SECRET = process.env.INSTAGRAM_APP_SECRET || process.env.FACEBOOK_APP_SECRET;
const REDIRECT_URI = process.env.INSTAGRAM_REDIRECT_URI || 'http://localhost:3000/api/auth/instagram/callback';

export async function GET(request: NextRequest) {
  const authUrl = new URL('https://api.instagram.com/oauth/authorize');
  
  authUrl.searchParams.append('client_id', INSTAGRAM_APP_ID || '');
  authUrl.searchParams.append('redirect_uri', REDIRECT_URI);
  authUrl.searchParams.append('scope', 'user_profile,user_media');
  authUrl.searchParams.append('response_type', 'code');

  return NextResponse.redirect(authUrl.toString());
}
