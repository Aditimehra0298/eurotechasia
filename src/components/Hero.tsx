import React, { useState } from 'react';
import { ArrowRight, Shield, Globe, CheckCircle, Menu, X, Phone, MessageCircle } from 'lucide-react';
import { submitForm, FormData } from '../services/formService';

// Header Component
const Header = ({ onOpenContactModal }: { onOpenContactModal: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f0f4f8] backdrop-blur-md shadow-lg animate-header-motion"> {/* Added animation class here */}
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center animate-logo-pulse">
          <img 
            src="/image.png" 
            alt="CEMark Pro Logo" 
            className="h-12 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group text-lg font-medium"
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group text-lg font-medium"
          >
            Services
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button 
            onClick={() => scrollToSection('why-ce-mark')}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group text-lg font-medium"
          >
            Why CE Mark
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group text-lg font-medium"
          >
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </button>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <button 
            onClick={onOpenContactModal}
            className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none p-2">
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 shadow-lg py-6 px-6 pb-8 animate-fade-in-down">
          <nav className="flex flex-col space-y-5 text-center">
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
              className="text-gray-700 hover:text-blue-600 text-xl py-3 transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 text-xl py-3 transition-colors duration-300 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('why-ce-mark')}
              className="text-gray-700 hover:text-blue-600 text-xl py-3 transition-colors duration-300 font-medium"
            >
              Why CE Mark
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 text-xl py-3 transition-colors duration-300 font-medium"
            >
              Contact
            </button>
            <button 
              onClick={onOpenContactModal}
              className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-xl mt-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center mx-auto"
            >
              Get Started
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </nav>
        </div>
      )}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fade-in-down {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-down {
            animation: fade-in-down 0.3s ease-out forwards;
          }
          @keyframes logo-pulse {
            0%, 100% {
              transform: scale(1);
              text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
            }
            50% {
              transform: scale(1.03);
              text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
            }
          }
          .animate-logo-pulse {
            animation: logo-pulse 2s ease-in-out infinite;
          }
          @keyframes header-motion {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-header-motion {
            animation: header-motion 0.6s ease-out forwards;
          }
        `
      }} />
    </header>
  );
};

// Hero Component (Your original component)
const Hero = ({ 
  isContactModalOpen, 
  setIsContactModalOpen 
}: { 
  isContactModalOpen: boolean; 
  setIsContactModalOpen: React.Dispatch<React.SetStateAction<boolean>>; 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    industry: '',
    companyName: '',
    location: '',
    message: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isContactGridOpen, setIsContactGridOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Add form source to track which form was used
      const submissionData: FormData = {
        ...formData,
        formSource: 'Hero Section - Get a Free Quote'
      };
      
      const result = await submitForm(submissionData);
      
      if (result.success) {
        // Reset form data
        setFormData({ name: '', phone: '', email: '', industry: '', companyName: '', location: '', message: '' });
        setIsContactModalOpen(false);
        
        // Redirect to thank you page
        window.location.href = '/thank-you';
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // You can add error handling here (show error message to user)
      alert('Failed to submit form. Please try again.');
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden pt-16"> {/* Reduced pt-24 to pt-16 to reduce gap */}
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%22 fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left Side - Content */}
          <div className="space-y-8 text-white order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 rounded-full border border-blue-400/30 backdrop-blur-sm">
                <Shield className="w-4 h-4 mr-2 text-blue-300" />
                <span className="text-sm font-medium text-blue-200">European Market Compliance</span>
              </div>

              <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 rounded-full border border-blue-400/30 backdrop-blur-sm">
                <Shield className="w-4 h-4 mr-2 text-blue-300" />
                <span className="text-sm font-medium text-blue-200">NANDO Approved Notified Bodies</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Get Your Products{' '}
                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent whitespace-nowrap">
                  CE Marked
                </span>
                <br />
                Unlock the European Market
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                Ensure your products meet stringent European safety, health, and environmental standards for seamless entry into over 30 countries across the EU and EEA.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">30+ European Countries</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">Safety Compliance</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">Consumer Trust</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">Legal Protection</span>
              </div>
            </div>

            {/* Warning Banner - Mobile Only */}
            <div className="md:hidden">
              <div className="bg-red-600/20 border-2 border-red-500 rounded-lg p-3 overflow-hidden">
                <div className="animate-scroll-text whitespace-nowrap text-red-200 font-semibold text-sm">
                  ⚠️ Beware: 90% of CE Certificates issued in India are Fake ⚠️ Beware: 90% of CE Certificates issued in India are Fake ⚠️ Beware: 90% of CE Certificates issued in India are Fake ⚠️ Beware: 90% of CE Certificates issued in India are Fake ⚠️ Beware: 90% of CE Certificates issued in India are Fake ⚠️ Beware: 90% of CE Certificates issued in India are Fake ⚠️ Beware: 90% of CE Certificates issued in India are Fake ⚠️ Beware: 90% of CE Certificates issued in India are Fake ⚠️ Beware: 90% of CE Certificates issued in India are Fake ⚠️ Beware: 90% of CE Certificates issued in India are Fake
                </div>
              </div>
            </div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setIsContactGridOpen(true)}
                className="border-2 border-blue-300 text-blue-100 hover:bg-blue-300 hover:text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center"
              >
                <Globe className="mr-2 w-5 h-5" />
                Contact Us Today
              </button>
            </div>
          </div>

          {/* Right Side - Video */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Video Container with Glow Effect */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
                <div className="relative aspect-video">
                  <video
                    className="w-full h-full object-cover rounded-2xl"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source
                      src="https://videos.openai.com/vg-assets/assets%2Ftask_01k0xw4p5teym9dyp9606qgsjg%2Ftask_01k0xw4p5teym9dyp9606qgsjg_genid_c81dda8e-33d9-42e5-a414-40817df24b6f_25_07_24_09_27_199058%2Fvideos%2F00000_393091282%2Fmd.mp4?st=2025-07-30T08%3A49%3A40Z&se=2025-08-05T09%3A49%3A40Z&sks=b&skt=2025-07-30T08%3A49%3A40Z&ske=2025-08-05T09%3A49%3A40Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=acFNytp%2FDtGWYAjVA9b%2FLSl%2F8O%2BE2Krab4Qu0Yz56fU%3D&az=oaivgprodscus"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-15 blur-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" style={{
          animation: 'waveMove 8s ease-in-out infinite'
        }}>
          <path
            fill="#ffffff"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            style={{
              animation: 'waveShape 8s ease-in-out infinite'
            }}
          />
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes waveMove {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-25px); }
          }
          
          @keyframes waveShape {
            0%, 100% {
              d: path("M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z");
            }
            25% {
              d: path("M0,60L48,65.3C96,70,192,80,288,75C384,70,480,50,576,45C672,40,768,50,864,61C960,72,1056,82,1152,77C1248,72,1344,52,1392,41.7L1440,31L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z");
            }
            75% {
              d: path("M0,68L48,73.3C96,78,192,88,288,83C384,78,480,58,576,53C672,48,768,58,864,69C960,80,1056,90,1152,85C1248,80,1344,60,1392,49.7L1440,39L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z");
            }
          }
          
          @keyframes scrollText {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          
          .animate-scroll-text {
            animation: scrollText 20s linear infinite;
          }
        `
      }} />

      {/* Contact Form Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto relative"
            style={{
              backgroundImage: 'url("https://www.kamelo.com.au/cdn/shop/articles/CE_999x.jpg?v=1698390665")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-white/60 rounded-2xl"></div>
            <div className="relative z-10">
            <div className="p-4 sm:p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="flex items-center">
                  <img 
                    src="/image.png" 
                    alt="CE Mark Certification Logo" 
                    className="h-8 w-auto mr-2 sm:h-10 sm:mr-3"
                  />
                </div>
                <button 
                  onClick={() => setIsContactModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                >
                  <X size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Success Message */}
              {showSuccessMessage && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 mb-6 text-center shadow-lg">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700 mb-4">Your inquiry has been successfully submitted. We'll get back to you soon!</p>
                  <button
                    onClick={() => {
                      setShowSuccessMessage(false);
                      setIsContactModalOpen(false);
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Close
                  </button>
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-black text-gray-950 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Full Name"
                  />
                </div>

                {/* Phone Number Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-black text-gray-950 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91 9897x xxxxx"
                  />
                </div>

                {/* Email Address Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-black text-gray-950 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Industry of CE Marked Dropdown */}
                <div>
                  <label htmlFor="industry" className="block text-sm font-black text-gray-950 mb-2">
                    Industry of CE Marked
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select an Industry</option>
                    <option value="medical-devices">CE for Medical Devices</option>
                    <option value="electrical-electronics">CE for Electrical/Electronics</option>
                    <option value="pressure">CE for Pressure</option>
                    <option value="construction">CE for Construction</option>
                    <option value="machine">CE for Machine</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Company Name Field */}
                <div>
                  <label htmlFor="companyName" className="block text-sm font-black text-gray-950 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Company Name"
                  />
                </div>

                {/* Location Field */}
                <div>
                  <label htmlFor="location" className="block text-sm font-black text-gray-950 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="City, Country"
                  />
                </div>

                {/* Message Field (Optional) */}
                <div>
                  <label htmlFor="message" className="block text-sm font-black text-gray-950 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Enter your message here..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 px-6 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
          </div>
        </div>
      )}

      {/* Contact Grid Modal */}
      {isContactGridOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
            {/* Close Button */}
            <button 
              onClick={() => setIsContactGridOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <img 
                  src="/image.png" 
                  alt="CE Mark Certification Logo" 
                  className="h-12 w-auto mr-3"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
              <p className="text-gray-600 mt-2">Get in touch with our experts</p>
            </div>

            {/* Contact Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* WhatsApp Contact */}
              <a 
                href="https://wa.me/919056544487"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-green-500 hover:bg-green-600 text-white p-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <MessageCircle className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="font-semibold text-lg">WhatsApp</div>
                <div className="text-sm opacity-90">+91 90565 44487</div>
              </a>

              {/* Phone Contact */}
              <a 
                href="tel:+919056544487"
                className="group bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Phone className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="font-semibold text-lg">Call Now</div>
                <div className="text-sm opacity-90">+91 90565 44487</div>
              </a>
            </div>

            {/* Additional Info */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Available during business hours
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Main App Component
const App = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  const handleOpenContactModal = () => {
    setIsContactModalOpen(true);
  };

  return (
    <div className="font-sans antialiased">
      <Header onOpenContactModal={handleOpenContactModal} />
      <Hero isContactModalOpen={isContactModalOpen} setIsContactModalOpen={setIsContactModalOpen} />
    </div>
  );
};

export default App;
