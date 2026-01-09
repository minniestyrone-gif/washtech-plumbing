import React from 'react';
import { Icons } from '../constants';

const Services: React.FC = () => {
  const services = [
    { 
      title: 'Leak Detection', 
      desc: 'Smart acoustic technology to pinpoint leaks behind walls without destruction.'
    },
    { 
      title: 'Emergency Repair', 
      desc: 'Burst pipes, overflowing drains, or gas leaks. We arrive in 45 mins or less.'
    },
    { 
      title: 'Water Heaters', 
      desc: 'Expert installation of tankless and traditional systems for endless hot water.'
    },
    { 
      title: 'Drain Cleaning', 
      desc: 'High-pressure hydro jetting to clear the most stubborn root intrusions.'
    },
    { 
      title: 'Commercial Suite', 
      desc: 'Maintenance contracts for restaurants, offices, and industrial complexes.'
    },
    { 
      title: 'Pipe Relining', 
      desc: 'Fix underground sewer lines without digging up your beautiful lawn.'
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Elite <span className="text-sky-500">Services.</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            From high-tech diagnostics to traditional craftsmanship, we provide a complete spectrum of premium plumbing solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group glass-panel rounded-[2.5rem] p-10 hover:border-sky-500/50 transition-all duration-500 flex flex-col border border-white/5 h-full">
              <div className="mb-8 w-14 h-14 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                <Icons.Wrench />
              </div>
              <div className="space-y-4 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold tracking-tight">{s.title}</h3>
                <p className="text-slate-400 leading-relaxed flex-1 font-light">{s.desc}</p>
                <div className="pt-6 border-t border-slate-800/50 mt-4">
                  <button className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-sky-400 group-hover:translate-x-2 transition-transform">
                    Explore Service 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;