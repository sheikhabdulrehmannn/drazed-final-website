import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Printer, Cog, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../../components/HeroBanner';
import Card from '../../components/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const PrototypeDevelopment = () => {
  useScrollAnimation();

  const tools = [
    {
      name: 'CAD & Simulation',
      description: '3D modeling and stress analysis for rubber, PVC, HDPE, and composite parts',
      icon: <Cog className="h-8 w-8" />
    },
    {
      name: '3D Printing',
      description: 'Rapid prototyping to test geometry and fit before tooling investment',
      icon: <Printer className="h-8 w-8" />
    },
    {
      name: 'Rapid Molds',
      description: 'Quick-turn aluminum molds for producing test samples in production-grade materials',
      icon: <Lightbulb className="h-8 w-8" />
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
        title="Prototype <span class='text-primary'>Development</span>"
        subtitle="Accelerating innovation from concept to production with rapid prototyping"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Why <span className="text-primary">Prototyping</span> Matters
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At Millat Polymer & Rubber (Pvt) Ltd, prototyping is integral to reducing design risks, validating product concepts, and ensuring manufacturability—before full-scale production begins.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              By combining CAD simulation, 3D printing, and rapid tooling, we give our clients faster iterations and cost savings while ensuring their rubber, plastic, and PVC components perform exactly as intended in real-world applications.
            </p>
          </div>
        </div>
      </section>

      {/* Tools & Methods */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop"
                alt="CAD Design and Simulation"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
            <div className="scale-in">
              <img
                src="https://images.unsplash.com/photo-1581092921462-20524563c940?w=800&h=600&fit=crop"
                alt="3D Printing Technology"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
            <div className="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
                alt="Rapid Mold Creation"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
          </div>
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Tools & <span className="text-primary">Methods</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging state-of-the-art equipment to accelerate product readiness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Card
                key={index}
                title={tool.name}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  {tool.icon}
                </div>
                <p className="text-gray-600 leading-relaxed">{tool.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Case <span className="text-primary">Study</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Example of how our prototyping expertise improved product performance and reduced development time.
            </p>
          </div>

          <Card className="scale-in max-w-4xl mx-auto lift-hover">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  EPDM Rubber Gasket System Refinement
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  A water infrastructure project required a gasket with higher sealing efficiency and improved installation tolerance.
                </p>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Challenge:</h4>
                    <p className="text-blue-700">
                      Early production trials showed minor leakage under high pressure due to compression set.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Solution:</h4>
                    <p className="text-green-700">
                      Created and tested 4 rapid prototype versions using varied durometer EPDM, identifying the ideal formulation in under 3 weeks.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-primary/10 w-32 h-32 rounded-2xl flex items-center justify-center text-primary">
                  <TrendingUp className="h-16 w-16" />
                </div>
              </div>
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">60%</div>
                <div className="text-sm text-gray-600">Faster Approval</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">35%</div>
                <div className="text-sm text-gray-600">Cost Savings</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-gray-600">Leak Prevention</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Turn Your Concept Into Reality
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Speak with our R&D team to see how rapid prototyping can cut your lead times and costs.
            </p>
            <Link 
              to="/manufacturing" 
              className="bg-white text-secondary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Explore R&D & Innovation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PrototypeDevelopment;