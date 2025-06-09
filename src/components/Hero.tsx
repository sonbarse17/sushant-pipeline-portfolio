
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin, Settings, Cloud, GitBranch } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient and floating icons */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute top-20 left-10 opacity-10">
          <Settings size={60} className="text-blue-600 animate-spin" style={{ animationDuration: '20s' }} />
        </div>
        <div className="absolute top-40 right-20 opacity-10">
          <Cloud size={80} className="text-cyan-500" />
        </div>
        <div className="absolute bottom-40 left-20 opacity-10">
          <GitBranch size={70} className="text-blue-700" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <Settings size={50} className="text-cyan-600 animate-spin" style={{ animationDuration: '15s' }} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                DevOps Engineer
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hire Me To
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Optimize Your
              </span>
              <br />
              Infrastructure
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Passionate about optimizing software development workflows and delivering high-quality solutions through automation and CI/CD excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-6 text-lg"
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-6 text-lg"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              <a href="mailto:sushantsonbarse07@gmail.com" className="p-3 bg-gray-100 hover:bg-blue-100 rounded-full transition-colors">
                <Mail size={20} className="text-gray-600 hover:text-blue-600" />
              </a>
              <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 hover:bg-blue-100 rounded-full transition-colors">
                <Github size={20} className="text-gray-600 hover:text-blue-600" />
              </a>
              <a href="https://www.linkedin.com/in/sushant-sonbarse" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 hover:bg-blue-100 rounded-full transition-colors">
                <Linkedin size={20} className="text-gray-600 hover:text-blue-600" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-gray-200 rounded-2xl flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Profile Photo</span>
                </div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="font-semibold text-gray-900">DevOps Engineer</p>
                    <p className="text-sm text-gray-600">Building robust pipelines</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
