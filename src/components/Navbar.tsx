import React from 'react';
import { Shield, Linkedin, Github } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/[0.02] backdrop-blur-[1.5px] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-3 group">
          <Shield className="w-5 h-5 text-neon-cyan group-hover:rotate-12 transition-transform duration-300" />
          <span className="hacker-heading text-sm font-extrabold tracking-tighter">Manirathnam // CyberOps</span>
        </NavLink>
        
        <div className="hidden md:flex gap-8 text-[10px] font-mono text-slate-600 uppercase tracking-widest font-bold">
          <NavLink to="/" className={({ isActive }) => `hover:text-neon-cyan transition-colors pb-1 ${isActive ? 'text-neon-cyan border-b-2 border-neon-cyan font-extrabold' : ''}`}>Overview</NavLink>
          <NavLink to="/projects" className={({ isActive }) => `hover:text-neon-cyan transition-colors pb-1 ${isActive ? 'text-neon-cyan border-b-2 border-neon-cyan font-extrabold' : ''}`}>Projects</NavLink>
          <NavLink to="/skills" className={({ isActive }) => `hover:text-neon-cyan transition-colors pb-1 ${isActive ? 'text-neon-cyan border-b-2 border-neon-cyan font-extrabold' : ''}`}>Skills</NavLink>
          <NavLink to="/certifications" className={({ isActive }) => `hover:text-neon-cyan transition-colors pb-1 ${isActive ? 'text-neon-cyan border-b-2 border-neon-cyan font-extrabold' : ''}`}>Credentials</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `hover:text-neon-cyan transition-colors pb-1 ${isActive ? 'text-neon-cyan border-b-2 border-neon-cyan font-extrabold' : ''}`}>Connect</NavLink>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://linkedin.com/in/manirathnam-chiluka/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-neon-cyan transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="https://github.com/manirathnamchiluka" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-neon-cyan transition-colors">
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
