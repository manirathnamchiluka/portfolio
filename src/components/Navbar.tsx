import React, { useState } from 'react';
import { Shield, Linkedin, Github, Sun, Moon, Menu, X, Download } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Overview', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Credentials', path: '/certifications' },
    { name: 'Connect', path: '/contact' },
  ];

  const isDark = theme === 'dark';

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 backdrop-blur-lg border-b shadow-xs ${
        isDark ? 'bg-[#030712]/95 border-white/10 text-white' : 'bg-white/95 border-slate-200/90 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo & Brand */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <div
            className={`p-2 rounded-xl border transition-transform duration-300 group-hover:scale-105 ${
              isDark
                ? 'bg-cyan-400/10 border-cyan-400/25'
                : 'bg-sky-500/10 border-sky-500/25'
            }`}
          >
            <Shield
              className={`w-5 h-5 transition-transform duration-300 group-hover:rotate-12 ${
                isDark ? 'text-cyan-400' : 'text-sky-600'
              }`}
            />
          </div>
          <div className="flex flex-col">
            <span
              className={`font-mono font-black text-sm tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Manirathnam{' '}
              <span className={isDark ? 'text-cyan-400 font-bold' : 'text-sky-600 font-bold'}>
                // CyberOps
              </span>
            </span>
            <div
              className={`flex items-center gap-1.5 text-[9px] font-mono font-semibold ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>ACTIVE_RECON</span>
            </div>
          </div>
        </NavLink>

        {/* Desktop Nav Items */}
        <nav
          className={`hidden md:flex items-center gap-1 p-1 rounded-2xl border backdrop-blur-md shadow-inner ${
            isDark ? 'bg-slate-900/90 border-white/15' : 'bg-slate-100/90 border-slate-200/90'
          }`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-3.5 py-1.5 rounded-xl text-xs font-mono tracking-wider uppercase transition-all duration-200 ${
                  isActive
                    ? isDark
                      ? 'bg-cyan-400 text-slate-950 font-black shadow-sm'
                      : 'bg-white text-sky-600 border border-slate-200/90 font-black shadow-sm'
                    : isDark
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/80 font-bold'
                      : 'text-slate-600 hover:text-sky-600 hover:bg-white/70 font-bold'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Action Group */}
        <div className="flex items-center gap-2.5">
          {/* Quick Resume CTA Button */}
          <a
            href="/ChilukaManirathnam-resume.pdf"
            download="ChilukaManirathnam-resume.pdf"
            className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border text-xs font-mono font-extrabold uppercase tracking-wider transition-all shadow-xs ${
              isDark
                ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-white/15'
                : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
            }`}
            title="Download ChilukaManirathnam-resume.pdf"
          >
            <Download className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-sky-600'}`} />
            <span>Resume</span>
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`px-3 py-1.5 rounded-xl border transition-all duration-300 shadow-xs flex items-center gap-1.5 group ${
              isDark
                ? 'bg-slate-900 text-slate-200 border-white/15 hover:border-cyan-400/40'
                : 'bg-white text-slate-700 border-slate-200 hover:border-sky-500/40'
            }`}
            title={isDark ? 'Currently in Dark Mode (Click for Light Mode)' : 'Currently in Light Mode (Click for Dark Mode)'}
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <>
                <Moon className="w-4 h-4 text-cyan-400 transition-transform group-hover:-rotate-12" />
                <span className="text-[10px] font-mono font-bold text-cyan-300 hidden lg:inline">DARK</span>
              </>
            ) : (
              <>
                <Sun className="w-4 h-4 text-amber-500 transition-transform group-hover:rotate-45" />
                <span className="text-[10px] font-mono font-bold text-amber-600 hidden lg:inline">LIGHT</span>
              </>
            )}
          </button>

          {/* Social Links */}
          <div
            className={`hidden lg:flex items-center gap-1.5 border-l pl-2.5 ${
              isDark ? 'border-white/15' : 'border-slate-200'
            }`}
          >
            <a
              href="https://linkedin.com/in/manirathnam-chiluka/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-xl border transition-all shadow-xs ${
                isDark
                  ? 'bg-slate-900 border-white/10 text-slate-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/40'
                  : 'bg-white border-slate-200 text-slate-600 hover:text-[#0A66C2] hover:border-[#0A66C2]/40'
              }`}
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/manirathnamchiluka"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-xl border transition-all shadow-xs ${
                isDark
                  ? 'bg-slate-900 border-white/10 text-slate-400 hover:text-white hover:border-cyan-400/40'
                  : 'bg-white border-slate-200 text-slate-600 hover:text-slate-950 hover:border-slate-400'
              }`}
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl border ${
              isDark
                ? 'border-white/15 bg-slate-900 text-slate-200'
                : 'border-slate-200 bg-white text-slate-800'
            }`}
            aria-label="Open Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-6 py-4 border-b backdrop-blur-xl flex flex-col gap-2 ${
            isDark ? 'bg-[#030712]/98 border-white/10' : 'bg-white/98 border-slate-200'
          }`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all ${
                  isActive
                    ? isDark
                      ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/30 font-black'
                      : 'bg-sky-50 text-sky-600 border border-sky-200 font-black'
                    : isDark
                      ? 'text-slate-300 hover:bg-slate-800/80 font-bold'
                      : 'text-slate-700 hover:bg-slate-100 font-bold'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div
            className={`flex flex-col gap-2 pt-3 border-t mt-1 ${
              isDark ? 'border-white/10' : 'border-slate-200'
            }`}
          >
            <a
              href="/ChilukaManirathnam-resume.pdf"
              download="ChilukaManirathnam-resume.pdf"
              className={`py-2.5 px-4 rounded-xl border text-xs font-mono font-extrabold flex items-center justify-center gap-2 ${
                isDark
                  ? 'bg-slate-800 border-cyan-400/20 text-cyan-300'
                  : 'bg-sky-50 border-sky-200 text-sky-700'
              }`}
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
            <div className="flex gap-2">
              <a
                href="https://linkedin.com/in/manirathnam-chiluka/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 py-2 px-3 rounded-xl border text-xs font-mono font-bold flex items-center justify-center gap-2 ${
                  isDark
                    ? 'border-white/10 text-slate-300 hover:text-[#0A66C2]'
                    : 'border-slate-200 text-slate-700 hover:text-[#0A66C2]'
                }`}
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" /> LinkedIn
              </a>
              <a
                href="https://github.com/manirathnamchiluka"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 py-2 px-3 rounded-xl border text-xs font-mono font-bold flex items-center justify-center gap-2 ${
                  isDark
                    ? 'border-white/10 text-slate-300 hover:text-white'
                    : 'border-slate-200 text-slate-700 hover:text-slate-950'
                }`}
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
