import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Recycle, Zap, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../../components/HeroBanner';
import Card from '../../components/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const EnvironmentalStandards = () => {
  useScrollAnimation();

  const practices = [
    {
      title: 'Waste Reduction',
      description: 'Systematic waste minimization, in-house scrap recycling, and responsible disposal of industrial waste.',
      icon: <Recycle className="h-8 w-8" />
    },
    {
      title: 'Water Recycling',
      description: 'Closed-loop water treatment systems to reduce fresh water usage in cooling and cleaning processes.',
      icon: <Droplets className="h-8 w-8" />
    },
    {
      title: 'Renewable Energy',
      description: 'Solar power integration and high-efficiency equipment to reduce carbon emissions across operations.',
      icon: <Zap className="h-8 w-8" />
    }
  ];

  const impactStats = [
    { metric: '40%', description: 'Waste Reduction', period: 'Since 2022 // TODO: Confirm actual %' },
    { metric: '30%', description: 'Energy Savings', period: 'Annual // TODO: Confirm actual %' },
    { metric: '25%', description: 'Water Conservation', period: 'Yearly // TODO: Confirm actual %' },
    { metric: '2,500', description: 'Trees Planted', period: 'To Date // TODO: Confirm actual count' }
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
        backgroundImage="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&h=1080&fit=crop"
        title="Environmental <span class='text-primary'>Standards</span>"
        subtitle="Eco-conscious manufacturing for a sustainable future"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Millat's <span className="text-primary">Environmental Responsibility</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Millat Polymer & Rubber (Pvt) Ltd is committed to protecting the environment while delivering high-performance products.  
              Our environmental management initiatives aim to reduce our ecological footprint through smarter resource use, cleaner production, and ongoing innovation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From reducing industrial waste to optimizing energy and water usage, we embed sustainability into every stage of our manufacturing process.
            </p>
          </div>
        </div>
      </section>

      {/* Key Practices */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop"
                alt="Environmental Protection"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
            <div className="scale-in">
              <img
                src="https://images.unsplash.com/photo-1581092921462-20524563c940?w=800&h=600&fit=crop"
                alt="Renewable Energy"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
            <div className="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop"
                alt="Sustainable Manufacturing"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
          </div>
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Key Environmental <span className="text-primary">Practices</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our sustainability initiatives focus on measurable outcomes and industry-leading practices.
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

      {/* Impact Stats */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Environmental <span className="text-primary">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measuring progress ensures that our environmental goals translate into real-world benefits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <Card
                key={index}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                  <Leaf className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.metric}</h3>
                <p className="text-lg font-semibold mb-1">{stat.description}</p>
                <p className="text-gray-600 text-sm">{stat.period}</p>
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
              Learn About Our CSR Initiatives
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Explore how our environmental strategies align with our Corporate Social Responsibility goals.
            </p>
            <Link 
              to="/csr-initiatives" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>CSR Initiatives</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default EnvironmentalStandards;