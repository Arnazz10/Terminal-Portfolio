# 🚀 Deployment Guide - Terminal Portfolio

## 📋 Prerequisites
- Node.js 18+
- npm
- Git

## 🎯 Deployment Options

### 1. **Netlify** (Recommended - Easiest)
**Why Netlify?** Great for React apps, automatic builds, form handling, and free tier.

**Steps:**
1. Go to [netlify.com](https://netlify.com) and sign up
2. Click "New site from Git"
3. Connect your GitHub account
4. Select `Arnazz10/Terminal-Portfolio`
5. Configure build settings:
   - **Build command:** `cd client && npm run build`
   - **Publish directory:** `client/dist`
   - **Node version:** 18
6. Click "Deploy site"
7. Your site will be live at `https://random-name.netlify.app`

**Custom Domain:** Add your domain in Site settings → Domain management

---

### 2. **Vercel** (Alternative)
**Why Vercel?** Great performance, edge functions, and React optimization.

**Steps:**
1. Go to [vercel.com](https://vercel.com) and sign up
2. Click "New Project"
3. Import `Arnazz10/Terminal-Portfolio`
4. Configure:
   - **Framework Preset:** Other
   - **Root Directory:** ./
   - **Build Command:** `cd client && npm run build`
   - **Output Directory:** `client/dist`
5. Click "Deploy"

---

### 3. **GitHub Pages** (Free)
**Why GitHub Pages?** Free hosting, direct from your repo.

**Steps:**
1. Go to your repo → Settings → Pages
2. Source: "GitHub Actions"
3. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
    - run: npm ci
    - run: cd client && npm ci
    - run: cd client && npm run build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./client/dist
```

4. Push to main branch
5. Your site will be at `https://arnazz10.github.io/Terminal-Portfolio`

---

### 4. **Firebase Hosting** (Google)
**Why Firebase?** Fast CDN, easy setup, free tier.

**Steps:**
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Configure:
   - **Public directory:** `client/dist`
   - **Single-page app:** Yes
   - **Build command:** `cd client && npm run build`
5. Deploy: `firebase deploy`

---

### 5. **Surge.sh** (Simple)
**Why Surge?** Dead simple, no config needed.

**Steps:**
1. Install: `npm install -g surge`
2. Build: `cd client && npm run build`
3. Deploy: `cd client/dist && surge`
4. Follow prompts for domain

---

## 🔧 EmailJS Setup (Required for Contact Form)

1. Go to [emailjs.com](https://emailjs.com) and sign up
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template with variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
4. Get your credentials:
   - Service ID
   - Template ID
   - Public Key
5. Update `client/src/components/contact-form.tsx`:
   ```typescript
   const serviceId = "your_service_id";
   const templateId = "your_template_id";
   const publicKey = "your_public_key";
   ```

---

## 🚀 Quick Deploy Commands

```bash
# Install dependencies
npm install
cd client && npm install && cd ..

# Build for production
cd client && npm run build

# Deploy to Netlify (if using Netlify CLI)
npx netlify-cli deploy --prod --dir=client/dist

# Deploy to Vercel (if using Vercel CLI)
npx vercel --prod

# Deploy to Surge
cd client/dist && npx surge
```

---

## 🐛 Troubleshooting

**White Screen Issues:**
- Check browser console for errors
- Verify all imports are correct
- Ensure build completed successfully

**Contact Form Not Working:**
- Verify EmailJS credentials
- Check EmailJS service is active
- Test with a simple email first

**Build Failures:**
- Clear node_modules: `rm -rf node_modules client/node_modules`
- Reinstall: `npm install && cd client && npm install`
- Check Node.js version: `node --version` (should be 18+)

---

## 📱 Performance Tips

1. **Optimize Images:** Use WebP format, compress images
2. **Enable Gzip:** Most hosts do this automatically
3. **Use CDN:** Netlify/Vercel provide this automatically
4. **Minimize Bundle:** Parcel already does this

---

## 🔒 Security Notes

- EmailJS public key is safe to expose (it's meant to be public)
- No sensitive data in client-side code
- All form validation happens client-side

---

## 📞 Support

If you encounter issues:
1. Check the build logs in your hosting platform
2. Verify all environment variables are set
3. Test locally first: `cd client && npm run dev`
4. Check browser console for JavaScript errors

**Happy Deploying! 🎉**
