import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram 
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-yellow-400" />
              <span className="text-xl font-bold">360AOR LLC</span>
            </div>
            <p className="text-gray-400">
              Empowering communities through advanced drone incident reporting and airspace security solutions.
            </p>
            <div className="space-y-2">
              <a 
                href="mailto:jparham087@gmail.com" 
                className="flex items-center space-x-2 text-gray-400 hover:text-yellow-400"
              >
                <Mail className="h-4 w-4" />
                <span>jparham087@gmail.com</span>
              </a>
              <a 
                href="tel:9085876383" 
                className="flex items-center space-x-2 text-gray-400 hover:text-yellow-400"
              >
                <Phone className="h-4 w-4" />
                <span>(908) 587-6383</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-yellow-400">Dashboard</Link>
              </li>
              <li>
                <Link to="/report" className="text-gray-400 hover:text-yellow-400">Submit Report</Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-yellow-400">Resources</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-yellow-400">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-yellow-400">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-yellow-400">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} 360AOR LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}