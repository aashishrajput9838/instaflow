// Instagram API utility functions

const INSTAGRAM_BASE_URL = 'https://graph.instagram.com';

export interface InstagramProfile {
  id: string;
  username: string;
  account_type: string;
  media_count: number;
}

export interface InstagramMedia {
  id: string;
  caption?: string;
  media_type: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  like_count?: number;
  comments_count?: number;
}

// Fetch Instagram profile data
export async function getInstagramProfile(accessToken: string): Promise<InstagramProfile> {
  const response = await fetch(
    `${INSTAGRAM_BASE_URL}/me?fields=id,username,account_type,media_count&access_token=${accessToken}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch Instagram profile');
  }
  
  return response.json();
}

// Fetch Instagram media
export async function getInstagramMedia(
  accessToken: string, 
  limit: number = 20
): Promise<InstagramMedia[]> {
  const response = await fetch(
    `${INSTAGRAM_BASE_URL}/me/media?fields=id,caption,media_type,media_url,permalink,timestamp,like_count,comments_count&limit=${limit}&access_token=${accessToken}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch Instagram media');
  }
  
  const data = await response.json();
  return data.data || [];
}

// Exchange short-lived token for long-lived token (valid for 60 days)
export async function getLongLivedToken(shortLivedToken: string): Promise<string> {
  const response = await fetch(
    `${INSTAGRAM_BASE_URL}/access_token?grant_type=ig_exchange_token&client_secret=${process.env.INSTAGRAM_APP_SECRET}&access_token=${shortLivedToken}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to exchange token');
  }
  
  const data = await response.json();
  return data.access_token;
}

// Refresh long-lived token
export async function refreshLongLivedToken(longLivedToken: string): Promise<string> {
  const response = await fetch(
    `${INSTAGRAM_BASE_URL}/refresh_access_token?grant_type=ig_refresh_token&access_token=${longLivedToken}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to refresh token');
  }
  
  const data = await response.json();
  return data.access_token;
}
