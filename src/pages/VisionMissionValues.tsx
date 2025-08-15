import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Lightbulb, Leaf, Award, Users, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const VisionMissionValues = () => {
  useScrollAnimation();

  const values = [
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical responsibility in every relationship — from customers to employees and partners.',
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: 'Innovation',
      description: 'We continually improve our processes, technologies, and products to meet the evolving needs of global industries.',
      icon: <Lightbulb className="h-8 w-8" />
    },
    {
      title: 'Sustainability',
      description: 'We are committed to environmentally responsible manufacturing and sustainable solutions that protect future generations.',
      icon: <Leaf className="h-8 w-8" />
    },
    {
      title: 'Quality',
      description: 'We adhere to ISO 9001:2015 standards, ensuring premium quality from raw material selection to final inspection.',
      icon: <Award className="h-8 w-8" />
    },
    {
      title: 'Teamwork',
      description: 'We value collaboration, respect, and a shared vision to achieve excellence together.',
      icon: <Users className="h-8 w-8" />
    },
    {
      title: 'Safety',
      description: 'We uphold the highest safety standards for our workforce, customers, and the communities we serve.',
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
        backgroundImage="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&h=1080&fit=crop"
        title="Vision, Mission & <span class='text-primary'>Values</span>"
        subtitle="Our principles define our path — driving innovation, quality, and sustainable growth in everything we do."
      />

      {/* Vision Statement */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Our <span className="text-primary">Vision</span>
            </h2>
            <div className="bg-light p-12 rounded-2xl shadow-lg">
              <p className="text-2xl lg:text-3xl text-gray-700 leading-relaxed font-light italic">
                "To be a globally recognized leader in polymer and rubber manufacturing, renowned for delivering innovative, high-quality, and sustainable solutions that empower industries and enhance communities worldwide."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                Our <span className="text-primary">Mission</span>
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  To manufacture world-class HDPE pipes, PVC water stops, RCC pipe rubber rings, gaskets, and molded rubber components that meet the highest global standards, serving both OEM and aftermarket needs across multiple industries.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Guided by innovation, integrity, and a commitment to sustainability, we strive to deliver exceptional value, build lasting partnerships, and contribute positively to the industries and communities we serve — both in Pakistan and across international markets.
                </p>
              </div>
            </div>
            <div className="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1581092921462-20524563c940?w=800&h=600&fit=crop"
                alt="Our Mission"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values reflect our identity and commitment to excellence in manufacturing, service, and community engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                title={value.title}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  {value.icon}
                </div>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
              See Our Values in Action
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover our corporate social responsibility initiatives and how we contribute to a better future.
            </p>
            <Link 
              to="/csr-initiatives" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Explore CSR Initiatives</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default VisionMissionValues;