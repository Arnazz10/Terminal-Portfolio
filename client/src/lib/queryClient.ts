import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

// During local development use the backend server on port 5174.
// In production (or when deployed to Vercel) use the same origin under /api.
let API_BASE = 'http://localhost:5174';
if (typeof window !== 'undefined') {
  const isDevHost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  // If running the dev client (Parcel on :3000) keep localhost:5174, otherwise use origin/api for serverless.
  API_BASE = isDevHost ? 'http://localhost:5174' : `${window.location.origin}/api`;
}

export async function apiRequest(method: string, url: string, data?: any) {
  const isAbsolute = url.startsWith('http://') || url.startsWith('https://');
  // If url is a relative path like '/health' we call `${API_BASE}${url}` which resolves to '/api/health' in browser.
  const fullUrl = isAbsolute ? url : `${API_BASE}${url.startsWith('/') ? '' : '/'}${url}`;
  const res = await fetch(fullUrl, {
    method,
    headers: { "Content-Type": "application/json" },
    body: data ? JSON.stringify(data) : undefined,
  });
  return res;
}


