
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-16 opacity-5 animate-pulse">
          <MessageCircle size={90} className="text-blue-600" />
        </div>
        <div className="absolute bottom-20 left-16 opacity-5 animate-bounce" style={{ animationDuration: '4s' }}>
          <Send size={70} className="text-cyan-600" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100/80 backdrop-blur-sm border border-blue-200 rounded-full shadow-sm mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-3"></div>
            <span className="text-sm font-medium text-blue-700">Let's connect</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Get In <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Ready to optimize your infrastructure? Let's discuss how we can improve 
            your development workflows and deployment processes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">Let's Connect</h3>
            
            <div className="space-y-8">
              <div className="group flex items-center space-x-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-white" size={28} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg mb-1">Email</p>
                  <a href="mailto:sushantsonbarse07@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors text-lg">
                    sushantsonbarse07@gmail.com
                  </a>
                </div>
              </div>

              <div className="group flex items-center space-x-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 hover:border-cyan-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="text-white" size={28} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg mb-1">Phone</p>
                  <a href="tel:+919146570820" className="text-slate-600 hover:text-cyan-600 transition-colors text-lg">
                    +91 9146570820
                  </a>
                </div>
              </div>

              <div className="group flex items-center space-x-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-white" size={28} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg mb-1">Location</p>
                  <p className="text-slate-600 text-lg">Nagpur, Maharashtra, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h4 className="font-bold text-slate-900 mb-6 text-xl">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/sonbarse17" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group w-16 h-16 bg-white/80 backdrop-blur-sm hover:bg-white border border-slate-200 hover:border-slate-400 rounded-2xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <Github className="text-slate-600 group-hover:text-slate-900 transition-colors" size={28} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sushant-sonbarse" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group w-16 h-16 bg-blue-100/80 backdrop-blur-sm hover:bg-blue-200 border border-blue-200 hover:border-blue-400 rounded-2xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <Linkedin className="text-blue-600 group-hover:text-blue-700 transition-colors" size={28} />
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-3xl border border-blue-200/50 shadow-lg">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 text-xl">Ready to Collaborate?</h4>
                  <p className="text-slate-600 leading-relaxed">
                    I'm always open to discussing new opportunities, innovative projects, 
                    and ways to optimize your development infrastructure. Let's build something amazing together!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-slate-200/50">
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Send a Message</h3>
              
              <div className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold text-slate-700 mb-3">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full h-14 text-lg border-2 border-slate-200 focus:border-blue-400 rounded-xl"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-semibold text-slate-700 mb-3">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full h-14 text-lg border-2 border-slate-200 focus:border-blue-400 rounded-xl"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-semibold text-slate-700 mb-3">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full text-lg border-2 border-slate-200 focus:border-blue-400 rounded-xl resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send className="mr-3" size={24} />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
