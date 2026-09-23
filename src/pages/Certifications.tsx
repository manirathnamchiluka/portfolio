import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Award, Star, Check, Copy, ShieldCheck } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  id: string;
  status?: string;
  featured?: boolean;
  logo: string;
  verifyUrl: string;
  skillsAcquired: string[];
}

const Certifications: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const certifications: Certification[] = [
    {
      title: "Certified Junior Webapp Penetration Tester (JWPT)",
      issuer: "Hackers Daddy / VULN",
      date: "Jun 2026",
      id: "VULN-2026-00007",
      status: "FEATURED",
      featured: true,
      logo: "/certificates/hddy-logo.png",
      verifyUrl: "/certificates/JWPT-Certificate-Manirathnam-Chiluka.png",
      skillsAcquired: ["SQL Injection", "XSS & CSRF", "Session Hijacking", "Manual Web Pentesting"]
    },
    {
      title: "APISEC Certified Practitioner (ACP)",
      issuer: "APISEC University",
      date: "Apr 2026",
      logo: "/certificates/ACP-BADGE.png",
      id: "2a07990e-879c-4787-8fa2-32f0ff049759",
      status: "FEATURED",
      featured: true,
      verifyUrl: "/certificates/ACPExam-cert.pdf",
      skillsAcquired: ["API Security Architecture", "BOLA / IDOR Testing", "REST & GraphQL Security", "Token Verification"]
    },
    {
      title: "Advent of Cyber 2025",
      issuer: "TryHackMe",
      date: "Dec 2025",
      logo: "https://tryhackme.com/img/favicon.png",
      id: "THM-OQXK6YS6AA",
      verifyUrl: "/certificates/THM-OQXK6YS6AA-cert.pdf",
      skillsAcquired: ["Offensive CTF Methodology", "Log Analysis", "Memory Forensics", "Network Recon"]
    },
    {
      title: "Machine Learning for Cybersecurity",
      issuer: "CDAC / Certificate Authority",
      date: "Feb 2025",
      logo: "/certificates/cdac-badge.png",
      id: "ML-2025",
      verifyUrl: "/certificates/ML%20for%20Cybersecurity-cert.pdf",
      skillsAcquired: ["Anomaly Detection", "Malware Classification", "Feature Extraction", "Threat Prediction"]
    },
    {
      title: "Certified Online Fraud Prevention Specialist (COFPS)",
      issuer: "Hack & Fix Academy",
      date: "Sep 2026",
      logo: "/certificates/COFPS-logo.webp",
      id: "1718-2219-8667-2356",
      verifyUrl: "/certificates/COFPS.pdf",
      skillsAcquired: ["Fraud Pattern Recognition", "Phishing & Social Engineering", "Scam Prevention", "Fraud Response Fundamentals"]
    },
  ];

  const handleCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="pt-28 space-y-12 pb-16">
      {/* Header */}
      <div className="border-b border-[var(--card-border)] pb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-600 dark:text-cyan-400 uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" /> Professional Attestations
          </div>
          <h1 className="text-4xl sm:text-5xl font-black hacker-heading">Credential_Log</h1>
          <p className="text-[var(--text-muted)] font-mono text-xs uppercase tracking-[0.3em]">
            Verified Industry Credentials, Specialized Accreditations &amp; Badges
          </p>
        </div>
        <div className="px-4 py-2 rounded-xl bg-sky-500/10 dark:bg-cyan-400/10 border border-sky-500/20 dark:border-cyan-400/25 font-mono text-xs font-bold text-sky-700 dark:text-cyan-300">
          TOTAL_CERTIFIED: {certifications.length}
        </div>
      </div>

      {/* Grid of Credentials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((c, idx) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            className={`cyber-card p-8 group flex flex-col justify-between space-y-6 relative overflow-hidden border ${
              c.featured
                ? 'border-sky-500/40 dark:border-cyan-400/50 shadow-md ring-1 ring-sky-500/20 dark:ring-cyan-400/20'
                : 'border-[var(--card-border)]'
            }`}
          >
            {c.featured && (
              <div className="absolute top-0 right-0 bg-sky-600 dark:bg-cyan-400 text-white dark:text-slate-950 font-mono text-[9px] font-black uppercase px-4 py-1.5 rounded-bl-xl flex items-center gap-1.5 shadow-sm">
                <Star className="w-3 h-3 fill-current" /> Featured Credential
              </div>
            )}

            <div className="space-y-6">
              {/* Logo & Issuer */}
              <div className="flex items-start justify-between gap-4">
                <div className="p-3.5 bg-white dark:bg-slate-900 rounded-2xl border border-[var(--card-border)] w-20 h-20 flex items-center justify-center shadow-sm">
                  <img
                    src={c.logo}
                    alt={c.issuer}
                    className="w-full h-full object-contain filter group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                    {c.date}
                  </span>
                  <span className="inline-block mt-1 text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[var(--text-muted)] border border-[var(--card-border)]">
                    VERIFIED
                  </span>
                </div>
              </div>

              {/* Title & Issuer Info */}
              <div className="space-y-1.5">
                <h2 className="font-extrabold text-xl text-[var(--heading-main)] group-hover:text-sky-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                  {c.title}
                </h2>
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-sky-600 dark:text-cyan-400">
                  <Award className="w-4 h-4" /> {c.issuer}
                </div>
              </div>

              {/* Acquired Skills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {c.skillsAcquired.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-md bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions: Copy ID & View Link */}
            <div className="space-y-3 pt-5 border-t border-[var(--card-border)]">
              <div className="flex items-center justify-between text-[11px] font-mono bg-slate-50 dark:bg-slate-900/80 p-2.5 rounded-xl border border-[var(--card-border)]">
                <span className="text-[var(--text-muted)] truncate pr-2 font-semibold">
                  ID: <span className="text-[var(--heading-main)]">{c.id}</span>
                </span>
                <button
                  onClick={() => handleCopy(c.id)}
                  className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-sky-600 dark:text-cyan-400 transition-colors shrink-0"
                  title="Copy Certificate ID"
                >
                  {copiedId === c.id ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <a
                href={c.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full ${c.featured ? 'cyber-button-primary' : 'cyber-button-outline'} font-bold text-xs`}
              >
                Inspect Official Credential <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
