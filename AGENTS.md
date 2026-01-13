# AGENTS.md - Coding Agent Guidelines

This document provides guidance for AI coding agents working in this repository.

## Project Overview

Personal portfolio website built with React 19, TypeScript, and Vite. Deployed to GitHub Pages.

## Build, Lint, and Development Commands

```bash
# Development server (with HMR)
npm run dev

# Production build (runs TypeScript check first)
npm run build

# Lint the codebase
npm run lint

# Preview production build locally
npm run preview
```

### Important Notes

- **No test framework is configured** - there are no test commands available
- Build command runs `tsc -b && vite build` - TypeScript errors will fail the build
- ESLint is configured for TypeScript and React with hooks/refresh plugins

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, Layout (app shell)
│   ├── sections/        # Page sections (Hero, About, Projects, Blog, Contact)
│   └── ui/              # Reusable UI components (Timeline, ThemeToggle, cards)
├── data/                # Static data files (projects.ts, blog.ts, skills.ts)
├── hooks/               # Custom React hooks (useTheme.ts)
├── styles/              # Global styles (tokens.css, reset.css, global.css)
├── assets/              # Static assets (images, SVGs)
├── App.tsx              # Root component with routing
└── main.tsx             # Entry point
```

## Code Style Guidelines

### TypeScript

- **Strict mode enabled** - all strict checks are active
- Use explicit type annotations for function parameters and return types
- Use `interface` for object shapes, `type` for unions/aliases
- Import types with `type` keyword: `import type { FormEvent } from 'react'`
- No unused locals or parameters (enforced by tsconfig)

```typescript
// Good: Explicit interface for props
interface ProjectCardProps {
    project: Project;
}

// Good: Type for union types
type FormStatus = 'idle' | 'sending' | 'success' | 'error';

// Good: Type-only import
import type { FormEvent, ChangeEvent } from 'react';
```

### React Components

- Use **function declarations** for components, not arrow functions
- Export components as **named exports** (not default), except App.tsx
- Co-locate component CSS file with component (`Component.tsx` + `Component.css`)
- Use React.CSSProperties for inline style typing when using CSS variables

```typescript
// Good: Named function export
export function ProjectCard({ project }: ProjectCardProps) {
    return <article className="project-card">...</article>;
}

// Good: CSS variable typing
style={{ '--hover-color': link.brandColor } as React.CSSProperties}
```

### File Naming

- Components: `PascalCase.tsx` (e.g., `ProjectCard.tsx`, `ThemeToggle.tsx`)
- Hooks: `camelCase.ts` with `use` prefix (e.g., `useTheme.ts`)
- Data files: `camelCase.ts` (e.g., `projects.ts`, `skills.ts`)
- CSS files: Match component name (e.g., `ProjectCard.css`)
- Use `.tsx` for files with JSX, `.ts` for pure TypeScript

### CSS Conventions

- **BEM naming**: `block__element--modifier` pattern
- Use CSS custom properties from `tokens.css` for consistency
- Component-scoped CSS files imported directly into components
- Dark mode via `[data-theme="dark"]` selector

```css
/* BEM naming example */
.project-card { }
.project-card__title { }
.project-card__image--placeholder { }

/* Use design tokens */
.component {
    color: var(--color-text);
    background: var(--color-bg-elevated);
    border-radius: var(--radius-md);
    padding: var(--space-4);
    transition: var(--transition-normal);
}
```

### Import Order

1. External dependencies (react, react-router-dom, libraries)
2. Internal components (relative paths)
3. Data/types imports
4. Assets (images, SVGs)
5. CSS files (last)

```typescript
import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ThemeToggle } from '../ui/ThemeToggle';
import type { Project } from '../../data/projects';
import profileImage from '../../assets/images/profile.jpg';
import './Hero.css';
```

### Constants

- Define static data arrays as `SCREAMING_SNAKE_CASE` constants at module level
- Keep outside component to avoid re-creation on renders

```typescript
const NAV_LINKS = [
    { href: '#about', label: 'About Me' },
    { href: '#projects', label: 'Projects' },
];

export function Header() { ... }
```

### Error Handling

- Use try/catch for async operations
- Provide user-friendly error states in UI
- Empty catch blocks are acceptable when error is intentionally ignored

```typescript
try {
    await emailjs.send(...);
    setStatus('success');
} catch {
    setStatus('error');
}
```

### Accessibility

- Include proper ARIA attributes on interactive elements
- Use semantic HTML elements (`<article>`, `<nav>`, `<section>`)
- Add `aria-label` for icon-only buttons/links
- External links: `target="_blank" rel="noopener noreferrer"`

```tsx
<button
    aria-expanded={isOpen}
    aria-controls="mobile-menu"
    aria-label="Toggle navigation menu"
>
```

### Data Files Pattern

Export both the interface/type and the data array from data files:

```typescript
// data/projects.ts
export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    featured?: boolean;
}

export const projectsData: Project[] = [
    { id: 'example', title: 'Example', ... },
];
```

### Hooks Pattern

- Return object with state and handlers
- Initialize from localStorage/system preferences when appropriate
- Clean up event listeners in useEffect

```typescript
export function useTheme() {
    const [theme, setTheme] = useState<Theme>(() => {
        const stored = localStorage.getItem('theme');
        if (stored) return stored as Theme;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => { ... }, [theme]);

    return { theme, setTheme, toggleTheme };
}
```

## Design Tokens Reference

Key CSS variables available in `src/styles/tokens.css`:

| Category | Variables |
|----------|-----------|
| Colors | `--color-primary`, `--color-bg`, `--color-text`, `--color-text-muted`, `--color-border` |
| Spacing | `--space-1` through `--space-24` (4px to 96px) |
| Typography | `--text-xs` through `--text-5xl`, `--font-sans`, `--font-mono` |
| Radius | `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-full` |
| Shadows | `--shadow-sm`, `--shadow-md`, `--shadow-lg` |
| Transitions | `--transition-fast`, `--transition-normal`, `--transition-slow` |

## Deployment

- Deployed via GitHub Actions to GitHub Pages (see `.github/workflows/deploy.yml`)
- Production build outputs to `dist/`
- Base URL is `/` (root)
