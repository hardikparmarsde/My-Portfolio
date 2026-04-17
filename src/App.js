import './App.css';
import { useEffect, useState } from 'react';
import { profile } from './data/profile';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Loader } from './components/Loader';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  const { theme, toggle } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 850);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="App relative">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-blob dark:bg-blob-dark" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-white/40 via-transparent to-white/20 dark:from-black/30 dark:to-black/40" />

      <Navbar profile={profile} theme={theme} onToggleTheme={toggle} />

      {loading ? (
        <Loader name={profile.name} />
      ) : (
        <main>
          <Hero profile={profile} />
          <About profile={profile} />
          <Skills profile={profile} />
          <Projects profile={profile} />
          <Experience profile={profile} />
          <Contact profile={profile} />
          <Footer profile={profile} />
        </main>
      )}
    </div>
  );
}

export default App;
