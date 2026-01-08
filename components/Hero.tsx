import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with mixed palette and mesh effect - No images, only CSS gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-mesh opacity-95"></div>
        
        {/* Dynamic accent glows to provide depth without photographic assets */}
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-sky-500/10 blur-[140px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-sky-600/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="space-y-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-black uppercase tracking-[0.2em]">
             <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
             Leading The Industry Since 2019
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter uppercase">
            A New <br/>
            <span className="text-gradient">Approach</span> <br/>
            to Plumbing.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            High-precision engineering meets immediate emergency response. We are the silent partner keeping your home's infrastructure flowing flawlessly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <button className="w-full sm:w-auto bg-sky-500 hover:bg-sky-400 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-sky-500/30 active:scale-95 uppercase tracking-widest">
              Emergency Dispatch
            </button>
            <button className="w-full sm:w-auto glass-panel hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all active:scale-95 uppercase tracking-widest border-white/20">
              Our Services
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 pt-16 border-t border-slate-800/50">
             <div>
               <div className="text-4xl md:text-5xl font-black tracking-tighter">2.5k+</div>
               <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold mt-2">Jobs Executed</div>
             </div>
             <div className="hidden md:block">
               <div className="text-4xl md:text-5xl font-black tracking-tighter">4.9/5</div>
               <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold mt-2">Client Rating</div>
             </div>
             <div>
               <div className="text-4xl md:text-5xl font-black tracking-tighter">24/7</div>
               <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold mt-2">Availability</div>
             </div>
          </div>
        </div>
      </div>

      {/* Floating Interactive Elements framing the center content */}
      <div className="absolute top-1/3 left-10 glass-panel p-6 rounded-3xl shadow-2xl z-20 animate-float hidden lg:block border-white/10">
        <div className="flex items-center gap-4">
          <div className="bg-sky-500 p-3 rounded-2xl shadow-lg shadow-sky-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <div className="font-bold text-lg leading-none">Fast Arrival</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-widest">Under 45 Mins</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-1/4 right-10 glass-panel p-6 rounded-3xl shadow-2xl z-20 animate-float hidden lg:block border-white/10" style={{ animationDelay: '2s' }}>
        <div className="flex items-center gap-4">
          <div className="bg-emerald-500 p-3 rounded-2xl shadow-lg shadow-emerald-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <div className="font-bold text-lg leading-none">Guaranteed</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-widest">Expert Care</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll Down</span>
        <div className="w-px h-12 bg-gradient-to-b from-sky-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;