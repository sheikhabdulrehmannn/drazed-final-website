import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HardHat, Shield, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../../components/HeroBanner';
import Card from '../../components/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const OccupationalHealthSafety = () => {
  useScrollAnimation();

  const protocols = [
    {
      title: 'Comprehensive Safety Training',
      description: 'Ongoing training programs covering equipment handling, hazard awareness, and emergency response for all employees.',
      icon: <Users className="h-8 w-8" />
    },
    {
      title: 'Mandatory PPE Compliance',
      description: 'Strict enforcement of personal protective equipment (PPE) usage across all production and warehouse areas.',
      icon: <HardHat className="h-8 w-8" />
    },
    {
      title: 'Routine Safety Audits',
      description: 'Regular safety inspections, risk assessments, and compliance checks in line with occupational health regulations.',
      icon: <Shield className="h-8 w-8" />
    }
  ];

  const achievements = [
    { metric: '0', description: 'Lost Time Accidents', period: '2024' },
    { metric: '100%', description: 'Annual Safety Training Completion', period: 'Verified' },
    { metric: '24/7', description: 'Workplace Safety Monitoring', period: 'Continuous' },
    { metric: '5+', description: 'Safety Certifications', period: '// TODO: Confirm exact certifications' }
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
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop"
        title="Occupational Health & <span class='text-primary'>Safety</span>"
        subtitle="Protecting our workforce through rigorous safety standards, training, and continuous monitoring."
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our <span className="text-primary">Safety-First Commitment</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At Millat Polymer & Rubber (Pvt) Ltd, the safety and well-being of our employees is our highest priority.  
              Our occupational health and safety program is designed to meet and exceed legal requirements, fostering a culture where safety is a shared responsibility.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We proactively identify hazards, conduct regular risk assessments, and implement best practices to ensure a safe working environment in every area of our operations.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Protocols */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
                alt="Safety Training"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
            <div className="scale-in">
              <img
                src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop"
                alt="Safety Equipment"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
            <div className="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
                alt="Safety Monitoring"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
          </div>
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Safety <span className="text-primary">Protocols</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A robust framework of training, equipment, and monitoring ensures workplace safety at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {protocols.map((protocol, index) => (
              <Card
                key={index}
                title={protocol.title}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  {protocol.icon}
                </div>
                <p className="text-gray-600 leading-relaxed">{protocol.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Achievements */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Safety <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to safety is backed by measurable results and industry-recognized certifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{achievement.metric}</h3>
                <p className="text-lg font-semibold mb-1">{achievement.description}</p>
                <p className="text-gray-600 text-sm">{achievement.period}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-millat-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Learn About Our Environmental Standards
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how our sustainability practices work hand-in-hand with our safety commitments.
            </p>
            <Link 
              to="/compliance/environmental-standards" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Environmental Standards</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default OccupationalHealthSafety;