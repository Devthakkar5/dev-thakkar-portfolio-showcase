
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BadgeCheck } from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript'] },
    { category: 'Backend', items: ['Node.js', 'SQL', 'MongoDB', 'Java'] },
    { category: 'Additional', items: ['JavaFX', 'Android Studio', 'Computer Networks & Protocols'] }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-dark mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue mb-6 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/placeholder.svg" 
                alt="Dev Thakkar" 
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
          </div>

          <div className="animate-slide-in" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-poppins font-semibold text-gray-dark mb-4">Who Am I?</h3>
            <p className="text-gray-dark mb-6 leading-relaxed">
              I am a Computer Systems Technology student at Saskatchewan Polytechnic, specializing in web development and full-stack programming. With a strong foundation in front-end and back-end technologies, I am passionate about building scalable and interactive web applications.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-poppins font-semibold text-gray-dark mb-4">My Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {skills.map((skillGroup, index) => (
                  <Card key={index} className="shadow-md border-t-4 border-t-blue">
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-lg mb-2 text-blue">{skillGroup.category}</h4>
                      <ul className="space-y-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <li key={skillIndex} className="flex items-center gap-2">
                            <BadgeCheck className="text-blue" size={16} />
                            <span className="text-gray-dark">{skill}</span>
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
