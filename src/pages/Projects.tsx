import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Shield, Download, Filter, Terminal, CheckCircle2 } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  year: string;
  domain: string;
  category: 'all' | 'webapp' | 'api' | 'rf';
  stack: string[];
  findings: string;
  remediation: string;
  img: string;
  paperUrl?: string;
  advisoryLabel?: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'webapp' | 'api' | 'rf'>('all');

  const projects: Project[] = [
    {
      title: "OWASP Top 10 Web Application Penetration Testing",
      subtitle: "Full-Scope Exploitation & Remediation POC",
      year: "2026",
      domain: "Web AppSec",
      category: "webapp",
      stack: ["Burp Suite", "OWASP ZAP", "SQLMap", "Kali Linux", "Wireshark"],
      findings: "Identified and exploited critical vulnerabilities including Blind SQL Injections, Stored Cross-Site Scripting (XSS), and Broken Authentication flows across simulated banking and enterprise application targets.",
      remediation: "Authored end-to-end security advisory specifying parameterized SQL queries, Strict-Transport-Security headers, Context-Aware HTML encoding, and session entropy enforcement.",
      img: "/certificates/owasp-banner.png",
      paperUrl: "https://verify.hackersdaddy.com/cert/jwpt.01a3e9fefa88443ca8c87a91a4791e17.manirathnam-chiluka-f6ad",
      advisoryLabel: "View Verified Certificate"
    },
    {
      title: "Automated API Threat Simulation & Fuzzing Engine",
      subtitle: "Mass Assignment & Broken Object Level Auth (BOLA)",
      year: "2026",
      domain: "API Security",
      category: "api",
      stack: ["Postman", "Python", "JWT Manipulation", "PyTest", "REST / GraphQL"],
      findings: "Engineered automated test suites to simulate BOLA/IDOR, broken function-level authorization (BFLA), token tampering, and mass-assignment flaws across decoupled microservices.",
      remediation: "Implemented automated CI validation scripts for API schema adherence, strict object-level privilege checks, and token signature validation rules on API gateways.",
      img: "/certificates/api-banner.png",
      paperUrl: "/certificates/ACPExam-cert.pdf",
      advisoryLabel: "View API Certification PoC"
    },
    {
      title: "Rolling Code Interception & RF Replay",
      subtitle: "RollJam Attack POC Simulation",
      year: "2026",
      domain: "RF Security",
      category: "rf",
      stack: ["HackRF One", "Flipper Zero", "GQRX", "SDR#", "Python"],
      findings: "Simulated RollJam vulnerability on keyless entry systems operating on 315MHz/433MHz frequencies. Demonstrated signal jamming and consecutive rolling-code packet interception to execute an unauthorized replay.",
      remediation: "Documented RF security architecture improvements including cryptographic timestamping, anti-jamming frequency hopping, and challenge-response hardware validation.",
      img: "/certificates/Rolling-logo.png",
      paperUrl: "/certificates/JWPT-Certificate-Manirathnam-Chiluka.png",
      advisoryLabel: "View Research Proof"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const categories = [
    { id: 'all', label: 'All Operations' },
    { id: 'webapp', label: 'Web AppSec' },
    { id: 'api', label: 'API Security' },
    { id: 'rf', label: 'RF & Hardware' },
  ];

  return (
    <div className="pt-28 space-y-12 pb-16">
      {/* Header & Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[var(--card-border)] pb-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-600 dark:text-cyan-400 uppercase tracking-widest">
            <Terminal className="w-4 h-4" /> Offensive Case Studies
          </div>
          <h1 className="text-4xl sm:text-5xl font-black hacker-heading">Security_Log</h1>
          <p className="text-[var(--text-muted)] font-mono text-xs uppercase tracking-[0.3em]">
            Documented Penetration Testing, PoC Exploits &amp; Hardening Advisories
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-[var(--card-border)]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id as any)}
              className={`px-3.5 py-1.5 rounded-xl text-[11px] font-mono font-bold transition-all ${
                activeFilter === cat.id
                  ? 'bg-white dark:bg-slate-800 text-sky-600 dark:text-cyan-400 shadow-sm border border-slate-200 dark:border-cyan-400/30'
                  : 'text-[var(--text-muted)] hover:text-[var(--heading-main)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {filteredProjects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="cyber-card group overflow-hidden flex flex-col h-full border border-[var(--card-border)]"
          >
            {/* Project Image Banner */}
            <div className="h-52 overflow-hidden relative bg-slate-900">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-slate-900/90 text-white font-mono text-[10px] px-3 py-1 rounded-full font-bold border border-white/10 backdrop-blur-md">
                {p.year}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-sky-500/20 text-sky-300 dark:text-cyan-300 font-mono text-[10px] px-3 py-1 rounded-lg border border-sky-400/30 uppercase tracking-widest font-black backdrop-blur-md">
                  Scope: {p.domain}
                </span>
              </div>
            </div>

            {/* Project Card Body */}
            <div className="p-6 space-y-5 flex flex-col flex-1">
              <div className="space-y-1.5">
                <h2 className="font-extrabold text-xl text-[var(--heading-main)] group-hover:text-sky-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                  {p.title}
                </h2>
                <p className="text-[11px] font-mono text-sky-600 dark:text-cyan-400 font-bold uppercase tracking-wider">
                  {p.subtitle}
                </p>
              </div>

              {/* High-Signal Findings & Remediation */}
              <div className="space-y-3 flex-1 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-[var(--card-border)] space-y-1">
                  <div className="text-[10px] font-mono font-black text-rose-600 dark:text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Shield className="w-3 h-3" /> Exploitation &amp; Findings
                  </div>
                  <p className="text-[var(--text-main)] leading-relaxed font-medium">
                    {p.findings}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-500/5 dark:bg-emerald-400/5 border border-emerald-500/20 dark:border-emerald-400/20 space-y-1">
                  <div className="text-[10px] font-mono font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3" /> Defense &amp; Remediation
                  </div>
                  <p className="text-[var(--text-muted)] leading-relaxed">
                    {p.remediation}
                  </p>
                </div>
              </div>

              {/* Tech Stack Pills & Advisory Link */}
              <div className="pt-4 border-t border-[var(--card-border)] space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map(tech => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {p.paperUrl && (
                  <a
                    href={p.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full cyber-button-primary font-bold text-xs"
                  >
                    {p.advisoryLabel || 'View Technical Advisory'} <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
