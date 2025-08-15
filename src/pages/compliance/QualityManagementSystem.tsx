import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, CheckCircle, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../../components/HeroBanner';
import Card from '../../components/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const QualityManagementSystem = () => {
  useScrollAnimation();

  const practices = [
    {
      title: 'Regular Auditing',
      description: 'Scheduled internal and third-party audits ensure compliance with ISO 9001:2015 and customer-specific standards.',
      icon: <CheckCircle className="h-8 w-8" />
    },
    {
      title: 'Continuous Improvement',
      description: 'Ongoing process optimization programs driven by data analysis, customer feedback, and innovation.',
      icon: <TrendingUp className="h-8 w-8" />
    },
    {
      title: 'Defect Prevention',
      description: 'Root-cause analysis and preventive measures built into every production stage to ensure zero-defect goals.',
      icon: <Award className="h-8 w-8" />
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
        backgroundImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop"
        title="Quality Management <span class='text-primary'>System</span>"
        subtitle="ISO 9001:2015 certified processes delivering consistent excellence for global clients."
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Purpose and Benefits of <span className="text-primary">Our QMS</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Millat Polymer & Rubber’s Quality Management System (QMS) is the foundation of our manufacturing excellence.  
              It ensures that every product meets rigorous customer requirements, international standards, and industry regulations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our ISO 9001:2015 certification reflects a deep commitment to continuous improvement, defect prevention, and process efficiency — ensuring our customers receive dependable, high-performance solutions every time.
            </p>
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
                alt="Quality Management Team"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
            <div className="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop"
                alt="Quality Control Process"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
          </div>
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Core QMS <span className="text-primary">Practices</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key principles and processes that define our approach to quality assurance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {practices.map((practice, index) => (
              <Card
                key={index}
                title={practice.title}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  {practice.icon}
                </div>
                <p className="text-gray-600 leading-relaxed">{practice.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                How Our QMS Drives <span className="text-primary">Consistency</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Our QMS ensures product consistency through standardized procedures, robust quality checkpoints,  
                and clear performance metrics — resulting in repeatable, reliable outcomes across every production batch.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-primary" />
                  <span className="text-lg">Customer satisfaction strengthened by reliability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <span className="text-lg">Lower defect rates through preventive action</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-primary" />
                  <span className="text-lg">Efficiency gains through process optimization</span>
                </div>
              </div>
            </div>
            <div className="slide-in-right">
              <div className="bg-light p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">Quality Performance Metrics</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">// TODO%</div>
                    <div className="text-sm text-gray-600">Verified Quality Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">// TODO%</div>
                    <div className="text-sm text-gray-600">Customer Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">// TODO%</div>
                    <div className="text-sm text-gray-600">Defect Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">// TODO%</div>
                    <div className="text-sm text-gray-600">On-Time Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-millat-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Learn About Our Safety Standards
            </h2>
            <p className="text-xl mb-8 opacity-90">
              See how our safety culture supports our quality objectives for every project.
            </p>
            <Link 
              to="/compliance/safety-quality-standards" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Safety & Quality Standards</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default QualityManagementSystem;