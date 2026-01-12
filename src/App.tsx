import { useTheme } from './hooks/useTheme';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import './styles/tokens.css';
import './styles/reset.css';
import './styles/global.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Layout theme={theme} onThemeToggle={toggleTheme}>
      <div className="container">
        <Hero />
      </div>

      <About />

      <div className="container">
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
