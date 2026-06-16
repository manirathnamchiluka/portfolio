import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Shield, Download } from 'lucide-react';

const Projects = () => {
  // =========================================================================
  // CARD INSERTION GUIDE (HOW TO ADD YOUR PROJECTS EASILY LATER):
  // 
  // Simply uncomment the layout template inside the `projects` array below!
  // Fill out the strings with your project details:
  // 
  // {
  //   title: "Name of Security Project or Research Publication",
  //   subtitle: "Classification of research (e.g. Wireless Recon PoC)",
  //   year: "Year or date of release (e.g. 2026)",
  //   domain: "Major category (e.g. Offensive Security / RF Exploitation)",
  //   stack: "Technologies used as comma-separated list (e.g. Wireshark, Python)",
  //   desc: "Short descriptive background of findings, remediation, or implementation details.",
  //   img: "Unsplash ID or high resolution image path (e.g. https://images.unsplash.com/photo-1558494949-ef010cbdcc48?w=800)"
  // }
  // =========================================================================
  const projects: Array<{
    title: string;
    subtitle: string;
    year: string;
    domain: string;
    stack: string;
    desc: string;
    img: string;
    paperUrl?: string;
  }> = [
    {
      title: "OWASP Top 10 Web Application Penetration Testing",
      subtitle: "Full-Scope Exploitation & Remediation POC",
      year: "2026",
      domain: "Web App Pentesting",
      stack: "Burp Suite, OWASP ZAP, SQLMap, Kali Linux",
      desc: "Conducted full-scope penetration testing on modern target application environments. Successfully identified and exploited Blind SQL Injections, Stored XSS, and broken session controls, compiling production-hardened remediation scripts to resolve exposure vectors.",
      img: "/certificates/owasp-banner.png",
      paperUrl: "https://verify.hackersdaddy.com/cert/jwpt.01a3e9fefa88443ca8c87a91a4791e17.manirathnam-chiluka-f6ad"
    },
    {
      title: "Automated API Threat Simulation & Fuzzing Engine",
      subtitle: "Mass Assignment & Broken Object Level Auth",
      year: "2026",
      domain: "API Security",
      stack: "Postman, Python, JWT Automation, PyTest",
      desc: "Designed an automated python fuzzing script that verifies authorization controls on REST and GraphQL microservices. Identifies IDOR vulnerabilities, broken schema validations, and token manipulation patterns to harden API gateways.",
      img: "/certificates/api-banner.png"
    },
    {
      title: "Rolling Code Interception & RF Replay",
      subtitle: "RollJam Attack POC Simulation",
      year: "2026",
      domain: "RF Security",
      stack: "HackRF One, Flipper Zero, GQRX, SDR",
      desc: "Built a physical RollJam attacker simulation demonstrating structural flaws in keyless rolling-code entry mechanisms. Utilized software-defined radios to signal-jam and replay authentic packets, generating precise proof diagrams.",
      img: "/certificates/Rolling-logo.png"
    }
  ];

  const platforms = ["Kali Linux", "Linux CLI", "VirtualBox", "TryHackMe"];

  return (
    <div className="pt-24 space-y-12">
      <div className="fixed top-24 right-8 z-50">
        <a 
          href="/resume.pdf" 
          download="Chiluka_Manirathnam_Resume.pdf"
          className="p-3 rounded-full bg-neon-blue text-white shadow-lg hover:bg-blue-600 transition-all flex items-center justify-center" 
          title="Get Resume"
        >
          <Download className="w-5 h-5" />
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-slate-200/50 pb-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-black hacker-heading">Security_Log</h1>
          <p className="text-slate-600 font-mono text-[11px] uppercase tracking-[0.4em]">Archived Research & Exploitation Tasks</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {platforms.map(p => (
            <span key={p} className="glass-pill text-[10px] font-mono font-bold">
              {p}
            </span>
          ))}
        </div>
      </div>

      {projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center border border-dashed border-slate-300 rounded-3xl p-10 md:p-16 text-center space-y-6 bg-slate-500/5 backdrop-blur-sm max-w-2xl mx-auto my-12 shadow-sm">
          <div className="p-4 bg-neon-cyan/5 border border-neon-cyan/25 rounded-2xl relative">
            <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
            </span>
            <Shield className="w-10 h-10 text-neon-cyan" />
          </div>
          <div className="space-y-2">
            <h3 className="font-mono font-black text-xs md:text-sm text-slate-800 tracking-[0.2em] uppercase">SEC_LOGS_PENDING // 0X00</h3>
            <p className="text-xs text-slate-500 max-w-sm font-mono leading-relaxed">
              Research archives are currently unpopulated. Complete your setup by appending project records.
            </p>
          </div>
          <div className="bg-slate-950 border border-white/10 p-5 rounded-2xl text-left w-full text-[10px] font-mono text-slate-400 overflow-x-auto shadow-md">
            <div className="text-neon-cyan font-bold mb-2">// Direct Layout Schema (Modify src/pages/Projects.tsx):</div>
            <div className="text-slate-500">// Uncomment/add records inside the projects array array block:</div>
            <div className="mt-1">{"{"}</div>
            <div className="pl-4 text-emerald-400">{"title: \"My Security Research Project\","}</div>
            <div className="pl-4 text-emerald-400">{"subtitle: \"Zero-Day Exploit PoC\","}</div>
            <div className="pl-4 text-emerald-400">{"year: \"2026\","}</div>
            <div className="pl-4 text-emerald-400">{"domain: \"Offensive Operations\","}</div>
            <div className="pl-4 text-emerald-400">{"stack: \"Python, GDB, Ghidra\","}</div>
            <div className="pl-4 text-emerald-400">{"desc: \"Analyzed execution flow paths and engineered payload logic.\""}</div>
            <div>{"}"}</div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="cyber-card group overflow-hidden flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={p.img} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute top-4 right-4 bg-neon-blue/95 text-white font-mono text-[10px] px-3 py-1 rounded-full font-bold tracking-tighter">
                  {p.year}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-neon-cyan/15 text-cyan-800 font-mono text-[9px] px-3 py-1 rounded border border-neon-cyan/35 uppercase tracking-widest font-black backdrop-blur-[1.5px]">
                    Class: {p.domain}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4 flex flex-col flex-1">
                <div className="space-y-2">
                  <h4 className="font-extrabold text-xl text-slate-900 group-hover:text-neon-cyan transition-colors leading-tight">
                    {p.title}
                  </h4>
                  <p className="text-[10px] font-mono text-neon-cyan font-black tracking-widest uppercase opacity-80">
                    {p.subtitle}
                  </p>
                </div>
                <p className="text-[12px] text-slate-600 leading-relaxed flex-1 font-medium bg-slate-50 p-3 rounded-lg border-l-2 border-neon-cyan/50">
                  <span className="text-slate-400 font-mono text-[10px] block mb-1 font-bold uppercase tracking-tighter">// EXECUTIVE SUMMARY</span>
                  {p.desc}
                </p>
                <div className="pt-4 border-t border-slate-150 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {p.stack.split(', ').map(tech => (
                      <span key={tech} className="text-[9px] font-mono font-extrabold text-slate-700 bg-white/5 backdrop-blur-[1.5px] border border-white/15 px-2.5 py-1 rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.paperUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full cyber-button-primary font-bold"
                  >
                    View Technical Advisory <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
