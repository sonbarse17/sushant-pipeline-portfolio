
import React from 'react';
import { ExternalLink, Github, Cloud, Database, Globe, Server, Star, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Microservices Architecture Deployment",
      description: "Designed and deployed a scalable microservices architecture with automated CI/CD pipelines, container orchestration, and monitoring solutions.",
      icon: Server,
      color: "blue",
      technologies: ["Docker", "Kubernetes", "Jenkins", "AWS EKS", "Prometheus"],
      achievements: [
        "Implemented container orchestration with Kubernetes",
        "Automated deployment pipeline reducing manual intervention by 90%",
        "Set up comprehensive monitoring and alerting systems"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "E-commerce Website Deployment",
      description: "Built a robust CI/CD pipeline for an e-commerce platform with automated testing, staging environments, and production deployment strategies.",
      icon: Globe,
      color: "cyan",
      technologies: ["GitHub Actions", "Docker", "AWS", "Terraform", "Nginx"],
      achievements: [
        "Implemented blue-green deployment strategy",
        "Automated security scanning and performance testing",
        "Reduced deployment time from hours to minutes"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Real Estate Application Deployment",
      description: "Developed scalable infrastructure and deployment automation for a real estate management application with high availability requirements.",
      icon: Database,
      color: "green",
      technologies: ["AWS", "Docker", "PostgreSQL", "Redis", "CloudFormation"],
      achievements: [
        "Achieved 99.9% uptime with auto-scaling configuration",
        "Implemented database backup and disaster recovery",
        "Optimized infrastructure costs by 35%"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Serverless Architecture Implementation",
      description: "Designed and implemented a cost-effective serverless architecture with automated deployment pipelines and comprehensive monitoring.",
      icon: Cloud,
      color: "purple",
      technologies: ["AWS Lambda", "API Gateway", "CloudWatch", "SAM", "DynamoDB"],
      achievements: [
        "Reduced infrastructure costs by 60%",
        "Implemented auto-scaling based on demand",
        "Built comprehensive logging and monitoring solutions"
      ],
      github: "#",
      demo: "#"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", gradient: "from-blue-500 to-blue-600", border: "border-blue-200" },
      cyan: { bg: "bg-cyan-50", text: "text-cyan-600", gradient: "from-cyan-500 to-cyan-600", border: "border-cyan-200" },
      green: { bg: "bg-green-50", text: "text-green-600", gradient: "from-green-500 to-green-600", border: "border-green-200" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", gradient: "from-purple-500 to-purple-600", border: "border-purple-200" },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-100 via-white to-cyan-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-12 opacity-5 animate-pulse">
          <Star size={70} className="text-blue-600" />
        </div>
        <div className="absolute bottom-32 right-12 opacity-5 animate-bounce" style={{ animationDuration: '3s' }}>
          <Layers size={80} className="text-cyan-600" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100/80 backdrop-blur-sm border border-blue-200 rounded-full shadow-sm mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-3"></div>
            <span className="text-sm font-medium text-blue-700">My work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Showcasing deployment projects that demonstrate expertise in CI/CD pipeline design, 
            infrastructure automation, and modern DevOps practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const colors = getColorClasses(project.color);
            
            return (
              <div key={index} className="group bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3">
                <div className="mb-8">
                  <div className={`inline-flex p-6 rounded-2xl ${colors.bg} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={40} className={colors.text} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{project.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">{project.description}</p>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-slate-900 mb-4 text-xl">Key Achievements</h4>
                  <ul className="space-y-3">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full ${colors.bg} mt-3 flex-shrink-0`}></div>
                        <span className="text-slate-600 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-slate-900 mb-4 text-xl">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-4 py-2 ${colors.bg} ${colors.text} rounded-full text-sm font-medium border ${colors.border}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="lg" className="flex-1 h-12 border-2 hover:shadow-lg transition-all duration-300">
                    <Github size={20} className="mr-2" />
                    Code
                  </Button>
                  <Button size="lg" className={`flex-1 h-12 bg-gradient-to-r ${colors.gradient} hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300`}>
                    <ExternalLink size={20} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
