/**
 * Vercel Web Analytics initialization
 * This file loads and initializes Vercel Web Analytics for the site
 * Using esm.sh CDN to load the module without a build step
 */
import { inject } from 'https://esm.sh/@vercel/analytics@2.0.1';

// Initialize Vercel Web Analytics
inject({
  mode: 'auto', // Automatically detect environment (production/development)
  debug: false, // Set to true to see debug logs in development
});
