
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin, ArrowRight, Code, Database, Cloud } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Icons */}
        <div className="absolute top-20 left-10 opacity-5 animate-pulse">
          <Code size={80} className="text-blue-600" />
        </div>
        <div className="absolute top-40 right-20 opacity-5 animate-bounce" style={{ animationDuration: '3s' }}>
          <Cloud size={100} className="text-indigo-500" />
        </div>
        <div className="absolute bottom-40 left-20 opacity-5 animate-pulse" style={{ animationDelay: '1s' }}>
          <Database size={90} className="text-cyan-600" />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-3"></div>
              <span className="text-sm font-medium text-slate-700">Available for new opportunities</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-slate-900">Building</span>
                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  Tomorrow's
                </span>
                <span className="block text-slate-900">Infrastructure</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed">
                DevOps Engineer passionate about automating deployments, optimizing workflows, and building scalable cloud infrastructure.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 px-8 py-6 text-lg backdrop-blur-sm bg-white/50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">2+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">15+</div>
                <div className="text-sm text-slate-600">Projects Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">99%</div>
                <div className="text-sm text-slate-600">Uptime Achieved</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 justify-center lg:justify-start">
              <a 
                href="mailto:sushantsonbarse07@gmail.com" 
                className="group p-4 bg-white/80 backdrop-blur-sm hover:bg-white border border-slate-200 hover:border-blue-300 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Mail size={20} className="text-slate-600 group-hover:text-blue-600 transition-colors" />
              </a>
              <a 
                href="https://github.com/sonbarse17" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-4 bg-white/80 backdrop-blur-sm hover:bg-white border border-slate-200 hover:border-blue-300 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Github size={20} className="text-slate-600 group-hover:text-blue-600 transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sushant-sonbarse" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-4 bg-white/80 backdrop-blur-sm hover:bg-white border border-slate-200 hover:border-blue-300 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Linkedin size={20} className="text-slate-600 group-hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Content - Enhanced Profile Section */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Profile Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-3xl shadow-2xl transform rotate-3"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-slate-100 to-white rounded-3xl shadow-inner">
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center space-y-4">
                      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-slate-600">SS</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Sushant Sonbarse</h3>
                        <p className="text-sm text-slate-600">DevOps Engineer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="text-sm">
                    <p className="font-semibold text-slate-900">Active</p>
                    <p className="text-slate-600">Building pipelines</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <Cloud className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-slate-900">Cloud Native</p>
                    <p className="text-slate-600">Infrastructure</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-8 right-8 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -z-10 bottom-8 left-8 w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
