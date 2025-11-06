# Terminal Portfolio

<img src="assets/screenshot.png" alt="Terminal Portfolio preview" width="100%" />

A modern, terminal-style portfolio website with a CLI-inspired interface. Built with a full-stack architecture featuring React frontend, Express backend, and styled with TailwindCSS.

## ✨ Features

- 🖥️ Terminal-inspired UI with interactive command input
- 🎨 Matrix rain animation background
- 📱 Fully responsive design
- 🌐 Full-stack architecture with REST API
- 📧 Contact form with EmailJS integration
- 🎯 Smooth scrolling navigation
- ⚡ Fast performance with Vite
- 🔒 Type-safe with TypeScript
- 📊 Analytics integration with Vercel

## 🛠️ Tech Stack

### Frontend
- **React** (v19.1.1) - UI library
- **TypeScript** (v5.6.3) - Type safety
- **Vite** (v5.4.21) - Build tool and dev server
- **TailwindCSS** (v3.4.15) - Utility-first CSS framework
- **Wouter** (v3.7.1) - Lightweight routing
- **React Hook Form** (v7.62.0) - Form management
- **Zod** (v4.1.7) - Schema validation
- **Lucide React** - Icon library
- **EmailJS** - Email service integration
- **@vercel/analytics** - Analytics tracking
- **@tanstack/react-query** - Data fetching and caching

### Backend
- **Node.js** - JavaScript runtime
- **Express** (v5.1.0) - Web framework
- **TypeScript** (v5.9.2) - Type safety
- **Drizzle ORM** (v0.44.5) - Database ORM
- **CORS** - Cross-origin resource sharing
- **Zod** (v4.1.7) - Schema validation

### Shared
- **TypeScript** - Shared type definitions
- **Drizzle ORM** - Shared database schemas
- **Drizzle Zod** - ORM-to-Zod schema conversion

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **tsx** - TypeScript execution for Node.js
- **Concurrently** - Run multiple dev servers

### Deployment & CI/CD
- **Vercel** - Frontend hosting
- **GitHub Actions** - Continuous integration
- **Node.js 18.x/20.x** - Runtime environments

## 📋 Prerequisites

- Node.js (v18.x or v20.x)
- npm or yarn
- Git

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Arnazz10/Terminal-Portfolio.git
cd Terminal-Portfolio
```

2. Install dependencies for all packages:
```bash
# Install shared dependencies
npm ci --prefix shared

# Install server dependencies
npm ci --prefix server

# Install client dependencies
npm ci --prefix client
```

### Development

#### Run All Services
To run both frontend and backend concurrently:
```bash
npm run dev
```

#### Run Services Individually

**Frontend only (port 3000):**
```bash
npm run dev:client
# or
cd client && npm run dev
```

**Backend only (port 5174):**
```bash
npm run dev:server
# or
cd server && npm run dev
```

**Build shared package:**
```bash
cd shared && npm run build
```

### Building for Production

#### Build Shared Package
```bash
cd shared
npm run build
```

#### Build Server
```bash
cd server
npm run build
```

#### Build Client
```bash
cd client
npm run build
```

The production build will be available in `client/dist/`.

### Running Production Build

#### Start Server
```bash
cd server
npm start
```

#### Preview Client Build
```bash
cd client
npm run preview
```

## 🧪 Testing & Linting

### Type Checking
```bash
# Client
cd client && npm run typecheck

# Server
cd server && npm run build
```

### Linting
```bash
cd client && npm run lint
```

## 📁 Project Structure

```
Terminal-Portfolio/
├── client/              # React frontend application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   └── main.tsx     # Entry point
│   ├── index.html       # HTML template
│   ├── vite.config.ts   # Vite configuration
│   ├── tailwind.config.js # TailwindCSS config
│   └── package.json
├── server/              # Express backend API
│   ├── src/
│   │   ├── index.ts     # Server entry point
│   │   ├── routes.ts    # API routes
│   │   └── storage.ts   # Database operations
│   ├── tsconfig.json
│   └── package.json
├── shared/              # Shared types and schemas
│   ├── src/
│   ├── tsconfig.json
│   └── package.json
├── api/                 # Serverless API functions
├── .github/
│   └── workflows/       # CI/CD workflows
└── package.json         # Root package config
```

## 🌐 Deployment

### Vercel Deployment

The frontend is configured for Vercel deployment:

1. Connect your repository to Vercel
2. Configure build settings:
   - Build Command: `cd client && npm ci && npm run build`
   - Output Directory: `client/dist`
3. Deploy

### Environment Variables

No environment variables are required for the basic setup. If you add features that need configuration, create:
- `.env` files for local development
- Configure secrets in your deployment platform

## 🎨 Customization

### Styling
- Modify `client/tailwind.config.js` for theme customization
- Update CSS variables in your global styles
- TailwindCSS provides utility classes for rapid styling

### Content
- Update portfolio content in `client/src/pages/home.tsx`
- Modify project data in the `projectsData` array
- Update personal information and links

### Components
- Reusable components are in `client/src/components/`
- UI components follow consistent patterns
- Easy to extend and customize

## 📝 Scripts Reference

### Root Level
- `npm run dev` - Run all services concurrently
- `npm run dev:client` - Run client only
- `npm run dev:server` - Run server only

### Client
- `npm run dev` - Start dev server (port 3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code
- `npm run typecheck` - Check types

### Server
- `npm run dev` - Start dev server with watch mode
- `npm run build` - Build TypeScript
- `npm start` - Start production server

### Shared
- `npm run build` - Build shared package

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/my-feature`
5. Submit a pull request

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Arnab Kumar Mal**
- GitHub: [@Arnazz10](https://github.com/Arnazz10)
- LinkedIn: [arnab-mal-74454127a](https://linkedin.com/in/arnab-mal-74454127a)
- Twitter: [@arnabmaal](https://x.com/arnabmaal)
- Email: arnabmal665@gmail.com

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by terminal interfaces
- Community-driven development

---

Made with ❤️ and ☕