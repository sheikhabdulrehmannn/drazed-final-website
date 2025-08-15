import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TestTube, Thermometer, Beaker, Ruler } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const QualityControlTesting = () => {
  useScrollAnimation();

  const testingCapabilities = [
    {
      title: 'Tensile Strength Testing',
      description: 'Measures durability and performance under mechanical stress. // TODO: Confirm test machine model & max load capacity.',
      icon: <TestTube className="h-8 w-8" />
    },
    {
      title: 'Thermal Resistance',
      description: 'Simulates extreme hot and cold environments to ensure product reliability. // TODO: Confirm temperature range used.',
      icon: <Thermometer className="h-8 w-8" />
    },
    {
      title: 'Chemical Resistance',
      description: 'Verifies compatibility with automotive fluids, industrial chemicals, and environmental factors. // TODO: Confirm full list of chemicals tested.',
      icon: <Beaker className="h-8 w-8" />
    },
    {
      title: 'Dimensional Accuracy',
      description: 'Precision measurement using advanced metrology tools. // TODO: Confirm if CMM brand/model is Hexagon, Mitutoyo, etc.',
      icon: <Ruler className="h-8 w-8" />
    }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', logo: '/images/iso-certificate.jpg' },
    { name: 'ISO/TS 16949', logo: '/images/iso-certificate.jpg' }, // TODO: Confirm if currently valid
    { name: 'RoHS Compliant', logo: '/images/iso-certificate.jpg' },
    { name: 'REACH Compliant', logo: '/images/iso-certificate.jpg' }
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
        backgroundImage="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1920&h=1080&fit=crop"
        title="Quality You Can <span class='text-primary'>Rely On</span>"
        subtitle="Rigorous, documented, and certified quality testing for consistent excellence."
      />

      {/* Quality Philosophy */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Quality Isn't Just a Step—<span className="text-primary">It's Who We Are</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              At Millat Polymer & Rubber (Pvt) Ltd, quality is built into every stage of our process. Every product passes through strict performance, durability, and safety checks. Our quality management system is designed to meet and exceed international standards, ensuring customer satisfaction in every order we fulfill.
            </p>
          </div>
        </div>
      </section>

      {/* Testing Capabilities */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Testing <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We utilize advanced testing equipment to validate every aspect of product performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testingCapabilities.map((capability, index) => (
              <Card
                key={index}
                title={capability.title}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  {capability.icon}
                </div>
                <p className="text-gray-600 leading-relaxed">{capability.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Certifications & <span className="text-primary">Standards</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certifications prove our dedication to global compliance and customer assurance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="aspect-square w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                  <img
                    src={cert.logo}
                    alt={cert.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold">{cert.name}</h3>
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
              Learn About Material Compliance
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how our compliance certifications guarantee safety, environmental responsibility, and legal adherence.
            </p>
            <Link 
              to="/compliance/material-compliance-certifications" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Learn About Material Compliance</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default QualityControlTesting;