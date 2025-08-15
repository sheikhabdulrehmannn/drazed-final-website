import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Truck, Globe, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../../components/HeroBanner';
import Card from '../../components/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const SupplyChainLogistics = () => {
  useScrollAnimation();

  const processSteps = [
    {
      title: 'Protective Packaging',
      description: 'Custom-designed packaging solutions to safeguard rubber, PVC, and plastic components during transport.',
      icon: <Package className="h-8 w-8" />
    },
    {
      title: 'Secure Storage',
      description: 'Climate-controlled warehousing with FIFO inventory management for product integrity.',
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: 'Tracked Delivery',
      description: 'Real-time shipment tracking to ensure transparency from dispatch to delivery.',
      icon: <Truck className="h-8 w-8" />
    },
    {
      title: 'Customs & Compliance',
      description: 'Complete export documentation and adherence to international trade regulations.',
      icon: <Globe className="h-8 w-8" />
    }
  ];

  const regions = [
    { name: 'Netherlands', description: 'Key entry point for European market distribution.' },
    { name: 'UAE', description: 'Primary logistics hub for Middle East deliveries.' },
    { name: 'Australia', description: 'Supplying the Asia-Pacific region with tailored solutions.' },
    { name: 'Pakistan', description: 'Strong domestic market presence with rapid fulfillment.' },
    { name: 'Europe', description: 'Expanding network to serve growing industrial needs.' },
    { name: 'Asia', description: 'Reaching emerging markets with competitive delivery times.' }
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
        backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop"
        title="Supply Chain & <span class='text-primary'>Logistics</span>"
        subtitle="Global delivery efficiency and dependable supply chain management for industrial components."
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Keeping Your Operations <span className="text-primary">On Track</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Millat Polymer & Rubber (Pvt) Ltd understands that timely delivery is as important as product quality. Our supply chain systems are built to meet urgent deadlines while protecting product integrity.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From packaging engineering to customs documentation, we ensure that every shipment—whether domestic or international—arrives safely, on time, and ready for immediate use.
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
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
                alt="Warehouse and Logistics"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
            <div className="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1594471259556-a71b42315b89?w=800&h=600&fit=crop"
                alt="Global Shipping"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
          </div>
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Logistics <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A reliable, step-by-step system to ensure your order arrives in perfect condition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                title={step.title}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  {step.icon}
                </div>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Global <span className="text-primary">Reach</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering products across continents with a network designed for speed, reliability, and compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <Card
                key={index}
                title={region.name}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                  <Globe className="h-6 w-6" />
                </div>
                <p className="text-gray-600">{region.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center scale-in">
            <div className="bg-light p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Delivery Performance</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary">99.2%</div>
                  <div className="text-sm text-gray-600">On-Time Delivery</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">48hrs</div>
                  <div className="text-sm text-gray-600">Average Processing Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Let’s Streamline Your Supply Chain
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Partner with Millat Polymer & Rubber for a smooth, compliant, and on-time delivery experience.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-secondary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
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

export default SupplyChainLogistics;