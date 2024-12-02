import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cloud, Code, Users, HeadphonesIcon, Laptop, Shield } from 'lucide-react';

const services = [
  {
    icon: <Cloud className="h-8 w-8 text-blue-600" />,
    title: 'Cloud-Based Communication',
    description: 'Scalable, secure communication platforms that adapt to your growing business needs.'
  },
  {
    icon: <Code className="h-8 w-8 text-blue-600" />,
    title: 'Software Development',
    description: 'Custom applications and platforms that drive digital transformation.'
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: 'Remote Workforce Solutions',
    description: 'Keep your distributed teams connected and engaged with secure collaboration tools.'
  },
  {
    icon: <HeadphonesIcon className="h-8 w-8 text-blue-600" />,
    title: 'Comprehensive Support',
    description: 'Uninterrupted support ensuring your systems run smoothly 24/7.'
  },
  {
    icon: <Laptop className="h-8 w-8 text-blue-600" />,
    title: 'Digital Engineering',
    description: 'Specialized expertise in Product Engineering, QA, and IT Operations.'
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: 'Security Solutions',
    description: 'Advanced security measures to protect your communication infrastructure.'
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to transform your business communication
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;