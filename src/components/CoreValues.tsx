import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Users, Lightbulb, Target, Award, Leaf } from 'lucide-react';

const coreValues = [
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: 'Innovation',
    description: 'Leverage the latest technologies to develop solutions that solve complex communication challenges'
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Collaboration',
    description: 'Work closely with our clients, combining technical expertise with a deep understanding of goals'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Integrity',
    description: 'Operate with transparency, professionalism, and ethics, ensuring client trust'
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: 'Reliability',
    description: 'Uninterrupted support to ensure your systems run smoothly with robust knowledge transfer'
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: 'Client-Centricity',
    description: 'Focus on meeting the unique needs of each client with bespoke solutions'
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    title: 'Sustainability',
    description: 'Committed to environmentally responsible practices and sustainable technology solutions'
  }
];

const CoreValues = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Core Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            The principles that guide our work and define our commitment to excellence
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;