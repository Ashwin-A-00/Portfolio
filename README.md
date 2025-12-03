# Dynamic Portfolio Hub

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Showcase your projects, experience, and skills with a beautiful, customizable interface.

## Features

- 🎨 Modern UI with dark/light theme support
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎯 TypeScript for type safety
- 🎭 shadcn/ui components
- 🎨 Tailwind CSS for styling

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd dynamic-portfolio-hub
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

The application will be available at `http://localhost:8080`

## Project Structure

```
src/
├── components/       # React components
│   ├── portfolio/   # Portfolio-specific components
│   └── ui/          # Reusable UI components
├── data/            # Data files
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── pages/           # Page components
```

## Technologies Used

- **Vite** - Build tool and dev server
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI component library
- **React Router** - Routing
- **Framer Motion** - Animations

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

Edit the portfolio data in `src/data/portfolioData.ts` to customize your portfolio content.

## Deployment

Build the project for production:

```sh
npm run build
```

The `dist` folder will contain the production-ready files that can be deployed to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3

## License

MIT
