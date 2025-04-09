
import React from 'react';
import { Link } from 'react-scroll';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-light pt-16">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
        <div className="h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden mb-6 border-4 border-blue shadow-lg">
          <img 
            src="/placeholder.svg" 
            alt="Dev Thakkar" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold font-poppins mb-4 text-gray-dark animate-fade-in">
          Dev Thakkar
        </h1>
        
        <div className="w-24 h-1 bg-blue mb-6 mx-auto rounded-full"></div>
        
        <p className="text-lg md:text-xl mb-4 text-gray-dark max-w-2xl animate-fade-in" style={{animationDelay: '0.2s'}}>
          Welcome to my digital portfolio! I am a Computer Systems Technology student specializing in full-stack web development.
        </p>
        
        <p className="text-md md:text-lg mb-8 text-gray max-w-2xl animate-fade-in" style={{animationDelay: '0.4s'}}>
          This portfolio showcases my technical skills, projects, and experience as I prepare for a web development and software engineering career.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-6 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
            <Button className="bg-blue hover:bg-blue-dark text-white">View My Projects</Button>
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
            <Button variant="outline" className="border-blue text-blue hover:bg-blue hover:text-white">Contact Me</Button>
          </Link>
        </div>
        
        <div className="absolute bottom-10 animate-bounce hidden md:block">
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer">
            <ArrowDown className="text-blue" size={32} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
