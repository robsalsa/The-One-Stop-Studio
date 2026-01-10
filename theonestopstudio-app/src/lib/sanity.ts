import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'gs1shopm',
  dataset: 'production',
  apiVersion: '2025-11-28',
  useCdn: true, // Enable CDN for faster response and reduced server load
})
