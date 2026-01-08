<div align="center">

# 🚀 Kazi Tanvir Portfolio

### Modern Portfolio Website for Data Scientist & Machine Learning Engineer

[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

[Live Demo](#) • [Report Bug](https://github.com/mdrijoanmaruf/Kazi_Tanvir_Portfolio/issues) • [Request Feature](https://github.com/mdrijoanmaruf/Kazi_Tanvir_Portfolio/issues)

</div>

---

## 🎯 Overview

A modern, responsive portfolio website showcasing the work and expertise of Kazi Tanvir, a Data Scientist and Machine Learning Engineer. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

**Key Features:**
- ⚡ Lightning-fast performance with SSR/SSG
- 📱 Fully responsive mobile-first design
- 🎨 Material Design-inspired UI
- 🔒 Type-safe with TypeScript
- ♿ SEO-optimized and accessible
- 🎭 Smooth animations and transitions

---

## 🛠️ Tech Stack

- **Next.js 16.1.1** - React framework with SSR/SSG
- **React 19.2.3** - UI library
- **TypeScript 5.x** - Type-safe JavaScript
- **Tailwind CSS 4.x** - Utility-first CSS framework
- **Next/Image** - Automatic image optimization
- **ESLint** - Code quality and linting

---

## 📁 Project Structure

```
portfolio_client/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillBar.tsx
│   │   └── ProjectCard.tsx
│   ├── about/page.tsx       # About page
│   ├── contact/page.tsx     # Contact page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── public/
│   ├── img/                 # Images and photos
│   └── Resource/            # Additional resources
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18.x or higher
- **npm** v9.x or higher (or **Yarn** v1.22.x+)

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/mdrijoanmaruf/Kazi_Tanvir_Portfolio.git
cd Kazi_Tanvir_Portfolio/portfolio_client

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🎨 Pages

### Home (`/`)
- Hero section with profile and introduction
- About section with animated skill bars
- Education timeline (responsive, mobile-optimized)
- Featured projects gallery

### About (`/about`)
- Professional background and expertise
- Comprehensive skills showcase
- Research interests and personal hobbies
- Contact information

### Contact (`/contact`)
- Interactive Google Maps
- Contact cards (Email, Phone, Location)
- Social media links

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mdrijoanmaruf/Kazi_Tanvir_Portfolio)

1. Push code to GitHub
2. Import to [Vercel](https://vercel.com/new)
3. Deploy automatically

### Other Options

**Netlify / Traditional Hosting:**
```bash
npm run build
npm start
```

**Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📝 Migration from HTML

This project was converted from static HTML to Next.js:
- ✅ jQuery → React hooks
- ✅ Bootstrap → Tailwind CSS
- ✅ Static → App Router with SSR/SSG
- ✅ JavaScript → TypeScript
- ✅ Manual optimization → Next.js automatic optimization
- ✅ Monolithic → Component-based architecture

---

## 🤝 Contributing

Contributions are welcome! 

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 📧 Contact

**Kazi Tanvir** - Data Scientist & Machine Learning Engineer

- 📧 Email: [kazitanvir.bangladesh@gmail.com](mailto:kazitanvir.bangladesh@gmail.com)
- 💼 LinkedIn: [@kazi-tanvir](https://www.linkedin.com/in/kazi-tanvir/)
- 🐙 GitHub: [@KaziTanvir](https://github.com/KaziTanvir)
- 📘 Facebook: [Kazi Tanvir](https://www.facebook.com/kazi.tanvir.hridoy/)

---



