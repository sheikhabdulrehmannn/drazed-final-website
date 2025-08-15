import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TestTube, Shield, CheckCircle, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../../components/HeroBanner';
import Card from '../../components/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const TestingQualityAssurance = () => {
  useScrollAnimation();

  const testingTypes = [
    {
      name: 'Tensile Strength & Elongation',
      description: 'Evaluating mechanical performance for durability in automotive, industrial, and infrastructure applications.',
      equipment: 'Universal Testing Machines with real-time digital analysis'
    },
    {
      name: 'Hardness & Compression Testing',
      description: 'Shore A/D hardness testing for rubber and plastics, ensuring compliance with OEM specifications.',
      equipment: 'Precision durometers with automated reading systems'
    },
    {
      name: 'Chemical & Fluid Resistance',
      description: 'Assessment of component resilience against oils, fuels, coolants, and aggressive chemicals.',
      equipment: 'Specialized chemical exposure chambers and environmental simulation units'
    },
    {
      name: 'Dimensional Accuracy Verification',
      description: 'Precision measurements to confirm tight tolerances in molded and extruded parts.',
      equipment: 'CMM machines, laser scanners, and optical inspection systems'
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
        backgroundImage="https://i.postimg.cc/bNCddJNz/download.jpg"
        title="Testing & Quality <span class='text-primary'>Assurance</span>"
        subtitle="Ensuring every Millat product meets the highest industry and customer standards"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Millat's <span className="text-primary">Quality Commitment</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At Millat Polymer & Rubber (Pvt) Ltd, quality is embedded in every step — from material sourcing to final dispatch. Our advanced laboratory and skilled quality control team ensure every product not only meets but often exceeds OEM and international standards.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our facility operates under strict ISO-certified procedures, reinforced by continuous testing, inspection, and traceability protocols.
            </p>
          </div>
        </div>
      </section>

      {/* Testing Types */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop"
                alt="Testing Laboratory"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
            <div className="scale-in">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
                alt="Quality Control Team"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
            <div className="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop"
                alt="Testing Equipment"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
          </div>
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Comprehensive <span className="text-primary">Testing Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our quality lab covers mechanical, dimensional, and chemical testing to guarantee consistent performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testingTypes.map((test, index) => (
              <Card
                key={index}
                title={test.name}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} lift-hover`}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-primary">
                  <TestTube className="h-6 w-6" />
                </div>
                <p className="text-gray-600 mb-4">{test.description}</p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500 font-medium">Equipment:</p>
                  <p className="text-sm text-gray-700">{test.equipment}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Used */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Cutting-Edge <span className="text-primary">Testing Facilities</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Millat’s testing laboratory integrates automated systems and high-precision instruments to ensure repeatable, reliable results. Our investments in technology strengthen our position as a trusted OEM supplier.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Settings className="h-6 w-6 text-primary" />
                  <span className="text-lg">Automated tensile & hardness testing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="text-lg">Certified calibration processes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="text-lg">Digital data recording & traceability</span>
                </div>
              </div>
            </div>
            <div className="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop"
                alt="Testing Equipment"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-millat-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Learn More About Our Quality Control
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Explore how our rigorous testing ensures long-term performance and reliability.
            </p>
            <Link 
              to="/manufacturing" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Quality Control & Testing</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default TestingQualityAssurance;