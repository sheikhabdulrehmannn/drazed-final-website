import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Award, Globe, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const OurStory = () => {
  useScrollAnimation();

  const milestones = [
    {
      year: '2012',
      title: 'Company Founded',
      description: 'Millat Polymer & Rubber (Pvt) Ltd established to deliver high-quality polymer and rubber solutions in Pakistan and abroad.',
      icon: <Factory className="h-6 w-6" />
    },
    {
      year: '2014',
      title: 'First Major Export',
      description: 'Secured our first large-scale export order, marking the start of our global footprint.',
      icon: <Award className="h-6 w-6" />
    },
    {
      year: '2020',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001:2015 certification, reinforcing our commitment to quality and consistency.',
      icon: <Award className="h-6 w-6" />
    },
    {
      year: '2023',
      title: 'Global Market Growth',
      description: 'Expanded exports to over 15 countries, serving industries from automotive to infrastructure.',
      icon: <Globe className="h-6 w-6" />
    },
    {
      year: '2025',
      title: 'Production Milestone',
      description: 'Surpassed 500 tons monthly production capacity with cutting-edge manufacturing facilities.',
      icon: <TrendingUp className="h-6 w-6" />
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
        title="Our <span class='text-gray-300'>Story</span>"
        subtitle="From a modest start to becoming a trusted leader in polymer and rubber manufacturing — discover the journey of Millat Polymer & Rubber (Pvt) Ltd."
      />

      {/* Company Origins */}
      <section className="section-padding bg-gray-300">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1581092921462-20524563c940?w=800&h=600&fit=crop"
                alt="Company Origins"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
            <div className="slide-in-right">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Where It All <span className="text-blue-800">Began</span>
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Founded in 2012, Millat Polymer & Rubber (Pvt) Ltd was built on a mission to combine technical expertise with precision manufacturing in Pakistan's growing polymer industry. Our founder envisioned a company that could meet global quality benchmarks while offering customer-focused solutions.
                </p>
                <p>
                  With a small production unit, dedicated engineers, and a passion for innovation, we started developing high-quality rubber, plastic, and PVC components for automotive, industrial, and infrastructure applications. Our early dedication to quality and reliability helped us win the trust of both local and international clients.
                </p>
                <p>
                  Over the years, this commitment has driven our transformation into a multi-product, globally recognized manufacturing partner for diverse industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Timeline */}
      <section className="section-padding bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Growth <span className="text-blue-800">Timeline</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that shaped our journey from a small manufacturing unit to an international supplier.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-800 hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-12 gap-6`}
                >
                  <div className="lg:w-1/2 w-full">
                    <div className="bg-gray-300 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 lift-hover">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="bg-gray-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-gray-600">
                          {milestone.icon}
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-600">{milestone.year}</div>
                          <h3 className="text-xl font-semibold">{milestone.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:block w-4 h-4 bg-gray-600 rounded-full border-4 border-gray-300 shadow-lg"></div>
                  
                  <div className="lg:w-1/2 w-full"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Today's Presence */}
      <section className="section-padding bg-gray-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Today's <span className="text-blue-800">Presence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our modern facilities, experienced workforce, and global network enable us to meet diverse customer needs with precision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="slide-in-left text-center lift-hover">
              <div className="bg-blue-800/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Factory className="h-10 w-10 text-blue-800" />
              </div>
              <h3 className="text-3xl font-bold text-blue-800 mb-2">500+</h3>
              <p className="text-xl font-semibold mb-2">Tons/Month</p>
              <p className="text-gray-600">Production Capacity</p>
            </Card>

            <Card className="scale-in text-center lift-hover">
              <div className="bg-gray-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-gray-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-600 mb-2">100+</h3>
              <p className="text-xl font-semibold mb-2">Product Lines</p>
              <p className="text-gray-600">From automotive to industrial and infrastructure components</p>
            </Card>

            <Card className="slide-in-right text-center lift-hover">
              <div className="bg-blue-800/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="h-10 w-10 text-blue-800" />
              </div>
              <h3 className="text-3xl font-bold text-blue-800 mb-2">15+</h3>
              <p className="text-xl font-semibold mb-2">Countries</p>
              <p className="text-gray-600">Supplying to markets worldwide</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-blue-800 text-gray-300">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Explore Our Capabilities
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Learn how our advanced manufacturing technology and expertise can support your next project.
            </p>
            <Link 
              to="/capabilities" 
              className="bg-gray-300 text-blue-800 hover:bg-gray-200 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Explore Our Capabilities</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default OurStory;