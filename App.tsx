
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FloatingWidgets from './components/FloatingWidgets';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      
      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Wash Tech Plumbing Elite. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sky-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-sky-400 transition-colors">Safety Standards</a>
          </div>
        </div>
      </footer>

      {/* Interactive Layer */}
      <FloatingWidgets />
    </div>
  );
}

export default App;