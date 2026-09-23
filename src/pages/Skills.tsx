import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import * as d3 from 'd3';
import { Server, Cpu, Code, Languages, GraduationCap, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const RadarChart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const { theme } = useTheme();

  const data = [
    { axis: "Web & API Testing", value: 78 },
    { axis: "Security Tooling", value: 72 },
    { axis: "Network Analysis", value: 68 },
    { axis: "Scripting", value: 65 },
    { axis: "Security Awareness", value: 74 },
  ];

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const isDark = theme === 'dark';
    const width = 320;
    const height = 320;
    const margin = 50;
    const radius = Math.min(width, height) / 2 - margin;
    const levels = 4;
    const angleSlice = (Math.PI * 2) / data.length;

    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    // Draw circular polygon levels
    for (let j = 0; j < levels; j++) {
      const levelRadius = radius * ((j + 1) / levels);
      g.selectAll(".grid-level-" + j)
        .data(data)
        .enter()
        .append("line")
        .attr("x1", (d, i) => levelRadius * Math.cos(angleSlice * i - Math.PI / 2))
        .attr("y1", (d, i) => levelRadius * Math.sin(angleSlice * i - Math.PI / 2))
        .attr("x2", (d, i) => levelRadius * Math.cos(angleSlice * (i + 1) - Math.PI / 2))
        .attr("y2", (d, i) => levelRadius * Math.sin(angleSlice * (i + 1) - Math.PI / 2))
        .attr("stroke", isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.12)")
        .attr("stroke-width", "0.75px");
    }

    // Draw axes
    const axis = g
      .selectAll(".axis")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "axis");

    axis
      .append("line")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", (d, i) => radius * Math.cos(angleSlice * i - Math.PI / 2))
      .attr("y2", (d, i) => radius * Math.sin(angleSlice * i - Math.PI / 2))
      .attr("stroke", isDark ? "rgba(255, 255, 255, 0.18)" : "rgba(15, 23, 42, 0.18)")
      .attr("stroke-width", "1px");

    // Axis Labels
    axis
      .append("text")
      .attr("class", isDark ? "fill-slate-200" : "fill-slate-800")
      .attr("font-size", "10px")
      .attr("font-family", "monospace")
      .attr("font-weight", "700")
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr("x", (d, i) => (radius + 28) * Math.cos(angleSlice * i - Math.PI / 2))
      .attr("y", (d, i) => (radius + 28) * Math.sin(angleSlice * i - Math.PI / 2))
      .text((d) => d.axis);

    // Draw Radar polygon area
    const radarLine = d3
      .lineRadial<any>()
      .radius((d) => (radius * d.value) / 100)
      .angle((d, i) => i * angleSlice);

    const closedData = [...data, data[0]];

    g.append("path")
      .datum(closedData)
      .attr("d", radarLine)
      .attr("fill", isDark ? "rgba(34, 211, 238, 0.25)" : "rgba(2, 132, 199, 0.2)")
      .attr("stroke", isDark ? "#22D3EE" : "#0284C7")
      .attr("stroke-width", 2);

    // Add node dots
    g.selectAll(".radar-circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("r", 4)
      .attr("cx", (d, i) => (radius * d.value / 100) * Math.cos(angleSlice * i - Math.PI / 2))
      .attr("cy", (d, i) => (radius * d.value / 100) * Math.sin(angleSlice * i - Math.PI / 2))
      .attr("fill", isDark ? "#22D3EE" : "#0284C7")
      .attr("stroke", isDark ? "#030712" : "#FFFFFF")
      .attr("stroke-width", 1.5);
  }, [theme]);

  return <svg ref={svgRef} width="340" height="340" className="mx-auto" />;
};

const Skills: React.FC = () => {
  const tools = [
    "Burp Suite",
    "OWASP ZAP",
    "Nmap",
    "Wireshark",
    "SQLMap",
    "Gobuster",
    "Postman",
    "Linux CLI / Bash",
    "Git",
    "Docker"
  ];

  const domains = [
    "Web Application Testing (OWASP Top 10)",
    "API Security Fundamentals (BOLA / IDOR)",
    "Authentication & JWT Testing Basics",
    "Vulnerability Assessment & Clear Reporting",
    "Network Reconnaissance & Traffic Analysis",
    "Secure Code Review Fundamentals",
    "Online Fraud & Phishing Prevention",
    "Security Awareness & Incident Escalation"
  ];

  return (
    <div className="pt-28 space-y-12 pb-16">
      {/* Header */}
      <div className="border-b border-[var(--card-border)] pb-8 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-600 dark:text-cyan-400 uppercase tracking-widest">
          <ShieldCheck className="w-4 h-4" /> Technical Capability Matrix
        </div>
        <h1 className="text-4xl sm:text-5xl font-black hacker-heading">Security_Arsenal</h1>
        <p className="text-[var(--text-muted)] font-mono text-xs uppercase tracking-[0.3em]">
          Proficiency Vectors, Toolsets, Coding &amp; Formal Education
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Radar & Coding Box */}
        <section className="cyber-card p-8 sm:p-10 space-y-10 border border-[var(--card-border)]">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-mono font-extrabold uppercase tracking-widest text-[var(--heading-main)]">
                Entry-Level Security Competency
              </h2>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-sky-500/10 dark:bg-cyan-400/10 text-sky-600 dark:text-cyan-400 font-bold border border-sky-500/20 dark:border-cyan-400/25">
                ROLE_READINESS
              </span>
            </div>
            <RadarChart />
            <p className="text-center text-[11px] font-mono text-[var(--text-muted)] mt-4">
              Evidence-based strengths from certifications, labs, coursework, and security projects
            </p>
          </div>

          {/* Programming & Scripting */}
          <div className="space-y-6 pt-6 border-t border-[var(--card-border)]">
            <h3 className="text-xs font-mono font-black uppercase text-sky-600 dark:text-cyan-400 tracking-widest flex items-center gap-2">
              <Code className="w-4 h-4" /> Scripting &amp; Engineering Languages
            </h3>
            <div className="space-y-4 font-mono">
              {[
                { lang: "Python", level: "WORKING", width: "65%", desc: "Automation scripts, API clients, and lab tooling" },
                { lang: "C", level: "FOUNDATIONAL", width: "55%", desc: "Pointers, memory concepts, and secure-coding basics" },
                { lang: "Bash / Shell", level: "WORKING", width: "65%", desc: "Linux workflow, recon commands, and repeatable tasks" },
                { lang: "Java / JS", level: "FOUNDATIONAL", width: "55%", desc: "Application logic review and request handling basics" },
              ].map((c) => (
                <div key={c.lang} className="space-y-1.5">
                  <div className="flex justify-between text-[11px]">
                    <span className="font-extrabold text-[var(--heading-main)]">{c.lang}</span>
                    <span className="text-sky-600 dark:text-cyan-400 font-bold">{c.level}</span>
                  </div>
                  <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-300/40 dark:border-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: c.width }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-cyan-400 dark:to-indigo-400 rounded-full"
                    />
                  </div>
                  <div className="text-[10px] text-[var(--text-muted)]">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Human Communication */}
          <div className="space-y-3 pt-6 border-t border-[var(--card-border)]">
            <h3 className="text-xs font-mono font-black uppercase text-sky-600 dark:text-cyan-400 tracking-widest flex items-center gap-2">
              <Languages className="w-4 h-4" /> Human Protocols
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { lang: "English", level: "PROFICIENT" },
                { lang: "Telugu", level: "NATIVE" },
                { lang: "Hindi", level: "WORKING" },
              ].map((l) => (
                <div key={l.lang} className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--card-border)] text-center">
                  <div className="text-xs font-extrabold text-[var(--heading-main)]">{l.lang}</div>
                  <div className="text-[9px] font-mono text-sky-600 dark:text-cyan-400 font-bold mt-0.5">{l.level}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Domains, Tools & Education */}
        <div className="space-y-8">
          {/* Domains */}
          <section className="cyber-card p-8 sm:p-10 space-y-6 border border-[var(--card-border)]">
            <h2 className="text-sm font-mono font-black uppercase text-[var(--heading-main)] tracking-widest flex items-center gap-3">
              <Server className="w-5 h-5 text-sky-600 dark:text-cyan-400" /> Entry-Level Security Focus
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {domains.map((d) => (
                <span
                  key={d}
                  className="px-3.5 py-2 rounded-xl text-xs font-mono font-semibold bg-[var(--bg-secondary)] text-[var(--heading-main)] border border-[var(--card-border)] hover:border-sky-500/50 dark:hover:border-cyan-400/50 transition-all"
                >
                  {d}
                </span>
              ))}
            </div>
          </section>

          {/* Toolsets */}
          <section className="cyber-card p-8 sm:p-10 space-y-6 border border-[var(--card-border)]">
            <h2 className="text-sm font-mono font-black uppercase text-[var(--heading-main)] tracking-widest flex items-center gap-3">
              <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" /> Security Arsenal &amp; Platforms
            </h2>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg text-[11px] font-mono font-bold bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] hover:border-sky-500/40 dark:hover:border-cyan-400/40 transition-all cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* Academic Path */}
          <section className="cyber-card p-8 sm:p-10 space-y-6 border border-[var(--card-border)]">
            <h2 className="text-sm font-mono font-black uppercase text-[var(--heading-main)] tracking-widest flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> Academic Qualifications
            </h2>
            <div className="space-y-6 relative pl-6 border-l-2 border-slate-200 dark:border-slate-800">
              <div className="relative group">
                <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-sky-600 dark:bg-cyan-400 ring-4 ring-white dark:ring-slate-950" />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-extrabold text-[var(--heading-main)]">
                    B.Tech in Computer Science &amp; Engineering (Cybersecurity)
                  </h3>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-600 dark:text-cyan-300 border border-sky-500/20">
                    2024 – 2027 // 7.5 CGPA
                  </span>
                </div>
                <p className="text-xs text-[var(--text-muted)] font-mono mt-1">
                  CMR College of Engineering &amp; Technology (CMRCET), Hyderabad
                </p>
              </div>

              <div className="relative group">
                <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-slate-300 dark:bg-slate-700 ring-4 ring-white dark:ring-slate-950 group-hover:bg-sky-500" />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-extrabold text-[var(--heading-main)]">
                    Diploma in Computer Science &amp; Engineering
                  </h3>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[var(--text-muted)] border border-[var(--card-border)]">
                    2021 – 2024 // 8.29 GPA
                  </span>
                </div>
                <p className="text-xs text-[var(--text-muted)] font-mono mt-1">
                  Kshatriya College of Engineering (KCEA), Nizamabad
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skills;
