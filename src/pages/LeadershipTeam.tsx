import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Lightbulb, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const LeadershipTeam = () => {
  useScrollAnimation();

  const leaders = [
    {
      name: 'Sheikh Abid Ali',
      position: 'Chairman & Founder',
      bio: 'Founder and Chairman with decades of experience in polymer, rubber, and plastic manufacturing. Under his visionary leadership, Millat Polymer & Rubber has grown into one of Pakistan’s leading producers of HDPE pipes, PVC water stops, and rubber components, with a strong presence in domestic and export markets including the Netherlands, UAE, Australia, and Europe.',
      image: '/images/chairman-placeholder.jpg'
    },
    {
      name: 'Muhammad Hassan',
      position: 'Chief Executive Officer',
      bio: 'Provides strategic direction and operational leadership to ensure sustainable growth. Oversees expansion into OEM and aftermarket sectors, driving international business relationships and long-term client partnerships.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Dr. Sarah Ahmed',
      position: 'Chief Technology Officer',
      bio: 'PhD in Materials Science specializing in polymer and elastomer technologies. Leads R&D initiatives to enhance product performance, durability, and compliance with ISO 9001:2015 quality standards.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Ahmad Khan',
      position: 'Head of Manufacturing',
      bio: 'Oversees production of HDPE pipes, PVC water stops, and molded rubber products with a focus on operational efficiency, safety, and adherence to international specifications.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Fatima Malik',
      position: 'Head of Quality Assurance',
      bio: 'Ensures that every product meets or exceeds ISO 9001:2015 certification requirements. Leads continuous improvement programs and strict quality control from raw materials to final delivery.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Usman Tariq',
      position: 'Head of Sales & Marketing',
      bio: 'Manages customer relationships across Pakistan and international markets, developing marketing strategies that promote Millat’s diverse product portfolio and competitive strengths.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face'
    }
  ];

  const principles = [
    {
      title: 'Strategic Thinking',
      description: 'Combining long-term vision with tactical execution to expand market share and strengthen Millat’s position as a global manufacturing leader.',
      icon: <Target className="h-8 w-8" />
    },
    {
      title: 'Customer Focus',
      description: 'Placing client requirements at the heart of every decision, ensuring customized solutions for OEM and aftermarket sectors.',
      icon: <Users className="h-8 w-8" />
    },
    {
      title: 'Innovation Drive',
      description: 'Investing in R&D and advanced manufacturing techniques to deliver products that meet evolving international standards.',
      icon: <Lightbulb className="h-8 w-8" />
    },
    {
      title: 'Performance Excellence',
      description: 'Maintaining world-class quality and operational benchmarks to exceed client expectations consistently.',
      icon: <TrendingUp className="h-8 w-8" />
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
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop"
        title="Leadership <span class='text-primary'>Team</span>"
        subtitle="Meet the leaders steering Millat Polymer & Rubber (Pvt) Ltd toward excellence in polymer and rubber manufacturing."
      />

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Leadership <span className="text-primary">Philosophy</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Our leadership team blends decades of industry experience with an unwavering commitment to quality, innovation, and sustainability. We believe in empowering teams, fostering collaboration, and maintaining integrity in every action.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Together, we guide Millat Polymer & Rubber to deliver ISO-certified products, strengthen relationships with global clients, and contribute positively to the industries and communities we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Meet Our <span className="text-primary">Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry professionals committed to advancing our mission, values, and reputation as a trusted manufacturing partner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <Card
                key={index}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="aspect-square w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                <p className="text-primary font-semibold mb-4">{leader.position}</p>
                <p className="text-gray-600 leading-relaxed">{leader.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Principles */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Leadership <span className="text-primary">Principles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Principles that guide our decisions, shape our strategies, and define our success in the manufacturing industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <Card
                key={index}
                title={principle.title}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  {principle.icon}
                </div>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
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
              Ready to Partner with Us?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our leadership team to discuss your requirements and explore how we can work together.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Get In Touch</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default LeadershipTeam;