# Terminal Portfolio-ls

A modern, terminal-themed portfolio website built with React, TypeScript, and Express.js. Features a dark theme with neon green accents, matrix rain background, and a command-line interface aesthetic

## 🚀 Features

- **Terminal Interface**: Command-line inspired UI with terminal windows and prompts
- **Matrix Rain**: Animated background with falling characters
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Interactive Sections**:
  - Hero section with animated typing effect
  - About section with skills showcase
  - Projects section with filtering capabilities
  - Experience timeline
  - Resume download and preview
  - Contact form with validation
- **Modern Tech Stack**: React, TypeScript, Tailwind CSS, Express.js
- **Real-time Contact Form**: Backend API for form submissions in it

## 🛠️ Tech Stack

### Frontend
- **React 19** with TypeScript
- **Parcel** for fast development and building
- **Tailwind CSS** for styling
- **Wouter** for routing
- **React Hook Form** with Zod validation
- **TanStack Query** for data fetching
- **Lucide React** for icons

### Backend
- **Express.js** with TypeScript
- **Zod** for schema validation
- **In-memory storage** (easily replaceable with database)

### Shared
- **TypeScript** types and schemas
- **Zod** validation schemas

## 📁 Project Structure

```
terminalportfolio/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/         # Basic UI components (Button, Card, etc.)
│   │   │   ├── contact-form.tsx
│   │   │   ├── matrix-rain.tsx
│   │   │   ├── navigation.tsx
│   │   │   └── terminal-window.tsx
│   │   ├── pages/          # Page components
│   │   │   ├── home.tsx
│   │   │   └── not-found.tsx
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css       # Global styles and Tailwind
│   ├── index.html
│   ├── package.json
│   └── tailwind.config.js
├── server/                 # Backend Express application
│   ├── src/
│   │   ├── index.ts        # Server entry point
│   │   ├── routes.ts       # API routes
│   │   └── storage.ts      # Data storage layer
│   └── package.json
├── shared/                 # Shared types and schemas
│   ├── src/
│   │   └── schema.ts       # Zod schemas and types
│   └── package.json
├── package.json            # Root package with dev scripts
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Arnazz10/Terminal-Portfolio.git
   cd Terminal-Portfolio
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install client dependencies
   cd client && npm install && cd ..
   
   # Install server dependencies
   cd server && npm install && cd ..
   
   # Install shared dependencies
   cd shared && npm install && cd ..
   ```

3. **Start development servers**
   ```bash
   # Start both API and frontend (recommended)
   npm run dev
   
   # Or start individually:
   # Terminal 1: API server
   cd server && npm run dev
   
   # Terminal 2: Frontend
   cd client && npm run dev
   ```

4. **Open your browser**
   - Frontend: http://localhost:1234
   - API: http://localhost:5174

## 📝 Available Scripts

### Root Level
- `npm run dev` - Start both API and frontend servers
- `npm run dev:server` - Start only the API server
- `npm run dev:client` - Start only the frontend

### Client
- `npm run dev` - Start Parcel dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Server
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm run start` - Start production server

## 🎨 Customization

### Colors
The color scheme is defined in `client/src/index.css` using CSS custom properties:
- `--primary`: Neon green (#39ff14)
- `--background`: Dark background
- `--foreground`: Light text

### Content
Update the following files to customize your portfolio:
- `client/src/pages/home.tsx` - Main content and data
- `client/src/components/contact-form.tsx` - Contact form behavior
- `server/src/routes.ts` - API endpoints

### Styling
- `client/src/index.css` - Global styles and theme
- `client/tailwind.config.js` - Tailwind configuration
- Individual component files for component-specific styles

## 🔧 Contact Form

The contact form uses EmailJS on the client; no backend endpoint is required.

## 🚀 Deployment

### Frontend (Static Hosting)
1. Build the client: `cd client && npm run build`
2. Deploy the `dist/` folder to any static hosting service (Netlify, Vercel, GitHub Pages)

### Backend (Server Hosting)
1. Build the server: `cd server && npm run build`
2. Deploy to any Node.js hosting service (Railway, Render, Heroku)

### Environment Variables
Create a `.env` file in the server directory:
```
PORT=5174
NODE_ENV=production
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Arnab** - [GitHub](https://github.com/Arnazz10)

---

Built with ❤️ and lots of ☕
# Force rebuild
