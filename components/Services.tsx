
import React from 'react';

const Services: React.FC = () => {
  const services = [
    { 
      title: 'Leak Detection', 
      desc: 'Smart acoustic technology to pinpoint leaks behind walls without destruction.', 
      img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      title: 'Emergency Repair', 
      desc: 'Burst pipes, overflowing drains, or gas leaks. We arrive in 45 mins or less.', 
      img: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      title: 'Water Heaters', 
      desc: 'Expert installation of tankless and traditional systems for endless hot water.', 
      img: 'https://images.unsplash.com/photo-1585704032915-c3400ca1f9e7?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      title: 'Drain Cleaning', 
      desc: 'High-pressure hydro jetting to clear the most stubborn root intrusions.', 
      img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      title: 'Commercial Suite', 
      desc: 'Maintenance contracts for restaurants, offices, and industrial complexes.', 
      img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      title: 'Pipe Relining', 
      desc: 'Fix underground sewer lines without digging up your beautiful lawn.', 
      img: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=600' 
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black">Elite Services.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From high-tech diagnostics to traditional craftsmanship, we provide a complete spectrum of plumbing solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group glass-panel rounded-3xl overflow-hidden hover:border-sky-500/50 transition-all duration-500 flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={s.img} 
                  alt={s.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
              </div>
              <div className="p-8 space-y-4 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed flex-1">{s.desc}</p>
                <button className="pt-4 flex items-center gap-2 font-bold text-sky-400 group-hover:translate-x-2 transition-transform">
                  See Details 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
