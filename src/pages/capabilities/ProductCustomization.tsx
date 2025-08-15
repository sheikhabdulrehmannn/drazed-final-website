import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Users, Lightbulb, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../../components/HeroBanner';
import Card from '../../components/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ProductCustomization = () => {
  useScrollAnimation();

  const processSteps = [
    { step: '1', title: 'Consultation', description: 'Understanding your application and specifications', icon: <Users className="h-6 w-6" /> },
    { step: '2', title: 'Design & Materials', description: 'Developing technical drawings and selecting suitable materials like HDPE, PVC, EPDM, Silicone', icon: <Lightbulb className="h-6 w-6" /> },
    { step: '3', title: 'Formulation & Molding', description: 'Compounding customized rubber or plastic blends in-house and manufacturing with precision', icon: <Wrench className="h-6 w-6" /> },
    { step: '4', title: 'Validation & Delivery', description: 'Rigorous quality checks followed by efficient delivery—even for large export orders', icon: <CheckCircle className="h-6 w-6" /> }
  ];

  const examples = [
    {
      title: 'Custom Gasket & Rubber-Metal Ring Set',
      description: 'Tailored sealing solution for water-stops and pipe systems',
      challenge: 'Required precise dimension control and material flexibility',
      solution: 'Custom EPDM formulation with integrated rubber-metal bonding'
    }
    // TODO: Add more Millat-specific examples if available
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: "easeIn" }} className="min-h-screen">
      {/* Hero Banner */}
      <HeroBanner
        backgroundImage="https://i.postimg.cc/bY6q95Xg/mass-customization.jpg"
        title="Product <span class='text-primary'>Customization</span>"
        subtitle="Tailored polymer and rubber solutions to meet unique requirements"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Why Customization is Our <span className="text-primary">Advantage</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At our Lahore-based facility (Omer Chowk, Bund Road), Millat specializes in manufacturing HDPE pipes, PVC water-stoppers, rubber-metal rings, and gaskets according to exact client specifications.
              {/* TODO: Confirm if more specific custom product categories should be listed */}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With in-house compounding, molding, and quality control, we ensure consistent performance and fast turnaround for customized components—delivered reliably across domestic and export markets.
              {/* TODO: Add export region details if desired */}
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1581092921462-20524563c940?w=800&h=600&fit=crop"
                alt="Custom Product Design"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
            <div className="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
                alt="Client Consultation"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
          </div>
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Customization <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A client-centric process from consultation to delivery ensures your solutions are precisely made.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <Card key={i} className={`${i % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} text-center lift-hover`}>
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">{step.step}</div>
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Custom Project <span className="text-primary">Example</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              One of the many ways we have delivered tailored solutions to meet specialized requirements.
            </p>
          </div>

          <div className="space-y-8">
            {examples.map((ex, i) => (
              <Card key={i} className={`${i % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} lift-hover`}>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">{ex.title}</h3>
                    <p className="text-lg text-gray-700 mb-4">{ex.description}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">Challenge:</h4>
                      <p className="text-red-700">{ex.challenge}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Solution:</h4>
                      <p className="text-green-700">{ex.solution}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Discuss Your Custom Requirements?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us to begin crafting a solution uniquely suited to your application needs.
            </p>
            <Link to="/contact" className="bg-white text-secondary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2">
              <span>Contact Us for Custom Orders</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProductCustomization;