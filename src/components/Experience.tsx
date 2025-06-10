import React from 'react';
import { Building, Calendar, MapPin, CheckCircle, Rocket, Users, TrendingUp } from 'lucide-react';
const Experience = () => {
  const achievements = ["Designed and implemented CI/CD pipelines reducing deployment time by 60%", "Automated infrastructure provisioning using Infrastructure as Code principles", "Optimized container orchestration improving system reliability by 40%", "Implemented monitoring and logging solutions for proactive issue detection", "Collaborated with development teams to streamline deployment processes", "Reduced deployment errors by 75% through automated testing integration"];
  return <section id="experience" className="py-24 bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 opacity-5 animate-pulse">
          <Rocket size={100} className="text-blue-600" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-5 animate-bounce" style={{
        animationDuration: '4s'
      }}>
          <Users size={80} className="text-cyan-600" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100/80 backdrop-blur-sm border border-blue-200 rounded-full shadow-sm mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-3"></div>
            <span className="text-sm font-medium text-blue-700">Professional journey</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Professional <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Hands-on experience in DevOps engineering, building robust CI/CD pipelines 
            and optimizing infrastructure for modern software development.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Decorative gradient orbs */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 animate-pulse" style={{
            animationDelay: '1s'
          }}></div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 md:p-16 shadow-2xl border border-slate-200/50">
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12">
                {/* Company Logo/Icon */}
                <div className="mb-8 lg:mb-0 flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 rounded-3xl flex items-center justify-center shadow-xl">
                    <Building className="text-white" size={40} />
                  </div>
                </div>

                {/* Experience Details */}
                <div className="flex-1 space-y-8">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                      DevOps Engineer Intern
                    </h3>
                    <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                          <Building size={20} className="text-blue-600" />
                        </div>
                        <span className="font-semibold text-lg">HisanLabs Pvt Ltd</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                          <Calendar size={20} className="text-cyan-600" />
                        </div>
                        <span className="text-lg">August 2024 - May 2025</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                          <MapPin size={20} className="text-green-600" />
                        </div>
                        <span className="text-lg">Pune, Maharashtra</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-6">Key Responsibilities & Achievements</h4>
                    <div className="grid gap-4">
                      {achievements.map((achievement, index) => <div key={index} className="flex items-start space-x-4 p-4 bg-slate-50/80 rounded-xl backdrop-blur-sm border border-slate-200/50 hover:bg-white/80 transition-all duration-300">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                            <CheckCircle className="text-white" size={18} />
                          </div>
                          <p className="text-slate-700 leading-relaxed text-lg">{achievement}</p>
                        </div>)}
                    </div>
                  </div>

                  {/* Impact Metrics */}
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg border border-blue-200/50">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="text-white" size={24} />
                      </div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
                      <div className="text-slate-600 font-medium">Faster Deployments</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl shadow-lg border border-cyan-200/50">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="text-white" size={24} />
                      </div>
                      <div className="text-3xl font-bold text-cyan-600 mb-2">75%</div>
                      <div className="text-slate-600 font-medium">Error Reduction</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg border border-green-200/50">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Rocket className="text-white" size={24} />
                      </div>
                      <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                      <div className="text-slate-600 font-medium">Improved Reliability</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Experience;