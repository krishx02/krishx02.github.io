import { useTheme } from './hooks/useTheme';
import { Layout } from './components/layout/Layout';
import './styles/tokens.css';
import './styles/reset.css';
import './styles/global.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Layout theme={theme} onThemeToggle={toggleTheme}>
      <div className="container">
        <section id="about" className="section">
          <h1>Krish Govind</h1>
          <p className="text-muted">Software Engineer II @ Nike</p>
          <p style={{ marginTop: 'var(--space-4)' }}>
            Welcome to my portfolio. This is a placeholder for the hero section.
          </p>
        </section>

        <section id="projects" className="section">
          <h2>Selected Work</h2>
          <p className="text-muted">Projects coming soon...</p>
        </section>

        <section id="blog" className="section">
          <h2>Blog</h2>
          <p className="text-muted">Posts coming soon...</p>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p className="text-muted">Get in touch...</p>
        </section>
      </div>
    </Layout>
  );
}

export default App;
