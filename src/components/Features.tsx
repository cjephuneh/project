import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Lock, Cpu, Globe2 } from 'lucide-react';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Virtual CC?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our cutting-edge solutions are designed to meet your unique business needs
          </p>
        </div>

        <motion.div
          ref={ref}
          className="relative"
        >
          {/* Background Decoration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex flex-col space-y-12"
            >
              <Feature
                icon={<Zap className="h-8 w-8 text-blue-600" />}
                title="Lightning Fast Performance"
                description="Our solutions are optimized for speed and efficiency, ensuring seamless communication across your organization."
              />
              <Feature
                icon={<Lock className="h-8 w-8 text-blue-600" />}
                title="Enterprise-Grade Security"
                description="Advanced security measures protect your sensitive data and communications with state-of-the-art encryption."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col space-y-12"
            >
              <Feature
                icon={<Cpu className="h-8 w-8 text-blue-600" />}
                title="AI-Powered Solutions"
                description="Leverage the power of artificial intelligence to automate and optimize your communication processes."
              />
              <Feature
                icon={<Globe2 className="h-8 w-8 text-blue-600" />}
                title="Global Scalability"
                description="Our infrastructure scales seamlessly to support your growing global presence and user base."
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Feature = ({ icon, title, description }) => (
  <div className="flex">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-50">
        {icon}
      </div>
    </div>
    <div className="ml-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default Features;