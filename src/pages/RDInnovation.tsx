import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, TrendingUp, Cpu, Monitor, Printer, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const RDInnovation = () => {
  useScrollAnimation();

  const innovations = [
    {
      title: 'New EPDM Blend',
      description: 'Developed advanced EPDM formulation with 15% higher heat resistance', // TODO: Confirm exact % improvement
      impact: 'Extended service life in high-temperature automotive and industrial applications by up to 20%' // TODO: Confirm exact % extension
    },
    {
      title: 'Automated Quality Inspection',
      description: 'Implemented AI-powered quality inspection system', // TODO: Confirm AI tool name/model
      impact: 'Reduced inspection time by 40% with 98% defect detection accuracy' // TODO: Confirm accuracy %
    },
    {
      title: 'Eco-Friendly Compounds',
      description: 'Created sustainable rubber compounds using recycled materials',
      impact: '25% reduction in environmental impact measured via lifecycle assessment' // TODO: Confirm LCA results
    }
  ];

  const investments = [
    {
      title: 'CAD & Simulation Software',
      description: 'Advanced design and simulation capabilities using SolidWorks and ANSYS', // TODO: Confirm software used
      icon: <Monitor className="h-8 w-8" />
    },
    {
      title: 'Prototyping Tools',
      description: 'Rapid prototyping and testing equipment including 3D printers and CNC machining', // TODO: Confirm equipment models
      icon: <Printer className="h-8 w-8" />
    },
    {
      title: '3D Scanning Equipment',
      description: 'Precision measurement and reverse engineering for mold and part replication', // TODO: Confirm scanning system
      icon: <Search className="h-8 w-8" />
    },
    {
      title: 'AI & Machine Learning',
      description: 'Smart manufacturing and predictive analytics for process optimization',
      icon: <Cpu className="h-8 w-8" />
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
        backgroundImage="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1920&h=1080&fit=crop"
        title="Driving Innovation <span class='text-primary'>Forward</span>"
        subtitle="Advancing polymer science and manufacturing technologies for automotive, industrial, and infrastructure sectors"
      />

      {/* Innovation Culture */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop"
                alt="R&D Laboratory"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
            <div className="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
                alt="Innovation Team"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
          </div>
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Innovation <span className="text-primary">Culture</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              We foster a culture where ideas become reality—encouraging our team to experiment, innovate, and refine. 
              Our R&D programs focus on advancing polymer chemistry, improving product durability, and optimizing manufacturing processes for 
              industries such as automotive, industrial equipment, and infrastructure. Collaboration with clients and technical institutes ensures 
              our solutions are always at the cutting edge. // TODO: Confirm if partnerships with universities exist
            </p>
          </div>
        </div>
      </section>

      {/* Recent Innovations */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Recent <span className="text-primary">Innovations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Examples of how our R&D efforts translate into measurable performance improvements and real-world solutions.
            </p>
          </div>

          <div className="space-y-8">
            {innovations.map((innovation, index) => (
              <Card
                key={index}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} lift-hover`}
              >
                <div className="grid lg:grid-cols-3 gap-6">
                  <div>
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-primary">
                      <Lightbulb className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-primary">{innovation.title}</h3>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Innovation:</h4>
                    <p className="text-gray-700">{innovation.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Impact:</h4>
                    <p className="text-gray-700">{innovation.impact}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Investments */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Technology <span className="text-primary">Investments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic investments in cutting-edge technology enable us to lead in innovation and manufacturing efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investments.map((investment, index) => (
              <Card
                key={index}
                title={investment.title}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  {investment.icon}
                </div>
                <p className="text-gray-600 leading-relaxed">{investment.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Stats */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Innovation <span className="text-primary">Impact</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="slide-in-left text-center lift-hover">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">15+</h3>
              <p className="text-lg font-semibold">Active R&D Projects</p>
              <p className="text-gray-600 text-sm">In automotive, industrial, and infrastructure sectors</p>
            </Card>

            <Card className="slide-in-right text-center lift-hover">
              <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-secondary">
                <Lightbulb className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-secondary mb-2">25%</h3>
              <p className="text-lg font-semibold">Efficiency Gains</p>
              <p className="text-gray-600 text-sm">Through manufacturing process optimization</p>
            </Card>

            <Card className="slide-in-left text-center lift-hover">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                <Cpu className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">5</h3>
              <p className="text-lg font-semibold">Patents Filed</p>
              <p className="text-gray-600 text-sm">Covering proprietary sealing and compounding technologies // TODO: Confirm patent details</p>
            </Card>

            <Card className="slide-in-right text-center lift-hover">
              <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-secondary">
                <Monitor className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-secondary mb-2">10%</h3>
              <p className="text-lg font-semibold">Revenue in R&D</p>
              <p className="text-gray-600 text-sm">Annual investment in innovation</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-millat-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              See Our Prototype Development
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how our R&D capabilities translate into rapid prototype development and testing.
            </p>
            <Link 
              to="/capabilities/prototype-development" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>See Our Prototype Development</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default RDInnovation;