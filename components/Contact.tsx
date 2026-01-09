
import React from 'react';
import { Icons } from '../constants';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Icons.Phone />,
      label: '24/7 Hotline',
      value: '1-800-WASH-TECH',
      highlight: true
    },
    {
      icon: <Icons.Clock />,
      label: 'Typical Wait',
      value: 'Under 45 Minutes',
      highlight: false
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      label: 'Office Address',
      value: '123 Flow Way, Metropolis',
      highlight: false
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((item, idx) => (
            <div 
              key={idx} 
              className={`glass-panel rounded-[2rem] p-8 flex flex-col items-center text-center gap-4 transition-all hover:border-sky-500/50 group ${item.highlight ? 'border-sky-500/30 ring-1 ring-sky-500/20' : ''}`}
            >
              <div className={`p-4 rounded-2xl transition-colors ${item.highlight ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/20' : 'bg-slate-900 text-sky-400 group-hover:bg-sky-500/10'}`}>
                {item.icon}
              </div>
              <div className="space-y-1">
                <div className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                  {item.label}
                </div>
                <div className={`text-xl font-bold tracking-tight ${item.highlight ? 'text-white' : 'text-slate-200'}`}>
                  {item.value}
                </div>
              </div>
              {item.highlight && (
                <button className="mt-2 text-xs font-black uppercase tracking-widest text-sky-400 hover:text-sky-300 transition-colors">
                  Call Dispatch Now
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;