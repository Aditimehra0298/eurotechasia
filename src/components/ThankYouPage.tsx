import React from 'react';
import { CheckCircle, ArrowLeft, Home } from 'lucide-react';

const ThankYouPage = () => {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Success Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Thank You! 🎉
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Your inquiry has been successfully submitted. We've received your information and our team will get back to you within 24 hours.
          </p>

          {/* Additional Info */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              What happens next?
            </h3>
            <div className="space-y-2 text-blue-800">
              <p>• Our CE marking experts will review your inquiry</p>
              <p>• You'll receive a detailed consultation within 24 hours</p>
              <p>• We'll provide a customized plan for your certification</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Need immediate assistance?
            </h3>
            <p className="text-gray-600 mb-4">
              Feel free to reach out to us directly:
            </p>
            <div className="space-y-2">
              <p className="text-blue-600 font-medium">
                📞 Call: +91 90565 44487
              </p>
              <p className="text-green-600 font-medium">
                💬 WhatsApp: +91 90565 44487
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGoHome}
              className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Back to Home
            </button>
            
            <button
              onClick={handleGoBack}
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            © 2024 CE Mark Pro. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage; 