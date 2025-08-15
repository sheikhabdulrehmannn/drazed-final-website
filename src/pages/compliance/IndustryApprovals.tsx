import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, CheckCircle, Shield, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../../components/HeroBanner';
import Card from '../../components/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const IndustryApprovals = () => {
  useScrollAnimation();

  const approvals = [
    {
      category: 'Automotive & OEM Recognition',
      approvals: [
        'PAAPAM Membership',
        'IATF 16949:2016 Recognition // TODO: Confirm',
        'Approved OEM Supplier for leading brands // TODO: List OEMs'
      ],
      icon: <Shield className="h-8 w-8" />
    },
    {
      category: 'Industrial & Trade Associations',
      approvals: [
        'LCCI Membership',
        'FPCCI Recognition',
        'Registered Exporter with Trade Development Authority'
      ],
      icon: <Award className="h-8 w-8" />
    },
    {
      category: 'Regulatory Compliance',
      approvals: [
        'PSQCA Certification',
        'FBR & Customs Registration',
        'Export License (Pakistan) // TODO: Confirm exact issuing body'
      ],
      icon: <CheckCircle className="h-8 w-8" />
    }
  ];

  const benefits = [
    'Boosted credibility and customer trust in domestic and international markets',
    'Eligibility for supplying to premium automotive and industrial clients',
    'Streamlined access to restricted or high-standard export markets',
    'Improved success rate in government and corporate tenders'
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
        backgroundImage="https://via.placeholder.com/1920x1080?text=Millat+Industry+Approvals"
        title="Industry <span class='text-primary'>Approvals</span>"
        subtitle="Recognitions and certifications that validate our quality, capability, and trust"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              How Industry Approvals Strengthen <span className="text-primary">Market Access</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At Millat Polymer & Rubber (Pvt) Ltd, our industry approvals are more than just certificates — they are gateways to opportunity.  
              Recognitions from automotive, industrial, and regulatory bodies verify that our processes, materials, and products consistently meet the highest standards.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              These endorsements enhance our global competitiveness, open doors to international partnerships, and instill lasting confidence among our customers.
            </p>
          </div>
        </div>
      </section>

      {/* Approvals List */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our <span className="text-primary">Approvals</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognitions from national and international bodies that shape our reputation and market access.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {approvals.map((approval, index) => (
              <Card
                key={index}
                title={approval.category}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  {approval.icon}
                </div>
                <ul className="space-y-2">
                  {approval.approvals.map((app, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      {app}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                The <span className="text-primary">Value</span> of Industry Approvals
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Each approval reinforces our credibility and validates our ability to meet diverse market demands.  
                These endorsements not only strengthen our position but also allow us to operate seamlessly in multiple regions.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <TrendingUp className="h-6 w-6 text-primary mt-1" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="slide-in-right">
              <div className="bg-light p-8 rounded-2xl shadow-lg">
                <div className="text-center mb-6">
                  <Award className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Approval Snapshot</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-sm text-gray-600">Industry Approvals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">50+</div>
                    <div className="text-sm text-gray-600">Qualified Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">95%</div>
                    <div className="text-sm text-gray-600">Tender Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-sm text-gray-600">Compliance Maintained</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-millat-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need Industry Approval Documentation?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Request our official certificates, approval letters, or compliance documents for your project requirements.
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

export default IndustryApprovals;