import React from 'react';
import { Icons } from '../constants';

const About: React.FC = () => {
  const values = [
    { title: 'Integrity First', desc: 'No hidden costs. No upsells. Just honest repairs at fair market prices.' },
    { title: 'Modern Tech', desc: 'We use non-invasive sonic leak detection and HD camera pipe inspections.' },
    { title: 'Reliability', desc: 'When we say we will be there at 2:00 PM, we are there at 1:45 PM.' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black">Built on <span className="text-sky-500">Trust</span>, Maintained by <span className="text-sky-500">Excellence.</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Wash Tech Plumbing is a modern leader in high-tech plumbing solutions. Since 2019, we have rapidly set new standards for precision, speed, and reliability across the region.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            {values.map((v, i) => (
              <div key={i} className="flex flex-col items-center gap-4 group p-6 glass-panel rounded-3xl transition-all hover:border-sky-500/30">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center group-hover:border-sky-500/50 transition-colors text-sky-400">
                  <Icons.Check />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">{v.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-sky-500/5 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
    </section>
  );
};

export default About;