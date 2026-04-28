# <div align="center"><img src="https://img.shields.io/badge/Next.js-16.2.0-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" /> <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" /> <img src="https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></div>

<div align="center">
  <h1>🚀 InstaFlow (Sociafy)</h1>
  <p><strong>Advanced Platform for Social Media Analytics & Growth</strong></p>
  
  <p>Track performance, analyze audience insights, and grow your social media presence with powerful data-driven tools.</p>

  <p>
    <a href="#features">✨ Features</a> •
    <a href="#tech-stack">🛠️ Tech Stack</a> •
    <a href="#getting-started">🚀 Getting Started</a> •
    <a href="#project-structure">📁 Structure</a> •
    <a href="#api-documentation">📡 API</a> •
    <a href="#deployment">🌐 Deployment</a>
  </p>

  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=flat-square" alt="License" />
  <img src="https://img.shields.io/badge/Status-Active-success?style=flat-square" alt="Status" />
  <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square" alt="PRs Welcome" />
</div>

---

## 📸 Preview

<div align="center">
  <img src="https://via.placeholder.com/1200x600/gradient/pink-purple?text=Dashboard+Preview" alt="Dashboard Preview" width="100%" />
  <p><em>Beautiful analytics dashboard with real-time insights</em></p>
</div>

---

## ✨ Features

<table>
  <tr>
    <td width="50%">
      <h3>🔐 Authentication</h3>
      <ul>
        <li>✅ Google Sign-In (Firebase)</li>
        <li>✅ Facebook/Meta Login</li>
        <li>✅ Instagram OAuth Integration</li>
        <li>✅ Persistent Session Management</li>
      </ul>
    </td>
    <td width="50%">
      <h3>📊 Analytics Dashboard</h3>
      <ul>
        <li>📈 Real-time Performance Metrics</li>
        <li>👥 Audience Insights & Demographics</li>
        <li>💬 Sentiment Analysis</li>
        <li>⏱️ Optimal Posting Time Heatmap</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🔗 Instagram Integration</h3>
      <ul>
        <li>📤 ZIP Data Upload & Analysis</li>
        <li>👤 Follower/Following Comparison</li>
        <li>🔄 Mutuals & Non-followers Detection</li>
        <li>📱 Graph API Media Fetching</li>
      </ul>
    </td>
    <td width="50%">
      <h3>🎨 Modern UI/UX</h3>
      <ul>
        <li>🌗 Dark/Light Mode Support</li>
        <li>📱 Fully Responsive Design</li>
        <li>🎭 shadcn/ui Components</li>
        <li>✨ Smooth Animations</li>
      </ul>
    </td>
  </tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

### Frontend
<img src="https://img.shields.io/badge/Next.js-16.2.0-000?style=for-the-badge&logo=next.js" />
<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" />
<img src="https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript" />
<img src="https://img.shields.io/badge/Tailwind_CSS-4.2-06B6D4?style=for-the-badge&logo=tailwindcss" />

### UI Components
<img src="https://img.shields.io/badge/shadcn/ui-Latest-000?style=for-the-badge" />
<img src="https://img.shields.io/badge/Radix_UI-0F0F0F?style=for-the-badge&logo=radixui" />
<img src="https://img.shields.io/badge/Recharts-2.15-1B1B1B?style=for-the-badge" />
<img src="https://img.shields.io/badge/Lucide_Icons-Latest-F56565?style=for-the-badge" />

### Backend & Database
<img src="https://img.shields.io/badge/Firebase-12-DD2C00?style=for-the-badge&logo=firebase" />
<img src="https://img.shields.io/badge/Express.js-4.x-000?style=for-the-badge&logo=express" />
<img src="https://img.shields.io/badge/Instagram_Graph_API-Latest-E4405F?style=for-the-badge&logo=instagram" />

### Tools & Utilities
<img src="https://img.shields.io/badge/Zod-3.24-3E67B1?style=for-the-badge" />
<img src="https://img.shields.io/badge/React_Hook_Form-7.54-EC5990?style=for-the-badge" />
<img src="https://img.shields.io/badge/Multer-Latest-000?style=for-the-badge" />
<img src="https://img.shields.io/badge/AdmZip-Latest-000?style=for-the-badge" />

</div>

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ or **Bun** latest
- **npm**, **yarn**, or **pnpm** package manager
- **Firebase Project** (for authentication)
- **Facebook/Meta Developer Account** (for Instagram API)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/instaflow.git

# Navigate to project directory
cd instaflow

# Install dependencies
npm install
# or
yarn install
# or
bun install

# Set up environment variables
cp .env.example .env.local
```

### Environment Configuration

Create a `.env.local` file with the following variables:

```env
# 🔐 Facebook/Instagram App Credentials
NEXT_PUBLIC_FACEBOOK_APP_ID=your_facebook_app_id
FACEBOOK_APP_SECRET=your_facebook_app_secret
NEXT_PUBLIC_INSTAGRAM_APP_ID=your_instagram_app_id
INSTAGRAM_APP_SECRET=your_instagram_app_secret
INSTAGRAM_REDIRECT_URI=http://localhost:3000/api/auth/instagram/callback

# 🔥 Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

> 📘 **Setup Guide:** See our [Authentication Setup Wiki](#) for detailed instructions on obtaining these credentials.

### Running the Application

```bash
# Start development server (Next.js)
npm run dev
# → Runs on http://localhost:3000

# Start backend server (Express)
node backend/server.js
# → Runs on http://localhost:5000
```

**Available Scripts:**

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js development server |
| `npm run build` | Build production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint code checks |

---

## 📁 Project Structure

```
instaflow/
├── 📂 app/                          # Next.js App Router
│   ├── 📂 api/auth/instagram/       # Instagram OAuth endpoints
│   │   ├── route.ts                 # OAuth initiation
│   │   └── callback/route.ts        # OAuth callback handler
│   ├── 📂 privacy-policy/           # Privacy policy page
│   ├── layout.tsx                   # Root layout & providers
│   ├── page.tsx                     # Landing page
│   └── globals.css                  # Global styles & theme
│
├── 📂 pages/                        # Next.js Pages Router (Legacy)
│   ├── 📂 api/instagram/            # Instagram upload API
│   │   └── upload.ts                # ZIP file processing
│   └── instagram-analyzer.jsx       # Analyzer page
│
├── 📂 backend/                      # Express.js Server
│   ├── 📂 routes/                   # API routes
│   │   └── instagram.js             # Instagram upload route
│   ├── 📂 utils/                    # Utility functions
│   │   └── instagramParser.js       # Data parser & analytics
│   └── server.js                    # Express server entry
│
├── 📂 components/                   # React Components
│   ├── 📂 ui/                       # shadcn/ui primitives (57 components)
│   ├── 📄 header.tsx                # Navigation header
│   ├── 📄 sidebar.tsx               # Sidebar navigation
│   ├── 📄 hero.tsx                  # Landing hero section
│   ├── 📄 dashboard-preview.tsx     # Analytics preview
│   ├── 📄 login-dialog.tsx          # Auth modal
│   └── 📄 [12 more sections...]     # Landing page sections
│
├── 📂 lib/                          # Core Libraries
│   ├── firebase.ts                  # Firebase initialization
│   ├── auth-context.tsx             # Auth state management
│   ├── instagram.ts                 # Instagram API utilities
│   └── utils.ts                     # Helper functions
│
├── 📂 public/                       # Static assets
├── 📄 package.json                  # Dependencies & scripts
├── 📄 next.config.mjs               # Next.js configuration
├── 📄 tailwind.config.ts            # Tailwind theme
├── 📄 tsconfig.json                 # TypeScript config
└── 📄 .env.example                  # Environment template
```

---

## 📡 API Documentation

### Instagram OAuth Flow

```
1. Client → /api/auth/instagram
   ↓ Redirects to Instagram authorization

2. User authorizes application
   ↓ Instagram redirects back with code

3. /api/auth/instagram/callback
   ↓ Exchanges code for access token

4. Fetches user profile
   ↓ Redirects to dashboard with token
```

### Instagram Data Upload API

**Endpoint:** `POST /api/instagram/upload`

**Request:**
```bash
curl -X POST http://localhost:3000/api/instagram/upload \
  -F "file=@instagram_data.zip"
```

**Response:**
```json
{
  "success": true,
  "stats": {
    "totalFollowers": 1250,
    "totalFollowing": 980,
    "mutualsCount": 750,
    "notFollowingBackCount": 230,
    "fansCount": 500
  },
  "lists": {
    "followers": ["user1", "user2", ...],
    "following": ["user3", "user4", ...],
    "mutuals": ["user1", ...],
    "notFollowingBack": ["user3", ...],
    "fans": ["user5", ...]
  }
}
```

### Instagram Graph API Integration

| Function | Endpoint | Description |
|----------|----------|-------------|
| `getInstagramProfile()` | `/me` | Fetch user profile data |
| `getInstagramMedia()` | `/me/media` | Fetch user's media posts |
| `getLongLivedToken()` | `/access_token` | Exchange for 60-day token |
| `refreshLongLivedToken()` | `/refresh_access_token` | Refresh existing token |

---

## 🎨 UI Components

This project uses **shadcn/ui** for beautiful, accessible components:

<details>
<summary><strong>🎭 Available Components (57 total)</strong></summary>

- ✅ **Forms:** button, input, textarea, checkbox, radio-group, select, switch
- ✅ **Feedback:** alert, toast, spinner, progress, sonner
- ✅ **Navigation:** tabs, dropdown-menu, menubar, pagination, breadcrumb
- ✅ **Overlays:** dialog, sheet, popover, tooltip, hover-card, context-menu
- ✅ **Data Display:** table, card, avatar, badge, separator, scroll-area
- ✅ **Layout:** accordion, collapsible, resizable, sidebar, aspect-ratio
- ✅ **Date/Time:** calendar, date-picker
- ✅ **Special:** command, carousel, chart, theme-provider

</details>

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Environment Variables:** Add all `.env.local` variables to Vercel dashboard.

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Traditional Server

```bash
# Build production bundle
npm run build

# Start server
NODE_ENV=production npm start
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow existing code style (ESLint + Prettier)
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**
- 📧 Email: your.email@example.com
- 🐙 GitHub: [@yourusername](https://github.com/yourusername)
- 💼 LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Vercel](https://vercel.com/) - Deployment platform
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Firebase](https://firebase.google.com/) - Authentication & Analytics
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Instagram Graph API](https://developers.facebook.com/docs/instagram-api/) - Social data integration

---

<div align="center">
  <p><strong>Made with ❤️ for the social media community</strong></p>
  
  <p>
    <a href="https://github.com/yourusername/instaflow/stargazers">⭐ Star this repo</a> •
    <a href="https://github.com/yourusername/instaflow/issues">🐛 Report Bug</a> •
    <a href="https://github.com/yourusername/instaflow/issues">💡 Request Feature</a>
  </p>
</div>
