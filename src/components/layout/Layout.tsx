import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import './Layout.css';

interface LayoutProps {
    children: ReactNode;
    theme: 'light' | 'dark';
    onThemeToggle: () => void;
}

export function Layout({ children, theme, onThemeToggle }: LayoutProps) {
    return (
        <div className="layout">
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>

            <Header theme={theme} onThemeToggle={onThemeToggle} />

            <main id="main-content" className="layout__main">
                {children}
            </main>

            <Footer />
        </div>
    );
}
