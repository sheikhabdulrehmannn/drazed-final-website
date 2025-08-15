import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Cog, Award, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../../components/HeroBanner';
import Card from '../../components/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const TechnicalExpertise = () => {
  useScrollAnimation();

  const skills = [
    {
      title: 'Advanced Mold Design',
      description: 'CAD/CAM-driven mold engineering for intricate rubber, PVC, and plastic components.',
      icon: <Cog className="h-8 w-8" />
    },
    {
      title: 'Precision Tooling & Machining',
      description: 'In-house toolmaking ensures exact tolerances for OEM and custom parts.',
      icon: <Award className="h-8 w-8" />
    },
    {
      title: 'Complex Assembly & Bonding',
      description: 'Expertise in multi-material assembly and high-strength rubber-to-metal bonding.',
      icon: <Users className="h-8 w-8" />
    }
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
        backgroundImage="https://i.postimg.cc/MGhQHG5c/download.jpg"
        title="Technical <span class='text-primary'>Expertise</span>"
        subtitle="Specialized skills in polymer engineering, mold design, and advanced manufacturing."
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Excellence in <span className="text-primary">Polymer Manufacturing</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              With decades of experience in rubber, plastic, and PVC component production, Millat Polymer & Rubber (Pvt) Ltd combines deep industry knowledge with state-of-the-art manufacturing techniques. Our capabilities span material formulation, tooling design, and production automation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ongoing investment in technology, equipment, and workforce training ensures we stay ahead in product quality, precision, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
                alt="Advanced Mold Design"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
            <div className="scale-in">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop"
                alt="Precision Manufacturing"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
            <div className="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop"
                alt="Complex Assembly"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
          </div>
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Core <span className="text-primary">Competencies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The specialized skills that make us a trusted partner for demanding industrial applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={index}
                title={skill.title}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  {skill.icon}
                </div>
                <p className="text-gray-600 leading-relaxed">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Continuous Training */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <img
                src="https://via.placeholder.com/800x600?text=Training+at+Millat"
                alt="Continuous Training"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
            <div className="slide-in-right">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Continuous <span className="text-primary">Training</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Our technical team participates in regular skill enhancement programs covering material technology, process optimization, and emerging industry standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <span className="text-lg">Specialized manufacturing workshops</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-primary" />
                  <span className="text-lg">Certification in ISO & automotive standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-primary" />
                  <span className="text-lg">Cross-departmental skill sharing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Partner with Our Skilled Team
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how our technical expertise can transform your product concepts into high-performance solutions.
            </p>
            <Link 
              to="/manufacturing" 
              className="bg-white text-secondary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>R&D & Innovation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default TechnicalExpertise;