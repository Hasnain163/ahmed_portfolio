# Hasnain Ahmed — Developer Portfolio

Personal portfolio website for Hasnain Ahmed, a 4th-year Computer Science and Engineering undergraduate at United International University, Bangladesh.

## Live Site

🔗 [hasnain163.github.io](https://hasnain163.github.io)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Deployment | GitHub Pages |

---

## Features

- ⚡ **Fast**: Vite build, optimized assets, lazy-loaded images
- 🎨 **Modern dark design**: Custom design system, charcoal background, sky-blue accent
- 📱 **Fully responsive**: Tested from 320px to 1920px
- ♿ **Accessible**: Semantic HTML, keyboard navigation, focus styles, ARIA labels
- 🔍 **SEO ready**: Meta tags, Open Graph, structured headings
- 🚀 **GitHub Pages ready**: Relative base path, automated deployment workflow

---

## Project Structure

```
portfilo/
├── public/
│   ├── images/
│   │   ├── profile.jpeg          ← Profile photo
│   │   ├── hackathon.jpeg        ← Code Samurai 2024 photo
│   │   └── project-psychiatric.jpg ← Project screenshot
│   ├── resume/
│   │   └── Hasnain_Ahmed_Resume.pdf
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Research.tsx
│   │   ├── Achievements.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── achievements.ts
│   │   └── skills.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Local Development

### Prerequisites
- Node.js 18+
- npm

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# http://localhost:5173
```

---

## Build for Production

```bash
npm run build
```

Output goes to the `dist/` directory.

Preview the production build locally:
```bash
npm run preview
```

---

## GitHub Pages Deployment

### Method 1: Automated (Recommended)

Push to the `main` branch. The GitHub Actions workflow in `.github/workflows/deploy.yml` will automatically:
1. Install dependencies
2. Build the project
3. Deploy to GitHub Pages

**Setup (one-time):**
1. Go to your GitHub repository → **Settings** → **Pages**
2. Under "Source", select **GitHub Actions**
3. Push to `main` — the site will deploy automatically

### Method 2: Manual

```bash
# Build
npm run build

# Deploy dist/ to your GitHub Pages branch
# (use gh-pages package or push dist/ to gh-pages branch manually)
```

---

## Adding Content

### Add a new project

Edit `src/data/projects.ts` and add a new object to the `projects` array:

```typescript
{
  id: 'my-new-project',
  title: 'My New Project',
  category: 'Backend Application',
  status: 'Completed',
  description: 'Short description of the project.',
  technologies: ['Python', 'FastAPI', 'PostgreSQL'],
  features: ['Feature 1', 'Feature 2'],
  contribution: ['My role here'],
  github: 'https://github.com/Hasnain163/your-repo',
  featured: false,
}
```

---

## Contact

**Hasnain Ahmed**  
📧 antorahmed120612@gmail.com  
🔗 [GitHub](https://github.com/Hasnain163) · [LinkedIn](https://www.linkedin.com/in/hasnain-ahmed-7047b7377/)
