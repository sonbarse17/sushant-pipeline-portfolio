
import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-xl font-bold">Sushant Sonbarse</span>
            </div>
            <p className="text-gray-400">DevOps Engineer | Infrastructure Optimizer</p>
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href="mailto:sushantsonbarse07@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com/sonbarse17" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/sushant-sonbarse" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="mx-2 text-red-500" size={16} /> by Sushant Sonbarse
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 Sushant Sonbarse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
