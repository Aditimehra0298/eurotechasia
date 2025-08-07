import React from 'react';
import { Shield, Globe, CheckCircle, Users, FileCheck, Truck } from 'lucide-react';

const WhyCEMark = () => {
  const benefits = [
    {
      icon: Globe,
      title: "Mandatory Compliance",
      description: "Required for various products sold in the European Economic Area (EU, Norway, Iceland, Liechtenstein)."
    },
    {
      icon: Shield,
      title: "Safety Standards",
      description: "Indicates compliance with essential EU safety, health, and environmental protection requirements."
    },
    {
      icon: CheckCircle,
      title: "Free Movement",
      description: "Enables free movement of products across more than 30 European countries."
    },
    {
      icon: FileCheck,
      title: "Self-Declaration",
      description: "Manufacturers self-declare conformity — no official issuing body, but high accountability."
    },
    {
      icon: Users,
      title: "Consumer Trust",
      description: "CE Mark compliance builds consumer trust and eases customs clearance."
    },
    {
      icon: Truck,
      title: "Streamlined Trade",
      description: "Facilitates smooth customs processes and reduces regulatory barriers."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why CE Mark Certification Matters
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            CE marking is not just a regulatory requirement—it's your gateway to the European market and a symbol of quality and safety that consumers trust.
          </p>
        </div>

        {/* Mobile: Horizontal Scrollable */}
        <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex space-x-6 min-w-max">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 min-w-[280px] max-w-[280px]"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Important Note</h3>
          <p className="text-blue-100 text-lg max-w-4xl mx-auto">
            Some products, like food and cosmetics, are exempt from CE marking but have other regulatory requirements. 
            Our experts can guide you through the specific compliance needs for your product category.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyCEMark;