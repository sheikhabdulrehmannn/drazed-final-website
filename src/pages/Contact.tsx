import React, { useEffect, useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Facebook, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Use the scroll animation hook
  useScrollAnimation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show toast notification
    alert('Message Sent!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="min-h-screen"
    >
      {/* Hero Banner */}
      <HeroBanner
        backgroundImage="/images/footer-bg.jpg"
        title="<span class='text-gray-300'>Contact</span> Us"
        subtitle="We're here to help with your polymer needs. Whether you have a question about our products, need a custom quote, or want to discuss a project, please get in touch."
      />

      {/* Main Content */}
      <section 
        className="section-padding bg-gray-300"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
                alt="Customer Service Team"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
            <div className="scale-in">
              <img
                src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop"
                alt="Manufacturing Facility"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
            <div className="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
                alt="Quality Assurance"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="slide-in-left">
              <div className="bg-gray-300 p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-colors bg-gray-200"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-colors bg-gray-200"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="e.g. Quote Request"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-colors bg-gray-200"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Please describe your requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-colors resize-vertical bg-gray-200"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full inline-flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Location & Details */}
            <div className="slide-in-right space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Our Location</h2>
                
                {/* Google Map */}
                <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.623439031761!2d74.2764988151494!3d31.47954998138243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903e3a4b9e979%3A0x6b8b07e5c46ad5b6!2sOmer%20Chowk%20Bund%20Rd%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1689862899452!5m2!1sen!2s"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* Address */}
                <div className="bg-gray-300 p-6 rounded-xl shadow-lg mb-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-800 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Millat Polymer Industries</h3>
                      <p className="text-gray-600">
                        Omer Chowk, Bund Road<br />
                        Lahore, Punjab, Pakistan
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Methods */}
                <div className="space-y-4">
                  <a
                    href="tel:+923008474507"
                    className="flex items-center space-x-4 p-4 bg-gray-300 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="bg-blue-800/10 w-12 h-12 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-blue-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">+92 300 8474507</p>
                    </div>
                  </a>

                  <a
                    href="mailto:millatpolymer@gmail.com"
                    className="flex items-center space-x-4 p-4 bg-gray-300 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="bg-gray-500/10 w-12 h-12 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">millatpolymer@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/923008474507"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-gray-300 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="bg-blue-800/10 w-12 h-12 rounded-xl flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-blue-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold">WhatsApp</h3>
                      <p className="text-gray-600">Chat on WhatsApp</p>
                    </div>
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4 mt-6">
                  <a
                    href="https://www.facebook.com/millatpolymer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-300 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Facebook className="h-6 w-6 text-blue-600" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/millat-polymer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-300 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Linkedin className="h-6 w-6 text-blue-700" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;