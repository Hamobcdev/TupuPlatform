import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Waves } from 'lucide-react';
import { WalletButton } from './WalletButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/admin', label: 'Admin' },
    { to: '/contractor', label: 'Contractor' },
    { to: '/funding-agency', label: 'Funding Agency' },
    { to: '/public', label: 'Public View' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Waves className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-text">TupuPlatform</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-text hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors duration-200">
              Connect Wallet
              <WalletButton />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-text hover:text-primary"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-text hover:text-primary transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button className="bg-primary hover:bg-primary/90 text-white mx-4 py-2 rounded-lg transition-colors duration-200">
                Connect Wallet
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;