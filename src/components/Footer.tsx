import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-white rounded-lg p-2 mr-3">
                <img 
                  src="/image.png" 
                  alt="CE Mark Certification Logo" 
                  className="h-12 w-auto"
                />
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Your trusted partner for European market compliance. We help businesses navigate CE marking requirements 
              and achieve certification across all industries.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-[#392f6f] rounded-lg flex items-center justify-center hover:bg-[#2a1f5a] transition-colors cursor-pointer">
                <Globe className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-[#392f6f] rounded-lg flex items-center justify-center hover:bg-[#2a1f5a] transition-colors cursor-pointer">
                <Mail className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer">Directive Assessment</li>
              <li className="hover:text-white transition-colors cursor-pointer">Technical Documentation</li>
              <li className="hover:text-white transition-colors cursor-pointer">Product Testing</li>
              <li className="hover:text-white transition-colors cursor-pointer">Declaration of Conformity</li>
              <li className="hover:text-white transition-colors cursor-pointer">CE Mark Guidance</li>
              <li className="hover:text-white transition-colors cursor-pointer">End-to-End Advisory</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[#392f6f]" />
                <a href="mailto:trg@eurotechworld.net" className="text-gray-300 hover:text-white transition-colors">
                  n.khatri@eurotechworld.net
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[#392f6f]" />
                <span className="text-gray-300">+9198712 31133</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-[#392f6f]" />
                <span className="text-gray-300">European Union</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 CE Mark Certification Services. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;