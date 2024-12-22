import React from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-yellow-400" />
            <span className="ml-2 text-xl font-bold">DroneWatch</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
            <a href="#report" className="hover:text-yellow-400 transition-colors">Report</a>
            <a href="#resources" className="hover:text-yellow-400 transition-colors">Resources</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition-colors">
              Report Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
              <a href="#report" className="hover:text-yellow-400 transition-colors">Report</a>
              <a href="#resources" className="hover:text-yellow-400 transition-colors">Resources</a>
              <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition-colors">
                Report Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}