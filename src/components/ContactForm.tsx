import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get CE Mark Certified?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Ensure your products meet all legal requirements for the European market and gain a competitive edge.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm">Email us at</p>
                      <a href="mailto:trg@eurotechworld.net" className="text-white font-semibold text-lg hover:text-blue-300 transition-colors">
                        trg@eurotechworld.net
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm">Call us for immediate assistance</p>
                      <p className="text-white font-semibold text-lg">Available during business hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h4 className="text-xl font-bold text-white mb-4">Why Choose Us?</h4>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    Expert knowledge across all industries
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    Fast turnaround times
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    Comprehensive support throughout
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    Competitive pricing
                  </li>
                </ul>
              </div>
            </div>

            {/* Quote Request Form */}
            <div 
              className="bg-white rounded-2xl p-8 shadow-2xl relative overflow-hidden"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/gg/AAHar4fedWcPN4hZz6v7iudoK7m0bITWVJ0Ypi57lNy-dRRyhJDIr5pSTjElwnrzsEHXN_M5-FSHw_CstRbmFAGS1-MttOpJCd9-YaMCAqoE-G0rXMAMGK78Z57XF37Xv3wthnLUAfFF4DC2T_MGfpQ7dC0B3OvsHXLhAjCuHC4sxYzV_gg0P3R7i__XOjtbkdxIWY17BF7ALUbrR4Rg-f_Xmit8SHCExOgG2DLxCP3WUVJjEjoyD3Tt8l2_wgPDR97Pa0Wy9UcLRo6FugZw17NWC_fxVAn8NoFwssw")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Overlay for better readability */}
              <div className="absolute inset-0 bg-white/40 rounded-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Get Your Free Quote</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                  <p className="text-gray-600">We'll get back to you within 24 hours with your quote.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm font-semibold text-gray-800 mb-2">
                      Description of Product *
                    </label>
                    <textarea
                      id="product"
                      name="product"
                      required
                      rows={4}
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Please describe your product, its intended use, and any specific requirements..."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Any additional details or questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Get Free Quote
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    Fields marked * are required. We respect your privacy and will never share your information.
                  </p>
                </form>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;