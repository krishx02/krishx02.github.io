import { Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import { Layout } from './components/layout/Layout';
import { ScrollToHash } from './components/ScrollToHash';
import { ScrollToTop } from './components/ScrollToTop';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/sections/Contact';
import { BlogPost } from './pages/BlogPost';
import './styles/tokens.css';
import './styles/reset.css';
import './styles/global.css';

function HomePage() {
  return (
    <>
      <ScrollToHash />
      <div className="container">
        <Hero />
      </div>

      <About />

      <Projects />

      <Blog />

      <Contact />
    </>
  );
}

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Layout theme={theme} onThemeToggle={toggleTheme}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Layout>
  );
}

export default App;
