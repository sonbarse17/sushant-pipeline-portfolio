
import React from 'react';
import { Settings, Cloud, Container, GitBranch, Code, Server, Zap, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Automation",
      icon: Settings,
      color: "blue",
      skills: [
        { name: "Workflow Optimization", level: 90 },
        { name: "Infrastructure as Code", level: 85 },
        { name: "Process Automation", level: 88 },
      ]
    },
    {
      title: "Cloud Computing",
      icon: Cloud,
      color: "cyan",
      skills: [
        { name: "AWS Services", level: 82 },
        { name: "Azure Platform", level: 78 },
        { name: "Cloud Architecture", level: 80 },
      ]
    },
    {
      title: "Containerization",
      icon: Container,
      color: "indigo",
      skills: [
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 75 },
        { name: "Container Orchestration", level: 80 },
      ]
    },
    {
      title: "CI/CD Pipelines",
      icon: GitBranch,
      color: "green",
      skills: [
        { name: "Jenkins", level: 85 },
        { name: "GitHub Actions", level: 90 },
        { name: "Pipeline Design", level: 87 },
      ]
    },
    {
      title: "Scripting",
      icon: Code,
      color: "purple",
      skills: [
        { name: "Python", level: 85 },
        { name: "Bash Scripting", level: 88 },
        { name: "PowerShell", level: 75 },
      ]
    },
    {
      title: "Infrastructure",
      icon: Server,
      color: "orange",
      skills: [
        { name: "Linux Administration", level: 90 },
        { name: "Network Configuration", level: 82 },
        { name: "Monitoring & Logging", level: 85 },
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-50 text-blue-600 bg-blue-500",
      cyan: "from-cyan-500 to-cyan-600 bg-cyan-50 text-cyan-600 bg-cyan-500",
      indigo: "from-indigo-500 to-indigo-600 bg-indigo-50 text-indigo-600 bg-indigo-500",
      green: "from-green-500 to-green-600 bg-green-50 text-green-600 bg-green-500",
      purple: "from-purple-500 to-purple-600 bg-purple-50 text-purple-600 bg-purple-500",
      orange: "from-orange-500 to-orange-600 bg-orange-50 text-orange-600 bg-orange-500",
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-100 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 opacity-5 animate-pulse">
          <Zap size={80} className="text-blue-600" />
        </div>
        <div className="absolute bottom-32 right-16 opacity-5 animate-bounce" style={{ animationDuration: '3s' }}>
          <Shield size={90} className="text-cyan-600" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100/80 backdrop-blur-sm border border-blue-200 rounded-full shadow-sm mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-3"></div>
            <span className="text-sm font-medium text-blue-700">My expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Technical <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive expertise across the DevOps technology stack, 
            from automation and cloud infrastructure to CI/CD pipeline optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colorClasses = getColorClasses(category.color);
            
            return (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3">
                <div className={`inline-flex p-6 rounded-2xl bg-${category.color}-50 mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={40} className={`text-${category.color}-600`} />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">{category.title}</h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700 font-semibold text-lg">{skill.name}</span>
                        <span className="text-slate-500 font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} h-3 rounded-full transition-all duration-1000 ease-out shadow-sm`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
