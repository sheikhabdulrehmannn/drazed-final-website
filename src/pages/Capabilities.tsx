import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Beaker, Cog, TestTube, Wrench, Factory, Lightbulb, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Capabilities = () => {
  useScrollAnimation();

  const capabilities = [
    {
      title: 'In-House Compounding',
      description: 'We maintain full control over our material properties through custom rubber and polymer formulations tailored to diverse industries including automotive, industrial, and infrastructure.', // TODO: Confirm exact industries served
      icon: <Beaker className="h-8 w-8" />,
      link: '/capabilities/in-house-compounding'
    },
    {
      title: 'Technical Expertise',
      description: 'A multidisciplinary team of engineers and technicians with decades of combined experience in polymer design, tooling, and production optimization.', // TODO: Confirm years of experience
      icon: <Cog className="h-8 w-8" />,
      link: '/capabilities/technical-expertise'
    },
    {
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive in-house testing labs equipped for tensile strength, hardness, compression set, aging, and chemical resistance testing.', // TODO: Confirm test list
      icon: <TestTube className="h-8 w-8" />,
      link: '/capabilities/testing-quality-assurance'
    },
    {
      title: 'Product Customization',
      description: 'Custom-designed components engineered to meet client-specific requirements for dimensions, material properties, and performance.', 
      icon: <Wrench className="h-8 w-8" />,
      link: '/capabilities/product-customization'
    },
    {
      title: 'Large-Scale Production',
      description: 'High-volume manufacturing capacity with automated production lines ensuring consistency and efficiency.', // TODO: Confirm monthly production capacity
      icon: <Factory className="h-8 w-8" />,
      link: '/capabilities/large-scale-production'
    },
    {
      title: 'Prototype Development',
      description: 'Rapid prototyping capability enabling faster design validation and reduced time-to-market.', 
      icon: <Lightbulb className="h-8 w-8" />,
      link: '/capabilities/prototype-development'
    },
    {
      title: 'Supply Chain & Logistics',
      description: 'Reliable delivery supported by an optimized supply chain network serving both domestic and export markets.', // TODO: Confirm export countries
      icon: <Truck className="h-8 w-8" />,
      link: '/capabilities/supply-chain-logistics'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Precision Manufacturing',
      description: 'State-of-the-art machinery and skilled craftsmanship deliver parts with tight tolerances and consistent quality.',
      icon: <Cog className="h-6 w-6" />
    },
    {
      title: 'Quality Control',
      description: 'Stringent inspection protocols at each production stage — from raw material intake to final packing.', 
      icon: <TestTube className="h-6 w-6" />
    },
    {
      title: 'Fast Turnaround',
      description: 'Streamlined production workflows and optimized scheduling ensure timely deliveries.', 
      icon: <Factory className="h-6 w-6" />
    },
    {
      title: 'Customization',
      description: 'Adaptable manufacturing processes to meet unique specifications for diverse markets.', 
      icon: <Wrench className="h-6 w-6" />
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
        backgroundImage="https://i.postimg.cc/0j1yRMff/download.jpg" // TODO: Replace with real Millat facility image
        title="Our <span class='text-primary'>Capabilities</span>"
        subtitle="From concept to completion — complete polymer manufacturing solutions"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Complete Manufacturing <span className="text-primary">Control</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                At Millat Polymer & Rubber, we manage every stage of production — from raw material selection and compounding to final product inspection and shipment. This ensures exceptional quality, flexibility in meeting customer demands, and shorter lead times.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our integrated production setup reduces dependency on third-party processes, allowing us to maintain consistency and deliver cost-effective solutions for our clients worldwide.
              </p>
            </div>
            <div className="slide-in-right">
              <img
                src="https://via.placeholder.com/800x600?text=Millat+Manufacturing" // TODO: Replace with actual image
                alt="Manufacturing Control"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Core <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From custom formulations to high-volume production, our capabilities enable us to serve multiple industries with precision and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Link
                key={index}
                to={capability.link}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} group`}
              >
                <Card className="h-full lift-hover group-hover:shadow-xl transition-all duration-300">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{capability.description}</p>
                  <div className="flex items-center text-primary font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Millat */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Why Choose <span className="text-primary">Millat</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining advanced technology, skilled teams, and strict quality control, we deliver solutions that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <Card
                key={index}
                title={reason.title}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                  {reason.icon}
                </div>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-millat-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Partner with a manufacturing team that delivers from concept to completion
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to discuss your project requirements? Our experts can help design, develop, and deliver the perfect solution for your needs.
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

export default Capabilities;