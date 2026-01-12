import { useState } from 'react';
import { ThemeToggle } from '../ui/ThemeToggle';
import './Header.css';

interface HeaderProps {
    theme: 'light' | 'dark';
    onThemeToggle: () => void;
}

const NAV_LINKS = [
    { href: '#about', label: 'About Me' },
    { href: '#projects', label: 'Projects' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
];

export function Header({ theme, onThemeToggle }: HeaderProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header__container container">
                <a href="/" className="header__logo">
                    krish.dev
                </a>

                {/* Desktop Navigation */}
                <nav className="header__nav" aria-label="Main navigation">
                    <ul className="header__nav-list">
                        {NAV_LINKS.map(link => (
                            <li key={link.href}>
                                <a href={link.href} className="header__nav-link">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header__actions">
                    <ThemeToggle theme={theme} onToggle={onThemeToggle} />

                    {/* Mobile Menu Button */}
                    <button
                        className="header__mobile-toggle"
                        onClick={toggleMobileMenu}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                        aria-label="Toggle navigation menu"
                    >
                        <span className="header__hamburger" aria-hidden="true">
                            {isMobileMenuOpen ? '✕' : '☰'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <nav
                id="mobile-menu"
                className={`header__mobile-menu ${isMobileMenuOpen ? 'header__mobile-menu--open' : ''}`}
                aria-label="Mobile navigation"
            >
                <ul className="header__mobile-list">
                    {NAV_LINKS.map(link => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="header__mobile-link"
                                onClick={closeMobileMenu}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
