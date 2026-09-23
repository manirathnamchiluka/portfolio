import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Shield } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import SonarGrid from '@/components/ui/sonar-grid';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';

const Footer = () => (
  <footer className="py-12 border-t border-[var(--footer-border)] bg-[var(--bg-main)]/70 backdrop-blur-md mt-24 relative z-10 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-[11px] font-mono text-[var(--heading-main)] tracking-[0.3em] font-extrabold uppercase flex items-center gap-3">
        <Shield className="w-4 h-4 text-sky-600 dark:text-cyan-400" /> Chiluka Manirathnam // Security Engineering
      </div>
      <div className="flex flex-wrap justify-center gap-6 text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Status: Ready for Roles
        </span>
        <span className="text-[var(--text-muted)]">Spec: WebApp & API Pentesting</span>
        <span className="text-slate-400 dark:text-slate-600">© 2026 HYD_SEC_LABS</span>
      </div>
    </div>
  </footer>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-6 min-h-[calc(100vh-220px)] relative z-10"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] selection:bg-sky-500/20 dark:selection:bg-cyan-400/25 selection:text-sky-900 dark:selection:text-cyan-200 relative transition-colors duration-300">
          {/* Site-wide interactive backdrop. Content layers stay above this canvas. */}
          <SonarGrid
            className="fixed inset-0 z-0 h-full w-full"
            spacing={28}
            dotRadius={1.3}
            baseOpacity={0.22}
            pingEvery={3.0}
            speed={250}
            ringWidth={85}
            amplitude={2.0}
            interactive={true}
          />

          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
