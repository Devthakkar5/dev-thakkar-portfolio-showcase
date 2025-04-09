
import React from 'react';
import { Link } from 'react-scroll';
import { Button } from '@/components/ui/button';
import { ArrowDown, Terminal, Code, Zap } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black relative pt-20 overflow-hidden">
      {/* Animated tech background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(41,121,255,0.1),transparent_50%)] opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/public/lovable-uploads/circuit-bg.jpg')] bg-cover bg-center opacity-20"></div>
      
      <div className="container px-4 md:px-6 flex flex-col items-center text-center relative z-10">
        <div className="mb-8 relative">
          <div className="absolute inset-0 rounded-full blur-md bg-blue-500/20 animate-pulse"></div>
          <Avatar className="h-36 w-36 md:h-44 md:w-44 rounded-full overflow-hidden border-4 border-neon-blue shadow-lg shadow-blue-500/20 relative">
            <AvatarImage 
              src="/lovable-uploads/b06a28cb-1bd3-4723-86c3-bf66cbe003f4.png" 
              alt="Dev Thakkar" 
              className="w-full h-full object-cover"
            />
            <AvatarFallback className="bg-gray-800 text-blue-500 text-xl font-orbitron">DT</AvatarFallback>
          </Avatar>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold font-orbitron mb-4 text-gradient relative">
          Dev Thakkar
          <span className="absolute -bottom-2 left-1/2 w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-green transform -translate-x-1/2 rounded-full"></span>
        </h1>
        
        <div className="flex items-center justify-center gap-3 my-4">
          <Terminal className="text-neon-blue h-5 w-5" />
          <p className="text-lg md:text-xl font-medium text-gray-200">Full Stack Developer</p>
          <Code className="text-neon-blue h-5 w-5" />
        </div>
        
        <p className="text-lg md:text-xl mb-4 text-gray-300 max-w-2xl animate-fade-in">
          Welcome to my digital portfolio! I am a Computer Systems Technology student specializing in full-stack web development.
        </p>
        
        <p className="text-md md:text-lg mb-8 text-gray-400 max-w-2xl animate-fade-in">
          This portfolio showcases my technical skills, projects, and experience as I prepare for a web development and software engineering career.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-6 animate-fade-in">
          <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
            <Button className="bg-gradient-to-r from-neon-blue to-blue hover:from-blue hover:to-neon-blue text-white font-medium px-6 py-2 rounded-md transition duration-300 shadow-lg shadow-blue-500/20 group">
              <span>View My Projects</span>
              <Zap className="ml-2 h-4 w-4 group-hover:animate-pulse" />
            </Button>
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
            <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 hover:text-white font-medium px-6 py-2 rounded-md transition duration-300">
              Contact Me
            </Button>
          </Link>
        </div>
        
        <div className="absolute bottom-10 animate-bounce hidden md:block">
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer">
            <ArrowDown className="text-neon-blue" size={32} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
