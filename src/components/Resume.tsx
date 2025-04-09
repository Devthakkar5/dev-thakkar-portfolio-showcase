
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, BookOpen, Briefcase, Award, Code, Calendar, Building } from 'lucide-react';

const Resume = () => {
  const resumeSections = [
    {
      title: 'Education',
      icon: <BookOpen className="text-neon-blue h-5 w-5" />,
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
      icon: <Briefcase className="text-neon-blue h-5 w-5" />,
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
      icon: <Award className="text-neon-blue h-5 w-5" />,
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
      icon: <Code className="text-neon-blue h-5 w-5" />,
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

  const handleDownloadResume = () => {
    // Create a link to the PDF file in the public folder
    const link = document.createElement('a');
    link.href = '/DevThakkar_Resume.pdf'; // Path to the PDF in the public folder
    link.download = 'DevThakkar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 bg-gray-900 relative">
      <div className="absolute inset-0 bg-tech-dots bg-[size:20px_20px] opacity-5"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-gradient mb-4">Resume</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-green mb-6 mx-auto rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Here's a summary of my education, experience, and technical skills.
          </p>
          <Button 
            className="bg-gradient-to-r from-neon-blue to-blue hover:from-blue hover:to-neon-blue text-white group"
            onClick={handleDownloadResume}
          >
            <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" /> Download Resume (PDF)
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeSections.map((section, index) => (
            <Card key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-neon-blue/30 transition-colors duration-300 shadow-lg group">
              <CardHeader className="border-b border-gray-700">
                <CardTitle className="flex items-center gap-2 text-xl font-orbitron text-white">
                  <div className="p-2 rounded-full bg-gray-700/50 group-hover:bg-neon-blue/10 transition-colors duration-300">
                    {section.icon}
                  </div>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className={`mb-6 ${itemIndex !== section.items.length - 1 ? 'pb-6 border-b border-gray-700' : ''}`}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      {item.period && (
                        <span className="text-sm px-2 py-1 bg-gray-700/50 text-neon-blue rounded flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {item.period}
                        </span>
                      )}
                    </div>
                    {item.organization && (
                      <div className="text-neon-blue mb-2 flex items-center gap-1">
                        <Building className="h-3 w-3" />
                        {item.organization}
                      </div>
                    )}
                    <p className="text-gray-300 leading-relaxed text-sm">{item.description}</p>
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
