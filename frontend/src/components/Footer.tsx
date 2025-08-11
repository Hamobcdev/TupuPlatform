import React from 'react';
import { Github, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-text text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left">
              Built by{' '}
              <span className="text-secondary font-semibold">Synergy Blockchain Pacific</span>
              {' '}| TupuPlatform 2025
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/Hamobcdev/TupuPlatform"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-secondary transition-colors duration-200"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-600">
          <p className="text-center text-sm text-gray-300">
            © 2025 TupuPlatform. Empowering transparent aid funding in the Pacific.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;