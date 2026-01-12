import './Footer.css';

const SOCIAL_LINKS = [
    { href: 'https://linkedin.com/in/krish-govind', label: 'LinkedIn', icon: '💼' },
    { href: 'https://github.com/krishx02', label: 'GitHub', icon: '🐙' },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__content">
                    <p className="footer__copyright">
                        © {currentYear} Krish Govind. All rights reserved.
                    </p>

                    <nav className="footer__social" aria-label="Social links">
                        <ul className="footer__social-list">
                            {SOCIAL_LINKS.map(link => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="footer__social-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={link.label}
                                    >
                                        <span aria-hidden="true">{link.icon}</span>
                                        <span className="footer__social-text">{link.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
