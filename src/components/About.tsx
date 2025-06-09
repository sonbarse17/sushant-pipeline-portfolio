
import React from 'react';
import { GraduationCap, Building, Target, TrendingUp, Sparkles, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 opacity-5 animate-pulse">
          <Sparkles size={60} className="text-blue-600" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-5 animate-bounce" style={{ animationDuration: '4s' }}>
          <Award size={70} className="text-cyan-600" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100/80 backdrop-blur-sm border border-blue-200 rounded-full shadow-sm mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-3"></div>
            <span className="text-sm font-medium text-blue-700">Get to know me</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            A passionate DevOps Engineer dedicated to optimizing software development workflows 
            and delivering high-quality solutions through automation and continuous improvement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Transforming Development Through 
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  DevOps Excellence
                </span>
              </h3>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  As a recent Computer Science graduate with hands-on DevOps experience, I specialize in 
                  creating efficient CI/CD pipelines, automating infrastructure, and optimizing deployment 
                  processes. My passion lies in bridging the gap between development and operations to 
                  deliver reliable, scalable solutions.
                </p>
                <p>
                  Through my internship at HisanLabs Pvt Ltd, I've gained practical experience in building 
                  robust automation systems that have significantly improved delivery times, reduced 
                  deployment errors, and enhanced overall system reliability.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Improved Delivery</h4>
                <p className="text-slate-600">Reduced deployment time by 60% through optimized CI/CD pipelines</p>
              </div>
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-200 hover:border-cyan-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Error Reduction</h4>
                <p className="text-slate-600">Decreased deployment errors by 75% with automated testing</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-10 rounded-3xl shadow-xl border border-slate-200/50 backdrop-blur-sm">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                    <GraduationCap className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-slate-900 mb-4">Education</h4>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-slate-800">Bachelor's in Computer Science</p>
                      <p className="text-slate-600">Rashtrasant Tukdoji Maharaj Nagpur University</p>
                      <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        Graduated 2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-10 rounded-3xl shadow-xl border border-slate-200/50 backdrop-blur-sm">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl flex items-center justify-center shadow-lg">
                    <Building className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-slate-900 mb-4">Current Role</h4>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-slate-800">DevOps Engineer Intern</p>
                      <p className="text-slate-600">HisanLabs Pvt Ltd</p>
                      <div className="inline-flex items-center px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
                        August 2024 - May 2025
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 p-10 rounded-3xl shadow-xl border border-slate-200/50 backdrop-blur-sm">
                <h4 className="text-2xl font-bold text-slate-900 mb-6">Professional Mission</h4>
                <p className="text-slate-600 leading-relaxed text-lg">
                  To continuously improve software development processes through innovative automation 
                  solutions, fostering collaboration between development and operations teams, and 
                  delivering reliable, scalable infrastructure that drives business success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
