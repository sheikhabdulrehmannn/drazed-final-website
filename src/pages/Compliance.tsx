import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Leaf, HardHat, FileCheck, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Compliance = () => {
  useScrollAnimation();

  const complianceAreas = [
    {
      title: 'Quality Management System',
      description: 'ISO 9001:2015 certified system ensuring consistent quality for OEM, aftermarket, and industrial applications.',
      icon: <Award className="h-8 w-8" />,
      link: '/compliance/quality-management-system'
    },
    {
      title: 'Environmental Standards',
      description: 'Eco-conscious production methods, waste reduction, and resource-efficient manufacturing aligned with international environmental directives.',
      icon: <Leaf className="h-8 w-8" />,
      link: '/compliance/environmental-standards'
    },
    {
      title: 'Occupational Health & Safety',
      description: 'Strict workplace safety protocols and employee well-being programs to maintain a hazard-free environment.',
      icon: <HardHat className="h-8 w-8" />,
      link: '/compliance/occupational-health-safety'
    },
    {
      title: 'Material Compliance',
      description: 'All materials meet or exceed RoHS, REACH, and FDA requirements, supporting global export compliance.',
      icon: <FileCheck className="h-8 w-8" />,
      link: '/compliance/material-compliance-certifications'
    },
    {
      title: 'Safety & Quality Standards',
      description: 'Rigorous in-process quality controls, traceability systems, and final inspection protocols across all production lines.',
      icon: <Shield className="h-8 w-8" />,
      link: '/compliance/safety-quality-standards'
    },
    {
      title: 'Industry Approvals',
      description: 'Certified supplier for leading automotive brands and industries worldwide. Recognized by major OEMs and regulatory bodies.',
      icon: <CheckCircle className="h-8 w-8" />,
      link: '/compliance/industry-approvals'
    }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Certified Quality Management System' },
    { name: 'RoHS Compliant', description: 'Restriction of Hazardous Substances' },
    { name: 'REACH Compliant', description: 'European Chemical Regulation' },
    { name: 'FDA Grade Materials', description: 'Safe for food and medical contact' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="min-h-screen"
    >
      {/* Hero Banner */}
      <HeroBanner
        backgroundImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop"
        title="<span class='text-gray-300'>Compliance</span>"
        subtitle="Global standards, responsible manufacturing"
      />

      {/* Overview */}
      <section className="section-padding bg-gray-300">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Commitment to <span className="text-blue-800">Excellence</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At Millat Polymer & Rubber (Pvt) Ltd, compliance means more than ticking boxes—it's about building trust.  
              We integrate quality, environmental care, and safety into every layer of our operations to meet and exceed the demands of global markets.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our processes are guided by internationally recognized standards, continuous improvement principles, and a strong culture of accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Areas Grid */}
      <section className="section-padding bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
                alt="Quality Management"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
            <div className="scale-in">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop"
                alt="Environmental Standards"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
            <div className="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
                alt="Safety Compliance"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
          </div>
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Compliance <span className="text-blue-800">Areas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated compliance framework spans product quality, material safety, environmental responsibility, and workplace health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceAreas.map((area, index) => (
              <Link
                key={index}
                to={area.link}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} group`}
              >
                <Card className="h-full lift-hover group-hover:shadow-xl transition-all duration-300">
                  <div className="bg-blue-800/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-blue-800 group-hover:bg-blue-800 group-hover:text-gray-300 transition-all duration-300">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-800 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{area.description}</p>
                  <div className="flex items-center text-blue-800 font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Showcase */}
      <section className="section-padding bg-gray-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our <span className="text-blue-800">Certifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Globally recognized certifications that reinforce our role as a reliable and compliant manufacturing partner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-blue-800/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-800">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Benefits */}
      <section className="section-padding bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Benefits of Our <span className="text-blue-800">Compliance</span>
            </h2>
            <div className="bg-gray-300 p-8 rounded-2xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">For Our Customers</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-800 mr-2" />Consistent product quality</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-800 mr-2" />Regulatory compliance for exports</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-800 mr-2" />Reduced supply chain risks</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-800 mr-2" />Access to OEM and global markets</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">For Our Operations</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-800 mr-2" />Continuous improvement culture</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-800 mr-2" />Efficiency in production workflows</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-800 mr-2" />Workplace safety leadership</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-800 mr-2" />Environmental stewardship</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-blue-800 text-gray-300">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need Compliance Documentation?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Request our compliance certificates, technical specifications, and safety documentation.
            </p>
            <Link 
              to="/contact" 
              className="bg-gray-300 text-blue-800 hover:bg-gray-200 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Compliance;