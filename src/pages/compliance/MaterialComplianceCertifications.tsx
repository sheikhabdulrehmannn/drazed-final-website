import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileCheck, TestTube, Shield, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../../components/HeroBanner';
import Card from '../../components/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const MaterialComplianceCertifications = () => {
  useScrollAnimation();

  const certifications = [
    {
      name: 'RoHS Compliant',
      description: 'Restriction of Hazardous Substances compliance — ensuring all materials are free from harmful levels of lead, mercury, cadmium, and other restricted substances.',
      icon: <Shield className="h-8 w-8" />
    },
    {
      name: 'REACH Compliant',
      description: 'Compliance with European Union REACH regulations, guaranteeing safe chemical usage in all rubber, plastic, and PVC products.',
      icon: <FileCheck className="h-8 w-8" />
    },
    {
      name: 'FDA-Grade Materials // TODO: Confirm scope',
      description: 'Food-contact-safe materials meeting applicable FDA standards for select industrial and sealing applications.',
      icon: <CheckCircle className="h-8 w-8" />
    }
  ];

  const testingSteps = [
    'Incoming raw material verification with supplier certificates',
    'Chemical composition analysis in accredited third-party or in-house labs',
    'Verification against applicable global standards (RoHS, REACH, FDA)',
    'Issuance of compliance documentation with full traceability'
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
        title="Material Compliance <span class='text-primary'>Certifications</span>"
        subtitle="Ensuring every material we use meets stringent international safety and environmental standards"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Why <span className="text-primary">Material Compliance</span> Matters
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At Millat Polymer & Rubber (Pvt) Ltd, material compliance is at the heart of our quality commitment.  
              Every component — from rubber seals to PVC profiles — is manufactured using materials that meet or exceed global environmental, health, and safety regulations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              By adhering to RoHS, REACH, and other applicable certifications, we not only ensure customer safety and product integrity but also enable smooth entry into regulated markets worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop"
                alt="Material Testing"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
            <div className="scale-in">
              <img
                src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop"
                alt="Material Analysis"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
            <div className="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop"
                alt="Compliance Documentation"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
          </div>
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Certified <span className="text-primary">Material Standards</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All materials are sourced and tested to meet internationally recognized compliance requirements for safety, performance, and sustainability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                title={cert.name}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  {cert.icon}
                </div>
                <p className="text-gray-600 leading-relaxed">{cert.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Process */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Material Testing <span className="text-primary">Process</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Every batch of raw materials undergoes rigorous verification to ensure compliance before production begins. Our protocols combine supplier validation, in-house inspection, and third-party lab testing where required.
              </p>
              <div className="space-y-4">
                {testingSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-1">
                      {index + 1}
                    </div>
                    <span className="text-lg">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="slide-in-right">
              <div className="bg-light p-8 rounded-2xl shadow-lg">
                <div className="text-center mb-6">
                  <TestTube className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Testing Snapshot</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-sm text-gray-600">Batches Tested</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">99.8%</div>
                    <div className="text-sm text-gray-600">Compliance Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">&lt;24hrs</div>
                    <div className="text-sm text-gray-600">Average Turnaround</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-sm text-gray-600">Compliance Parameters</div>
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
              Request Material Compliance Documentation
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We provide complete traceability and certification for every material used in your project.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
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

export default MaterialComplianceCertifications;