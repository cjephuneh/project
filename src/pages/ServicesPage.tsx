import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Code, Users, HeadphonesIcon, Shield, Cpu } from 'lucide-react';

const services = [
  {
    icon: <Cloud className="h-12 w-12" />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services designed to grow with your business.',
    features: ['Cloud Migration', 'Infrastructure Management', 'Cloud Security', 'Performance Optimization']
  },
  {
    icon: <Code className="h-12 w-12" />,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your specific business needs.',
    features: ['Web Applications', 'Mobile Apps', 'API Development', 'Legacy System Modernization']
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: 'Digital Workplace',
    description: 'Modern workplace solutions for enhanced collaboration and productivity.',
    features: ['Team Collaboration', 'Document Management', 'Virtual Meetings', 'Knowledge Management']
  },
  {
    icon: <HeadphonesIcon className="h-12 w-12" />,
    title: 'IT Support',
    description: '24/7 technical support and maintenance for your systems.',
    features: ['Help Desk', 'System Monitoring', 'Issue Resolution', 'Preventive Maintenance']
  },
  {
    icon: <Shield className="h-12 w-12" />,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    features: ['Security Audits', 'Threat Detection', 'Data Protection', 'Compliance Management']
  },
  {
    icon: <Cpu className="h-12 w-12" />,
    title: 'AI Solutions',
    description: 'Artificial Intelligence and Machine Learning solutions for business optimization.',
    features: ['Process Automation', 'Data Analytics', 'Predictive Modeling', 'AI Integration']
  }
];

const ServicesPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive technology solutions to drive your business forward
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;