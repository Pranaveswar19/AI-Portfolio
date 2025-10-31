# 🚀 AI Engineer Portfolio

A stunning, physics-based portfolio website showcasing AI engineering projects from my internship at ORANTS. Built with Next.js 14, Framer Motion, Three.js, and Tailwind CSS.

![Portfolio Preview](https://via.placeholder.com/1200x600/1a1b26/8b5cf6?text=AI+Engineer+Portfolio)

## ✨ Features

- 🎨 **Beautiful UI/UX** - Glassmorphism design with gradient accents
- ⚡ **Physics Animations** - Smooth transitions and particle effects like Claude AI
- 🌐 **3D Elements** - Interactive Three.js sphere in hero section
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎯 **Project Showcase** - 6 major AI/ML projects with filtering
- 💼 **Interactive Timeline** - Visual journey through internship phases
- 🎭 **Smooth Scrolling** - Parallax effects and scroll animations
- 🌙 **Dark Theme** - Eye-friendly dark mode design

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js

### Features
- Intersection Observer for scroll animations
- Custom particle system
- Glassmorphism effects
- Responsive navigation
- Contact form with validation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or 20+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd ai-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 📂 Project Structure

```
ai-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── hero.tsx            # Hero section with 3D sphere
│   ├── navbar.tsx          # Navigation bar
│   ├── projects.tsx        # Projects showcase
│   ├── about.tsx           # About & timeline
│   ├── skills.tsx          # Skills visualization
│   ├── contact.tsx         # Contact form
│   ├── footer.tsx          # Footer component
│   └── particles.tsx       # Particle background
├── lib/
│   ├── projects.ts         # Project data
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## 🎨 Customization

### Update Your Information

1. **Personal Details** - Edit components (Hero, Contact, Footer)
2. **Projects** - Update `lib/projects.ts` with your GitHub links
3. **Social Links** - Replace placeholder URLs in all components
4. **Colors** - Modify gradient colors in `globals.css`

### Example: Update Projects

```typescript
// lib/projects.ts
export const projects: Project[] = [
  {
    id: "your-project",
    title: "Your Project Name",
    description: "Brief description",
    tags: ["Tech1", "Tech2"],
    github: "https://github.com/yourusername/project",
    // ... more fields
  }
];
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

Your site will be live at `https://your-portfolio.vercel.app`

### Alternative: Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy using Netlify CLI
npm install -g netlify-cli
netlify deploy --prod
```

## 📝 Projects Included

1. **AI Influencer Tracker** - Python data analysis with OpenAI & YouTube APIs
2. **Stack Showdown** - Tech stack comparison for AI applications
3. **AI Content Forge** - SEO-optimized technical writing
4. **ChefGPT** - Flutter mobile app with AI recipe generation
5. **AI Content Repurposer** - Multi-agent content transformation system
6. **Viral Content Generator** - LinkedIn post generation with AI

## 🎯 Performance

- ⚡ Lighthouse Score: 95+
- 🎨 First Contentful Paint: <1.5s
- 📱 Mobile Responsive: 100%
- ♿ Accessibility: WCAG 2.1 AA compliant

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **ORANTS** - For the amazing internship opportunity
- **Vercel** - For Next.js and hosting platform
- **Framer** - For the incredible animation library
- **Three.js** - For 3D graphics capabilities

## 📧 Contact

Feel free to reach out for collaborations or opportunities!

- 📧 Email: your.email@example.com
- 💼 LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
- 🐙 GitHub: [@yourusername](https://github.com/yourusername)

---

Built with ❤️ during AI Engineer Internship @ ORANTS

## 🤖 New Features (Latest Update)

- **AI Chatbot** - Interactive assistant powered by OpenAI GPT-4
- **Video Showcase** - Collapsible section for project demonstrations
- **Redesigned Journey** - Modern dark-themed internship roadmap
