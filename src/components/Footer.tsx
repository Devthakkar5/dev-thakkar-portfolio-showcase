
import React from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 bg-tech-dots bg-[size:20px_20px] opacity-5"></div>
      
      {/* Glowing border top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-70"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-2">
              <Code className="text-neon-blue h-5 w-5" />
              <h2 className="text-xl font-bold font-orbitron text-gradient">Dev Thakkar</h2>
            </div>
            <p className="text-gray-400 mt-2">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href="https://github.com/Devthakkar5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-neon-blue/20 text-gray-300 hover:text-neon-blue transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/dev-thakkar-892a81304" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-neon-blue/20 text-gray-300 hover:text-neon-blue transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:thakkardev2277@gmail.com" 
              className="p-2 rounded-full bg-gray-800 hover:bg-neon-blue/20 text-gray-300 hover:text-neon-blue transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            {["Home", "About", "Projects", "Resume", "Contact"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm cursor-pointer"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p className="mb-2">&copy; {currentYear} Dev Thakkar. All rights reserved.</p>
          <p className="text-xs text-gray-500">Built with React and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
