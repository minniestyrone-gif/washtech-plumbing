
import React, { useState, useEffect } from 'react';
import { Icons } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-sky-500 p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <Icons.Wrench />
          </div>
          <span className="text-xl font-bold tracking-tight uppercase">WASH<span className="text-sky-500">TECH</span><span className="font-light">PLUMBING</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-sky-400 transition-colors">About Us</a>
          <a href="#services" className="hover:text-sky-400 transition-colors">Services</a>
          <a href="#testimonials" className="hover:text-sky-400 transition-colors">Reviews</a>
        </div>

        <button className="bg-sky-500 hover:bg-sky-400 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-sky-500/20 active:scale-95">
          Book Service
        </button>
      </div>
    </nav>
  );
};

export default Navbar;