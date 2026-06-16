import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Shield } from 'lucide-react';
import Navbar from './components/Navbar';
import InteractiveBackground from './components/InteractiveBackground';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';

const Footer = () => (
  <footer className="py-12 border-t border-white/10 bg-white/[0.02] backdrop-blur-[1.5px] mt-20 relative z-10">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-[10px] font-mono text-slate-800 tracking-[0.4em] font-extrabold uppercase flex items-center gap-3">
        <Shield className="w-4 h-4 text-neon-cyan" /> Manirathnam // Security Researcher // Asia.South.1
      </div>
      <div className="flex gap-8 text-[9px] font-mono font-bold text-slate-600 uppercase tracking-widest">
        <span className="hover:text-neon-cyan transition-colors cursor-help">Status: Active</span>
        <span className="hover:text-neon-cyan transition-colors cursor-help">Uptime: 99.98%</span>
        <span className="text-slate-400">© 2026 HYDERABAD_SEC_OPS</span>
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
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
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
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-800 selection:bg-neon-cyan/25 selection:text-slate-900 relative">
        {/* Dynamic Interactive Backdrop */}
        <InteractiveBackground />
        
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
