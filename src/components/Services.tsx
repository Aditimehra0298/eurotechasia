import React, { useState } from 'react';
import { FileSearch, FileText, TestTube, Award, Tag, Users, X } from 'lucide-react';
import { submitForm, FormData } from '../services/formService';

const Services = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    industry: '',
    companyName: '',
    location: '',
    message: ''
  });

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
        formSource: 'Services Section - Get Free Consultation'
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

  const services = [
    {
      icon: FileSearch,
      title: "Directive & Regulatory Assessment",
      description: "Identify applicable EU directives for your product category and market requirements."
    },
    {
      icon: FileText,
      title: "Technical Documentation Support",
      description: "Help compile and maintain comprehensive technical files and compliance documentation."
    },
    {
      icon: TestTube,
      title: "Product Testing & Evaluation",
      description: "Coordinate necessary testing to verify compliance with European safety standards."
    },
    {
      icon: Award,
      title: "Declaration of Conformity Assistance",
      description: "Prepare legally compliant declarations that meet all regulatory requirements."
    },
    {
      icon: Tag,
      title: "CE Mark Affixation Guidance",
      description: "Ensure proper marking on products and packaging according to EU regulations."
    },
    {
      icon: Users,
      title: "End-to-End Advisory",
      description: "Full support through the certification journey, tailored to your industry and products."
    }
  ];

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://www.emitech.fr/sites/groupe-emitech.fr/files/marquage_ce.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/85"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our CE Certification Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive support from initial assessment to final certification, ensuring your products meet all European compliance requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Ready to Start Your CE Certification Journey?</h3>
            <p className="text-blue-100 text-xl mb-8 leading-relaxed">
              Our experts are ready to guide you through every step of the certification process, 
              ensuring compliance and market access for your products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors"
              >
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                Download Guide
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Contact Form Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
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
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <img 
                    src="/image.png" 
                    alt="CE Mark Certification Logo" 
                    className="h-10 w-auto mr-3"
                  />
              
                </div>
                <button 
                  onClick={() => setIsContactModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
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
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Enter your message here..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;