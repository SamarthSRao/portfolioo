import { NextResponse } from 'next/server';

// This is a zero-config visitor counter using a public API.
// In a production environment, you might want to replace this with 
// Upstash Redis or Cloudflare KV for better reliability and control.

export const runtime = 'edge';

export async function GET() {
  try {
    // We use counterapi.dev which is a free JSON-based counter
    // The namespace 'samarth-portfolio' ensures your count is unique to your site
    const response = await fetch('https://api.counterapi.dev/v1/samarth-portfolio/visits/up', {
      method: 'GET',
      next: { revalidate: 0 } // Ensure we always get the latest count
    });

    if (!response.ok) {
      throw new Error('Failed to fetch count');
    }

    const data = await response.json();
    
    return NextResponse.json({ 
      count: data.count,
      status: 'success'
    });
  } catch (error) {
    console.error('Visitor API Error:', error);
    return NextResponse.json({ 
      count: 2075, // Fallback to a placeholder if service is down
      status: 'error' 
    }, { status: 500 });
  }
}
