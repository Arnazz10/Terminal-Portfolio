import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

const API_BASE = (typeof window !== 'undefined') ? `${window.location.protocol}//${window.location.hostname}:5174` : 'http://localhost:5174';

export async function apiRequest(method: string, url: string, data?: any) {
  const isAbsolute = url.startsWith('http://') || url.startsWith('https://');
  const fullUrl = isAbsolute ? url : `${API_BASE}${url}`;
  const res = await fetch(fullUrl, {
    method,
    headers: { "Content-Type": "application/json" },
    body: data ? JSON.stringify(data) : undefined,
  });
  return res;
}


