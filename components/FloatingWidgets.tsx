
import React from 'react';

const FloatingWidgets: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-4 pointer-events-none">
      {/* Availability Status Widget - Remains as a floating interactive element */}
      <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-full px-4 py-2 flex items-center gap-3 shadow-2xl animate-bounce duration-[3000ms] pointer-events-auto cursor-default">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">Available Now</span>
      </div>
    </div>
  );
};

export default FloatingWidgets;
