
import React from 'react';
import { Building, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  const achievements = [
    "Designed and implemented CI/CD pipelines reducing deployment time by 60%",
    "Automated infrastructure provisioning using Infrastructure as Code principles",
    "Optimized container orchestration improving system reliability by 40%",
    "Implemented monitoring and logging solutions for proactive issue detection",
    "Collaborated with development teams to streamline deployment processes",
    "Reduced deployment errors by 75% through automated testing integration"
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hands-on experience in DevOps engineering, building robust CI/CD pipelines 
            and optimizing infrastructure for modern software development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
              {/* Company Logo/Icon */}
              <div className="mb-6 md:mb-0">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Building className="text-white" size={32} />
                </div>
              </div>

              {/* Experience Details */}
              <div className="flex-1">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    DevOps Engineer Intern
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <Building size={16} />
                      <span className="font-medium">HisanLabs Pvt Ltd</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>August 2024 - May 2025</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>Nagpur, Maharashtra</span>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Responsibilities & Achievements</h4>
                  <div className="grid gap-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                        <p className="text-gray-700 leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact Metrics */}
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 mb-1">60%</div>
                    <div className="text-sm text-gray-600">Faster Deployments</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-cyan-600 mb-1">75%</div>
                    <div className="text-sm text-gray-600">Error Reduction</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-green-600 mb-1">40%</div>
                    <div className="text-sm text-gray-600">Improved Reliability</div>
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

export default Experience;
