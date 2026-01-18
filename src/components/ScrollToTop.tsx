import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component that scrolls the window to the top on route changes.
 * 
 * By default, React Router preserves scroll position or stays at current position
 * when navigating. This component ensures that navigating to a new page
 * always starts at the top of the content.
 */
export function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Only scroll to top if there is no hash in the URL
        if (!window.location.hash) {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
    }, [pathname]);

    return null;
}
