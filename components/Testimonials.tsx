
import React from 'react';
import { Icons } from '../constants';

const Testimonials: React.FC = () => {
  const reviews = [
    { name: 'Sarah Jenkins', role: 'Homeowner', content: 'Wash Tech Plumbing saved us during a midnight pipe burst. They arrived in 30 minutes and were incredibly professional.', avatar: 'https://i.pravatar.cc/150?u=sarah' },
    { name: 'David Chen', role: 'Property Manager', content: 'I manage 40 units and Wash Tech is my go-to. Their diagnostic tech is superior to anyone else in the city.', avatar: 'https://i.pravatar.cc/150?u=david' },
    { name: 'Michael Ross', role: 'Business Owner', content: 'Fair pricing and extremely fast. They fixed our restaurant kitchen drain in record time without disrupting service.', avatar: 'https://i.pravatar.cc/150?u=michael' },
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-4">
             <h2 className="text-4xl md:text-5xl font-black">Voice of our <span className="text-sky-500">Clients.</span></h2>
             <p className="text-slate-400 max-w-xl">
               Don't just take our word for it. Join the 2,000+ happy customers who trust Wash Tech for their essential home systems.
             </p>
          </div>
          <div className="flex gap-2">
             <div className="bg-sky-500 p-4 rounded-2xl flex items-center gap-2">
                <span className="text-2xl font-bold">4.3</span>
                <div className="flex">
                   {[...Array(4)].map((_,i) => <Icons.Star key={i} />)}
                   <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-yellow-400/30">
                     <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                   </svg>
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="glass-panel p-8 rounded-[2rem] flex flex-col gap-6 hover:-translate-y-2 transition-transform">
              <div className="flex gap-1">
                {[...Array(5)].map((_,j) => <Icons.Star key={j} />)}
              </div>
              <p className="text-lg italic text-slate-300">"{r.content}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-bold">{r.name}</div>
                  <div className="text-xs text-sky-500 uppercase tracking-widest">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;