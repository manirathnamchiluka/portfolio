import React from 'react';
import { Mail, Linkedin, Github, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'motion/react';

const Contact = () => {
  return (
    <div className="pt-24 space-y-12">
      <div className="border-b border-slate-200/50 pb-8 text-center max-w-2xl mx-auto">
        <h1 className="text-5xl font-black hacker-heading">Establish_Link</h1>
        <p className="text-slate-600 font-mono text-[11px] uppercase tracking-[0.4em] mt-4">Direct Communication Channel for Secure Operations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
        <div className="lg:col-span-12 text-center">
          <p className="text-slate-600 text-sm md:text-base font-medium italic max-w-xl mx-auto">
            "Currently open for internship opportunities, project collaborations, and security research discussions. Transmission line is secured."
          </p>
        </div>

        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="cyber-card p-10"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[11px] font-mono uppercase font-black text-slate-700 tracking-widest block ml-1">Entity Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 backdrop-blur-[1.5px] border border-white/15 p-5 rounded-xl text-sm focus:border-neon-cyan focus:bg-white/[0.08] outline-none transition-all placeholder:text-slate-500 text-slate-900 font-medium" 
                    placeholder="Full Name / Organization"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[11px] font-mono uppercase font-black text-slate-700 tracking-widest block ml-1">Direct Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 backdrop-blur-[1.5px] border border-white/15 p-5 rounded-xl text-sm focus:border-neon-cyan focus:bg-white/[0.08] outline-none transition-all placeholder:text-slate-500 text-slate-900 font-medium" 
                    placeholder="Email for Response"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[11px] font-mono uppercase font-black text-slate-700 tracking-widest block ml-1">Transmission Data</label>
                <textarea 
                  rows={6} 
                  className="w-full bg-white/5 backdrop-blur-[1.5px] border border-white/15 p-5 rounded-xl text-sm focus:border-neon-cyan focus:bg-white/[0.08] outline-none transition-all placeholder:text-slate-500 text-slate-900 font-medium resize-none" 
                  placeholder="Describe your security inquiry or collaboration proposal..."
                />
              </div>
              <button 
                type="submit" 
                className="w-full cyber-button-primary py-5 text-sm uppercase tracking-[0.3em] text-white font-bold"
              >
                Execute Secure Transmission <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>

        <div className="lg:col-span-5 space-y-8 flex flex-col">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="cyber-card p-10 space-y-8 flex-1 flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-white/5 backdrop-blur-[1.5px] rounded-2xl border border-white/15 group-hover:bg-neon-cyan/15 transition-colors shadow-sm">
                  <Mail className="w-8 h-8 text-neon-cyan" />
                </div>
                <div>
                  <p className="text-[10px] font-mono font-black text-neon-cyan uppercase tracking-widest mb-1">Email_Host</p>
                  <p className="text-sm md:text-base font-extrabold text-slate-900 tracking-tighter">chilmanirathnam1729@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-white/5 backdrop-blur-[1.5px] rounded-2xl border border-white/15 group-hover:bg-neon-cyan/15 transition-colors shadow-sm">
                  <MapPin className="w-8 h-8 text-neon-cyan" />
                </div>
                <div>
                  <p className="text-[10px] font-mono font-black text-neon-cyan uppercase tracking-widest mb-1">Grid_Location</p>
                  <p className="text-sm md:text-base font-extrabold text-slate-900 tracking-tighter">Hyderabad, India</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-white/5 backdrop-blur-[1.5px] rounded-2xl border border-white/15 group-hover:bg-neon-cyan/15 transition-colors shadow-sm">
                  <Phone className="w-8 h-8 text-neon-cyan" />
                </div>
                <div>
                  <p className="text-[10px] font-mono font-black text-neon-cyan uppercase tracking-widest mb-1">Direct_Line</p>
                  <p className="text-sm md:text-base font-extrabold text-slate-900 tracking-tighter">+91 8465069682</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100 flex gap-4">
              <a href="https://linkedin.com/in/manirathnam-chiluka/" target="_blank" rel="noopener noreferrer" className="flex-1 cyber-button-outline py-4 flex items-center justify-center gap-3 text-slate-900 font-bold">
                <Linkedin className="w-5 h-5 text-neon-blue" /> LinkedIn
              </a>
              <a href="https://github.com/manirathnamchiluka" target="_blank" rel="noopener noreferrer" className="flex-1 cyber-button-outline py-4 flex items-center justify-center gap-3 text-slate-900 font-bold">
                <Github className="w-5 h-5 text-slate-700" /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
