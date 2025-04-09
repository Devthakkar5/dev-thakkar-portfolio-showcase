
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail, Send, User, AtSign, MessageSquare } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dev-thakkar-892a81304',
      icon: <Linkedin className="h-5 w-5" />,
      color: 'bg-[#0077B5]'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Devthakkar5',
      icon: <Github className="h-5 w-5" />,
      color: 'bg-[#333]'
    },
    {
      name: 'Email',
      url: 'mailto:thakkardev2277@gmail.com',
      icon: <Mail className="h-5 w-5" />,
      color: 'bg-neon-blue'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900/80 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('/public/lovable-uploads/circuit-bg.jpg')] bg-cover bg-fixed opacity-20"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-gradient mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-green mb-6 mx-auto rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-neon-blue/50 transition-all duration-300 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-orbitron text-white">Contact Information</CardTitle>
              <CardDescription className="text-gray-400">Feel free to reach out to me on any of these platforms.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-gray-700 transition-all duration-300 hover:border-neon-blue/50 hover:bg-gray-700/30 group"
                  >
                    <div className={`p-3 rounded-full text-white ${link.color} group-hover:shadow-glow`}>
                      {link.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{link.name}</h3>
                      <p className="text-sm text-gray-400 truncate">
                        {link.url.replace('mailto:', '')}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-neon-blue/50 transition-all duration-300 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-orbitron text-white">Send Me a Message</CardTitle>
              <CardDescription className="text-gray-400">I'd love to hear from you! Fill out the form below.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <User className="h-4 w-4 text-neon-blue" />
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-neon-blue focus:ring-neon-blue/50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <AtSign className="h-4 w-4 text-neon-blue" />
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    className="w-full bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-neon-blue focus:ring-neon-blue/50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-neon-blue" />
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={4}
                    className="w-full bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-neon-blue focus:ring-neon-blue/50"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-neon-blue to-blue hover:from-blue hover:to-neon-blue text-white transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" /> Send Message
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
