import React from 'react';
import { motion } from 'motion/react';
import { Shield, Globe, Activity, ArrowRight, Download, MapPin, Zap, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImage from '../../profile.jpg';

// Text Settings Configuration
const TEXT_STYLES = {
  heroMain: "text-6xl md:text-8xl font-black tracking-tighter leading-none text-slate-900",
  heroSub: "text-base md:text-xl font-mono font-bold tracking-tight uppercase flex items-center gap-2 text-slate-600",
  missionTitle: "text-3xl font-black hacker-heading flex items-center gap-3"
};

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex flex-col justify-center space-y-10 max-w-5xl">
             <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-3 px-4 py-1.5 bg-neon-cyan/10 border border-neon-cyan/20 rounded-full text-neon-cyan font-mono text-[10px] uppercase font-bold tracking-widest"
                >
                  <Activity className="w-3 h-3 animate-pulse" /> System Online // Research Mode
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className={TEXT_STYLES.heroMain}
                >
                  Chiluka{" "}
                  <span>Manirathnam</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className={TEXT_STYLES.heroSub}
                >
                  <span className="text-slate-400">&gt;</span> B.Tech CSE (Cybersecurity) | JWPT & ACP Certified Security Researcher
                </motion.p>
             </div>
             
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.4 }}
               className="grid grid-cols-1 md:grid-cols-2 gap-4"
             >
                <div className="flex items-center gap-3 text-sm text-slate-700 bg-slate-50/50 backdrop-blur-[1.5px] border border-slate-200 p-4 rounded-xl shadow-sm">
                  <Shield className="w-5 h-5 text-slate-600" />
                  <span className="font-extrabold text-[11px] md:text-xs uppercase tracking-wider">B.Tech CSE (Cybersecurity) @ CMRCET</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 bg-slate-50/50 backdrop-blur-[1.5px] border border-slate-200 p-4 rounded-xl shadow-sm">
                  <Globe className="w-5 h-5 text-slate-600" />
                  <span className="font-extrabold text-[11px] md:text-xs uppercase tracking-wider">Application & API Security Researcher</span>
                </div>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 }}
               className="flex flex-wrap gap-4 pt-4"
             >
                <Link to="/projects" className="cyber-button-primary min-w-[200px] text-white font-bold shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                  Security Log <ArrowRight className="w-4 h-4" />
                </Link>
                <a 
                  href="/resume.pdf" 
                  download="Chiluka_Manirathnam_Resume.pdf"
                  className="cyber-button-outline min-w-[200px] text-slate-900 border-slate-200 hover:border-neon-blue shadow-sm"
                >
                  <Download className="w-4 h-4" /> Get Resume
                </a>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="cyber-card p-8 md:p-12 space-y-12">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="relative shrink-0">
            <div className="w-48 h-48 rounded-2xl border-[3px] border-neon-cyan p-1 backdrop-blur-md overflow-hidden shadow-lg rotate-2 transition-transform hover:rotate-0 duration-500 relative">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full rounded-xl object-cover hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 pointer-events-none border border-white/20 rounded-xl" />
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <h2 className={TEXT_STYLES.missionTitle}><Shield className="text-neon-cyan" /> Mission_Briefing</h2>
            <div className="space-y-4 text-sm md:text-base leading-relaxed text-slate-900">
                I am a <span className="font-extrabold">Cybersecurity Scholar</span> focused on breaking and securing modern systems, with a strong commitment to exploring the frontiers of <strong className="text-neon-cyan font-extrabold">Web Application Penetration Testing</strong>, <strong className="text-neon-blue font-extrabold">API Security</strong>, and vulnerability assessment.
              <p className="border-l-4 border-neon-blue pl-4 py-2 bg-slate-50/50">
                As a <span className="text-neon-cyan font-extrabold underline decoration-neon-cyan/20">Certified Junior Webapp Penetration Tester (JWPT)</span> and <span className="text-neon-cyan font-extrabold underline decoration-neon-cyan/20">APISEC Certified Practitioner (ACP)</span>, I possess hands-on proficiency in identifying and exploiting vulnerabilities such as SQL Injection, Cross-Site Scripting (XSS), CSRF, and authentication bypass techniques.
              </p>
              <p className="font-bold italic border-l-2 border-neon-cyan pl-4 text-slate-600">
                Actively conducting manual and automated application pentesting to uncover system vulnerabilities and implement hardened configurations.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
               <span className="glass-pill text-[11px] font-mono flex items-center gap-3 font-bold"><MapPin className="w-4 h-4 text-neon-cyan" /> Hyderabad, IN</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 border-t border-slate-100">
           <div className="space-y-4 p-6 bg-white/[0.03] backdrop-blur-[1.5px] border border-white/15 rounded-2xl hover:border-white/30 transition-colors group">
              <div className="p-3 bg-neon-cyan/10 rounded-lg w-fit group-hover:bg-neon-cyan/20 transition-colors">
                <Zap className="w-6 h-6 text-neon-cyan" />
              </div>
              <h3 className="text-slate-900 font-extrabold uppercase tracking-widest text-sm">Web & API Security</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Advanced protection strategies for modern cloud-native architectures and microservices.</p>
           </div>
           <div className="space-y-4 p-6 bg-white/[0.03] backdrop-blur-[1.5px] border border-white/15 rounded-2xl hover:border-white/30 transition-colors group">
              <div className="p-3 bg-neon-cyan/10 rounded-lg w-fit group-hover:bg-neon-cyan/20 transition-colors">
                <Search className="w-6 h-6 text-neon-cyan" />
              </div>
              <h3 className="text-slate-900 font-extrabold uppercase tracking-widest text-sm">VAPT Excellence</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Comprehensive vulnerability assessment and professional penetration testing methodologies.</p>
           </div>
           <div className="space-y-4 p-6 bg-white/[0.03] backdrop-blur-[1.5px] border border-white/15 rounded-2xl hover:border-white/30 transition-colors group">
              <div className="p-3 bg-neon-cyan/10 rounded-lg w-fit group-hover:bg-neon-cyan/20 transition-colors">
                <Activity className="w-6 h-6 text-neon-cyan" />
              </div>
              <h3 className="text-slate-900 font-extrabold uppercase tracking-widest text-sm">Security Analytics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Data-driven threat detection to stay ahead of sophisticated modern adversaries.</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
