import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Stethoscope, GraduationCap, Landmark } from 'lucide-react';

const industries = [
  {
    icon: <Building2 className="h-12 w-12" />,
    title: 'Technology',
    description: 'Empowering tech companies with cutting-edge solutions for digital transformation.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=800'
  },
  {
    icon: <Stethoscope className="h-12 w-12" />,
    title: 'Healthcare',
    description: 'Innovative solutions for healthcare providers, improving patient care and operational efficiency.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&h=800'
  },
  {
    icon: <GraduationCap className="h-12 w-12" />,
    title: 'Education',
    description: 'Digital learning platforms and tools for educational institutions.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&h=800'
  },
  {
    icon: <Landmark className="h-12 w-12" />,
    title: 'Financial Services',
    description: 'Secure and compliant solutions for banks and financial institutions.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=1200&h=800'
  }
];

const IndustriesPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Tailored solutions for diverse industry needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-xl shadow-lg"
              >
                <div className="relative h-80">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="mb-4 text-blue-400">{industry.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{industry.title}</h3>
                    <p className="text-gray-200">{industry.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;