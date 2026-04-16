import { NextRequest, NextResponse } from 'next/server';

const INSTAGRAM_APP_ID = process.env.NEXT_PUBLIC_INSTAGRAM_APP_ID || process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;
const INSTAGRAM_APP_SECRET = process.env.INSTAGRAM_APP_SECRET || process.env.FACEBOOK_APP_SECRET;
const REDIRECT_URI = process.env.INSTAGRAM_REDIRECT_URI || 'http://localhost:3000/api/auth/instagram/callback';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.redirect(new URL('/?error=instagram_auth_failed', request.url));
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch('https://api.instagram.com/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: INSTAGRAM_APP_ID || '',
        client_secret: INSTAGRAM_APP_SECRET || '',
        grant_type: 'authorization_code',
        redirect_uri: REDIRECT_URI,
        code: code,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      console.error('Instagram token error:', tokenData);
      return NextResponse.redirect(new URL('/?error=instagram_token_failed', request.url));
    }

    const accessToken = tokenData.access_token;
    const instagramUserId = tokenData.user_id;

    // Fetch user profile
    const profileResponse = await fetch(
      `https://graph.instagram.com/${instagramUserId}?fields=id,username,account_type,media_count&access_token=${accessToken}`
    );
    const profileData = await profileResponse.json();

    // Redirect to dashboard with success
    return NextResponse.redirect(
      new URL(`/dashboard?instagram_connected=true&username=${profileData.username}`, request.url)
    );
  } catch (error) {
    console.error('Instagram OAuth error:', error);
    return NextResponse.redirect(new URL('/?error=instagram_auth_error', request.url));
  }
}
