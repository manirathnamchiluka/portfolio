import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Phone, Send, CheckCircle2, Copy, Check, Terminal } from 'lucide-react';
import { motion } from 'motion/react';

const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Security Assessment',
    message: ''
  });

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = `[Portfolio] ${formData.category} — ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nInquiry: ${formData.category}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:chilmanirathnam1729@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className="pt-28 space-y-12 pb-16">
      {/* Header */}
      <div className="border-b border-[var(--card-border)] pb-8 text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-sky-600 dark:text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-sky-500/10 dark:bg-cyan-400/10 border border-sky-500/20 dark:border-cyan-400/25">
          <Terminal className="w-3.5 h-3.5" /> Encrypted Transmission Channel
        </div>
        <h1 className="text-4xl sm:text-5xl font-black hacker-heading">Establish_Link</h1>
        <p className="text-[var(--text-muted)] font-mono text-xs uppercase tracking-[0.3em]">
          Direct Communication Line for Security Roles, Pentesting, &amp; Research
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
        {/* Left Form Box */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="cyber-card p-8 sm:p-10 border border-[var(--card-border)]"
          >
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8 animate-bounce" />
                </div>
                <h3 className="text-2xl font-black text-[var(--heading-main)]">Email Draft Opened</h3>
                <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto leading-relaxed">
                  Thanks, <span className="font-bold text-[var(--heading-main)]">{formData.name}</span>. Your email app should now contain a pre-filled message addressed to Chiluka. Send it to complete your request.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', category: 'Security Assessment', message: '' });
                  }}
                  className="cyber-button-outline mx-auto mt-4 text-xs"
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-xl font-black text-[var(--heading-main)]">
                    Initiate Connection Request
                  </h2>
                  <p className="text-xs text-[var(--text-muted)]">
                    Open for internship opportunities, application security audits, and technical research discussions.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase font-extrabold text-[var(--heading-main)] tracking-wider block">
                      Your Name / Entity
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] p-4 rounded-xl text-sm focus:border-sky-500 dark:focus:border-cyan-400 outline-none transition-all placeholder:text-slate-400 text-[var(--text-main)] font-medium shadow-sm"
                      placeholder="e.g. Google Security Team / Recruiter"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase font-extrabold text-[var(--heading-main)] tracking-wider block">
                      Direct Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] p-4 rounded-xl text-sm focus:border-sky-500 dark:focus:border-cyan-400 outline-none transition-all placeholder:text-slate-400 text-[var(--text-main)] font-medium shadow-sm"
                      placeholder="name@organization.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-mono uppercase font-extrabold text-[var(--heading-main)] tracking-wider block">
                    Inquiry Scope
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] p-4 rounded-xl text-sm focus:border-sky-500 dark:focus:border-cyan-400 outline-none transition-all text-[var(--text-main)] font-medium shadow-sm"
                  >
                    <option value="Security Assessment">AppSec / WebApp Penetration Testing</option>
                    <option value="Full-time / Internship Role">Full-time / Internship Opportunity</option>
                    <option value="API Security Review">API Security Architecture / Fuzzing</option>
                    <option value="Research Collaboration">Security Research Collaboration</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-mono uppercase font-extrabold text-[var(--heading-main)] tracking-wider block">
                    Transmission Brief
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[var(--bg-secondary)] border border-[var(--card-border)] p-4 rounded-xl text-sm focus:border-sky-500 dark:focus:border-cyan-400 outline-none transition-all placeholder:text-slate-400 text-[var(--text-main)] font-medium resize-none shadow-sm"
                    placeholder="Provide details regarding the project, role, or security objective..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full cyber-button-primary py-4 text-xs uppercase tracking-[0.25em] font-black"
                >
                  Open Email Draft <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Right Info Cards */}
        <div className="lg:col-span-5 space-y-6 flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="cyber-card p-8 sm:p-10 space-y-6 flex-1 flex flex-col justify-between border border-[var(--card-border)]"
          >
            <div className="space-y-6">
              <h3 className="text-sm font-mono font-black uppercase text-[var(--heading-main)] tracking-widest">
                Direct Communication Coordinates
              </h3>

              {/* Email */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--card-border)] group">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="p-3 bg-sky-500/10 dark:bg-cyan-400/10 text-sky-600 dark:text-cyan-400 rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase">Primary Email</div>
                    <div className="text-sm font-extrabold text-[var(--heading-main)] truncate font-mono">
                      chilmanirathnam1729@gmail.com
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('chilmanirathnam1729@gmail.com', 'email')}
                  className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-sky-600 dark:text-cyan-400 transition-colors shrink-0 ml-2"
                  title="Copy Email"
                >
                  {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--card-border)] group">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="p-3 bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase">Direct Line</div>
                    <div className="text-sm font-extrabold text-[var(--heading-main)] font-mono">
                      +91 8465069682
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('+918465069682', 'phone')}
                  className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-sky-600 dark:text-cyan-400 transition-colors shrink-0 ml-2"
                  title="Copy Phone Number"
                >
                  {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--card-border)]">
                <div className="p-3 bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 rounded-xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase">Base Grid</div>
                  <div className="text-sm font-extrabold text-[var(--heading-main)]">
                    Hyderabad, India (IST / UTC+5:30)
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-6 border-t border-[var(--card-border)] grid grid-cols-2 gap-3">
              <a
                href="https://linkedin.com/in/manirathnam-chiluka/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-[var(--card-border)] bg-[var(--bg-secondary)] hover:border-[#0A66C2] text-xs font-mono font-bold flex items-center justify-center gap-2 text-[var(--heading-main)] hover:text-[#0A66C2] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" /> LinkedIn
              </a>
              <a
                href="https://github.com/manirathnamchiluka"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-[var(--card-border)] bg-[var(--bg-secondary)] hover:border-slate-400 dark:hover:border-cyan-400 text-xs font-mono font-bold flex items-center justify-center gap-2 text-[var(--heading-main)] transition-colors"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
