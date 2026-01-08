
import React from 'react';
import { Icons } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-mesh">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-panel rounded-[3rem] p-8 md:p-16 grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-gradient">Let's Connect.</h2>
              <p className="text-slate-400">
                Ready for a solution that lasts? Fill out the form or use our direct hotline for emergency dispatch.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="bg-sky-500/20 p-4 rounded-2xl text-sky-400">
                  <Icons.Phone />
                </div>
                <div>
                  <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">24/7 Hotline</div>
                  <div className="text-2xl font-bold">1-800-WASH-TECH</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-sky-500/20 p-4 rounded-2xl text-sky-400">
                  <Icons.Clock />
                </div>
                <div>
                  <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">Typical Wait</div>
                  <div className="text-2xl font-bold">Under 45 Minutes</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-sky-500/20 p-4 rounded-2xl text-sky-400">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                </div>
                <div>
                  <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">Office</div>
                  <div className="text-2xl font-bold">778 Pipe Lane, Metropolis</div>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Name</label>
                <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-4 focus:ring-2 focus:ring-sky-500 outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Email</label>
                <input type="email" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-4 focus:ring-2 focus:ring-sky-500 outline-none transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Service Type</label>
              <select className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-4 focus:ring-2 focus:ring-sky-500 outline-none transition-all appearance-none">
                <option>Residential Repair</option>
                <option>Commercial Maintenance</option>
                <option>New Construction</option>
                <option>Emergency Service</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Message</label>
              <textarea className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-4 h-32 focus:ring-2 focus:ring-sky-500 outline-none transition-all" placeholder="Briefly describe your issue..."></textarea>
            </div>
            <button type="submit" className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-5 rounded-xl text-lg shadow-xl shadow-sky-500/20 transition-all active:scale-95">
              Request Free Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;