import React from 'react';
import { Globe, Shield, Users, Truck, Scale, TrendingUp } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Globe,
      title: "Market Access",
      description: "Sell confidently within the EU, EEA, and additional countries recognizing CE marking."
    },
    {
      icon: Shield,
      title: "Safety Assurance",
      description: "Conformity demonstrates compliance with rigorous European safety directives."
    },
    {
      icon: Users,
      title: "Consumer Confidence",
      description: "Boost product credibility and trustworthiness in the European marketplace."
    },
    {
      icon: Truck,
      title: "Simplified Trade",
      description: "Clear customs inspections and reduced regulatory barriers for smoother operations."
    },
    {
      icon: Scale,
      title: "Legal Compliance",
      description: "Avoid penalties and costly recalls through proper certification and documentation."
    },
    {
      icon: TrendingUp,
      title: "Competitive Edge",
      description: "Stand out in the market with certified quality and compliance standards."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Key Benefits of CE Mark Certification
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            CE marking opens doors to the European market while ensuring your products meet the highest standards of safety and quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;