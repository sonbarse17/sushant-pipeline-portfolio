
import React from 'react';
import { GraduationCap, Building, Target, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate DevOps Engineer dedicated to optimizing software development workflows 
            and delivering high-quality solutions through automation and continuous improvement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Transforming Development Through DevOps Excellence
            </h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              As a recent Computer Science graduate with hands-on DevOps experience, I specialize in 
              creating efficient CI/CD pipelines, automating infrastructure, and optimizing deployment 
              processes. My passion lies in bridging the gap between development and operations to 
              deliver reliable, scalable solutions.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Through my internship at HisanLabs Pvt Ltd, I've gained practical experience in building 
              robust automation systems that have significantly improved delivery times, reduced 
              deployment errors, and enhanced overall system reliability.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <TrendingUp className="text-blue-600 mb-4" size={32} />
                <h4 className="font-semibold text-gray-900 mb-2">Improved Delivery</h4>
                <p className="text-gray-600 text-sm">Reduced deployment time by 60% through optimized CI/CD pipelines</p>
              </div>
              <div className="bg-cyan-50 p-6 rounded-lg">
                <Target className="text-cyan-600 mb-4" size={32} />
                <h4 className="font-semibold text-gray-900 mb-2">Error Reduction</h4>
                <p className="text-gray-600 text-sm">Decreased deployment errors by 75% with automated testing</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Education</h4>
                  <p className="text-gray-700 font-medium">Bachelor's in Computer Science</p>
                  <p className="text-gray-600">Rashtrasant Tukdoji Maharaj Nagpur University</p>
                  <p className="text-blue-600 font-medium">Graduated 2023</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-600 p-3 rounded-lg">
                  <Building className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Current Role</h4>
                  <p className="text-gray-700 font-medium">DevOps Engineer Intern</p>
                  <p className="text-gray-600">HisanLabs Pvt Ltd</p>
                  <p className="text-cyan-600 font-medium">August 2024 - May 2025</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Professional Mission</h4>
              <p className="text-gray-600 leading-relaxed">
                To continuously improve software development processes through innovative automation 
                solutions, fostering collaboration between development and operations teams, and 
                delivering reliable, scalable infrastructure that drives business success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
