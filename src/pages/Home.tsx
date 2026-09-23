import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Globe, Activity, ArrowRight, Download, MapPin, Zap, Search, Lock, Terminal, CheckCircle2, Radar } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImage from '../../profile.jpg';

const Home: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Normalized between -1 and 1
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  return (
    <div onMouseMove={handleMouseMove} className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="pt-32 pb-8 relative overflow-hidden">
        <div className="relative z-10 max-w-5xl">
          <div className="space-y-8">
            {/* Security Status Pill with Floating Parallax */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{
                transform: `translate3d(${mousePos.x * 4}px, ${mousePos.y * 4}px, 0)`,
                transition: 'transform 0.2s ease-out',
              }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-sky-500/10 dark:bg-cyan-400/10 border border-sky-500/25 dark:border-cyan-400/25 rounded-full text-sky-700 dark:text-cyan-300 font-mono text-[11px] uppercase font-bold tracking-widest backdrop-blur-md shadow-xs"
            >
              <Activity className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 animate-pulse" />
              <span>Available for Security Roles // Offensive &amp; AppSec</span>
            </motion.div>

            {/* Main Headline with Subdued Tilt */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                style={{
                  transform: `translate3d(${mousePos.x * 6}px, ${mousePos.y * 6}px, 0)`,
                  transition: 'transform 0.25s ease-out',
                }}
                className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-[var(--heading-main)] leading-[1.05]"
              >
                Chiluka <span className="hacker-heading">Manirathnam</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl md:text-2xl font-mono font-medium text-[var(--text-muted)] tracking-tight flex items-center gap-2 flex-wrap"
              >
                <span className="text-sky-600 dark:text-cyan-400 font-bold">&gt;</span>
                <span>Security Researcher &amp; Penetration Tester</span>
                <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
                <span className="text-sky-700 dark:text-cyan-300 font-bold text-base sm:text-xl">JWPT &amp; ACP Certified</span>
              </motion.p>
            </div>

            {/* Core Snapshot Chips with Scroll Reveal & Hover Lift */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2"
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] shadow-sm hover:border-sky-500/40 dark:hover:border-cyan-400/40 cursor-default"
              >
                <div className="p-2 rounded-lg bg-sky-500/10 dark:bg-cyan-400/10 text-sky-600 dark:text-cyan-400">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase">Education</div>
                  <div className="text-xs font-extrabold text-[var(--heading-main)]">B.Tech CSE (Cybersecurity) @ CMRCET</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] shadow-sm hover:border-indigo-500/40 dark:hover:border-indigo-400/40 cursor-default"
              >
                <div className="p-2 rounded-lg bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase">Offensive Focus</div>
                  <div className="text-xs font-extrabold text-[var(--heading-main)]">Web Application &amp; API Pentesting</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] shadow-sm sm:col-span-2 lg:col-span-1 hover:border-emerald-500/40 dark:hover:border-emerald-400/40 cursor-default"
              >
                <div className="p-2 rounded-lg bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase">Location</div>
                  <div className="text-xs font-extrabold text-[var(--heading-main)]">Hyderabad, India // Open for Remote</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Interactive CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/projects"
                  className="cyber-button-primary min-w-[190px]"
                >
                  View Security Log <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="/ChilukaManirathnam-resume.pdf"
                  download="ChilukaManirathnam-resume.pdf"
                  className="cyber-button-outline min-w-[190px]"
                >
                  <Download className="w-4 h-4" /> Download Resume
                </a>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="cyber-button-outline"
                >
                  <Terminal className="w-4 h-4 text-sky-600 dark:text-cyan-400" /> Connect
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics / High-Impact Highlights Strip with Scroll-Triggered Animation */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Primary Credentials', val: 'JWPT + ACP', desc: 'Web & API Certified' },
          { label: 'Security Focus', val: 'OWASP Top 10', desc: 'Full Scope Exploitation' },
          { label: 'Research Depth', val: 'RollJam RF', desc: 'Hardware & SDR Attack PoC' },
          { label: 'Academic Standing', val: '7.5 CGPA', desc: 'B.Tech Cybersecurity' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="p-5 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] shadow-sm hover:border-sky-500/40 dark:hover:border-cyan-400/40 transition-all duration-300"
          >
            <div className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider">{stat.label}</div>
            <div className="text-xl sm:text-2xl font-black text-[var(--heading-main)] mt-1">{stat.val}</div>
            <div className="text-[11px] font-mono text-sky-600 dark:text-cyan-400 font-semibold mt-0.5">{stat.desc}</div>
          </motion.div>
        ))}
      </section>

      {/* Mission & Profile Section with 3D Tilt Interaction */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="cyber-card p-8 md:p-12 space-y-12"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Avatar Container with Real-Time 3D Tilt Reacting to Mouse */}
          <div className="relative shrink-0 perspective-1000">
            <motion.div
              style={{
                transform: `perspective(900px) rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl border-2 border-sky-500/40 dark:border-cyan-400/50 p-1.5 bg-gradient-to-br from-sky-500/20 via-transparent to-indigo-500/20 shadow-xl overflow-hidden group"
            >
              <img
                src={profileImage}
                alt="Chiluka Manirathnam"
                className="w-full h-full rounded-2xl object-cover group-hover:scale-105 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 pointer-events-none rounded-2xl border border-white/20" />
            </motion.div>
            <div className="absolute -bottom-3 -right-2 px-3 py-1 bg-sky-600 dark:bg-cyan-400 text-white dark:text-slate-950 font-mono text-[9px] font-extrabold uppercase rounded-full shadow-md tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-3 h-3" /> VERIFIED_RESEARCHER
            </div>
          </div>

          {/* Mission Briefing Text */}
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-600 dark:text-cyan-400 uppercase tracking-widest">
                <Shield className="w-4 h-4" /> Technical Profile
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[var(--heading-main)]">
                Breaking and Securing Complex Modern Architectures
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[var(--text-main)]">
              <p>
                I am a specialized <strong className="font-extrabold text-[var(--heading-main)]">Cybersecurity Scholar and Penetration Tester</strong> committed to offensive security, application hardening, and vulnerability discovery. My work bridges deep technical vulnerability research with practical remediation engineering.
              </p>
              <div className="border-l-4 border-sky-600 dark:border-cyan-400 pl-4 py-2 bg-sky-500/5 dark:bg-cyan-400/5 rounded-r-xl">
                <p className="font-medium">
                  Holding credentials as a <span className="font-extrabold text-sky-700 dark:text-cyan-300">Certified Junior Webapp Penetration Tester (JWPT)</span> and <span className="font-extrabold text-sky-700 dark:text-cyan-300">APISEC Certified Practitioner (ACP)</span>, I specialize in uncovering flaws across OWASP Top 10 vectors, GraphQL/REST microservice endpoints, authentication mechanisms, and Broken Object Level Authorization (BOLA).
                </p>
              </div>
              <p className="text-[var(--text-muted)] text-sm">
                Beyond standard software auditing, my research extends into Hardware and RF security, including proof-of-concept RollJam signal interception using Software-Defined Radios (HackRF One, GQRX).
              </p>
            </div>
          </div>
        </div>

        {/* 3 Core Security Pillars with Staggered Entrance & Floating Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[var(--card-border)]">
          {[
            {
              title: "Web & API Penetration",
              desc: "Targeted exploitation of business logic flaws, IDOR, SQL injection, token tampering, and microservice gateway policies.",
              icon: <Zap className="w-5 h-5 text-sky-600 dark:text-cyan-400" />,
              bg: "bg-sky-500/10 dark:bg-cyan-400/10",
              borderHover: "hover:border-sky-500/40 dark:hover:border-cyan-400/40"
            },
            {
              title: "VAPT & Threat Modeling",
              desc: "Systematic threat modeling across complex applications, manual verification of high-impact vulnerabilities, and clear remediation guides.",
              icon: <Search className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
              bg: "bg-indigo-500/10 dark:bg-indigo-400/10",
              borderHover: "hover:border-indigo-500/40 dark:hover:border-indigo-400/40"
            },
            {
              title: "RF & Hardware Security",
              desc: "Physical layer attacks, rolling code signal capture, SDR experimentation, and IoT device attack-surface evaluation.",
              icon: <Activity className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
              bg: "bg-emerald-500/10 dark:bg-emerald-400/10",
              borderHover: "hover:border-emerald-500/40 dark:hover:border-emerald-400/40"
            }
          ].map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`space-y-3 p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--card-border)] ${pillar.borderHover} transition-all duration-300 group cursor-default`}
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 3 + idx * 0.5, ease: "easeInOut" }}
                className={`p-3 ${pillar.bg} rounded-xl w-fit group-hover:scale-110 transition-transform`}
              >
                {pillar.icon}
              </motion.div>
              <h3 className="text-sm font-black font-mono uppercase tracking-wider text-[var(--heading-main)]">
                {pillar.title}
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
