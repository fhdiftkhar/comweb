# Vercel Deployment Guide

## Quick Deploy

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

## Manual Deployment Steps

1. **Push to GitHub** (if using Git):
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js

## Environment Variables (if needed)

If you need to add environment variables later:
- Go to your Vercel project dashboard
- Navigate to Settings → Environment Variables
- Add any required variables

## Custom Domain

After deployment:
1. Go to your Vercel project dashboard
2. Navigate to Settings → Domains
3. Add your custom domain (buildoza.online)

## Build Configuration

Your project is already configured with:
- ✅ Next.js 15.3.4
- ✅ TypeScript support
- ✅ Tailwind CSS
- ✅ Optimized images
- ✅ SEO metadata
- ✅ Security headers
- ✅ Standalone output

## Performance Optimizations

- Images are optimized with Next.js Image component
- Static assets are cached
- Security headers are configured
- Compression is enabled
- ETags are disabled for better caching

## Troubleshooting

If deployment fails:
1. Check the build logs in Vercel dashboard
2. Ensure all dependencies are in package.json
3. Verify TypeScript compilation passes locally
4. Check for any environment variable requirements

## Post-Deployment

After successful deployment:
1. Test all pages and functionality
2. Verify contact form works
3. Check SEO metadata
4. Test responsive design
5. Verify performance with Lighthouse 