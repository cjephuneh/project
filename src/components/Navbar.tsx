import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImage from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logoImage} alt="Virtual CC Logo" className="h-18 w-18 sm:h-14 sm:w-58 max-w-full" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
            <Link to="/industries" className="text-gray-700 hover:text-blue-600 transition">Industries</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">Services</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">About</Link>
            <Link to="/industries" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">Industries</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;