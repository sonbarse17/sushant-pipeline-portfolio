
import React from 'react';
import { ExternalLink, Github, Cloud, Database, Globe, Server } from 'lucide-react';
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
      blue: { bg: "bg-blue-50", text: "text-blue-600", gradient: "from-blue-500 to-blue-600" },
      cyan: { bg: "bg-cyan-50", text: "text-cyan-600", gradient: "from-cyan-500 to-cyan-600" },
      green: { bg: "bg-green-50", text: "text-green-600", gradient: "from-green-500 to-green-600" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", gradient: "from-purple-500 to-purple-600" },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing deployment projects that demonstrate expertise in CI/CD pipeline design, 
            infrastructure automation, and modern DevOps practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const colors = getColorClasses(project.color);
            
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-xl ${colors.bg} mb-4`}>
                    <Icon size={32} className={colors.text} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start space-x-2">
                        <div className={`w-2 h-2 rounded-full ${colors.bg} mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-600 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className={`flex-1 bg-gradient-to-r ${colors.gradient} hover:opacity-90`}>
                    <ExternalLink size={16} className="mr-2" />
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
