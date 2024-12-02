import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Globe2 className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">Virtual CC</span>
            </Link>
            <p className="text-sm">
              Transforming business communication through innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-blue-500 transition"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-blue-500 transition"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-blue-500 transition"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-blue-500 transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition">Services</Link></li>
              <li><Link to="/industries" className="hover:text-blue-500 transition">Industries</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Software Development</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Digital Engineering</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">IT Consulting</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <span>info@virtualcc.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span>123 Business Ave, Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-sm text-center">
            © {new Date().getFullYear()} Virtual Communication & Consulting. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;