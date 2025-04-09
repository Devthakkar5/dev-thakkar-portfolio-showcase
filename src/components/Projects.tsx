
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

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
      image: '/placeholder.svg'
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
      image: '/placeholder.svg'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-blue-light">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-dark mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-blue mb-6 mx-auto rounded-full"></div>
          <p className="text-gray max-w-2xl mx-auto">
            Here are some projects I've worked on that showcase my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-poppins">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-dark mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside pl-2 text-gray space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-dark mb-2">Challenges & Solutions:</h4>
                  <p className="text-gray">{project.challenges}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-dark mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="bg-white text-blue border-blue">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" className="border-blue text-blue hover:bg-blue hover:text-white" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </a>
                </Button>
                <Button className="bg-blue hover:bg-blue-dark text-white" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
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
