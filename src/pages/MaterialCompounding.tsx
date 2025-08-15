import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Beaker, Thermometer, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MaterialCompounding = () => {
  useScrollAnimation();

  const materials = [
    {
      name: 'Rubber (Natural, SBR, NBR)',
      description: 'Premium-grade rubber compounds developed in-house for automotive, industrial, and sealing applications. // TODO: Confirm if other rubber types are included',
      properties: ['Excellent elasticity', 'Chemical resistance', 'Temperature stability']
    },
    {
      name: 'EPDM',
      description: 'High-durability sealing compounds designed for outdoor and high-temperature environments.',
      properties: ['UV resistance', 'Ozone protection', 'Temperature range: -40°C to +150°C']
    },
    {
      name: 'Silicone',
      description: 'High-performance silicone compounds suitable for extreme temperature ranges and hygienic applications.',
      properties: ['Temperature range: -60°C to +200°C', 'Food-grade variants available', 'Excellent flexibility']
    },
    {
      name: 'PVC & Engineering Plastics',
      description: 'Tough, dimensionally stable thermoplastic solutions for automotive and industrial needs.',
      properties: ['Chemical resistance', 'Dimensional stability', 'Cost-effective processing']
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
        backgroundImage="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1920&h=1080&fit=crop"
        title="Material <span class='text-primary'>Compounding</span>"
        subtitle="Consistency, flexibility, and performance — engineered from the ground up."
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Controlling Every <span className="text-primary">Batch</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              At Millat Polymer & Rubber, all compounding is done in-house for complete quality control. 
              This ensures consistent material performance, reliable supply, and the flexibility to develop 
              custom formulations tailored to specific project needs. 
              // TODO: Confirm if we highlight lab testing here or in Quality Control page.
            </p>
          </div>
        </div>
      </section>

      {/* Materials Used */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Materials <span className="text-primary">Used</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse material portfolio allows us to meet performance requirements across multiple industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {materials.map((material, index) => (
              <Card
                key={index}
                title={material.name}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} lift-hover`}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-primary">
                  <Beaker className="h-6 w-6" />
                </div>
                <p className="text-gray-600 mb-4">{material.description}</p>
                <ul className="space-y-2">
                  {material.properties.map((property, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      {property}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Formulations */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Custom <span className="text-primary">Formulations</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Our formulation team develops specialized compounds for challenging applications, optimizing 
                chemical resistance, thermal stability, and mechanical strength. 
                // TODO: Confirm if we mention industries served in this section.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Thermometer className="h-6 w-6 text-primary" />
                  <span className="text-lg">Temperature-specific formulations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="text-lg">Chemical resistance optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-6 w-6 text-primary" />
                  <span className="text-lg">Mechanical property enhancement</span>
                </div>
              </div>
            </div>
            <div className="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop"
                alt="Material Compounding // TODO: Replace with real Millat lab or mixing facility image"
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
              Discover In-House Compounding
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Learn how our compounding expertise ensures consistent quality and custom solutions for your industry.
            </p>
            <Link 
              to="/capabilities/in-house-compounding" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Discover In-House Compounding</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default MaterialCompounding;