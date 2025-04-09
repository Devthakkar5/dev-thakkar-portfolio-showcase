
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Code, Database, Server } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'UNO Game',
      description: 'Developed a real-time multiplayer UNO game using HTML, CSS, JavaScript, and Node.js.',
      features: [
        'Implemented server-side logic for smooth gameplay and real-time interactions.',
        'Integrated MongoDB to manage user data and game sessions.'
      ],
      challenges: 'Optimized database performance for fast game state updates.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
      github: 'https://github.com/Devthakkar5/UNO-Game-Repo',
      icon: <Server className="h-8 w-8 text-neon-blue" />
    },
    {
      id: 2,
      title: 'Grocery Store Android App',
      description: 'A basic grocery store app built using Android Studio with Java and JavaFX.',
      features: [
        'User-friendly interface for browsing and adding grocery items.',
        'Basic checkout and cart functionality.',
        'Simple and intuitive navigation.'
      ],
      challenges: 'Designed an efficient UI layout using JavaFX and optimized app responsiveness.',
      skills: ['Java', 'JavaFX', 'Android Studio'],
      github: 'https://github.com/Devthakkar5/Grocery-Store-App-Repo',
      icon: <Code className="h-8 w-8 text-neon-purple" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/80 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('/public/lovable-uploads/circuit-bg.jpg')] bg-cover bg-fixed opacity-20"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-gradient mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-green mb-6 mx-auto rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some projects I've worked on that showcase my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-neon-blue/50 transition-all duration-500 shadow-lg hover:shadow-neon-blue/20 overflow-hidden transform hover:-translate-y-1">
              <CardHeader className="border-b border-gray-700">
                <div className="p-4 rounded-full bg-gray-700/50 w-16 h-16 flex items-center justify-center mb-4">
                  {project.icon}
                </div>
                <CardTitle className="text-xl font-orbitron text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-400">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-neon-blue"></span>
                    Key Features
                  </h4>
                  <ul className="list-disc list-inside pl-2 text-gray-300 space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-sm">{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-neon-blue"></span>
                    Challenges & Solutions
                  </h4>
                  <p className="text-gray-300 text-sm">{project.challenges}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-neon-blue"></span>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="bg-gray-700/50 text-neon-blue border-neon-blue/30 hover:bg-neon-blue/10">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 hover:text-white" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
