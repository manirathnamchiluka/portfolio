import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Award, Star } from 'lucide-react';

const Certifications = () => {
type Certification = {
  title: string;
  issuer: string;
  date: string;
  id: string;
  status?: string;
  featured?: boolean;
  logo: string;
  verifyUrl: string;
  customBadge?: string;
  badgeSubtext?: string;
};

  const certifications: Certification[] = [
    {
      title: "Certified Junior Webapp Penetration Tester (JWPT)",
      issuer: "Hackers Daddy / VULN",
      date: "Jun 2026",
      id: "VULN-2026-00007",
      status: "NEW",
      featured: true,
      logo: "/certificates/hddy-logo.png",
      verifyUrl: "/certificates/JWPT-Certificate-Manirathnam-Chiluka.png",
    },
    {
      title: "APISEC Certified Practitioner",
      issuer: "APISEC University",
      date: "Apr 2026",
      logo: "/certificates/ACP-BADGE.png",
      id: "2a07990e-879c-4787-8fa2-32f0ff049759",
      status: "NEW",
      featured: true,
      verifyUrl: "/certificates/ACPExam-cert.pdf",
    },
    {
      title: "Advent of Cyber 2025",
      issuer: "TryHackMe",
      date: "Dec 2025",
      logo: "https://tryhackme.com/img/favicon.png",
      id: "THM-OQXK6YS6AA",
      verifyUrl: "/certificates/THM-OQXK6YS6AA-cert.pdf",
    },
    {
      title: "ML for Cybersecurity",
      issuer: "Certificate",
      date: "Feb 2025",
      logo: "/certificates/cdac-badge.png",
      id: "ML-2025",
      verifyUrl: "/certificates/ML%20for%20Cybersecurity-cert.pdf",
    },
  ];

  return (
    <div className="pt-24 space-y-12 pb-20">
      <div className="border-b border-slate-200/50 pb-8 flex justify-between items-end">
        <div className="space-y-4">
          <h1 className="text-5xl font-black hacker-heading">Credential_Log</h1>
          <p className="text-slate-600 font-mono text-[11px] uppercase tracking-[0.4em]">Validated Achievements & Professional Recognition</p>
        </div>
        <div className="text-neon-cyan font-mono text-xs font-bold bg-neon-cyan/10 px-4 py-2 border border-neon-cyan/25 rounded-xl shadow-sm">
          TOTAL_NODES: {certifications.length}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((c, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            className={`cyber-card p-8 group flex flex-col justify-between space-y-8 relative overflow-hidden ${
              c.featured 
                ? "border-neon-cyan bg-neon-cyan/[0.03] shadow-[0_0_25px_rgba(8,145,178,0.2)] ring-1 ring-neon-cyan/45" 
                : ""
            }`}
          >
             {c.featured && (
               <div className="absolute top-0 right-0 bg-neon-cyan text-slate-950 font-mono text-[9px] font-black uppercase px-4 py-1.5 rounded-bl-xl flex items-center gap-1.5 shadow-sm">
                 <Star className="w-3.5 h-3.5 fill-slate-950 text-slate-950" /> Featured Credential
               </div>
             )}

             <div className="space-y-6">
                <div className="flex justify-between items-start">
                   {c.customBadge ? (
                     <div className="h-20 w-20 shrink-0 flex flex-col items-center justify-center bg-slate-950 border-2 border-neon-cyan/85 rounded-2xl shadow-[0_0_15px_rgba(8,145,178,0.35)] relative group-hover:scale-105 transition-transform overflow-hidden font-mono">
                       <span className="text-[14px] font-black text-neon-cyan tracking-tighter leading-none">{c.customBadge}</span>
                       <span className="text-[7px] font-black text-slate-400 mt-1 uppercase scale-90 tracking-widest leading-none">{c.badgeSubtext || 'VULN'}</span>
                     </div>
                   ) : (
                     <div className="p-4 bg-white/5 backdrop-blur-[1.5px] border border-white/15 rounded-2xl group-hover:bg-neon-cyan/15 transition-all h-20 w-20 flex items-center justify-center shadow-sm">
                        <img src={c.logo} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all opacity-85 group-hover:opacity-100" referrerPolicy="no-referrer" />
                     </div>
                   )}
                  
                  {c.status && (
                    <span className={`text-[9px] font-mono font-black px-3 py-1 rounded-full border ${
                      c.status === 'NEW' 
                        ? 'bg-neon-cyan/15 text-neon-cyan border-neon-cyan/35' 
                        : 'bg-white/5 text-slate-600 border-white/15 backdrop-blur-[1.5px]'
                    }`}>
                      {c.status}
                    </span>
                  )}
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-extrabold text-lg text-slate-900 group-hover:text-neon-cyan transition-colors leading-tight min-h-[50px]">
                    {c.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-slate-500">
                    <Award className="w-4 h-4 text-neon-cyan opacity-85" /> {c.issuer}
                  </div>
                </div>
             </div>

             <div className="space-y-4 pt-6 border-t border-slate-150">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-slate-400 italic font-bold tracking-widest uppercase">{c.date}</span>
                </div>
                {c.id && (
                  <p className="text-[9px] font-mono text-neon-cyan bg-neon-cyan/10 p-2 rounded-lg truncate border border-neon-cyan/25 font-bold">
                    ID: {c.id}
                  </p>
                )}
                <a 
                  href={c.verifyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`w-full text-[11px] font-black tracking-widest uppercase flex items-center justify-center gap-1.5 ${
                    c.featured
                      ? 'cyber-button-primary'
                      : 'cyber-button-outline'
                  }`}
                >
                  Verify Access <ExternalLink className="w-3.5 h-3.5" />
                </a>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
