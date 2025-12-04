## Dynamic Portfolio Hub

A modern, high-performance developer portfolio built with **React**, **TypeScript**, and **Vite**, styled with **Tailwind CSS** and enriched with **Framer Motion** animations.  
The layout and content are fully data-driven, making it easy to maintain and customize without touching core UI logic.

---

### ✨ Key Features

- **Modern Interface**
  - Clean, minimal layout optimized for readability
  - Clay / olive inspired **light theme** with a subtle paper texture
  - Polished **dark theme** with smooth transitions

- **Rich Animations**
  - Animated hero section with floating profile avatar and circular frame
  - Section entrances powered by `framer-motion`
  - Micro-interactions on cards, timeline items, and buttons

- **Data‑Driven Portfolio**
  - Single source of truth in `src/data/portfolioData.ts`
  - Sections: About, Skills, Projects, Experience, Education, Contact
  - Easy to update text, links, tech stacks, and metrics

- **Responsive by Design**
  - Mobile‑first layout
  - Optimized for desktops, tablets, and phones

- **Developer Experience**
  - TypeScript throughout
  - Vite dev server for instant feedback
  - Reusable UI primitives under `src/components/ui`

---

### 🛠 Tech Stack

- **Framework & Language**
  - React
  - TypeScript

- **Tooling**
  - Vite
  - ESLint

- **Styling & UI**
  - Tailwind CSS
  - Custom CSS utilities (`paper-texture`, `noise`, `grid-pattern`, `dot-pattern`)
  - Shadcn-style UI components

- **Animations**
  - Framer Motion

---

### 📁 Project Structure

```text
src/
  components/
    portfolio/      # Portfolio sections (Hero, About, Projects, Experience, Contact, Footer, Navbar, ThemeToggle)
    ui/             # Reusable UI components (buttons, cards, dialogs, etc.)
  data/
    portfolioData.ts  # All portfolio content (profile, skills, projects, experience, education, nav)
  hooks/
    use-mobile.tsx
    use-toast.ts
  lib/
    utils.ts
  pages/
    Index.tsx       # Main portfolio page
    NotFound.tsx
  App.css
  index.css         # Global styles, CSS variables, custom utilities
  main.tsx
```

---

### 🚀 Getting Started

#### Prerequisites

- Node.js **18+**
- npm, yarn, or bun

#### Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>.git
cd dynamic-portfolio-hub
```

2. **Install dependencies**

```bash
npm install
# or
yarn
# or
bun install
```

3. **Start the development server**

```bash
npm run dev
```

Open the URL printed in the terminal (typically `http://localhost:5173`).

---

### 📦 Available Scripts

- `npm run dev` – Start the development server
- `npm run build` – Create a production build
- `npm run preview` – Preview the production build locally
- `npm run lint` – Run ESLint checks

---

### ✏️ Customization

#### 1. Portfolio Content

Most of the content is defined in `src/data/portfolioData.ts`:

- **`personalInfo`** – name, roles, tagline, bio, email, location, availability, social links
- **`aboutData`** – summary, detailed description, values, education
- **`skillsData`** – technical skills and tools/platforms
- **`projectsData`** – title, subtitle, description, tech stack, metrics, links, featured flag
- **`experienceData`** – roles, companies, durations, descriptions, highlights
- **`navLinks`** – navigation items and anchors

Edit these objects to instantly update your portfolio without changing layout code.

#### 2. Profile Photo

Place a profile image in the `public` folder named `profile-photo` with any of the supported extensions:

- `public/profile-photo.jpg`
- `public/profile-photo.jpeg`
- `public/profile-photo.png`
- `public/profile-photo.webp`
- `public/profile-photo.gif`
- `public/profile-photo.svg`

The app automatically detects the first available file; no code changes are required.  
For best results, use a **square image** (e.g. 500×500 or 800×800).

#### 3. Theming

Theme tokens are defined in `src/index.css` using CSS variables:

- Light mode: `:root { --background, --foreground, --card, --accent, --border, ... }`
- Dark mode: `.dark { --background, --foreground, --card, --accent, --border, ... }`

Adjust these values to fine‑tune:

- Background and surface colors
- Text and heading colors
- Accent / highlight color
- Card and border treatments

The components use Tailwind’s semantic classes (e.g. `bg-background`, `text-foreground`, `bg-card`, `border-border`), so theme changes propagate consistently.

---

### 🌐 Deployment

Create a production build:

```bash
npm run build
```

The output in the `dist` directory can be deployed to any static hosting provider, such as:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

---

### 📄 License

This project is licensed under the **MIT License**.  
You are welcome to fork, adapt, and use it as the foundation for your own portfolio. A star or attribution is always appreciated. 🙂
