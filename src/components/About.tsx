
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BadgeCheck, Cpu, Database, Code } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const About = () => {
  const skills = [
    { 
      category: 'Frontend', 
      icon: <Code className="h-5 w-5 text-neon-blue" />,
      items: ['HTML', 'CSS', 'JavaScript'] 
    },
    { 
      category: 'Backend', 
      icon: <Database className="h-5 w-5 text-neon-purple" />,
      items: ['Node.js', 'SQL', 'MongoDB', 'Java'] 
    },
    { 
      category: 'Additional', 
      icon: <Cpu className="h-5 w-5 text-neon-green" />,
      items: ['JavaFX', 'Android Studio', 'Computer Networks & Protocols'] 
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative">
      {/* Tech background */}
      <div className="absolute inset-0 bg-tech-dots bg-[size:20px_20px] opacity-5"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-gradient mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-green mb-6 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <div className="rounded-lg overflow-hidden relative group">
              <div className="absolute inset-0 border-2 border-neon-blue rounded-lg glow-border"></div>
              <Avatar className="w-full h-auto rounded-lg aspect-square">
                <AvatarImage 
                  src="/lovable-uploads/b06a28cb-1bd3-4723-86c3-bf66cbe003f4.png" 
                  alt="Dev Thakkar" 
                  className="w-full h-auto object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-105"
                />
                <AvatarFallback className="w-full h-full bg-gray-800 text-neon-blue">DT</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="animate-slide-in" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-orbitron font-semibold text-white mb-4">Who Am I?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I am a Computer Systems Technology student at Saskatchewan Polytechnic, specializing in web development and full-stack programming. With a strong foundation in front-end and back-end technologies, I am passionate about building scalable and interactive web applications.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-orbitron font-semibold text-white mb-4">My Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {skills.map((skillGroup, index) => (
                  <Card key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-neon-blue/50 transition-colors duration-300 shadow-lg">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 mb-3">
                        {skillGroup.icon}
                        <h4 className="font-bold text-lg text-gradient">{skillGroup.category}</h4>
                      </div>
                      <ul className="space-y-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <li key={skillIndex} className="flex items-center gap-2 text-gray-300">
                            <BadgeCheck className="text-neon-blue h-4 w-4" />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
