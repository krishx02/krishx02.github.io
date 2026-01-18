import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component that handles hash scrolling after React Router navigation.
 * 
 * React Router renders the page before the browser can scroll to hash targets.
 * This component watches for location changes and scrolls to the hash element
 * after the component has mounted.
 */
export function ScrollToHash() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Small delay to ensure the DOM has rendered
            const timeoutId = setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);

            return () => clearTimeout(timeoutId);
        }
    }, [hash]);

    return null;
}
