
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, BookOpen, Briefcase, Award, Code } from 'lucide-react';

const Resume = () => {
  const resumeSections = [
    {
      title: 'Education',
      icon: <BookOpen className="text-blue h-5 w-5" />,
      items: [
        {
          title: 'Diploma in Computer Systems Technology',
          organization: 'Saskatchewan Polytechnic',
          period: '2023 - 2025',
          description: 'Specializing in web development and full-stack programming. Expected Graduation: June 2025.'
        }
      ]
    },
    {
      title: 'Experience',
      icon: <Briefcase className="text-blue h-5 w-5" />,
      items: [
        {
          title: 'Crew Member',
          organization: 'McDonald\'s',
          period: '2022 - Present',
          description: 'Developed strong teamwork, communication, and time management skills while providing excellent customer service in a fast-paced environment.'
        }
      ]
    },
    {
      title: 'Certifications',
      icon: <Award className="text-blue h-5 w-5" />,
      items: [
        {
          title: 'C Programming',
          organization: 'C-DAC',
          period: '2022',
          description: 'Comprehensive certification focusing on C programming fundamentals, data structures, and algorithms.'
        }
      ]
    },
    {
      title: 'Technical Skills',
      icon: <Code className="text-blue h-5 w-5" />,
      items: [
        {
          title: 'Web Development',
          description: 'HTML, CSS, JavaScript, Node.js'
        },
        {
          title: 'Database Management',
          description: 'SQL, MongoDB'
        },
        {
          title: 'Mobile Application Development',
          description: 'Java, JavaFX, Android Studio'
        },
        {
          title: 'Additional Skills',
          description: 'Computer Networks & Protocols'
        }
      ]
    }
  ];

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-dark mb-4">Resume</h2>
          <div className="w-24 h-1 bg-blue mb-6 mx-auto rounded-full"></div>
          <p className="text-gray max-w-2xl mx-auto mb-8">
            Here's a summary of my education, experience, and technical skills.
          </p>
          <Button className="bg-blue hover:bg-blue-dark text-white">
            <Download className="mr-2 h-4 w-4" /> Download Resume (PDF)
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeSections.map((section, index) => (
            <Card key={index} className="shadow-md">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-2 text-xl font-poppins">
                  {section.icon}
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className={`mb-6 ${itemIndex !== section.items.length - 1 ? 'pb-6 border-b' : ''}`}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-dark">{item.title}</h4>
                      {item.period && (
                        <span className="text-sm px-2 py-1 bg-blue-light text-blue rounded">
                          {item.period}
                        </span>
                      )}
                    </div>
                    {item.organization && (
                      <div className="text-blue mb-2">{item.organization}</div>
                    )}
                    <p className="text-gray leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
