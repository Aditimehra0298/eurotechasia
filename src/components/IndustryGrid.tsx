import React, { useState } from 'react';
import { 
  ArrowLeft,
  CheckCircle,
  FileText,
  TestTube,
  Award
} from 'lucide-react';

interface Industry {
  id: string;
  name: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  keyProducts: string[];
  services: string[];
  directives: string[];
  gradient: string;
  image?: string;
}

const industries: Industry[] = [
  {
    id: 'electrical',
    name: 'Electrical & Electronics',
    image: "/istockphoto-1468266144-612x612.jpg",
    description: 'Consumer electronics, industrial controls, lighting equipment',
    keyProducts: ['Consumer electronics', 'Industrial controls', 'Lighting equipment', 'Appliances'],
    services: [
      'Directive Identification (LVD, EMC, RoHS)',
      'Technical documentation and compliance file preparation',
      'Product testing (electrical safety, electromagnetic compatibility)',
      'Declaration of Conformity drafting',
      'Affixing guidance for CE mark and packaging',
      'End-to-end advisory throughout the process'
    ],
    directives: ['Low Voltage Directive (LVD)', 'EMC Directive', 'RoHS Directive'],
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    id: 'medical',
    name: 'Medical Devices',
    image:'/medical-devices-hospital.jpg',
    description: 'Diagnostic tools, surgical instruments, implantables',
    keyProducts: ['Diagnostic tools', 'Surgical instruments', 'Implantables', 'Medical equipment'],
    services: [
      'Classification under relevant EU directives (MDD, IVDD, AIMDD)',
      'Product and risk assessment',
      'Technical documentation (design, test results, risk analysis)',
      'Notified Body assessment for Class II & III devices',
      'Market access strategies and certification guidance',
      'Post-market surveillance support'
    ],
    directives: ['Medical Device Directive (MDD)', 'IVDD', 'AIMDD'],
    gradient: 'from-red-400 to-pink-500'
  },
  {
    id: 'pressure',
    name: 'Pressure Equipment',
    image: "/ped_ce_1000x500.webp",
    description: 'Boilers, vessels, pressure accessories',
    keyProducts: ['Boilers', 'Pressure vessels', 'Gas cylinders', 'Piping systems'],
    services: [
      'Pressure Equipment Directive (PED) compliance assessment',
      'Category determination and conformity procedures',
      'Technical documentation preparation',
      'Notified Body coordination when required',
      'Installation and maintenance guidance',
      'Periodic inspection support'
    ],
    directives: ['Pressure Equipment Directive (PED)', 'Simple Pressure Vessels Directive'],
    gradient: 'from-blue-400 to-indigo-500'
  },
  {
    id: 'construction',
    name: 'Construction Products',
    image: "/Heavy-Equipment.webp",
    description: 'Building materials, doors, insulation',
    keyProducts: ['Building materials', 'Doors & windows', 'Insulation', 'Structural components'],
    services: [
      'Assessment to CPR 305/2011 requirements',
      'Testing to harmonized standards or EADs',
      'Declaration of Performance preparation',
      'Coordination of necessary evaluations and certifications',
      'Continuous support for compliance documentation',
      'Market surveillance preparation'
    ],
    directives: ['Construction Products Regulation (CPR)'],
    gradient: 'from-gray-400 to-gray-600'
  },
  {
    id: 'machinery',
    name: 'Machinery',
    image: "/General-purpose-Machinery-1920x916.jpg",
    description: 'Industrial machines, automation systems, farming equipment',
    keyProducts: ['Industrial machines', 'Automation systems', 'Farming equipment', 'Manufacturing tools'],
    services: [
      'Machinery Directive compliance assessment',
      'Risk assessment and safety analysis',
      'Technical file compilation',
      'Declaration of Conformity preparation',
      'CE marking guidance and implementation',
      'User manual and documentation support'
    ],
    directives: ['Machinery Directive', 'ATEX Directive (if applicable)'],
    gradient: 'from-purple-400 to-purple-600'
  },
  {
    id: 'ppe',
    name: 'Personal Protective Equipment',
    image: "/Personal-Protective-Equipment-UAE-1.jpg",
    description: 'Protective gloves, helmets, respiratory devices',
    keyProducts: ['Safety gloves', 'Protective helmets', 'Respiratory devices', 'Protective eyewear'],
    services: [
      'PPE Regulation compliance assessment',
      'Category classification (I, II, III)',
      'Technical documentation preparation',
      'Type examination and testing coordination',
      'Quality assurance procedures',
      'Market access and distribution guidance'
    ],
    directives: ['PPE Regulation (EU) 2016/425'],
    gradient: 'from-green-400 to-emerald-500'
  },
  {
    id: 'toys',
    name: 'Toys & Leisure',
    image: "/toy-world-sweden.jpg",
    description: 'Children\'s toys, sporting goods',
    keyProducts: ['Children\'s toys', 'Sporting goods', 'Playground equipment', 'Educational toys'],
    services: [
      'Toy Safety Directive compliance',
      'Age-appropriate safety assessment',
      'Chemical and physical testing coordination',
      'Technical documentation preparation',
      'Warning labels and instructions guidance',
      'Market surveillance preparation'
    ],
    directives: ['Toy Safety Directive', 'General Product Safety Directive'],
    gradient: 'from-pink-400 to-rose-500'
  },
  {
    id: 'measuring',
    name: 'Measuring Instruments',
    image: "/measuring-tools-091622.jpg",
    description: 'Water/gas meters, weighing devices',
    keyProducts: ['Water meters', 'Gas meters', 'Weighing devices', 'Laboratory instruments'],
    services: [
      'Measuring Instruments Directive (MID) compliance',
      'Accuracy class determination',
      'Type approval and verification procedures',
      'Technical documentation support',
      'Notified Body coordination',
      'Market access strategies'
    ],
    directives: ['Measuring Instruments Directive (MID)', 'Non-automatic Weighing Instruments Directive'],
    gradient: 'from-cyan-400 to-blue-500'
  },
  {
    id: 'environmental',
    name: 'Environmental & Energy',
    image: "/impact-of-energy-sector-on-ebvironment.jpeg",
    description: 'Solar panels, monitoring instruments',
    keyProducts: ['Solar panels', 'Wind turbines', 'Environmental monitoring', 'Energy systems'],
    services: [
      'Renewable Energy Directive compliance',
      'Environmental impact assessment',
      'Energy efficiency testing and documentation',
      'Technical file preparation',
      'Performance declaration support',
      'Sustainability certification guidance'
    ],
    directives: ['Renewable Energy Directive', 'Energy Efficiency Directive', 'EcoDesign Directive'],
    gradient: 'from-green-400 to-teal-500'
  }
];

const IndustryGrid = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);

  if (selectedIndustry) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <button
            onClick={() => setSelectedIndustry(null)}
            className="flex items-center text-[#392f6f] hover:text-[#2a1f5a] mb-8 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Industries
          </button>

          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              {selectedIndustry.image ? (
                <div className="w-32 h-32 rounded-2xl overflow-hidden mr-6 flex-shrink-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <img 
                    src={selectedIndustry.image} 
                    alt={selectedIndustry.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ) : selectedIndustry.icon ? (
                <div className={`w-32 h-32 bg-gradient-to-br ${selectedIndustry.gradient} rounded-2xl flex items-center justify-center mr-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105`}>
                  <selectedIndustry.icon className="w-16 h-16 text-white hover:scale-110 transition-transform duration-500" />
                </div>
              ) : (
                <div className={`w-32 h-32 bg-gradient-to-br ${selectedIndustry.gradient} rounded-2xl flex items-center justify-center mr-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105`}>
                  <div className="w-16 h-16 bg-white rounded-full hover:scale-110 transition-transform duration-500"></div>
                </div>
              )}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">{selectedIndustry.name}</h2>
                <p className="text-xl text-gray-600">{selectedIndustry.description}</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Key Products */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-green-500" />
                  Key Products
                </h3>
                <div className="grid gap-3">
                  {selectedIndustry.keyProducts.map((product, index) => (
                    <div key={index} className="flex items-center p-3 bg-white rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{product}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applicable Directives */}
              <div className="bg-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-[#392f6f]" />
                  Applicable Directives
                </h3>
                <div className="space-y-3">
                  {selectedIndustry.directives.map((directive, index) => (
                    <div key={index} className="flex items-center p-3 bg-white rounded-lg">
                      <Award className="w-5 h-5 mr-3 text-[#392f6f]" />
                      <span className="text-gray-700 font-medium">{directive}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Provided */}
            <div className="mt-12 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <TestTube className="w-6 h-6 mr-3 text-[#392f6f]" />
                Services Provided
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {selectedIndustry.services.map((service, index) => (
                  <div key={index} className="flex items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-6 h-6 bg-[#392f6f] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <div className="bg-[#392f6f] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                  Contact us for tailored CE certification services for your {selectedIndustry.name.toLowerCase()} products.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-[#392f6f] px-8 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-colors">
                    Get Free Quote
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#392f6f] transition-colors">
                    Contact Expert
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We specialize in CE Mark Certification across a broad range of industries. 
            Select your industry to discover our tailored certification services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {industries.map((industry) => (
            <div
              key={industry.id}
              onClick={() => setSelectedIndustry(industry)}
              className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-gray-100 overflow-hidden hover:border-blue-200"
            >
              <div className={`h-2 bg-gradient-to-r ${industry.gradient}`}></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  {industry.image ? (
                    <div className="w-28 h-28 rounded-2xl overflow-hidden group-hover:scale-125 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
                      <img 
                        src={industry.image} 
                        alt={industry.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className={`w-28 h-28 bg-gradient-to-br ${industry.gradient} rounded-2xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                      {industry.icon ? (
                        <industry.icon className="w-14 h-14 text-white group-hover:scale-110 transition-transform duration-500" />
                      ) : (
                        <div className="w-14 h-14 bg-white rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                      )}
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#392f6f] transition-all duration-300 group-hover:scale-105">
                  {industry.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {industry.description}
                </p>
                <div className="flex items-center text-[#392f6f] font-medium group-hover:text-[#2a1f5a] transition-all duration-300 group-hover:scale-105">
                  <span>Learn More</span>
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryGrid;