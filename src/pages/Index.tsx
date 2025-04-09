
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen font-sans text-foreground bg-background relative">
      {/* Tech background elements */}
      <div className="fixed top-0 left-0 w-full h-full bg-tech-dots bg-[size:30px_30px] opacity-10 pointer-events-none"></div>
      <div className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-70"></div>
      
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
