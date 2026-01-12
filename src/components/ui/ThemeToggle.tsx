import './ThemeToggle.css';

interface ThemeToggleProps {
    theme: 'light' | 'dark';
    onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
    const isDark = theme === 'dark';

    return (
        <button
            className="theme-toggle"
            onClick={onToggle}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            <span className="theme-toggle__icon" aria-hidden="true">
                {isDark ? '☀️' : '🌙'}
            </span>
        </button>
    );
}
