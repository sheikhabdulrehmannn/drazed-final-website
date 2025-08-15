import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Beaker, Thermometer, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../../components/HeroBanner';
import Card from '../../components/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const InHouseCompounding = () => {
  useScrollAnimation();

  const materials = [
    {
      name: 'Rubber & PVC Blends (Natural, SBR, NBR, EPDM, Silicone)',
      description:
        'High-quality compounding done in-house at our Lahore facility to meet automotive, infrastructure, and industrial needs.',
      properties: [
        'Wide temperature ranges',
        'Chemical & weather resistance',
        'Custom formulation based on application'
      ]
    },
    // Additional materials can be added or customized here
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeIn' }}
      className="min-h-screen"
    >
      {/* Hero Banner */}
      <HeroBanner
        backgroundImage="https://i.postimg.cc/pXDqtw2Y/download.jpg"
        title="In-House <span class='text-primary'>Compounding</span>"
        subtitle="End-to-end material blending — managed at our Lahore facility."
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Benefits of In-House <span className="text-primary">Compounding</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Based in Lahore, our in-house compounding facility allows for precise control over raw
              material blends—resulting in consistent quality, tailored performance, and agile
              formulation across polymer and rubber products that are exported to markets including
              the Netherlands, UAE, Australia, and Europe.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This integrated approach supports our reputation for reliability, customization, and
              product excellence. // TODO: Add compound capacity (tons/month) if available
            </p>
          </div>
        </div>
      </section>

      {/* Materials We Process */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop"
                alt="Material Compounding Process"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
            <div className="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop"
                alt="Quality Testing Lab"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
          </div>
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Materials <span className="text-primary">Used</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our compounding process covers a broad array of materials, all mixed and tested under precision controls.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {materials.map((material, index) => (
              <Card
                key={index}
                title={material.name}
                className={`slide-in-${index % 2 === 0 ? 'left' : 'right'} lift-hover`}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-primary">
                  <Beaker className="h-6 w-6" />
                </div>
                <p className="text-gray-600 mb-4">{material.description}</p>
                <ul className="space-y-2">
                  {material.properties.map((prop, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                      {prop}
                    </li>
                  ))}
                </ul>
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
              Learn More About Our Manufacturing
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Explore how our compounding capabilities complement our full manufacturing portfolio,
              from production processes to global distribution.
            </p>
            <Link
              to="/manufacturing"
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Explore Manufacturing</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default InHouseCompounding;