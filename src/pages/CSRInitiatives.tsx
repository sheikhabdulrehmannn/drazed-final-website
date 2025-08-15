import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Users, Heart, TreePine, GraduationCap, Recycle } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CSRInitiatives = () => {
  useScrollAnimation();

  const initiatives = [
    {
      title: 'Environmental Sustainability',
      description: 'Adopting eco-friendly manufacturing practices for HDPE, PVC, and rubber products, reducing waste through recycling programs, and exploring renewable energy solutions to lower our carbon footprint.',
      icon: <Leaf className="h-8 w-8" />,
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop'
    },
    {
      title: 'Worker Welfare',
      description: 'Providing safe and healthy working conditions, ISO-compliant processes, healthcare benefits, and opportunities for skills development to empower our employees.',
      icon: <Users className="h-8 w-8" />,
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop'
    },
    {
      title: 'Community Projects',
      description: 'Supporting communities with educational initiatives, access to clean water, infrastructure upgrades, and local development projects in line with our UN Global Compact commitment.',
      icon: <Heart className="h-8 w-8" />,
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop'
    }
  ];

  const impactStats = [
    {
      number: '2,500+',
      label: 'Trees Planted',
      description: 'Reforestation and green belt development in local communities',
      icon: <TreePine className="h-8 w-8" />
    },
    {
      number: '1,200',
      label: 'Training Hours',
      description: 'Technical and safety training for workforce development',
      icon: <GraduationCap className="h-8 w-8" />
    },
    {
      number: '40%',
      label: 'Waste Reduced',
      description: 'Achieved through material optimization and recycling initiatives',
      icon: <Recycle className="h-8 w-8" />
    },
    {
      number: '15',
      label: 'Community Projects',
      description: 'Partnerships for education, healthcare, and infrastructure support',
      icon: <Heart className="h-8 w-8" />
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
        backgroundImage="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&h=1080&fit=crop"
        title="CSR <span class='text-primary'>Initiatives</span>"
        subtitle="How Millat Polymer & Rubber integrates sustainability, employee welfare, and community support into every aspect of our operations."
      />

      {/* CSR Philosophy */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our CSR <span className="text-primary">Philosophy</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              As a signatory to the United Nations Global Compact, Millat Polymer & Rubber believes true business success is measured not only by financial growth but by our contributions to society and the environment. 
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From sustainable manufacturing to social investment, we aim to create lasting value for our employees, customers, and the communities we operate in, while protecting the environment for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Key Initiatives Grid */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Key <span className="text-primary">Initiatives</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our CSR strategy is built around three main pillars: environmental responsibility, workforce well-being, and community development.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <Card
                key={index}
                image={initiative.image}
                imageAlt={initiative.title}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} lift-hover`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary">
                    {initiative.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{initiative.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{initiative.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our <span className="text-primary">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results from our CSR programs and sustainability initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <Card
                key={index}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-xl font-semibold mb-2">{stat.label}</p>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Commitments */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Future <span className="text-primary">Commitments</span>
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                In the years ahead, we plan to expand our environmental programs, target greater waste reduction, adopt circular economy principles, and build stronger partnerships with schools, vocational centers, and NGOs for educational uplift.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our goal is to ensure our manufacturing excellence goes hand in hand with social progress and environmental protection — making a measurable difference locally and globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-millat-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Learn About Our Standards
            </h2>
            <p className="text-xl mb-8 opacity-90">
              See how our environmental policies and compliance practices support our CSR mission.
            </p>
            <Link 
              to="/compliance/environmental-standards" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Environmental Standards</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CSRInitiatives;