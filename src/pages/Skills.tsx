import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import * as d3 from 'd3';
import { Server, Cpu, Code, Languages, GraduationCap } from 'lucide-react';

const RadarChart = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  const data = [
    { axis: "Web/API Security", value: 90 },
    { axis: "Security Tools", value: 95 },
    { axis: "Wireless/IoT", value: 85 },
    { axis: "Programming", value: 80 },
    { axis: "Forensics", value: 70 },
  ];

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 300;
    const height = 300;
    const margin = 50;
    const radius = Math.min(width, height) / 2 - margin;
    const levels = 4;
    const angleSlice = (Math.PI * 2) / data.length;

    const g = svg.append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    // Draw grid
    for (let j = 0; j < levels; j++) {
      const levelRadius = radius * ((j + 1) / levels);
      g.selectAll(".grid-circle-" + j)
        .data(data)
        .enter()
        .append("line")
        .attr("x1", (d, i) => levelRadius * Math.cos(angleSlice * i - Math.PI / 2))
        .attr("y1", (d, i) => levelRadius * Math.sin(angleSlice * i - Math.PI / 2))
        .attr("x2", (d, i) => levelRadius * Math.cos(angleSlice * (i + 1) - Math.PI / 2))
        .attr("y2", (d, i) => levelRadius * Math.sin(angleSlice * (i + 1) - Math.PI / 2))
        .attr("class", "radar-grid");
    }

    // Draw axes
    const axis = g.selectAll(".axis")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "axis");

    axis.append("line")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", (d, i) => radius * Math.cos(angleSlice * i - Math.PI / 2))
      .attr("y2", (d, i) => radius * Math.sin(angleSlice * i - Math.PI / 2))
      .attr("class", "radar-axis");

    axis.append("text")
      .attr("class", "fill-slate-700 text-[10px] font-mono uppercase font-black")
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr("x", (d, i) => (radius + 35) * Math.cos(angleSlice * i - Math.PI / 2))
      .attr("y", (d, i) => (radius + 35) * Math.sin(angleSlice * i - Math.PI / 2))
      .text(d => d.axis);

    // Draw area
    const radarLine = d3.lineRadial<any>()
      .radius(d => (radius * d.value) / 100)
      .angle((d, i) => i * angleSlice);

    const closedData = [...data, data[0]];

    g.append("path")
      .datum(closedData)
      .attr("d", radarLine)
      .attr("class", "radar-area");

  }, []);

  return <svg ref={svgRef} width="350" height="350" className="mx-auto" />;
};

const Skills = () => {
  const tools = ["Wireshark", "Nmap", "Burp Suite", "Gobuster", "Hydra", "tcpdump", "John the Ripper", "HackRF One", "Flipper Zero"];
  const domains = ["API Security", "Web App Security", "Wireless Security", "IoT Security", "Vulnerability Assessment", "Malware Detection", "Digital Forensics", "Network Security"];

  return (
    <div className="pt-24 space-y-12">
      <div className="border-b border-slate-200/50 pb-8">
        <h1 className="text-5xl font-black hacker-heading">Security_Arsenal</h1>
        <p className="text-slate-600 font-mono text-[11px] uppercase tracking-[0.4em] mt-2">Technical Proficiency Matrix & Academic Records</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Technical Matrix */}
        <section className="cyber-card p-10 space-y-12">
          <div className="relative py-8">
            <RadarChart />
            <div className="text-center mt-6">
              <p className="text-[11px] font-mono text-slate-500 uppercase tracking-widest font-bold">Multidimensional Research Capability Matrix</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
               <h3 className="text-xs font-mono font-black uppercase text-neon-cyan tracking-widest flex items-center gap-2"><Code className="w-4 h-4" /> Coding</h3>
               <div className="space-y-4 font-mono">
                  <div>
                    <div className="flex justify-between text-[10px] mb-1">
                      <span className="text-slate-800 font-extrabold">Python</span>
                      <span className="text-neon-cyan">ADVANCED</span>
                    </div>
                    <div className="h-1.5 bg-white/20 border border-white/50 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: '90%' }} transition={{ duration: 1.5 }} className="h-full bg-neon-cyan shadow-[0_0_10px_rgba(8,145,178,0.25)]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] mb-1">
                      <span className="text-slate-800 font-extrabold">C</span>
                      <span className="text-neon-cyan">CORE</span>
                    </div>
                    <div className="h-1.5 bg-white/20 border border-white/50 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: '75%' }} transition={{ duration: 1.5 }} className="h-full bg-neon-blue shadow-[0_0_10px_rgba(37,99,235,0.25)]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] mb-1">
                      <span className="text-slate-800 font-extrabold">Java</span>
                      <span className="text-neon-cyan">BASIC</span>
                    </div>
                    <div className="h-1.5 bg-white/20 border border-white/50 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: '55%' }} transition={{ duration: 1.5 }} className="h-full bg-neon-blue shadow-[0_0_10px_rgba(37,99,235,0.25)]" />
                    </div>
                  </div>
               </div>
            </div>
            
            <div className="space-y-4">
               <h3 className="text-xs font-mono font-black uppercase text-neon-cyan tracking-widest flex items-center gap-2"><Languages className="w-4 h-4" /> Human Protocols</h3>
               <div className="space-y-2">
                  <div className="flex justify-between items-center text-[11px] text-slate-700 bg-white/5 backdrop-blur-[1.5px] border border-white/15 p-2.5 rounded-xl shadow-sm font-medium">
                    <span className="font-extrabold">TELUGU</span>
                    <span className="text-[9px] font-bold text-neon-cyan">NATIVE</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] text-slate-700 bg-white/5 backdrop-blur-[1.5px] border border-white/15 p-2.5 rounded-xl shadow-sm font-medium">
                    <span className="font-extrabold">ENGLISH</span>
                    <span className="text-[9px] font-bold text-neon-cyan">PROFICIENT</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] text-slate-700 bg-white/5 backdrop-blur-[1.5px] border border-white/15 p-2.5 rounded-xl shadow-sm font-medium">
                    <span className="font-extrabold">HINDI</span>
                    <span className="text-[9px] font-bold text-neon-cyan">BASIC</span>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Categories & Education */}
        <div className="space-y-8">
          <section className="cyber-card p-10 space-y-10">
            <div className="space-y-6">
              <h3 className="text-sm font-mono font-black uppercase text-slate-800 tracking-[0.3em] flex items-center gap-3">
                <Server className="w-5 h-5 text-neon-cyan" /> Specialized Domains
              </h3>
              <div className="flex flex-wrap gap-3">
                {domains.map(d => (
                  <span key={d} className="bg-neon-cyan/5 border border-neon-cyan/20 text-[10px] px-4 py-2 font-mono text-slate-800 hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all cursor-crosshair rounded-lg font-bold">
                    {d}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-mono font-black uppercase text-slate-800 tracking-[0.3em] flex items-center gap-3">
                <Cpu className="w-5 h-5 text-neon-cyan" /> Toolsets
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map(t => (
                  <span key={t} className="bg-white/5 backdrop-blur-[1.5px] border border-white/15 text-[10px] px-4 py-2.5 font-mono text-slate-700 shadow-sm rounded-lg transition-all hover:bg-neon-cyan/15 hover:border-neon-cyan/40 hover:text-slate-950 cursor-help font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="cyber-card p-10 space-y-10">
             <div className="space-y-8">
               <h3 className="text-sm font-mono uppercase tracking-[0.3em] font-black text-slate-800 flex items-center gap-3">
                 <GraduationCap className="w-6 h-6 text-neon-cyan" /> Academic_Path
               </h3>
               <div className="space-y-8">
                  <div className="relative pl-10 border-l-2 border-slate-200 group">
                     <div className="absolute left-[-9px] top-1.5 w-[16px] h-[16px] rounded-full bg-white border-[3px] border-neon-cyan group-hover:shadow-[0_0_12px_rgba(8,145,178,0.5)] transition-all duration-300" />
                     <p className="text-lg font-black text-slate-900 tracking-tight">B.Tech – CSE (Cybersecurity)</p>
                     <p className="text-xs text-slate-600 font-mono font-bold mt-1">CMR College of Engineering & Technology</p>
                     <div className="mt-3 inline-block px-3 py-1 bg-neon-cyan/10 border border-neon-cyan/20 rounded font-mono text-[10px] text-slate-800 font-extrabold">2024 – 2027 // 7.5 CGPA</div>
                  </div>
                  <div className="relative pl-10 border-l-2 border-slate-200 group">
                     <div className="absolute left-[-9px] top-1.5 w-[16px] h-[16px] rounded-full bg-white border-[3px] border-slate-300 group-hover:border-neon-cyan transition-all duration-300" />
                     <p className="text-lg font-black text-slate-700 tracking-tight">Diploma – CSE</p>
                     <p className="text-xs text-slate-500 font-mono mt-1">Kshatriya College of Engineering</p>
                     <div className="mt-3 inline-block px-3 py-1 bg-white/5 backdrop-blur-[1.5px] border border-white/15 rounded font-mono text-[10px] text-slate-700 font-bold">2021 – 2024 // 8.29 GPA</div>
                  </div>
               </div>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skills;
