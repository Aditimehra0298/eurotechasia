import React from 'react';
import { Phone } from 'lucide-react';
import Hero from './components/Hero';
import WhyCEMark from './components/WhyCEMark';
import IndustryGrid from './components/IndustryGrid';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Footer from './components/Footer';
import ThankYouPage from './components/ThankYouPage';

function App() {
  // Check if we're on the thank you page
  const isThankYouPage = window.location.pathname === '/thank-you';

  if (isThankYouPage) {
    return <ThankYouPage />;
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <section id="why-ce-mark">
        <WhyCEMark />
      </section>
      <section id="industries">
        <IndustryGrid />
      </section>
      <section id="benefits">
        <Benefits />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="contact">
        <Footer />
      </section>
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919056544487"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group"
        aria-label="Contact us on WhatsApp"
      >
        <div className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[56px] min-h-[56px] flex items-center justify-center">
          <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </div>
        {/* Tooltip - Hidden on mobile */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block">
          Chat on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </a>

      {/* Floating Phone Button */}
      <a
        href="tel:+919056544487"
        className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 group"
        aria-label="Call us"
      >
        <div className="bg-red-500 hover:bg-red-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[56px] min-h-[56px] flex items-center justify-center">
          <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        {/* Tooltip - Hidden on mobile */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block">
          Call Now
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </a>
    </div>
  );
}

export default App;