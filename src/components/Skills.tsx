
import React from 'react';
import { Settings, Cloud, Container, GitBranch, Code, Server } from 'lucide-react';

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
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise across the DevOps technology stack, 
            from automation and cloud infrastructure to CI/CD pipeline optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colorClasses = getColorClasses(category.color);
            
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`inline-flex p-4 rounded-xl bg-${category.color}-50 mb-6`}>
                  <Icon size={32} className={`text-${category.color}-600`} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} h-2 rounded-full transition-all duration-1000 ease-out`}
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
